import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Briefcase,
  Building2,
  FileCheck,
  FileText,
  Gavel,
  Home,
  Landmark,
  Languages,
  PenLine,
  Rocket,
  Scale,
  Search,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";
import type { HomeImpactMetricItem } from "@/components/home/HomeImpactMetrics";

export type MaatMetricItem = {
  text: string;
  label: string;
  desc: string;
};

export type MaatRegionCountry = {
  name: string;
  flagCode: string;
};

export type MaatCopy = {
  aria: {
    stats: string;
    challenges: string;
    services: string;
    identities: string;
    sectors: string;
    regions: string;
    integrations: string;
    why: string;
    faq: string;
  };
  hero: {
    body: string;
    dashboardAlt: string;
    dashboardCaption: string;
  };
  story: {
    paragraphs: string[];
  };
  stats: {
    title: string;
    primary: MaatMetricItem[];
    compact: HomeImpactMetricItem[];
  };
  challenges: {
    title: string;
    highlight: string;
    highlightLabel: string;
    items: { title: string; desc: string }[];
  };
  services: {
    title: string;
    items: { title: string; desc: string; icon: LucideIcon }[];
  };
  identities: {
    title: string;
    items: { role: string; tagline: string; icon: LucideIcon }[];
  };
  sectors: {
    title: string;
    items: { title: string; desc: string; icon: LucideIcon }[];
  };
  regions: {
    title: string;
    currentLabel: string;
    current: MaatRegionCountry;
    comingLabel: string;
    comingSoon: MaatRegionCountry[];
  };
  integrations: {
    title: string;
    comingSoon: string;
    body: string;
    tools: string[];
  };
  why: {
    title: string;
    items: { title: string; desc: string }[];
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    body: string;
    ctaStart: string;
    ctaDemo: string;
  };
};

