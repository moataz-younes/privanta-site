import { Link } from "react-router-dom";
import { useEffect, useState, type CSSProperties } from "react";
import { useI18n } from "@/i18n/useI18n";
import HeroAtmosphere from "@/components/HeroAtmosphere";
import {
  HomeImpactMetricCard,
  HomeImpactMetricsGrid,
  type HomeImpactMetricItem,
} from "@/components/home/HomeImpactMetrics";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  HomePageBoot,
  MotionSection,
  ScrollStagger,
  ScrollStaggerItem,
} from "@/components/motion";
import {
  ShieldAlert,
  ClipboardList,
  Settings,
  Radio,
  BarChart3,
  Link2,
  FileText,
  Bot,
  Building2,
  HeartPulse,
  Cpu,
  ShoppingBag,
  Home,
  Scale,
  Shield,
  Briefcase,
  Lock,
  FileCheck,
  Monitor,
  ArrowRight,
} from "lucide-react";
import { complianceLogos, getComplianceLogoClassName } from "@/lib/complianceLogos";

const HERO_ROTATE_EN = ["Start Enforcing It", "Start Governing It"] as const;
const HERO_ROTATE_AR = ["ابدأ بفرضه", "ابدأ بالحوكمة"] as const;

const featuredPosts = [
  {
    id: 1,
    category: "Regulatory Update",
    CategoryIcon: FileText,
    title: "What Saudi PDPL Means for Financial Institutions in 2025",
    titleAr: "ماذا يعني PDPL السعودي للمؤسسات المالية في 2025",
    excerpt:
      "A practical breakdown of latest PDPL enforcement guidelines and what compliance teams need to implement immediately.",
    excerptAr:
      "تحليل عملي لأحدث إرشادات فرض PDPL وما تحتاج فرق الامتثال لتطبيقه فورًا.",
    date: "May 2025",
    dateAr: "مايو 2025",
  },
  {
    id: 2,
    category: "AI Governance",
    CategoryIcon: Bot,
    title: "Building an AI Risk Register: A Step-by-Step Framework",
    titleAr: "بناء سجل مخاطر الذكاء الاصطناعي: إطار خطوة بخطوة",
    excerpt:
      "How to identify, classify, and govern AI systems across your organization before regulators force the issue.",
    excerptAr:
      "كيفية تحديد وتصنيف وحوكمة أنظمة الذكاء الاصطناعي عبر مؤسستك قبل أن تجبرك الجهات التنظيمية.",
    date: "April 2025",
    dateAr: "أبريل 2025",
  },
  {
    id: 3,
    category: "Security",
    CategoryIcon: Shield,
    title: "From Policy to Proof: Closing the Evidence Gap in Audits",
    titleAr: "من السياسة إلى الإثبات: سد فجوة الأدلة في التدقيق",
    excerpt:
      "Why scattered screenshots fail auditors, and how continuous evidence pipelines reduce last-minute panic.",
    excerptAr:
      "لماذا تفشل لقطات الشاشة المتفرقة مع المدققين، وكيف تقلل خطوط أدلة مستمرة من ذعر اللحظة الأخيرة.",
    date: "March 2025",
    dateAr: "مارس 2025",
  },
];

