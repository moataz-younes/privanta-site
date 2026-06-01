import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCanonicalUrl, getDefaultOgImage, getPageSeo, organizationJsonLd } from "@/lib/seo/routes";

function upsertMeta(selector: string, attrs: Record<string, string>): void {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const key = selector.includes("property=") ? "property" : "name";
    const value = selector.match(/["']([^"']+)["']/)?.[1];
    if (value) {
      el.setAttribute(key, value);
    }
    document.head.appendChild(el);
  }
  for (const [name, value] of Object.entries(attrs)) {
    el.setAttribute(name, value);
  }
}

function upsertLink(rel: string, href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: object): void {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function PageHead() {
  const { pathname } = useLocation();
  const seo = getPageSeo(pathname);
  const canonical = getCanonicalUrl(seo.path);
  const ogImage = getDefaultOgImage();

  useEffect(() => {
    document.title = seo.title;

    upsertMeta('meta[name="description"]', { content: seo.description });
    if (seo.keywords) {
      upsertMeta('meta[name="keywords"]', { content: seo.keywords });
    }
    upsertMeta('meta[name="robots"]', {
      content: seo.noIndex ? "noindex, nofollow" : "index, follow",
    });

    upsertMeta('meta[property="og:title"]', { content: seo.title });
    upsertMeta('meta[property="og:description"]', { content: seo.description });
    upsertMeta('meta[property="og:type"]', { content: "website" });
    upsertMeta('meta[property="og:url"]', { content: canonical });
    upsertMeta('meta[property="og:image"]', { content: ogImage });

    upsertMeta('meta[name="twitter:card"]', { content: "summary_large_image" });
    upsertMeta('meta[name="twitter:site"]', { content: "@privanta" });
    upsertMeta('meta[name="twitter:title"]', { content: seo.title });
    upsertMeta('meta[name="twitter:description"]', { content: seo.description });
    upsertMeta('meta[name="twitter:image"]', { content: ogImage });

    upsertLink("canonical", canonical);

    if (pathname === "/") {
      upsertJsonLd("privanta-org-jsonld", organizationJsonLd);
    }
  }, [canonical, ogImage, pathname, seo]);

  return null;
}