const copyEn: MaatCopy = {
  aria: {
    stats: "MAAT AI by the numbers",
    challenges: "Legal challenges today",
    services: "MAAT AI features",
    identities: "Intelligent legal personas",
    sectors: "Target sectors",
    regions: "Arab legal environment",
    integrations: "Integrations",
    why: "Why MAAT AI?",
    faq: "Frequently asked questions",
  },
  hero: {
    body: "An artificial intelligence platform purpose-built for Arab legal practice, empowering judges, attorneys, prosecutors, legal researchers, and legal departments to work faster, with greater accuracy, and more reliable legal outcomes.",
    dashboardAlt: "MAAT AI legal intelligence workspace",
    dashboardCaption:
      "An integrated legal AI platform for case analysis, legal research, legal drafting, and contract review, powered by verified legal sources and artificial intelligence.",
  },
  story: {
    paragraphs: [
      "Maat was never just a symbol… she was a principle of truth, justice, and balance.",
      "In ancient Egyptian civilization, Maat represented order, justice, and accountability.",
      "Today, MAAT AI carries the same philosophy into the age of artificial intelligence, where every answer is evidence-based and every analysis is backed by a verified source.",
    ],
  },
  stats: {
    title: "By the Numbers",
    primary: [
      {
        text: "1.9M+",
        label: "Indexed legal documents",
        desc: "Covering multiple branches of Egyptian law.",
      },
      {
        text: "34K+",
        label: "Judicial rulings & decisions",
        desc: "From Egypt's highest courts and judicial authorities.",
      },
      {
        text: "100%",
        label: "Privacy & full control",
        desc: "Your institutional data never leaves your environment.",
      },
    ],
    compact: [
      { end: 8, suffix: "", label: "Integrated legal services", fill: 100 },
      { end: 5, suffix: "", label: "Intelligent legal personas", fill: 62 },
      { end: 8, suffix: "", label: "Independent legal domains", fill: 100 },
    ],
  },
  challenges: {
    title: "Legal Challenges Today",
    highlight: "98%",
    highlightLabel: "of legal professionals consider time pressure and workload their biggest daily challenge.",
    items: [
      {
        title: "Long hours",
        desc: "Are spent searching through fragmented laws, rulings, and legal references.",
      },
      {
        title: "Thousands of pages",
        desc: "Require review and analysis in large-scale litigation and complex contracts.",
      },
      {
        title: "Multiple legal sources",
        desc: "Make finding accurate legal information slow and inefficient.",
      },
    ],
  },
  services: {
    title: "MAAT AI features",
    items: [
      {
        title: "Case Law & Precedent Search",
        desc: "Semantic legal search across Court of Cassation rulings and Egyptian courts using natural language.",
        icon: Search,
      },
      {
        title: "Legal File Analysis & Summarization",
        desc: "Analyze PDF and Word documents to extract key facts, disputes, evidence, and legal risks.",
        icon: FileText,
      },
      {
        title: "Intelligent Legal Research",
        desc: "Comprehensive legal search across laws, regulations, rulings, and official legal references.",
        icon: BookOpen,
      },
      {
        title: "Legal Drafting",
        desc: "Generate defense memoranda, appeals, cassation briefs, and legal filings supported by judicial precedents.",
        icon: PenLine,
      },
      {
        title: "Contract Analysis & Risk Detection",
        desc: "Analyze clauses, classify risks, and generate intelligent amendment suggestions.",
        icon: FileCheck,
      },
      {
        title: "Legal Gap & Weakness Detection",
        desc: "Identify contradictions, procedural loopholes, legal weaknesses, and appeal opportunities.",
        icon: Target,
      },
      {
        title: "Judicial Trend & Scenario Analysis",
        desc: "Analyze judicial patterns and possible legal outcomes based on facts and precedents.",
        icon: TrendingUp,
      },
      {
        title: "Professional Legal Translation",
        desc: "Accurate and specialized translation of legal documents, contracts, and legal memoranda.",
        icon: Languages,
      },
    ],
  },
  identities: {
    title: "Intelligent Legal Personas",
    items: [
      { role: "The Attorney", tagline: "Defense • Legal drafting • Opponent analysis", icon: Briefcase },
      { role: "The Judge", tagline: "Neutral analysis • Judicial reasoning", icon: Scale },
      { role: "The Prosecutor", tagline: "Evidence analysis • Crime classification", icon: Shield },
      { role: "The Legal Researcher", tagline: "Research • Comparative jurisprudence • Precedents", icon: BookOpen },
      {
        role: "The Legal Translator",
        tagline: "Technical translation • Legal terminology standardization",
        icon: Languages,
      },
    ],
  },
  sectors: {
    title: "Target Sectors",
    items: [
      {
        title: "Law firms & legal practices",
        desc: "Accelerate legal research and improve legal productivity.",
        icon: Briefcase,
      },
      {
        title: "Corporate legal departments",
        desc: "Manage contracts, compliance, and legal risks more efficiently.",
        icon: Building2,
      },
      {
        title: "Judicial & government institutions",
        desc: "Analyze rulings and case files with faster access to legal information.",
        icon: Gavel,
      },
      {
        title: "Real estate & construction",
        desc: "Review property agreements, dispute clauses, and land law provisions instantly.",
        icon: Home,
      },
      {
        title: "Banking, financial institutions & FinTech",
        desc: "Review financial agreements, navigate banking regulations, and assess legal risks.",
        icon: Landmark,
      },
      {
        title: "Startups & founders",
        desc: "Understand legal obligations, review investment agreements, and draft incorporation documents.",
        icon: Rocket,
      },
    ],
  },
  regions: {
    title: "Supporting the Arab Legal Environment",
    currentLabel: "Currently supporting:",
    current: { name: "Egypt", flagCode: "eg" },
    comingLabel: "Coming soon:",
    comingSoon: [
      { name: "Saudi Arabia", flagCode: "sa" },
      { name: "United Arab Emirates", flagCode: "ae" },
    ],
  },
  integrations: {
    title: "Integrations",
    comingSoon: "Coming soon",
    body: "MAAT AI works directly within the tools your teams already use every day.",
    tools: ["Gmail", "Outlook", "Microsoft Word"],
  },
  why: {
    title: "Why MAAT AI?",
    items: [
      {
        title: "Built exclusively for Arab law",
        desc: "A legal AI platform specifically designed for Arab legal practice.",
      },
      {
        title: "Every answer is source-based",
        desc: "Legal articles, court rulings, and verified legal references support every result.",
      },
      {
        title: "Understands legal reasoning",
        desc: "Analyzes facts, defenses, legal risks, and judicial trends.",
      },
      {
        title: "Built for sensitive institutions",
        desc: "Full encryption, institutional control, and secure on-premise deployment.",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        q: "Are all answers supported by legal sources?",
        a: "Yes. Every response is linked to verified legal references, laws, and judicial rulings.",
      },
      {
        q: "Can the platform analyze contracts and legal files?",
        a: "Yes. MAAT AI can analyze PDF and Word legal documents, detect risks, and identify legal gaps.",
      },
      {
        q: "Can MAAT AI be deployed internally within institutions?",
        a: "Yes. The platform supports secure on-premise deployment with full institutional data control.",
      },
    ],
  },
  cta: {
    title: "Ready to transform legal workflows?",
    body: "Join judges, attorneys, researchers, and institutions already working smarter with MAAT AI.",
    ctaStart: "Get Started",
    ctaDemo: "Request a Demo",
  },
};

