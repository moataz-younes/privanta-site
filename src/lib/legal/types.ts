export type LegalDocSlug = "privacy" | "terms" | "cookies";

export type LegalDocument = {
  slug: LegalDocSlug;
  title: { en: string; ar: string };
  effectiveDate: { en: string; ar: string };
  body: { en: string; ar: string };
};
