/** Detect which branded subdomain experience to render (same build, different hostname). */
export type SiteMode = "main" | "platform" | "maat";

function hostname(): string {
  if (typeof window === "undefined") return "";
  return window.location.hostname.toLowerCase();
}

export function getSiteMode(): SiteMode {
  const h = hostname();
  if (h.startsWith("platform.") || h === "platform.localhost") return "platform";
  if (h.startsWith("maat.") || h === "maat.localhost") return "maat";
  const debug = import.meta.env.VITE_SUBDOMAIN_DEBUG as string | undefined;
  if (debug === "platform") return "platform";
  if (debug === "maat") return "maat";
  return "main";
}