const Index = () => {
  const { locale } = useI18n();
  const en = locale === "en";
  const marqueeLogos = [...complianceLogos, ...complianceLogos];
  const [heroRotateIdx, setHeroRotateIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setHeroRotateIdx((i) => (i + 1) % 2), 3000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    setHeroRotateIdx(0);
  }, [en]);

  return (
    <div className="relative home-page">
      <HomePageBoot />
      {/* ──────────── HERO ──────────── */}
      <section
        id="home"
        className="home-strip-hero relative isolate flex flex-col overflow-hidden"
      >
        <HeroAtmosphere />

        <div className="hero-entry-stack container-privanta relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 py-10 text-center md:py-12 lg:py-16">
          <div
            className="home-hero-title-glow home-hero-headline-center mx-auto mb-5 w-full md:mb-6"
            style={{ "--hero-index": "1" } as CSSProperties}
          >
            <h1 className="home-hero-two-lines m-0 w-full p-0">
              {en ? (
                <>
                  <span className="home-hero-line-primary home-hero-line-entry">Stop Managing Compliance</span>
                  <span
                    key={heroRotateIdx}
                    className="home-hero-line-secondary home-hero-phrase-rotate"
                    aria-live="polite"
                  >
                    {HERO_ROTATE_EN[heroRotateIdx]}
                  </span>
                </>
              ) : (
                <>
                  <span className="home-hero-line-primary home-hero-line-entry">توقف عن إدارة الامتثال</span>
                  <span
                    key={heroRotateIdx}
                    className="home-hero-line-secondary home-hero-phrase-rotate"
                    aria-live="polite"
                  >
                    {HERO_ROTATE_AR[heroRotateIdx]}
                  </span>
                </>
              )}
            </h1>
          </div>
          <p
            className="hero-lead font-body mx-auto mb-6 max-w-[48ch] text-[var(--text-secondary)] md:mb-8"
            style={
              {
                "--hero-index": "2",
                fontSize: "clamp(0.9375rem, 1.25vw, 1.0625rem)",
                lineHeight: 1.58,
              } as CSSProperties
            }
          >
            {en
              ? "Privanta turns regulatory requirements into real-time, measurable control systems"
              : "تحوّل Privanta المتطلبات التنظيمية إلى أنظمة رقابة فورية قابلة للقياس"}
          </p>

          <div
            className="mb-5 flex flex-wrap justify-center gap-3 md:mb-6"
            style={{ "--hero-index": "3" } as CSSProperties}
          >
            <Link to="/contact#book-demo" className="btn-demo btn-demo-motion">
              {en ? "Book a Demo" : "احجز عرضًا"}
            </Link>
            <Link
              to="/contact#control-assessment"
              className="btn-outline btn-outline-motion transition-[box-shadow,border-color] duration-300 ease-out hover:border-[rgba(99,240,221,0.22)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              {en ? "Talk to an Expert" : "تحدث مع خبير"}
            </Link>
          </div>
          <p
            className="hero-consultation-note font-body mx-auto max-w-[48ch]"
            style={{ "--hero-index": "4" } as CSSProperties}
          >
            {en
              ? "No commitment · 30-minute consultation"
              : "بدون التزام · استشارة 30 دقيقة"}
          </p>
        </div>
      </section>

      <div className="divider-gradient mx-auto max-w-[1280px] px-6 lg:px-10" />

      {/* ──────────── PROBLEM ──────────── */}
      <MotionSection className="section-surface home-strip-standard home-strip-problem" separator>
        <ScrollReveal>
          <div className="container-privanta">
            <header className="home-section-head home-strip-problem-head mx-auto text-center">
              <h2 className="heading mb-4 text-[var(--text-primary)]">
                {en
                  ? "Compliance is Fragmented, Reactive & Inefficient."
                  : "الامتثال مجزأ وتفاعلي وغير فعّال."}
              </h2>
              <p className="home-copy-muted home-section-lead mx-auto mt-0 mb-8 max-w-[68ch] px-1 sm:px-2">
                {en
                  ? "Most organizations still treat compliance as a checklist, not an operational capability."
                  : "ما زالت المؤسسات تعامل الامتثال كقائمة مهام، وليس كقدرة تشغيلية."}
              </p>
            </header>

            <ScrollStagger className="home-problem-grid home-intro-to-grid">
              {(en
                ? [
                    {
                      Icon: Scale,
                      text: "Legal teams lack technical execution power",
                    },
                    {
                      Icon: Cpu,
                      text: "IT and security lack regulatory context",
                    },
                    {
                      Icon: ShieldAlert,
                      text: "Controls are poorly enforced or undocumented",
                    },
                    {
                      Icon: ClipboardList,
                      text: "Audit preparation is manual and stressful",
                    },
                  ]
                : [
                    {
                      Icon: Scale,
                      text: "الفرق القانونية تفتقر لقوة التنفيذ التقني",
                    },
                    {
                      Icon: Cpu,
                      text: "IT والأمن يفتقران للسياق التنظيمي",
                    },
                    {
                      Icon: ShieldAlert,
                      text: "الضوابط ضعيفة التنفيذ أو غير موثقة",
                    },
                    {
                      Icon: ClipboardList,
                      text: "الاستعداد للتدقيق يدوي ومُرهق",
                    },
                  ]
              ).map((row, i) => (
                <ScrollStaggerItem key={row.text}>
                  <div className="home-problem-card motion-card-hover">
                    <div className="home-problem-card-head">
                      <span className="home-problem-card-idx">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="home-strip-icon motion-icon-pulse" aria-hidden>
                        <row.Icon className="h-5 w-5 text-[var(--teal)]" strokeWidth={1.75} />
                      </div>
                    </div>
                    <p className="home-problem-card-text">{row.text}</p>
                  </div>
                </ScrollStaggerItem>
              ))}
            </ScrollStagger>

            <div className="home-problem-result-plain home-intro-to-grid text-start">
              <p className="m-0 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">
                  {en ? "The result? " : "النتيجة؟ "}
                </span>
                {en
                  ? "Blind spots, increased risk exposure, and constant audit pressure."
                  : "نقاط عمياء، تعرّض أكبر للمخاطر، وضغط تدقيق مستمر."}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </MotionSection>

      {/* ──────────── SOLUTION ──────────── */}
      <MotionSection className="home-strip-standard home-strip-solution" separator>
        <div className="container-privanta">
          <header className="home-section-head mx-auto max-w-3xl text-center">
            <h2 className="heading mb-3 text-[var(--text-primary)]">
              {en
                ? "A Continuous Compliance Infrastructure"
                : "بنية تحتية للامتثال المستمر"}
            </h2>
            <p className="home-copy-muted home-section-lead mx-auto mt-0 mb-7 max-w-[58ch]">
              {en
                ? "Privanta builds structured environments where compliance is embedded into daily operations, not handled as a periodic task."
                : "نبني بيئات منظّمة يُدمج فيها الامتثال في العمل اليومي، لا كمهمة دورية."}
            </p>
          </header>

          <ScrollStagger className="home-intro-to-grid mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6">
            {(en
              ? [
                  {
                    i: Settings,
                    t: "Enforceable Control Frameworks",
                    d: "Every policy becomes an auditable, enforceable system",
                  },
                  {
                    i: Radio,
                    t: "Real-time Monitoring",
                    d: "Continuous visibility into your compliance posture",
                  },
                  {
                    i: BarChart3,
                    t: "Measurable Governance",
                    d: "Quantified outcomes, not abstract statements",
                  },
                  {
                    i: Link2,
                    t: "Integrated Execution",
                    d: "Legal, cybersecurity, and operations, unified",
                  },
                ]
              : [
                  {
                    i: Settings,
                    t: "أطر تحكم قابلة للتنفيذ",
                    d: "كل سياسة تصبح نظامًا قابلاً للتدقيق والتنفيذ",
                  },
                  {
                    i: Radio,
                    t: "مراقبة لحظية",
                    d: "رؤية مستمرة لوضع الامتثال",
                  },
                  {
                    i: BarChart3,
                    t: "حوكمة قابلة للقياس",
                    d: "نتائج كمّية لا عبارات مجردة",
                  },
                  {
                    i: Link2,
                    t: "تنفيذ متكامل",
                    d: "قانوني + أمن سيبراني + عمليات، في نموذج واحد",
                  },
                ]
            ).map((item) => (
              <ScrollStaggerItem key={item.t}>
                <div className="home-solution-card motion-card-hover">
                  <div className="home-strip-icon motion-icon-pulse">
                    <item.i className="h-5 w-5 text-[var(--teal)]" strokeWidth={1.75} />
                  </div>
                  <h3 className="home-card-heading text-[var(--text-primary)]">{item.t}</h3>
                  <p className="home-copy min-h-0 flex-1">{item.d}</p>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </div>
      </MotionSection>

      {/* ──────────── IMPACT / OUTCOMES ──────────── */}
      <MotionSection className="home-strip-standard home-strip-impact" separator>
        <div className="container-privanta">
          <header className="home-section-head mx-auto mb-7 max-w-3xl text-center">
            <h2 className="heading mb-3 text-[var(--text-primary)]">
              {en ? "Measurable Outcomes" : "نتائج قابلة للقياس"}
            </h2>
            <p className="home-copy-muted home-section-lead mx-auto mt-0 max-w-[58ch]">
              {en
                ? "Operational impact you can track continuously across audits, controls, and execution."
                : "أثر تشغيلي يمكن تتبعه باستمرار عبر التدقيق والضوابط والتنفيذ."}
            </p>
          </header>

          <HomeImpactMetricsGrid>
            {(en
              ? [
                  { end: 40, suffix: "%", label: "Faster Audit Readiness", fill: 40 },
                  { end: 60, suffix: "%", label: "Improved Compliance Visibility", fill: 60 },
                  { end: 50, suffix: "%", label: "Lower Operational Overhead", fill: 50 },
                  { text: "∞", label: "Continuous vs Periodic Monitoring", fill: 100 },
                ]
              : [
                  { end: 40, suffix: "%", label: "جاهزية تدقيق أسرع", fill: 40 },
                  { end: 60, suffix: "%", label: "رؤية امتثال أفضل", fill: 60 },
                  { end: 50, suffix: "%", label: "عبء تشغيلي أقل", fill: 50 },
                  { text: "∞", label: "مراقبة مستمرة مقابل دورية", fill: 100 },
                ]
            ).map((item: HomeImpactMetricItem, index) => (
              <HomeImpactMetricCard key={item.label} {...item} countDelay={index * 0.1} />
            ))}
          </HomeImpactMetricsGrid>
        </div>
      </MotionSection>

      {/* ──────────── HOW IT WORKS (structured execution + vertical stepper) ──────────── */}
      <MotionSection className="section-surface home-strip-standard home-strip-how-it-works" separator>
        <div className="container-privanta">
          <div className="home-how-it-grid">
            <div className="home-how-it-aside text-start">
              <span className="home-how-it-question-label mb-3 inline-block">
                {en ? "How does it work?" : "كيف يعمل؟"}
              </span>
              <h2 className="heading mb-3 text-[var(--text-primary)]">
                {en
                  ? "A Structured Execution Model"
                  : "نموذج تنفيذ منظم"}
              </h2>
              <p className="home-copy-muted max-w-[42ch] text-base leading-relaxed">
                {en
                  ? "Designed for real environments, not theoretical frameworks."
                  : "مصمم للبيئات الواقعية، لا للأطر النظرية."}
              </p>
            </div>

            <div className="home-how-stepper">
              <div className="home-how-stepper-line" aria-hidden />
              <ol className="relative z-[1] m-0 list-none space-y-6 p-0">
                {(en
                  ? [
                      {
                        n: "01",
                        title: "Assess",
                        body: "Identify risks, gaps, and control deficiencies",
                      },
                      {
                        n: "02",
                        title: "Design",
                        body: "Build governance frameworks and control architectures",
                      },
                      {
                        n: "03",
                        title: "Implement",
                        body: "Deploy controls across systems and operations",
                      },
                      {
                        n: "04",
                        title: "Monitor",
                        body: "Continuously validate and measure effectiveness",
                      },
                      {
                        n: "05",
                        title: "Improve",
                        body: "Optimize and evolve your compliance system over time",
                      },
                    ]
                  : [
                      { n: "01", title: "تقييم", body: "تحديد المخاطر والفجوات ونقص الضوابط" },
                      { n: "02", title: "تصميم", body: "بناء أطر الحوكمة ومعماريات الرقابة" },
                      { n: "03", title: "تنفيذ", body: "نشر الضوابط عبر الأنظمة والعمليات" },
                      { n: "04", title: "مراقبة", body: "التحقق المستمر وقياس الفعالية" },
                      { n: "05", title: "تحسين", body: "تحسين وتطوير نظام الامتثال مع الزمن" },
                    ]
                ).map((step) => (
                  <li key={step.n} className="home-how-step">
                    <span className="home-how-step-index" aria-hidden="true">
                      {step.n}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="home-how-step-title text-[var(--text-primary)]">
                        {step.title}
                      </h3>
                      <p className="home-copy-muted mt-1 text-sm leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ──────────── PRODUCTS (rich preview cards) ──────────── */}
      <MotionSection className="home-strip-standard home-strip-products" separator>
        <div className="container-privanta">
          <div className="home-products-head mb-7 max-w-4xl text-start">
            <h2 className="heading mb-3 text-[#F8FAFC]">
              {en ? "Our Products" : "منتجاتنا"}
            </h2>
            <p className="home-copy-muted max-w-[56ch] text-base leading-relaxed">
              {en
                ? "Technology That Powers Continuous Compliance"
                : "تقنية تمكّن الامتثال المستمر"}
            </p>
          </div>

          <ScrollStagger className="home-intro-to-grid mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
            <ScrollStaggerItem>
            <Link
              to="/products/platform"
              className="group home-product-rich motion-card-hover flex flex-col rounded-2xl border border-white/10 bg-[rgba(7,14,28,0.85)] p-6 text-start shadow-[0_6px_22px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-all hover:border-[rgba(47,191,204,0.35)]"
            >
              <div className="home-strip-icon mb-4">
                <Monitor className="h-5 w-5 text-[var(--teal)]" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Privanta Platform</h3>
              <p className="home-product-rich-sub mt-0.5">
                {en ? "GRC OPERATING SYSTEM" : "نظام تشغيل GRC"}
              </p>
              <p className="home-copy mt-3 text-sm leading-relaxed">
                {en
                  ? "Technology That Powers Continuous Governance"
                  : "تقنية تمكّن الحوكمة المستمرة"}
              </p>
              <ul className="home-product-rich-features mt-4">
                {(en
                  ? [
                      "Asset discovery (cloud, SaaS, infra)",
                      "AI data classification (sensitivity-based)",
                      "Real-time compliance dashboard",
                      "Automated policy generation",
                    ]
                  : [
                      "اكتشاف الأصول (سحابة، SaaS، بنية تحتية)",
                      "تصنيف بيانات بالذكاء الاصطناعي (حسب الحساسية)",
                      "لوحة امتثال لحظية",
                      "توليد سياسات آلي",
                    ]
                ).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="home-product-rich-tagline mt-5 text-sm italic text-[var(--text-muted)]">
                {en
                  ? "Full visibility. Stronger controls. Faster audits."
                  : "رؤية كاملة. ضوابط أقوى. تدقيق أسرع."}
              </p>
              <span className="home-product-rich-cta mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--teal)] group-hover:text-white">
                {en ? "Request Demo" : "اطلب عرضًا"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:scale-x-[-1] rtl:group-hover:-translate-x-0.5" />
              </span>
            </Link>
            </ScrollStaggerItem>

            <ScrollStaggerItem>
            <Link
              to="/products/maat"
              className="group home-product-rich motion-card-hover flex flex-col rounded-2xl border border-white/10 bg-[rgba(7,14,28,0.85)] p-6 text-start shadow-[0_6px_22px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-all hover:border-[rgba(124,92,255,0.35)]"
            >
              <div className="home-strip-icon home-strip-icon--purple mb-4">
                <Bot className="h-5 w-5 text-[var(--purple-soft)]" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">MAAT AI</h3>
              <p className="home-product-rich-sub mt-0.5 text-[rgba(183,171,255,0.95)]">
                {en ? "AI Legal Assistant" : "المساعد القانوني الذكي"}
              </p>
              <p className="home-copy mt-3 text-sm leading-relaxed">
                {en
                  ? "The first specialized Arab legal AI platform, designed to help legal professionals transform information into intelligence, research into insight, and legal knowledge into confident decisions."
                  : "أول منصة ذكاء اصطناعي قانوني عربي متخصصة، صُممت لتمكين المحامين والقضاة وأعضاء النيابة والباحثين القانونيين والإدارات القانونية من تحويل المعلومات إلى معرفة قانونية، والبحث إلى رؤى عملية، والخبرة القانونية إلى قرارات أكثر دقة وثقة."}
              </p>
              <ul className="home-product-rich-features mt-4">
                {(en
                  ? [
                      "Legal research across laws, rulings, and precedents",
                      "Case analysis and intelligent document review",
                      "Contract drafting, review, and risk assessment",
                      "Source-backed legal reasoning and trusted legal intelligence",
                    ]
                  : [
                      "بحث قانوني متقدم عبر القوانين واللوائح والأحكام والسوابق القضائية",
                      "تحليل القضايا ومراجعة المستندات والملفات القانونية بذكاء",
                      "صياغة العقود والمذكرات القانونية وتحليل المخاطر القانونية",
                      "استدلال قانوني ذكي مدعوم بمصادر موثقة ومرجعيات قانونية معتمدة",
                    ]
                ).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="home-product-rich-tagline mt-5 text-sm italic text-[var(--text-muted)]">
                {en
                  ? "From the timeless principles of Maat to the future of legal intelligence."
                  : "من المبادئ الخالدة لماعت، رمز الحق والعدل والحقيقة في مصر القديمة، إلى ذكاء قانوني اصطناعي يُسهم في رسم مستقبل الممارسة القانونية."}
              </p>
              <span className="home-product-rich-cta mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--purple-soft)] group-hover:text-white">
                {en ? "Request Demo" : "اطلب عرضًا"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:scale-x-[-1] rtl:group-hover:-translate-x-0.5" />
              </span>
            </Link>
            </ScrollStaggerItem>
          </ScrollStagger>
        </div>
      </MotionSection>

      {/* ──────────── SOLUTIONS (two-column: CTA + icon rows) ──────────── */}
      <MotionSection className="home-strip-standard home-strip-solutions" separator>
        <div className="container-privanta">
          <div className="home-solutions-split">
            <div className="home-solutions-aside text-start">
              <h2 className="heading mb-3 text-[var(--text-primary)]">
                {en
                  ? "We Don't Audit Your Compliance. We Build It."
                  : "لا ندقّق امتثالك. نحن نبنيه."}
              </h2>
              <p className="home-copy-muted mb-6 max-w-[40ch] text-sm leading-relaxed">
                {en
                  ? "Not sure where to start? We help identify the right entry point."
                  : "لست متأكدًا من أين تبدأ؟ نساعدك على تحديد نقطة الدخول المناسبة."}
              </p>
              <Link
                to="/contact#book-demo"
                className="btn-demo btn-demo-motion inline-flex items-center gap-2 px-5 py-2.5"
              >
                {en ? "Book a Consultation" : "احجز استشارة"}
                <ArrowRight className="h-4 w-4 rtl:scale-x-[-1]" />
              </Link>
            </div>

            <div className="home-solutions-rows flex flex-col gap-3">
              {(en
                ? [
                    {
                      Icon: Shield,
                      title: "Compliance Engineering",
                      desc: "Turn regulations into enforceable systems",
                    },
                    {
                      Icon: Lock,
                      title: "Risk & Security",
                      desc: "Identify and reduce exposure",
                    },
                    {
                      Icon: FileCheck,
                      title: "Governance & Privacy",
                      desc: "Scalable data protection",
                    },
                    {
                      Icon: Briefcase,
                      title: "Managed Compliance",
                      desc: "Compliance as a function",
                    },
                    {
                      Icon: Bot,
                      title: "AI Governance",
                      desc: "Safe AI adoption",
                    },
                  ]
                : [
                    { Icon: Shield, title: "هندسة الامتثال", desc: "تحويل الأنظمة إلى ضوابط قابلة للتنفيذ" },
                    { Icon: Lock, title: "المخاطر والأمن", desc: "تحديد التعرضات وتقليلها" },
                    { Icon: FileCheck, title: "الحوكمة والخصوصية", desc: "حماية بيانات قابلة للتوسع" },
                    { Icon: Briefcase, title: "الامتثال المُدار", desc: "الامتثال كوظيفة تشغيلية" },
                    { Icon: Bot, title: "حوكمة الذكاء الاصطناعي", desc: "اعتماد آمن للذكاء الاصطناعي" },
                  ]
              ).map((row) => (
                <div
                  key={row.title}
                  className="home-solution-strip-row flex items-start gap-5 rounded-xl border border-white/[0.08] bg-[rgba(7,14,28,0.55)] p-3.5 sm:gap-6"
                >
                  <div className="home-strip-icon shrink-0">
                    <row.Icon className="h-5 w-5 text-[var(--teal)]" strokeWidth={1.75} aria-hidden />
                  </div>
                  <p className="min-w-0 pt-0.5 text-sm leading-snug text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">{row.title}</span>
                    <span className="text-[var(--text-muted)]"> · </span>
                    <span>{row.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 text-center">
            <Link to="/solutions" className="btn-outline inline-flex">
              {en ? "View All Solutions" : "عرض جميع الحلول"}
            </Link>
          </div>
        </div>
      </MotionSection>

      {/* ──────────── INDUSTRIES ──────────── */}
      <MotionSection className="home-strip-industries" separator>
        <div className="container-privanta">
          <header className="home-section-head mx-auto mb-7 max-w-3xl text-center">
            <h2 className="heading mb-3 text-[var(--text-primary)]">
              {en
                ? "Built for High-Compliance Environments"
                : "مصمم لبيئات امتثال عالية"}
            </h2>
            <p className="home-copy-muted home-section-lead mx-auto mt-0 max-w-[58ch]">
              {en
                ? "Trusted across sectors where regulatory pressure is highest."
                : "موثوق به في القطاعات التي يشتد فيها الضغط التنظيمي."}
            </p>
          </header>

          <ScrollStagger className="home-intro-to-grid mx-auto grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-4 lg:grid-cols-6 lg:gap-x-5">
            {(en
              ? [
                  { icon: Building2, label: "Financial Services" },
                  { icon: HeartPulse, label: "Healthcare" },
                  { icon: Cpu, label: "Technology" },
                  { icon: ShoppingBag, label: "E-commerce" },
                  { icon: Home, label: "Real Estate" },
                  { icon: Scale, label: "Legal Services" },
                ]
              : [
                  { icon: Building2, label: "الخدمات المالية" },
                  { icon: HeartPulse, label: "الرعاية الصحية" },
                  { icon: Cpu, label: "التقنية" },
                  { icon: ShoppingBag, label: "التجارة الإلكترونية" },
                  { icon: Home, label: "العقارات" },
                  { icon: Scale, label: "الخدمات القانونية" },
                ]
            ).map((it) => (
              <ScrollStaggerItem key={it.label}>
                <div className="home-industry-tile motion-card-hover">
                  <div className="home-strip-icon motion-icon-pulse">
                    <it.icon className="h-5 w-5 text-[var(--teal)]" strokeWidth={1.75} />
                  </div>
                  <span className="home-industry-label">{it.label}</span>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </div>
      </MotionSection>

      {/* ──────────── WHY PRIVANTA? ──────────── */}
      <MotionSection className="section-surface home-strip-standard home-strip-why" separator>
        <div className="container-privanta">
          <header className="home-section-head mx-auto max-w-3xl text-center">
            <h2 className="heading mb-3 text-[var(--text-primary)]">
              {en ? "Why Privanta?" : "لماذا Privanta؟"}
            </h2>
            <p className="home-copy-muted home-section-lead mx-auto mt-0 mb-7 max-w-[52ch]">
              {en
                ? "Not just compliance: operational control."
                : "ليس مجرد امتثال: تحكم تشغيلي."}
            </p>
          </header>

          <ScrollStagger className="home-intro-to-grid mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6">
            {(en
              ? [
                  [
                    "01",
                    "Control-Driven Execution",
                    "Enforceable systems, not policy documents that sit on a shelf.",
                  ],
                  [
                    "02",
                    "Integrated Legal + Cybersecurity",
                    "The only firm combining legal depth with cybersecurity execution under one model.",
                  ],
                  [
                    "03",
                    "Measurable Outcomes",
                    "We define success metrics upfront and track them, so you always know what you're getting.",
                  ],
                  [
                    "04",
                    "Continuous Assurance",
                    "Move from annual audits to real-time monitoring, every single day.",
                  ],
                ]
              : [
                  [
                    "01",
                    "تنفيذ قائم على التحكم",
                    "أنظمة قابلة للتنفيذ لا وثائق رفوف.",
                  ],
                  [
                    "02",
                    "تكامل قانوني + أمن سيبراني",
                    "عمق قانوني وتنفيذ أمني في نموذج واحد.",
                  ],
                  ["03", "نتائج قابلة للقياس", "مؤشرات نجاح واضحة منذ البداية."],
                  ["04", "ضمان مستمر", "من تدقيق سنوي إلى مراقبة يومية."],
                ]
            ).map(([id, title, body]) => (
              <ScrollStaggerItem key={id}>
                <div className="home-solution-card home-solution-card--gold motion-card-hover">
                  <div className="font-mono text-xs text-[var(--gold)]">{id}</div>
                  <h3 className="home-card-heading text-[var(--text-primary)]">{title}</h3>
                  <p className="home-copy min-h-0 flex-1">{body}</p>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </div>
      </MotionSection>

      {/* ──────────── FRAMEWORKS MARQUEE ──────────── */}
      <MotionSection className="compliance-marquee-section home-strip-marquee" separator>
        <div className="compliance-marquee-grid" aria-hidden />
        <div className="container-privanta relative">
          <h2 className="type-h2-marquee font-heading text-center text-[var(--text-primary)]">
            {en ? "All the frameworks you need" : "كل الأطر التي تحتاجها"}
          </h2>
          <div className="compliance-marquee-line mx-auto mt-3 mb-7" />
          <div
            className="compliance-marquee-mask mt-5"
            aria-label={en ? "Compliance frameworks" : "أطر الامتثال"}
          >
            <div className="compliance-marquee-track">
              {marqueeLogos.map((logo, idx) => (
                <div
                  key={`${logo.name}-${idx}`}
                  className="compliance-logo-item"
                  aria-hidden={idx >= complianceLogos.length}
                >
                    <img
                      src={logo.src}
                      alt={idx < complianceLogos.length ? logo.name : ""}
                      className={getComplianceLogoClassName(logo.size)}
                      loading="eager"
                      decoding="async"
                    />
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ──────────── INSIGHTS ──────────── */}
      <MotionSection className="home-strip-standard home-strip-insights" separator>
        <div className="container-privanta">
          <header className="home-section-head mx-auto max-w-3xl text-center">
            <h2 className="heading mb-3 text-[var(--text-primary)]">
              {en ? "Insights" : "رؤى"}
            </h2>
            <p className="home-copy-muted home-section-lead mx-auto mt-0 mb-7 max-w-[58ch]">
              {en
                ? "Regulatory intelligence, security insights, and real-world compliance stories."
                : "ذكاء تنظيمي، رؤى أمنية، وقصص امتثال واقعية."}
            </p>
          </header>

          <ScrollStagger className="home-intro-to-grid mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {featuredPosts.map((post) => (
              <ScrollStaggerItem key={post.id}>
              <Link
                to="/resources"
                className="group home-insight-card motion-card-hover"
              >
                <div className="mb-3 flex w-full items-center gap-4">
                  <div className="home-strip-icon shrink-0">
                    <post.CategoryIcon className="h-5 w-5 text-[var(--teal)]" strokeWidth={1.75} />
                  </div>
                  <span className="min-w-0 flex-1 text-sm font-medium tracking-wide text-[var(--teal)]">
                    {post.category}
                  </span>
                  <span className="ms-auto shrink-0 text-sm text-[var(--text-muted)]">
                    {en ? post.date : post.dateAr}
                  </span>
                </div>
                <h3 className="mb-2 text-[var(--text-primary)] transition-colors group-hover:text-[var(--teal)] line-clamp-2">
                  {en ? post.title : post.titleAr}
                </h3>
                <p className="home-copy min-h-0 flex-1 line-clamp-3">
                  {en ? post.excerpt : post.excerptAr}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--gold)] transition-colors group-hover:text-[var(--teal)]">
                  {en ? "Read More" : "اقرأ المزيد"}
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </Link>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
          <div className="mt-5 text-center">
            <Link to="/resources" className="btn-outline">
              {en ? "View All Articles" : "عرض جميع المقالات"}
            </Link>
          </div>
        </div>
      </MotionSection>

      {/* ──────────── FINAL CTA (with photo background) ──────────── */}
      <MotionSection className="home-strip-standard home-cta-cinematic relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cta-bg.webp')" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,8,16,0.72) 0%, rgba(5,8,16,0.38) 45%, rgba(5,8,16,0.72) 85%, #050C12 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 50%, transparent 40%, rgba(5,8,16,0.55) 100%)",
          }}
        />

        <div className="container-privanta relative z-10 text-center">
          <div className="mx-auto mb-4 h-px w-20 bg-gradient-to-r from-transparent via-[var(--teal)] to-transparent" />

          <h2
            className="type-h2-final-cta font-heading mx-auto mb-3 max-w-3xl font-bold leading-tight text-white"
            style={{
              textShadow: "0 2px 24px rgba(0,0,0,0.6)",
            }}
          >
            {en
              ? "Ready to Move Beyond Compliance Theater?"
              : "هل أنت مستعد لتجاوز مسرح الامتثال؟"}
          </h2>

          <p
            className="mx-auto mb-8 max-w-[52ch] leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "clamp(0.9rem,1.5vw,1.05rem)",
            }}
          >
            {en
              ? "Build a system that keeps you compliant, secure, and audit-ready every day."
              : "ابنِ نظامًا يبقيك ملتزمًا وآمنًا وجاهزًا للتدقيق كل يوم."}
          </p>

          <p
            className="mx-auto mb-4 text-base font-bold leading-snug text-white/95"
            style={{ textShadow: "0 1px 18px rgba(0,0,0,0.55)" }}
          >
            {en ? "No commitment · Clear next steps" : "بدون التزام · خطوات واضحة"}
          </p>

          <div className="mb-4 flex flex-wrap justify-center gap-3">
            <Link to="/contact#book-demo" className="btn-demo btn-demo-motion">
              {en ? "Book Your Demo" : "احجز العرض"}
            </Link>
            <Link
              to="/contact#control-assessment"
              className="btn-outline-motion rounded-lg border px-6 py-2.5 text-sm font-semibold transition-[color,border-color,box-shadow] duration-300 ease-out"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {en ? "Request Control Assessment" : "اطلب تقييم الرقابة"}
            </Link>
          </div>

          <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[var(--teal)] to-transparent" />
        </div>
      </MotionSection>
    </div>
  );
};

export default Index;
