import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/useI18n";
import { Bot, Building2, RefreshCcw, Settings, Shield } from "lucide-react";

export default function SolutionsPage() {
  const { locale } = useI18n();
  const en = locale === "en";

  const solutions = [
    {
      num: "01",
      tag: en ? "CORE" : "الأساس",
      icon: Settings,
      title: en ? "Compliance & Control Engineering" : "هندسة الامتثال والرقابة",
      intro: en
        ? "We transform regulatory requirements into living control systems that execute continuously, produce traceable evidence, and remain permanently audit-ready."
        : "نحوّل المتطلبات التنظيمية إلى أنظمة رقابة حية تعمل باستمرار، وتُنتج أدلة قابلة للتتبع، وتبقى جاهزة للتدقيق في كل لحظة.",
      philosophy: en
        ? "Most organizations treat compliance as documentation. We treat it as an operating system."
        : "معظم المؤسسات تتعامل مع الامتثال باعتباره توثيقاً. نحن نتعامل معه باعتباره نظام تشغيل.",
      listLabel: en ? "What we build:" : "ما نبنيه:",
      items: en
        ? [
            "Control framework architecture mapped to ISO 27001, NIST CSF, SAMA, NCA ECC, GDPR, PCI DSS",
            "Policy-to-control enforcement mapping (closing the gap between \"written\" and \"executed\")",
            "Automated evidence generation pipelines for audit readiness",
            "Continuous control testing and validation (not periodic reviews)",
            "End-to-end traceability from regulation to policy to control to evidence",
          ]
        : [
            "معمارية أطر الرقابة مُصمَّمة وفق ISO 27001 وNIST CSF وSAMA وNCA ECC وGDPR وPCI DSS",
            "ربط السياسات بضوابط التنفيذ الفعلي وسد الفجوة بين \"المكتوب\" و\"المُطبَّق\"",
            "خطوط إنتاج آلية للأدلة تضمن الجاهزية الدائمة للتدقيق",
            "اختبار وتحقق مستمر من الضوابط، لا مراجعات دورية متقطعة",
            "تتبع شامل من التشريع إلى السياسة إلى الضابط إلى الدليل",
          ],
    },
    {
      num: "02",
      tag: en ? "PROTECTION" : "الحماية",
      icon: Shield,
      title: en ? "Risk & Security Engineering" : "هندسة المخاطر والأمن",
      intro: en
        ? "You cannot reduce risk you cannot clearly see. We build structured visibility across your entire digital and operational environment, then systematically reduce exposure."
        : "لا يمكنك تقليل مخاطر لا تستطيع رؤيتها بوضوح. نبني رؤية منهجية وشاملة عبر بيئتك الرقمية والتشغيلية بالكامل، ثم نعمل على تقليص التعرض بصورة منظمة.",
      philosophy: en
        ? "Security is not a checklist. It is a continuously evolving risk system."
        : "الأمن ليس قائمة مراجعة. هو نظام مخاطر يتطور باستمرار.",
      listLabel: en ? "What we deliver:" : "ما نقدمه:",
      items: en
        ? [
            "Enterprise risk quantification tied directly to business impact",
            "Threat modeling based on real attack paths (not theoretical models)",
            "Full attack surface mapping across infrastructure, users, and vendors",
            "Security hardening aligned with prioritized risk reduction",
            "Incident response readiness with defined roles, escalation paths, and tested procedures",
          ]
        : [
            "قياس كمي للمخاطر المؤسسية مرتبط مباشرة بالأثر على الأعمال",
            "نمذجة التهديدات بناءً على مسارات هجوم واقعية، لا نماذج نظرية",
            "رسم خرائط شاملة لسطح الهجوم عبر البنية التحتية والمستخدمين والموردين",
            "تعزيز الأمن وفق أولويات تقليص المخاطر الفعلية",
            "جاهزية الاستجابة للحوادث بأدوار محددة، ومسارات تصعيد واضحة، وإجراءات مختبرة",
          ],
    },
    {
      num: "03",
      tag: en ? "GOVERNANCE" : "الحوكمة",
      icon: Building2,
      title: en ? "Governance & Privacy Engineering" : "هندسة الحوكمة والخصوصية",
      intro: en
        ? "Governance fails when it becomes documentation instead of decision structure. We design governance systems that define who decides, what they control, and how accountability is enforced, and we embed privacy into the architecture of the organization, not as an afterthought."
        : "الحوكمة تفشل حين تتحول إلى توثيق بدلاً من أن تكون هيكل قرار. نصمم أنظمة حوكمة تُحدد بوضوح: من يقرر، وما الذي يتحكم فيه، وكيف تُطبَّق المساءلة. ونُدمج الخصوصية في بنية المؤسسة، لا كإضافة لاحقة.",
      philosophy: "",
      listLabel: en ? "What we implement:" : "ما نُنفّذه:",
      items: en
        ? [
            "Scalable governance frameworks aligned with enterprise growth",
            "PDPL (Egypt, UAE, KSA) + GDPR compliance operationalization",
            "Data classification, mapping, and lifecycle enforcement",
            "Privacy-by-design integration into systems and workflows",
            "DPIA, ROPA, and consent governance structures",
          ]
        : [
            "أطر حوكمة قابلة للتوسع مع نمو المؤسسة",
            "تفعيل الامتثال لـ PDPL في مصر والإمارات والسعودية، إلى جانب متطلبات GDPR",
            "تصنيف البيانات ورسم خرائطها وتطبيق دورة حياتها",
            "دمج الخصوصية منذ مرحلة التصميم في الأنظمة والعمليات",
            "هياكل DPIA وROPA وإدارة الموافقات",
          ],
    },
    {
      num: "04",
      tag: en ? "OPERATIONS" : "العمليات",
      icon: RefreshCcw,
      title: en ? "Managed Compliance" : "الامتثال المُدار",
      intro: en
        ? "Compliance is not a project. It is an operational function that must remain active every day. Without continuous management, compliance degrades silently until audit or incident exposure reveals the gap."
        : "الامتثال ليس مشروعاً له نهاية. هو وظيفة تشغيلية يجب أن تبقى نشطة كل يوم. دون إدارة مستمرة، يتراجع الامتثال في صمت حتى يكشفه تدقيق أو حادثة.",
      philosophy: "",
      listLabel: en ? "What we operate:" : "ما ندير:",
      items: en
        ? [
            "Full compliance lifecycle management (ISO, NIST, SOC 2, etc.)",
            "Continuous regulatory monitoring and adaptation",
            "Automated evidence collection and control verification",
            "Periodic internal control testing and reporting",
            "Executive and board-level compliance visibility dashboards",
          ]
        : [
            "دورة حياة الامتثال الكاملة وفق ISO وNIST وSOC 2 وغيرها",
            "رصد مستمر للتغييرات التنظيمية والتكيّف معها",
            "جمع آلي للأدلة والتحقق من الضوابط",
            "اختبار دوري داخلي للضوابط وإعداد التقارير",
            "لوحات بيانات لرؤية الامتثال على مستوى الإدارة التنفيذية ومجلس الإدارة",
          ],
    },
    {
      num: "05",
      tag: en ? "EMERGING" : "الناشئ",
      icon: Bot,
      title: en ? "AI Governance" : "حوكمة الذكاء الاصطناعي",
      intro: en
        ? "AI introduces a new category of risk: systems that act independently without consistent human oversight. We build governance layers that ensure AI systems are classified, controlled, auditable, and aligned with regulatory expectations before enforcement begins."
        : "الذكاء الاصطناعي يُدخل فئة جديدة من المخاطر: أنظمة تتصرف باستقلالية دون رقابة بشرية منتظمة. نبني طبقات حوكمة تضمن أن تكون أنظمة الذكاء الاصطناعي لديك مُصنَّفة ومُحكومة وقابلة للتدقيق ومتوافقة مع التوقعات التنظيمية قبل أن تبدأ إجراءات الإنفاذ.",
      philosophy: "",
      listLabel: en ? "What we establish:" : "ما نُرسيه:",
      items: en
        ? [
            "AI system risk classification frameworks (low, medium, and high risk)",
            "AI usage policies with enforceable boundaries",
            "Model lifecycle governance (training to deployment to monitoring)",
            "Accountability mapping for AI decision systems",
            "Alignment with EU AI Act, NIST AI RMF, and emerging regional regulations",
          ]
        : [
            "أطر تصنيف مخاطر أنظمة الذكاء الاصطناعي (منخفض، متوسط، مرتفع)",
            "سياسات استخدام الذكاء الاصطناعي بحدود قابلة للتطبيق",
            "حوكمة دورة حياة النماذج من التدريب إلى النشر إلى المراقبة",
            "رسم خرائط المساءلة لأنظمة القرار الآلي",
            "التوافق مع EU AI Act وNIST AI RMF والتشريعات الإقليمية الناشئة",
          ],
      riskTags: true,
    },
  ];

  return (
    <div className="relative">

      {/* ── Hero / Intro ── */}
      <section className="relative pt-8 pb-0 md:pt-12">
        {/* Centered text block */}
        <div className="container-privanta text-center">
          <h1
            className="display-hero mx-auto text-[var(--text-primary)]"
            style={{ maxWidth: "26ch" }}
          >
            {en
              ? "From Compliance Requirements to Operational Control Systems"
              : "من متطلبات الامتثال إلى أنظمة تشغيل حقيقية"}
          </h1>

          {/* teal divider centered */}
          <div
            className="mx-auto mt-6 h-px w-20"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--teal), transparent)",
            }}
          />

          <p
            className="mx-auto mt-6 leading-relaxed text-[var(--text-secondary)]"
            style={{
              fontSize: "clamp(0.95rem,1.5vw,1.07rem)",
              maxWidth: "62ch",
            }}
          >
            {en
              ? "We don't audit compliance. We engineer it into operational systems that run continuously, generate evidence automatically, and remain audit-ready by design, not preparation."
              : "نحن لا نراجع الامتثال. نهندسه داخل أنظمة تشغيلية تعمل باستمرار، تُنتج الأدلة تلقائياً، وتظل جاهزة للتدقيق بحكم تصميمها، لا بحكم التحضير لها."}
          </p>

          <p
            className="mx-auto mt-4 italic leading-relaxed"
            style={{
              color: "rgba(47,191,204,0.85)",
              fontSize: "clamp(0.88rem,1.3vw,0.97rem)",
              maxWidth: "56ch",
            }}
          >
            {en
              ? "Compliance should not depend on people remembering tasks. It should depend on systems that enforce, verify, and document themselves."
              : "الامتثال لا ينبغي أن يعتمد على ذاكرة الأفراد. ينبغي أن يعتمد على أنظمة تُطبّق وتتحقق وتوثّق بنفسها."}
          </p>

          <Link to="/contact#book-demo" className="btn-demo mt-7 inline-flex">
            {en ? "Book a Consultation" : "احجز استشارة"}
          </Link>
        </div>

        {/* Full-width SOC image directly below text */}
        <div
          className="relative mt-10 w-full"
          style={{ height: "clamp(240px, 36vw, 440px)" }}
        >
          <img
            src="/soc-center.png"
            alt="Security Operations Center"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          {/* top fade */}
          <div
            className="absolute inset-x-0 top-0 pointer-events-none"
            style={{
              height: "30%",
              background: "linear-gradient(to bottom, #070e1c 0%, transparent 100%)",
            }}
          />
          {/* bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none"
            style={{
              height: "35%",
              background: "linear-gradient(to top, #070e1c 0%, transparent 100%)",
            }}
          />
          {/* teal glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(47,191,204,0.07) 0%, transparent 70%)",
            }}
          />
        </div>
      </section>

      {/* ── Solution Cards ── */}
      <section className="relative section-medium">
        <div className="container-privanta space-y-4">
          {solutions.map((s, idx) => (
            <article
              key={s.num}
              className={`rounded-2xl border border-white/[0.08] p-6 backdrop-blur-sm ${
                idx % 2 ? "bg-[rgba(13,26,38,0.55)]" : "bg-[rgba(7,14,28,0.72)]"
              }`}
            >
              {/* Card header */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(47,191,204,0.08)]">
                  <s.icon className="h-5 w-5 text-[var(--teal)]" />
                </div>
                <span className="font-mono text-xs tracking-widest text-[var(--text-muted)]">
                  {s.num} {s.tag}
                </span>
              </div>

              <h2 className="heading text-[var(--text-primary)]">{s.title}</h2>

              {/* Intro paragraph */}
              <p className="mt-3 leading-relaxed text-[var(--text-secondary)]" style={{ fontSize: "clamp(0.9rem,1.4vw,1rem)", maxWidth: "80ch" }}>
                {s.intro}
              </p>

              {/* Philosophy line */}
              {s.philosophy && (
                <p
                  className="mt-3 italic"
                  style={{ color: "rgba(47,191,204,0.75)", fontSize: "clamp(0.85rem,1.2vw,0.94rem)" }}
                >
                  {s.philosophy}
                </p>
              )}

              {/* Items list */}
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                {s.listLabel}
              </p>
              <ul className="mt-3 space-y-2.5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--teal)" }}
                    />
                    <span className="solutions-item-text text-base leading-relaxed text-[var(--text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* AI Risk tags */}
              {s.riskTags && (
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-red-400/35 px-3 py-1 text-xs text-red-300">
                    {en ? "High Risk" : "مخاطر مرتفعة"}
                  </span>
                  <span className="rounded-full border border-[rgba(139,124,255,0.35)] px-3 py-1 text-xs text-[var(--purple-soft)]">
                    {en ? "Medium Risk" : "مخاطر متوسطة"}
                  </span>
                  <span className="rounded-full border border-emerald-400/35 px-3 py-1 text-xs text-emerald-300">
                    {en ? "Low Risk" : "مخاطر منخفضة"}
                  </span>
                </div>
              )}

            </article>
          ))}
        </div>
      </section>

      {/* ── Final CTA — with photo background ── */}
      <section className="relative overflow-hidden py-10 md:py-16">
        {/* background image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cta-bg.webp')" }}
        />
        {/* dark overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,8,16,0.82) 0%, rgba(5,8,16,0.65) 50%, rgba(5,8,16,0.88) 88%, #050C12 100%)",
          }}
        />
        {/* radial vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 100% at 50% 50%, transparent 30%, rgba(5,8,16,0.6) 100%)",
          }}
        />

        {/* content */}
        <div className="container-privanta relative z-10 text-center">
          <p className="section-label section-label-teal justify-center">
            {en ? "NOT SURE WHERE TO START?" : "هل لا تعرف من أين تبدأ؟"}
          </p>
          <h2
            className="heading mt-4 mx-auto text-white"
            style={{ maxWidth: "40ch", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            {en
              ? "We begin by identifying where your organization is most exposed, not where it is most compliant."
              : "نبدأ بتحديد مواطن التعرض الأعلى في مؤسستك، لا مواطن الامتثال الأفضل."}
          </h2>
          <p
            className="mt-4 mx-auto leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.70)",
              fontSize: "clamp(0.9rem,1.4vw,1rem)",
              maxWidth: "54ch",
            }}
          >
            {en
              ? "From there, we design the entry point that produces the highest risk reduction and fastest operational impact."
              : "من هناك، نُصمّم نقطة الدخول التي تُحقق أعلى تقليص للمخاطر وأسرع أثر تشغيلي."}
          </p>
          <Link to="/contact#book-demo" className="btn-demo mt-7 inline-flex">
            {en ? "Book a Consultation" : "احجز استشارة"}
          </Link>
        </div>
      </section>

    </div>
  );
}
