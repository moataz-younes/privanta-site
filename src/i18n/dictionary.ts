import type { SiteLocale } from "@/lib/language";

type Dict = {
  nav: Record<string, string | Record<string, string>>;
  hero: Record<string, string>;
  visuals: Record<string, string>;
  footer: Record<string, string | Record<string, string>>;
  maatSpotlight: Record<string, string>;
  trustMap: Record<string, string>;
};

const en: Dict = {
  nav: {
    home: "Home",
    services: "Services",
    products: "Products",
    partners: "Partners",
    academy: "Training",
    blog: "Blog",
    company: "Company",
    contact: "Contact",
    readArticles: "Read Articles",
    readArticlesDesc: "Browse all published insights",
    publishArticle: "Publish Article",
    publishArticleDesc: "Submit a new article request",
    ctaGetStarted: "Get Started",
    servicesChildren: {
      dataProtection: "Data Protection",
      dataProtectionDesc: "Encryption, DLP & access control",
      compliance: "Compliance & Governance",
      complianceDesc: "Frameworks, audits & policies",
      risk: "Risk Management",
      riskDesc: "Threat modeling & continuous risk",
    },
    productsChildren: {
      maat: "MAAT AI",
      maatDesc: "AI Legal Assistant",
      platform: "Privanta Platform",
      platformDesc: "Compliance & Privacy OS",
    },
    partnersChildren: {
      technology: "Technology Partners",
      technologyDesc: "API & telemetry integrations",
      consulting: "Consulting Partners",
      consultingDesc: "Implementation & governance",
      alliances: "Global Alliances",
      alliancesDesc: "Strategic ecosystem partners",
      join: "Become a Partner",
      joinDesc: "Join the Privanta ecosystem",
    },
    companyChildren: {
      about: "About Us",
      aboutDesc: "Who we are and what we do",
      careers: "Careers",
      careersDesc: "Open positions and opportunities",
      team: "Our Team",
      teamDesc: "Meet the people behind Privanta",
      locations: "Locations",
      locationsDesc: "Our offices and regional presence",
      companyContact: "Contact",
      companyContactDesc: "Get in touch with our team",
    },
  },
  hero: {
    badge: "The trust layer for modern enterprises",
    titlePart1: "Turning",
    titleHighlight1: "Compliance",
    titlePart2: "into",
    titleHighlight2: "Trust",
    description:
      "Privanta is a product ecosystem combining cybersecurity, AI-driven legal intelligence, and continuous compliance, engineered for organizations that can't afford to guess.",
    requestDemo: "Request Demo",
    exploreProducts: "Explore Products",
    chipLabel: "Product",
    maatChip: "MAAT AI",
    platformChip: "Privanta Platform",
    statUptime: "Uptime SLA",
    statAligned: "Aligned",
    statMonitoring: "Monitoring",
    brandTagline: "Secure · Comply · Trust",
    typingHeadline: "Turning Compliance into Trust",
  },
  maatSpotlight: {
    kicker: "Legal intelligence",
    title: "MAAT AI, your contract and policy copilot",
    body: "Draft faster, review deeper, and keep every clause aligned with the frameworks that matter to your business, without guesswork.",
    cta: "Explore MAAT AI",
  },
  trustMap: {
    caption: "Global Trust Map",
  },
  visuals: {
    riskScore: "Risk Score",
    maatAnalyzing: "Analyzing 12 contracts…",
    liveMonitor: "Live monitor",
    gdprIso: "GDPR · ISO",
    controlsPassing: "All controls passing",
  },
  footer: {
    tagline: "Turning compliance into trust. Intelligent, scalable cybersecurity and data privacy for modern enterprises.",
    rights: "All rights reserved.",
    complianceLine: "ISO 27001 aligned · SOC 2 ready · GDPR compliant",
    products: "Products",
    company: "Company",
    resources: "Resources",
    legal: "Legal",
    linkMaat: "MAAT AI",
    linkPlatform: "Privanta Platform",
    linkIntegrations: "Integrations",
    linkAbout: "About",
    linkCareers: "Careers",
    linkContact: "Contact",
    linkAcademy: "Training",
    linkBlog: "Blog",
    linkDocs: "Documentation",
    linkPrivacy: "Privacy Policy",
    linkTerms: "Terms",
    linkSecurity: "Security",
  },
};