const copyAr: MaatCopy = {
  aria: {
    stats: "MAAT AI بالأرقام",
    challenges: "التحديات القانونية اليوم",
    services: "ميزات MAAT AI",
    identities: "الهويات القانونية الذكية",
    sectors: "القطاعات المستهدفة",
    regions: "البيئة القانونية العربية",
    integrations: "التكاملات",
    why: "لماذا MAAT AI؟",
    faq: "الأسئلة الشائعة",
  },
  hero: {
    body: "منصة ذكاء اصطناعي قانونية مبنية خصيصًا للممارسة القانونية العربية، تمكّن القضاة والمحامين وأعضاء النيابة والباحثين والإدارات القانونية من العمل بسرعة أكبر، ودقة أعلى، وقرارات أكثر موثوقية.",
    dashboardAlt: "مساحة عمل MAAT AI للذكاء القانوني",
    dashboardCaption:
      "منصة متكاملة لتحليل القضايا، البحث القانوني، كتابة المذكرات، وتحليل العقود مدعومة بالمصادر القانونية والذكاء الاصطناعي.",
  },
  story: {
    paragraphs: [
      "ماعت لم تكن مجرد رمز… بل مبدأ للحق والعدالة والحقيقة.",
      "في الحضارة المصرية القديمة، كانت ماعت تمثل النظام والعدل والتوازن. واليوم، يحمل MAAT AI نفس الفلسفة بأدوات الذكاء الاصطناعي الحديثة حيث تكون كل إجابة مدعومة بمصدر، وكل تحليل قائم على دليل.",
    ],
  },
  stats: {
    title: "بالأرقام",
    primary: [
      {
        text: "1.9M+",
        label: "وثيقة قانونية مفهرسة",
        desc: "تغطي مختلف فروع القانون المصري.",
      },
      {
        text: "34K+",
        label: "حكم وقرار قضائي",
        desc: "من أعلى الهيئات والمحاكم المصرية.",
      },
      {
        text: "100%",
        label: "خصوصية وتحكم كامل",
        desc: "بياناتك لا تغادر مؤسستك أبدًا.",
      },
    ],
    compact: [
      { text: "٨", label: "خدمات قانونية متكاملة", fill: 100 },
      { text: "٥", label: "أنماط تفكير قانونية ذكية", fill: 62 },
      { text: "٨", label: "فروع قانونية مستقلة", fill: 100 },
    ],
  },
  challenges: {
    title: "التحديات القانونية اليوم",
    highlight: "98%",
    highlightLabel: "من العاملين بالمجال القانوني يعتبرون ضغط الوقت وكثرة المهام أكبر تحدٍ يومي.",
    items: [
      {
        title: "ساعات طويلة",
        desc: "تُستهلك يوميًا في البحث داخل القوانين والأحكام والمراجع المتفرقة.",
      },
      {
        title: "آلاف الصفحات",
        desc: "تحتاج للمراجعة والتحليل داخل القضايا الكبيرة والعقود المعقدة.",
      },
      {
        title: "مصادر قانونية متعددة",
        desc: "تجعل الوصول للمعلومة الدقيقة عملية بطيئة ومرهقة.",
      },
    ],
  },
  services: {
    title: "ميزات MAAT AI",
    items: [
      {
        title: "البحث في السوابق القضائية",
        desc: "محرك بحث دلالي ذكي داخل أحكام محكمة النقض والمحاكم المصرية باللغة الطبيعية.",
        icon: Search,
      },
      {
        title: "تحليل وتلخيص الملفات القانونية",
        desc: "تحليل ملفات PDF وWord واستخراج الوقائع الجوهرية ونقاط النزاع والمخاطر القانونية.",
        icon: FileText,
      },
      {
        title: "البحث القانوني الذكي",
        desc: "بحث متكامل داخل القوانين واللوائح والأحكام والمراجع الرسمية.",
        icon: BookOpen,
      },
      {
        title: "كتابة المذكرات القانونية",
        desc: "إنشاء مذكرات الدفاع والاستئناف والنقض والصحف القانونية بهيكل احترافي مدعوم بالأحكام والسوابق القضائية.",
        icon: PenLine,
      },
      {
        title: "تحليل العقود واكتشاف المخاطر",
        desc: "تصنيف البنود القانونية واكتشاف المخاطر مع اقتراحات تعديل ذكية.",
        icon: FileCheck,
      },
      {
        title: "استنباط الثغرات القانونية",
        desc: "تحليل نقاط الضعف والتعارضات والثغرات الإجرائية وفرص الطعن.",
        icon: Target,
      },
      {
        title: "تحليل الاتجاهات القضائية",
        desc: "تحليل أنماط الأحكام والسيناريوهات المحتملة استنادًا إلى الوقائع والسوابق.",
        icon: TrendingUp,
      },
      {
        title: "الترجمة القانونية الاحترافية",
        desc: "ترجمة قانونية دقيقة ومتخصصة للمستندات والعقود والمذكرات القانونية.",
        icon: Languages,
      },
    ],
  },
  identities: {
    title: "الهويات القانونية الذكية",
    items: [
      { role: "المحامي", tagline: "الدفاع • المذكرات • تحليل الخصوم", icon: Briefcase },
      { role: "القاضي", tagline: "التحليل المحايد • تسبيب الأحكام", icon: Scale },
      { role: "النيابة العامة", tagline: "تحليل الأدلة • توصيف الجرائم", icon: Shield },
      { role: "الباحث القانوني", tagline: "الأبحاث • الفقه • السوابق", icon: BookOpen },
      { role: "المترجم القانوني", tagline: "الترجمة الفنية • توحيد المصطلحات", icon: Languages },
    ],
  },
  sectors: {
    title: "القطاعات المستهدفة",
    items: [
      {
        title: "مكاتب وشركات المحاماة",
        desc: "تسريع البحث القانوني وتحسين جودة العمل القانوني اليومي.",
        icon: Briefcase,
      },
      {
        title: "الإدارات القانونية",
        desc: "إدارة العقود والمخاطر القانونية والامتثال بكفاءة أعلى.",
        icon: Building2,
      },
      {
        title: "الجهات القضائية والهيئات الحكومية",
        desc: "تحليل الأحكام والملفات القضائية وتسريع الوصول للمعلومة القانونية.",
        icon: Gavel,
      },
      {
        title: "العقارات والإنشاءات",
        desc: "تحليل عقود الملكية ومراجعة بنود النزاع واستخراج نصوص قانون الأراضي ذات الصلة.",
        icon: Home,
      },
      {
        title: "البنوك والمؤسسات المالية والتكنولوجيا المالية",
        desc: "مراجعة العقود المالية والتنقل داخل اللوائح المصرفية وتقييم المخاطر القانونية.",
        icon: Landmark,
      },
      {
        title: "الشركات الناشئة والمؤسسون",
        desc: "فهم الالتزامات القانونية ومراجعة اتفاقيات الاستثمار وصياغة وثائق التأسيس.",
        icon: Rocket,
      },
    ],
  },
  regions: {
    title: "يدعم البيئة القانونية العربية",
    currentLabel: "يدعم MAAT AI حاليًا:",
    current: { name: "مصر", flagCode: "eg" },
    comingLabel: "قريبًا:",
    comingSoon: [
      { name: "السعودية", flagCode: "sa" },
      { name: "الإمارات", flagCode: "ae" },
    ],
  },
  integrations: {
    title: "التكاملات",
    comingSoon: "قريبًا",
    body: "يعمل MAAT AI من داخل البيئات التي تستخدمها يوميًا دون الحاجة إلى تغيير أسلوب عملك.",
    tools: ["Gmail", "Outlook", "Microsoft Word"],
  },
  why: {
    title: "لماذا MAAT AI؟",
    items: [
      {
        title: "متخصص بالكامل في القانون العربي",
        desc: "منصة قانونية مبنية خصيصًا للممارسة القانونية العربية.",
      },
      {
        title: "كل إجابة مرتبطة بمصدر",
        desc: "مواد قانونية، أحكام قضائية، ومراجع موثقة.",
      },
      {
        title: "يفهم المنطق القانوني",
        desc: "تحليل الوقائع والدفوع والمخاطر واتجاهات الأحكام.",
      },
      {
        title: "مصمم للمؤسسات الحساسة",
        desc: "تشفير كامل وتحكم مؤسسي واستضافة محلية On-Premise.",
      },
    ],
  },
  faq: {
    title: "الأسئلة الشائعة",
    items: [
      {
        q: "هل جميع الإجابات مدعومة بمصادر؟",
        a: "نعم، جميع النتائج مرتبطة بمراجع قانونية وأحكام موثقة.",
      },
      {
        q: "هل يدعم النظام تحليل العقود والملفات؟",
        a: "نعم، يمكن تحليل ملفات PDF وWord واكتشاف المخاطر والثغرات القانونية.",
      },
      {
        q: "هل يمكن تشغيله داخل المؤسسة؟",
        a: "نعم، يدعم MAAT AI الاستضافة المحلية والتحكم الكامل بالبيانات.",
      },
    ],
  },
  cta: {
    title: "جاهز للانتقال إلى مستقبل العمل القانوني؟",
    body: "انضم إلى القضاة والمحامين والباحثين والمؤسسات القانونية التي تعمل اليوم بذكاء أكبر مع MAAT AI.",
    ctaStart: "ابدأ الآن",
    ctaDemo: "اطلب عرضًا تجريبيًا",
  },
};

export function getMaatCopy(en: boolean): MaatCopy {
  return en ? copyEn : copyAr;
}

export const MAAT_LOGO_SRC = "/maat-logo.png";
export const MAAT_HERO_COVER_SRC = "/maat-hero-cover.png";
export const MAAT_DASHBOARD_MOCKUP_SRC = "/maat-dashboard-mockup.html";
export const MAAT_DASHBOARD_SRC = MAAT_DASHBOARD_MOCKUP_SRC;
