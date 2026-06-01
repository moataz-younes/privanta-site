import { Resend } from "resend";
import type { ContactFormInput } from "@/lib/validations/contact";

const LEAD_RECIPIENT = "info@privanta.net";
const DEFAULT_FROM = "Privanta Leads <leads@privanta.net>";

let resendClient: Resend | null = null;

/**
 * Returns a configured Resend client instance.
 */
function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

/**
 * Resolves the sender address (supports Resend onboarding address in development).
 */
function getFromAddress(): string {
  return process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatSubmissionTimestamp(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "UTC",
  }).format(date);
}

function buildContactEmailHtml(
  data: Pick<
    ContactFormInput,
    "fullName" | "workEmail" | "company" | "interest" | "message"
  >,
  submittedAt: Date,
): string {
  const rows: Array<{ label: string; value: string }> = [
    { label: "Full Name", value: data.fullName },
    { label: "Work Email", value: data.workEmail },
    { label: "Company", value: data.company },
    { label: "Interest", value: data.interest },
    { label: "Message", value: data.message },
  ];

  const tableRows = rows
    .map(
      (row) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#374151;width:160px;vertical-align:top;">${escapeHtml(row.label)}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;color:#111827;white-space:pre-wrap;">${escapeHtml(row.value)}</td>
        </tr>`,
    )
    .join("");

  const timestamp = formatSubmissionTimestamp(submittedAt);

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:#0b1a2e;padding:24px 28px;">
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#2fbfcc;letter-spacing:0.02em;">Privanta</h1>
              <p style="margin:8px 0 0;font-size:14px;color:#9ca3af;">New contact form lead</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 28px 8px;">
              <span style="display:inline-block;background:#059669;color:#ffffff;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:4px 10px;border-radius:999px;">NEW</span>
              <p style="margin:12px 0 0;font-size:13px;color:#6b7280;">Submitted ${escapeHtml(timestamp)} (UTC)</p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;border-collapse:collapse;">
                ${tableRows}
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#f9fafb;padding:16px 28px;border-top:1px solid #e5e7eb;">
              <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">This is an automated notification from privanta.net</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export type SendContactNotificationResult = {
  success: boolean;
  id?: string;
};

/**
 * Sends an internal lead notification email via Resend (best-effort).
 */
export async function sendContactNotification(
  data: Pick<
    ContactFormInput,
    "fullName" | "workEmail" | "company" | "interest" | "message"
  >,
  submittedAt: Date = new Date(),
): Promise<SendContactNotificationResult> {
  const resend = getResendClient();
  const subject = `[New Lead] ${data.interest} — ${data.fullName} @ ${data.company}`;
  const html = buildContactEmailHtml(data, submittedAt);

  const response = await resend.emails.send({
    from: getFromAddress(),
    to: [LEAD_RECIPIENT],
    subject,
    html,
  });

  if (response.error) {
    throw new Error(response.error.message);
  }

  return {
    success: true,
    id: response.data?.id,
  };
}
