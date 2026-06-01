export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  noIndex?: boolean;
};

const DEFAULT_SITE = "https://privanta.net";
const DEFAULT_OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/16610820-b35f-4be4-b477-4c129365a2aa/id-preview-433cd92d--835fc56b-11d8-4d30-aaa5-45ebaef4e331.lovable.app-1777497097365.png";

const ROUTE_SEO: Record<string, PageSeo> = {
  "/": {
    title: "Privanta — Turning Compliance into Trust",
    description:
      "AI-driven cybersecurity, data privacy, and compliance platform. Secure your data, simplify compliance, and build trust at scale.",
    path: "/",
    keywords: "compliance, GRC, data privacy, cybersecurity, governance, risk management, Saudi Arabia",
  },
  "/solutions": {
    title: "Solutions — Privanta",
    description: "Compliance engineering, risk, governance, and managed services for enterprise teams.",
    path: "/solutions",
  },
  "/products": {
    title: "Products — Privanta",
    description: "Privanta Platform and Maat AI — operational compliance and Arab legal intelligence.",
    path: "/products",
  },
  "/products/platform": {
    title: "Privanta Platform — GRC Command Center",
    description: "Unified GRC command center for controls, evidence, workflows, and audit readiness.",
    path: "/products/platform",
  },
  "/products/maat": {
    title: "Maat AI — Arab Legal Intelligence",
    description: "Arabic-first legal and regulatory intelligence for compliance teams in the GCC and MENA.",
    path: "/products/maat",
  },
  "/company": {
    title: "Company — Privanta",
    description: "About Privanta — mission, leadership, and enterprise compliance expertise.",
    path: "/company",
  },
  "/contact": {
    title: "Contact — Privanta",
    description: "Book a demo or speak with our compliance and GRC specialists.",
    path: "/contact",
  },
  "/partners": {
    title: "Partners — Privanta",
    description: "Partner with Privanta to deliver compliance, risk, and governance outcomes.",
    path: "/partners",
  },
  "/training": {
    title: "Academy & Training — Privanta",
    description: "Compliance and GRC training programs for security, legal, and operations teams.",
    path: "/training",
  },
  "/resources": {
    title: "Resources — Privanta",
    description: "Articles, guides, and insights on compliance, privacy, and operational risk.",
    path: "/resources",
  },
  "/blog": {
    title: "Blog — Privanta",
    description: "Latest insights on compliance, governance, and cybersecurity.",
    path: "/blog",
  },
};

const FALLBACK: PageSeo = {
  title: "Privanta",
  description: "Enterprise compliance, privacy, and GRC platform.",
  path: "/",
  noIndex: true,
};

export function getCanonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${DEFAULT_SITE}${normalized === "/" ? "" : normalized}`;
}

export function getDefaultOgImage(): string {
  return DEFAULT_OG_IMAGE;
}

export function getPageSeo(pathname: string): PageSeo {
  if (ROUTE_SEO[pathname]) {
    return ROUTE_SEO[pathname];
  }
  if (pathname.startsWith("/resources/")) {
    return {
      title: "Resource — Privanta",
      description: "Expert guidance on compliance, governance, and operational risk.",
      path: pathname,
    };
  }
  if (pathname.startsWith("/legal/")) {
    return {
      title: "Legal — Privanta",
      description: "Privanta legal policies and terms.",
      path: pathname,
      noIndex: true,
    };
  }
  if (pathname === "/404" || pathname.includes("*")) {
    return { ...FALLBACK, title: "Page Not Found — Privanta", noIndex: true };
  }
  return FALLBACK;
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Privanta",
  url: DEFAULT_SITE,
  logo: `${DEFAULT_SITE}/logoo.png`,
  description:
    "AI-driven cybersecurity, data privacy, and compliance platform for enterprise teams.",
  sameAs: ["https://linkedin.com/company/privanta"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "info@privanta.net",
    availableLanguage: ["English", "Arabic"],
  },
};
