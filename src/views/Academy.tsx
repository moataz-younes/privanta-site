import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/useI18n";
import { BookOpen, Briefcase, ShieldCheck, Users } from "lucide-react";

const Academy = () => {
  const { locale } = useI18n();
  const en = locale === "en";
  const programs = [
    {
      id: 1,
      audience: en ? "All Staff" : "جميع الموظفين",
      level: en ? "Foundation" : "أساسي",
      icon: <ShieldCheck className="h-6 w-6" />,
      title: en ? "Cybersecurity Awareness" : "الوعي بالأمن السيبراني",
      description: en
        ? "Build a security aware culture across every department"
        : "ابنِ ثقافة أمنية أولى عبر كل قسم",
      modules: [
        en ? "Phishing and social engineering defense" : "الدفاع ضد التصيد والهندسة الاجتماعية",
        en ? "Password management and MFA" : "إدارة كلمات المرور والمصادقة متعددة العوامل",
        en ? "Data handling and classification" : "التعامل مع البيانات والتصنيف",
        en ? "Incident reporting procedures" : "إجراءات الإبلاغ عن الحوادث",
      ],
    },
    {
      id: 2,
      audience: en ? "Compliance & Legal" : "الامتثال والقانون",
      level: en ? "Intermediate" : "متوسط",
      icon: <BookOpen className="h-6 w-6" />,
      title: en ? "Compliance Foundations" : "أساسيات الامتثال",
      description: en
        ? "Equip your teams with technical literacy to execute, not just advise"
        : "جهز فرقك بالمعرفة التقنية للتنفيذ، وليس فقط الإرشاد",
      modules: [
        en ? "Framework deep dives (PDPL, ISO, SAMA)" : "غوص في الأطر (PDPL, ISO, SAMA)",
        en ? "Control design and implementation" : "تصميم وتنفيذ الضوابط",
        en ? "Risk assessment methodologies" : "منهجيات تقييم المخاطر",
        en ? "Audit preparation and evidence management" : "تحضير التدقيق وإدارة الأدلة",
      ],
    },
    {
      id: 3,
      audience: en ? "C Suite & Board" : "الإدارة التنفيذية ومجلس الإدارة",
      level: en ? "Executive" : "تنفيذي",
      icon: <Briefcase className="h-6 w-6" />,
      title: en ? "Executive Compliance Workshops" : "ورش عمل الامتثال التنفيذية",
      description: en
        ? "Strategic compliance literacy for leaders who set the tone"
        : "معرفة الامتثال الاستراتيجية للقادة الذين يحددون النغمة",
      modules: [
        en ? "Compliance as a competitive advantage" : "الامتثال كميزة تنافسية",
        en ? "Board level risk governance" : "حوكمة المخاطر على مستوى مجلس الإدارة",
        en ? "AI governance for executives" : "حوكمة الذكاء الاصطناعي للمديرين التنفيذيين",
        en ? "Regulatory liability and accountability" : "المسؤولية التنظيمية والمحاسبة",
      ],
    },
    {
      id: 4,
      audience: en ? "Custom" : "مخصص",
      level: en ? "Role Based" : "قائم على الأدوار",
      icon: <Users className="h-6 w-6" />,
      title: en ? "Role Based Training Programs" : "برامج التدريب القائمة على الأدوار",
      description: en
        ? "Customized training for specific functions: engineers, HR, finance, operations"
        : "تدريب مخصص لوظائف محددة: مهندسون، الموارد البشرية، المالية، العمليات",
      modules: [
        en ? "Tailored to role and seniority level" : "مخصص حسب الدور والمستوى الوظيفي",
        en ? "Industry specific regulatory context" : "سياق تنظيمي خاص بالصناعة",
        en ? "Practical exercises and assessments" : "تمارين وتقييمات عملية",
        en ? "Certification upon completion" : "شهادة عند الإكمال",
      ],
    },
  ];

  return (
    <div className="training-page">
      <section className="training-cover" aria-labelledby="training-hero-title">
        <img
          src="/training-cover.png"
          alt=""
          className="training-cover-image"
          fetchPriority="high"
        />
        <div className="training-cover-overlay" aria-hidden />
        <div className="training-cover-content">
          <div className="training-cover-copy">
            <h1 id="training-hero-title" className="training-cover-title">
              {en
                ? "Build Compliance Capability Your Team Actually Needs"
                : "ابنِ قدرة الامتثال التي يحتاجها فريقك فعلاً"}
            </h1>
            <p className="training-cover-subtitle">
              <span className="training-cover-subtitle-line">
                {en
                  ? "Enable organizations to sustain compliance maturity internally"
                  : "تمكين المنظمات من الحفاظ على نضج الامتثال داخلياً"}
              </span>
              <span className="training-cover-subtitle-line training-cover-subtitle-line--single">
                {en ? "not just during engagements" : "وليس فقط خلال المشاريع"}
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="divider-gradient mx-auto max-w-[1280px] px-6" />

      <section className="section-medium">
        <div className="container-privanta grid gap-5 md:gap-6 lg:grid-cols-2">
          {programs.map((program) => (
            <div key={program.id} className="enterprise-card group">
              <div className="mb-5 flex items-start gap-3.5">
                <div className="rounded-md border border-[rgba(47,191,204,0.24)] bg-[rgba(47,191,204,0.12)] p-2.5 text-[#C8F4F8] transition-colors duration-300 group-hover:bg-[rgba(47,191,204,0.18)]">
                  {program.icon}
                </div>
                <div>
                  <div className="flex gap-2 text-xs text-[#7F93A5]">
                    <span>{program.audience}</span>
                    <span>·</span>
                    <span className="font-medium text-[#78DDE5]">{program.level}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-semibold tracking-[-0.01em] text-[#EEF4F7]">
                    {program.title}
                  </h3>
                </div>
              </div>

              <p className="mb-5 text-sm leading-6 text-[#B0BECA]">{program.description}</p>

              <div className="mb-5">
                <h4 className="mb-3 text-sm font-semibold text-[#E3EAF0]">
                  {en ? "Modules & Topics:" : "الوحدات والمواضيع:"}
                </h4>
                <ul className="space-y-2.5">
                  {program.modules.map((module, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#43C6D2]" />
                      <span className="text-sm leading-6 text-[#AEC0CC]">{module}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </section>

      <section className="section-surface section-medium">
        <div className="container-privanta text-center">
          <h2 className="mb-3 text-[clamp(1.35rem,2.6vw,2rem)] font-semibold tracking-[-0.015em] text-[var(--text-primary)]">
            {en ? "Build Internal Compliance Capability" : "ابنِ قدرة الامتثال الداخلية"}
          </h2>
          <p className="mx-auto mb-6 max-w-[58ch] text-sm leading-6 text-[var(--text-secondary)] md:text-[0.95rem]">
            {en
              ? "Train your team to own compliance, not outsource it forever"
              : "درّب فريقك لامتلاك الامتثال، لا الاستعانة به خارجياً دائماً"}
          </p>

          <Link to="/contact#training" className="btn-demo inline-flex">
            {en ? "Schedule Training Consultation" : "جدول استشارة تدريب"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Academy;
