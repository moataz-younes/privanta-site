import type { LucideIcon } from "lucide-react";
import {
  Building2,
  FileSearch,
  FileText,
  HeartPulse,
  Landmark,
  LayoutDashboard,
  Radar,
  Shield,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import type { HomeImpactMetricItem } from "@/components/home/HomeImpactMetrics";

export type PlatformCopy = {
  aria: {
    highlights: string;
    frameworks: string;
  };
  hero: {
    title: string;
    titleClass: string;
    tagline: string;
    body: string;
    ctaPreview: string;
    ctaExplore: string;
    liveBadge: string;
  };
  stats: HomeImpactMetricItem[];
  capabilities: {
    title: string;
    subtitle: string;
    items: { icon: LucideIcon; title: string; desc: string }[];
  };
  governance: {
    title: string;
    body: string;
    steps: { n: string; title: string; body: string }[];
  };
  industries: {
    title: string;
    items: { icon: LucideIcon; label: string }[];
  };
  frameworks: {
    title: string;
  };
  cta: {
    title: string;
    body: string;
    demo: string;
    contact: string;
  };
};

const copyEn: PlatformCopy = {
  aria: {
    highlights: "Platform highlights",
    frameworks: "Compliance frameworks",
  },
  hero: {
    title: "Your Governance Operating System",
    titleClass: "max-w-[14ch]",
    tagline: "Data Governance with Full Legal Precision",
    body: "An integrated GRC platform purpose built for enterprises across the Middle East. Manage legal frameworks, risks, audits, and policies from a single intelligent workspace.",
    ctaPreview: "Request Platform Preview",
    ctaExplore: "Explore Features",
    liveBadge: "● LIVE COMPLIANCE MONITORING",
  },
  stats: [
    { end: 19, suffix: "", label: "Integrated Modules", fill: 95 },
    { end: 8, suffix: "+", label: "Supported Frameworks", fill: 80 },
    { end: 100, suffix: "", label: "Compliance Score", fill: 100 },
    { text: "Real time", label: "Continuous Monitoring", fill: 100 },
  ],
  capabilities: {
    title: "Governance Infrastructure Capabilities",
    subtitle: "Built for compliance teams who demand clarity, speed, and confidence.",
    items: [
      {
        icon: Radar,
        title: "Automated Asset Discovery",
        desc: "Full visibility across your networks, cloud, databases, and SaaS, discovered automatically, zero manual effort.",
      },
      {
        icon: Sparkles,
        title: "AI-Powered Data Classification",
        desc: "Classify every data asset by sensitivity level using machine learning, personal, health, financial, and confidential.",
      },
      {
        icon: LayoutDashboard,
        title: "Unified Control Dashboard",
        desc: "Your real time compliance posture across all frameworks, in one view.",
      },
      {
        icon: FileText,
        title: "Automated Policy Generation",
        desc: "Generate privacy policies, cookie notices, and processing records instantly, AI aligned to each framework's requirements.",
      },
      {
        icon: Shield,
        title: "Zero-Trust Protection",
        desc: "Every access request evaluated in real time against sensitivity, role, device, and risk, nothing trusted by default.",
      },
      {
        icon: FileSearch,
        title: "Audit-Ready Reports",
        desc: "One click reports for regulators and auditors, backed by tamper proof logs.",
      },
    ],
  },
  governance: {
    title: "Built for Continuous Governance",
    body: "Not just a compliance tool, a strategic partner that turns legal obligation into competitive advantage.",
    steps: [
      {
        n: "01",
        title: "Save Time and Resources",
        body: "Weeks of manual work now happen in hours, classification, policy generation, and reporting, fully automated.",
      },
      {
        n: "02",
        title: "Multi-Framework Compliance, All at Once",
        body: "Manage multiple regulatory frameworks simultaneously from one control plane, no conflicts, no gaps.",
      },
      {
        n: "03",
        title: "Reduce the Risk of Regulatory Fines",
        body: "Spot compliance gaps before they become violations, with a real time score that shows your posture at any moment.",
      },
    ],
  },
  industries: {
    title: "Built for the Most Regulated Industries",
    items: [
      { icon: Building2, label: "Banking and Financial Services" },
      { icon: HeartPulse, label: "Healthcare and Insurance" },
      { icon: ShoppingBag, label: "Retail and E-Commerce" },
      { icon: Landmark, label: "Government and Large Enterprises" },
    ],
  },
  frameworks: {
    title: "Framework Alignment",
  },
  cta: {
    title: "See Privanta Platform in Action",
    body: "Book a 30 minute live demo with our compliance experts.",
    demo: "Book Your Demo",
    contact: "Contact Us",
  },
};

const copyAr: PlatformCopy = {
  aria: {
    highlights: "أبرز مؤشرات المنصة",
    frameworks: "الأطر التنظيمية",
  },
  hero: {
    title: "نظام التشغيل الحوكمي الخاص بك",
    titleClass: "max-w-[20ch]",
    tagline: "حوكمة البيانات بدقة قانونية كاملة",
    body: "منصة GRC متكاملة مصممة خصيصًا للمؤسسات في الشرق الأوسط. أدر الأطر القانونية والمخاطر والتدقيق والسياسات من مساحة عمل ذكية واحدة.",
    ctaPreview: "اطلب عرض المنصة",
    ctaExplore: "استكشف المزايا",
    liveBadge: "● مراقبة امتثال مباشرة",
  },
  stats: [
    { end: 19, suffix: "", label: "وحدة متكاملة", fill: 95 },
    { end: 8, suffix: "+", label: "أطر تنظيمية مدعومة", fill: 80 },
    { end: 100, suffix: "", label: "درجة الامتثال", fill: 100 },
    { text: "فوري", label: "مراقبة مستمرة", fill: 100 },
  ],
  capabilities: {
    title: "قدرات البنية التحتية للحوكمة",
    subtitle: "مصممة لفرق الامتثال التي تتطلب وضوحًا وسرعة وثقة.",
    items: [
      {
        icon: Radar,
        title: "اكتشاف الأصول الآلي",
        desc: "رؤية كاملة عبر الشبكات والسحابة وقواعد البيانات وSaaS، مع اكتشاف تلقائي دون جهد يدوي.",
      },
      {
        icon: Sparkles,
        title: "تصنيف البيانات بالذكاء الاصطناعي",
        desc: "صنّف كل أصل بيانات حسب مستوى الحساسية باستخدام التعلم الآلي: شخصي، صحي، مالي، وسري.",
      },
      {
        icon: LayoutDashboard,
        title: "لوحة تحكم موحدة",
        desc: "وضع الامتثال لديك في الوقت الفعلي عبر جميع الأطر، في عرض واحد.",
      },
      {
        icon: FileText,
        title: "إنشاء السياسات آليًا",
        desc: "أنشئ سياسات الخصوصية وإشعارات ملفات تعريف الارتباط وسجلات المعالجة فورًا، متوافقة مع متطلبات كل إطار.",
      },
      {
        icon: Shield,
        title: "حماية عدم الثقة المطلقة",
        desc: "يُقيَّم كل طلب وصول في الوقت الفعلي وفق الحساسية والدور والجهاز والمخاطر، بلا ثقة افتراضية.",
      },
      {
        icon: FileSearch,
        title: "تقارير جاهزة للتدقيق",
        desc: "تقارير بنقرة واحدة للجهات الرقابية والمدققين، مدعومة بسجلات غير قابلة للعبث.",
      },
    ],
  },
  governance: {
    title: "مبنية للحوكمة المستمرة",
    body: "ليست مجرد أداة امتثال، بل شريك استراتيجي يحوّل الالتزام القانوني إلى ميزة تنافسية.",
    steps: [
      {
        n: "01",
        title: "توفير الوقت والموارد",
        body: "أسابيع من العمل اليدوي تتم اليوم في ساعات: التصنيف وإنشاء السياسات والتقارير، بشكل آلي بالكامل.",
      },
      {
        n: "02",
        title: "امتثال متعدد الأطر دفعة واحدة",
        body: "أدر أطرًا تنظيمية متعددة في آن واحد من لوحة تحكم واحدة، بلا تعارض ولا فجوات.",
      },
      {
        n: "03",
        title: "تقليل مخاطر الغرامات التنظيمية",
        body: "اكتشف فجوات الامتثال قبل أن تتحول إلى مخالفات، مع درجة فورية تعكس وضعك في أي لحظة.",
      },
    ],
  },
  industries: {
    title: "مبنية لأكثر القطاعات تنظيمًا",
    items: [
      { icon: Building2, label: "الخدمات المصرفية والمالية" },
      { icon: HeartPulse, label: "الرعاية الصحية والتأمين" },
      { icon: ShoppingBag, label: "التجزئة والتجارة الإلكترونية" },
      { icon: Landmark, label: "الحكومة والمؤسسات الكبرى" },
    ],
  },
  frameworks: {
    title: "مواءمة الأطر التنظيمية",
  },
  cta: {
    title: "شاهد منصة بريفانتا في العمل",
    body: "احجز عرضًا مباشرًا لمدة 30 دقيقة مع خبراء الامتثال لدينا.",
    demo: "احجز عرضك",
    contact: "تواصل معنا",
  },
};

export function getPlatformCopy(en: boolean): PlatformCopy {
  return en ? copyEn : copyAr;
}