const ar: Dict = {
  nav: {
    home: "الرئيسية",
    services: "الخدمات",
    products: "المنتجات",
    partners: "الشركاء",
    academy: "التدريب",
    blog: "المدونة",
    company: "الشركة",
    contact: "اتصل بنا",
    readArticles: "قراءة المقالات",
    readArticlesDesc: "تصفح جميع المقالات المنشورة",
    publishArticle: "نشر مقال",
    publishArticleDesc: "إرسال طلب لنشر مقال جديد",
    ctaGetStarted: "ابدأ الآن",
    servicesChildren: {
      dataProtection: "حماية البيانات",
      dataProtectionDesc: "التشفير، منع تسرب البيانات، وضبط الوصول",
      compliance: "الامتثال والحوكمة",
      complianceDesc: "الأطر، التدقيق، والسياسات",
      risk: "إدارة المخاطر",
      riskDesc: "نمذجة التهديدات والمخاطر المستمرة",
    },
    productsChildren: {
      maat: "MAAT AI",
      maatDesc: "مساعد قانوني مدعوم بالذكاء الاصطناعي",
      platform: "منصة بريفانتا",
      platformDesc: "نظام الامتثال والخصوصية",
    },
    partnersChildren: {
      technology: "شركاء التقنية",
      technologyDesc: "تكامل واجهات API والبيانات",
      consulting: "شركاء الاستشارات",
      consultingDesc: "التنفيذ والحوكمة",
      alliances: "تحالفات عالمية",
      alliancesDesc: "شركاء استراتيجيون في المنظومة",
      join: "كن شريكًا",
      joinDesc: "انضم إلى منظومة بريفانتا",
    },
    companyChildren: {
      about: "من نحن",
      aboutDesc: "هويتنا وما نقدمه",
      careers: "الوظائف",
      careersDesc: "الفرص والوظائف المتاحة",
      team: "فريقنا",
      teamDesc: "تعرّف على القائمين على بريفانتا",
      locations: "المواقع",
      locationsDesc: "مكاتبنا وحضورنا الإقليمي",
      companyContact: "تواصل",
      companyContactDesc: "تواصل مع فريقنا",
    },
  },
  hero: {
    badge: "طبقة الثقة للمؤسسات الحديثة",
    titlePart1: "حوّل",
    titleHighlight1: "الامتثال",
    titlePart2: "إلى",
    titleHighlight2: "الثقة",
    description:
      "بريفانتا منظومة منتجات تجمع الأمن السيبراني، الذكاء القانوني المدعوم بالذكاء الاصطناعي، والامتثال المستمر، مصممة لمؤسسات لا تستطيع المجازفة بالتخمين.",
    requestDemo: "اطلب عرضًا توضيحيًا",
    exploreProducts: "استكشف المنتجات",
    chipLabel: "منتج",
    maatChip: "MAAT AI",
    platformChip: "منصة بريفانتا",
    statUptime: "اتفاقية وقت التشغيل",
    statAligned: "متوافق",
    statMonitoring: "المراقبة",
    brandTagline: "آمن · امتثل · ثِق",
    typingHeadline: "تحويل الامتثال إلى الثقة",
  },
  maatSpotlight: {
    kicker: "ذكاء قانوني",
    title: "MAAT AI، مساعدك للعقود والسياسات",
    body: "صياغة أسرع، مراجعة أعمق، ومواءمة كل بند مع الأطر التي تهم مؤسستك، دون تخمين.",
    cta: "اكتشف MAAT AI",
  },
  trustMap: {
    caption: "خريطة الثقة العالمية",
  },
  visuals: {
    riskScore: "درجة المخاطر",
    maatAnalyzing: "جارٍ تحليل ١٢ عقدًا…",
    liveMonitor: "مراقبة مباشرة",
    gdprIso: "GDPR · ISO",
    controlsPassing: "جميع الضوابط تمر بنجاح",
  },
  footer: {
    tagline: "حوّل الامتثال إلى ثقة. أمن سيبراني وخصوصية بيانات ذكية وقابلة للتوسع للمؤسسات الحديثة.",
    rights: "جميع الحقوق محفوظة.",
    complianceLine: "متوافق مع ISO 27001 · جاهز لـ SOC 2 · متوافق مع GDPR",
    products: "المنتجات",
    company: "الشركة",
    resources: "الموارد",
    legal: "قانوني",
    linkMaat: "MAAT AI",
    linkPlatform: "منصة بريفانتا",
    linkIntegrations: "التكاملات",
    linkAbout: "من نحن",
    linkCareers: "الوظائف",
    linkContact: "اتصل بنا",
    linkAcademy: "التدريب",
    linkBlog: "المدونة",
    linkDocs: "التوثيق",
    linkPrivacy: "سياسة الخصوصية",
    linkTerms: "الشروط",
    linkSecurity: "الأمان",
  },
};

const tables: Record<SiteLocale, Dict> = { en, ar };

function getLeaf(obj: unknown, path: string[]): string | undefined {
  if (!obj || path.length === 0) return undefined;
  const [head, ...rest] = path;
  if (rest.length === 0) {
    if (typeof obj === "object" && obj !== null && head in obj) {
      const v = (obj as Record<string, unknown>)[head];
      return typeof v === "string" ? v : undefined;
    }
    return undefined;
  }
  if (typeof obj === "object" && obj !== null && head in obj) {
    return getLeaf((obj as Record<string, unknown>)[head], rest);
  }
  return undefined;
}

export function translate(locale: SiteLocale, path: string): string {
  const parts = path.split(".").filter(Boolean);
  const hit = getLeaf(tables[locale], parts);
  return hit ?? path;
}
