export type ShareNetwork = "facebook" | "linkedin" | "x";

export type ShareLink = {
  id: ShareNetwork;
  labelEn: string;
  labelAr: string;
  href: string;
};

export function getAbsoluteShareUrl(path: string): string {
  if (typeof window !== "undefined") {
    return new URL(path, window.location.origin).href;
  }
  const base = import.meta.env.VITE_MAIN_SITE_URL?.replace(/\/$/, "") ?? "";
  return base ? `${base}${path.startsWith("/") ? path : `/${path}`}` : path;
}

export function buildShareLinks(path: string, title: string): ShareLink[] {
  const url = getAbsoluteShareUrl(path);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return [
    {
      id: "facebook",
      labelEn: "Share on Facebook",
      labelAr: "مشاركة على فيسبوك",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      id: "linkedin",
      labelEn: "Share on LinkedIn",
      labelAr: "مشاركة على لينكدإن",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      id: "x",
      labelEn: "Share on X",
      labelAr: "مشاركة على X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
  ];
}
