/** Canonical URLs for cross-linking main marketing site and product subdomains. */

export function getMainSiteUrl(): string {
  return (import.meta.env.VITE_MAIN_SITE_URL as string | undefined)?.replace(/\/$/, "") ?? "https://privanta.net";
}

export function getPlatformSiteUrl(): string {
  return (import.meta.env.VITE_PLATFORM_SITE_URL as string | undefined)?.replace(/\/$/, "") ?? "https://platform.privanta.com";
}

export function getMaatSiteUrl(): string {
  return (import.meta.env.VITE_MAAT_SITE_URL as string | undefined)?.replace(/\/$/, "") ?? "https://maat.privanta.com";
}
