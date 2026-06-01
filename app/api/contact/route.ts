import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { prisma } from "@/lib/db";
import { sendContactNotification } from "@/lib/email/resend";
import { checkContactRateLimit } from "@/lib/ratelimit";
import { contactSchema } from "@/lib/validations/contact";

type ApiErrorBody = {
  error: string;
  details?: unknown;
  code?: string;
};

const SUCCESS_MESSAGE =
  "Your message has been received. We'll be in touch within 1 business day.";

/**
 * Extracts the client IP from proxy headers (Vercel, Cloudflare, etc.).
 */
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) {
      return first;
    }
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "unknown";
}

/**
 * Validates the request Origin against NEXT_PUBLIC_APP_URL (CSRF protection).
 */
function isAllowedOrigin(request: NextRequest): boolean {
  const allowedUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (!allowedUrl) {
    console.error("NEXT_PUBLIC_APP_URL is not configured");
    return false;
  }

  let allowedOrigin: string;
  try {
    allowedOrigin = new URL(allowedUrl).origin;
  } catch {
    console.error("NEXT_PUBLIC_APP_URL is not a valid URL");
    return false;
  }

  const origin = request.headers.get("origin");
  return origin === allowedOrigin;
}

function jsonError(
  body: ApiErrorBody,
  status: number,
): NextResponse<ApiErrorBody> {
  return NextResponse.json(body, { status });
}

/**
 * POST /api/contact — validate, rate-limit, persist lead, and notify via email.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    if (!isAllowedOrigin(request)) {
      return jsonError({ error: "Forbidden", code: "FORBIDDEN" }, 403);
    }

    const clientIp = getClientIp(request);
    const rateLimit = await checkContactRateLimit(clientIp);

    if (!rateLimit.success) {
      const limited = jsonError(
        { error: "Too many requests. Try again later.", code: "RATE_LIMITED" },
        429,
      );
      limited.headers.set("X-RateLimit-Limit", String(rateLimit.limit));
      limited.headers.set("X-RateLimit-Remaining", String(rateLimit.remaining));
      limited.headers.set("X-RateLimit-Reset", String(rateLimit.reset));
      return limited;
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return jsonError(
        { error: "Invalid JSON body", code: "INVALID_JSON" },
        400,
      );
    }

    const raw = body as Record<string, unknown>;

    if (
      typeof raw.honeypot === "string" &&
      raw.honeypot.trim().length > 0
    ) {
      return NextResponse.json({ success: true });
    }

    let validated;
    try {
      validated = contactSchema.parse(body);
    } catch (error) {
      if (error instanceof ZodError) {
        return jsonError(
          {
            error: "Validation failed",
            details: error.flatten(),
            code: "VALIDATION_ERROR",
          },
          422,
        );
      }
      throw error;
    }

    const { honeypot: _honeypot, ...leadData } = validated;

    try {
      await prisma.contactRequest.create({
        data: {
          fullName: leadData.fullName,
          workEmail: leadData.workEmail,
          company: leadData.company,
          interest: leadData.interest,
          message: leadData.message,
          source: "contact-form",
        },
      });
    } catch (dbError) {
      console.error("Failed to save contact request:", dbError);
      return jsonError(
        {
          error: "Failed to save your request. Please try again.",
          code: "DATABASE_ERROR",
        },
        500,
      );
    }

    try {
      await sendContactNotification(leadData);
    } catch (emailError) {
      console.error("Failed to send contact notification email:", emailError);
    }

    const success = NextResponse.json({
      success: true,
      message: SUCCESS_MESSAGE,
    });
    success.headers.set("X-RateLimit-Limit", String(rateLimit.limit));
    success.headers.set("X-RateLimit-Remaining", String(rateLimit.remaining));
    return success;
  } catch (error) {
    console.error("Unexpected error in POST /api/contact:", error);
    return jsonError(
      {
        error: "An unexpected error occurred. Please try again.",
        code: "INTERNAL_ERROR",
      },
      500,
    );
  }
}
