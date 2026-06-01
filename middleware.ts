import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { applySecurityHeaders } from "./lib/security/headers";

const VITE_DEV_URL = process.env.VITE_DEV_SERVER_URL ?? "http://127.0.0.1:8080";

function withSecurityHeaders(response: NextResponse): NextResponse {
  applySecurityHeaders(response.headers);
  return response;
}

/**
 * In development, send browser traffic to the Vite dev server (port 8080).
 * Port 3000 is API-only; visiting it without this redirect shows Next.js 404.
 */
export function middleware(request: NextRequest): NextResponse {
  if (process.env.NODE_ENV !== "development") {
    return withSecurityHeaders(NextResponse.next());
  }

  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  ) {
    return withSecurityHeaders(NextResponse.next());
  }

  const target = new URL(`${pathname}${search}`, VITE_DEV_URL);
  return withSecurityHeaders(NextResponse.redirect(target, 307));
}

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
