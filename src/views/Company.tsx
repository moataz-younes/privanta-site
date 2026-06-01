import { useI18n } from "@/i18n/useI18n";
import { Link } from "react-router-dom";
import { BarChart3, Link2, RefreshCcw, Settings } from "lucide-react";
import { useCompanyScrollAnimations } from "@/hooks/useCompanyScrollAnimations";

const Company = () => {
  const { locale } = useI18n();
  const en = locale === "en";
  useCompanyScrollAnimations();

  const values = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: en ? "Execution First" : "التنفيذ أولاً",
      description: en
        ? "Everything we design, we build and activate in practice. No documentation without implementation."
        : "كل ما نصممه، نبنيه ونفعّله عملياً.",
    },
    {
      icon: <Link2 className="h-6 w-6" />,
      title: en ? "Genuine Integration" : "تكامل حقيقي",
      description: en
        ? "Security, governance, and law unified within a single operating model."
        : "الأمن، الحوكمة، والقانون ضمن نموذج تشغيلي موحد.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: en ? "Measurable Outcomes" : "نتائج قابلة للقياس",
      description: en
        ? "We define success metrics from day one and build everything around them."
        : "نحدد مؤشرات النجاح منذ البداية ونبني وفقها.",
    },
    {
      icon: <RefreshCcw className="h-6 w-6" />,
      title: en ? "Continuity by Design" : "استمرارية بالتصميم",
      description: en
        ? "The systems we build are designed to operate continuously, transparently, and at scale."
        : "الأنظمة التي نبنيها مصممة لتعمل باستمرارية، بوضوح، وبقابلية للتوسع.",
    },
  ];

  return (
    <div className="company-page">
      <section className="hero" aria-labelledby="company-hero-title">
        <div className="hero__bg" aria-hidden />
        <div className="hero__overlay" aria-hidden />
        <div className="hero__inner">
          <div className="hero__text">
            <h1 id="company-hero-title" className="hero__title">
              {en ? "Privanta Company" : "شركة Privanta"}
            </h1>
            <p className="hero__subtitle">
              {en
                ? "Where Security, Compliance, and Intelligence Converge"
                : "حيث يلتقي الأمن، والامتثال، والذكاء في منظومة واحدة"}
            </p>
          </div>
          <div className="hero__logo-wrap">
            <img src="/images/company-hero-logo.png" alt="Privanta Logo" />
          </div>
        </div>
      </section>

      <div className="divider-gradient mx-auto max-w-[1280px] px-6" />

      <section className="section-medium company-about">
        <div className="container-privanta">
          <h2 className="heading mb-10 text-start text-[var(--text-primary)] will-animate">
            {en ? "Who We Are" : "من نحن"}
          </h2>
          <div className="company-about-grid">
            <p className="company-about-lead slide-left">
              {en
                ? "Privanta is a specialist firm in governance, risk management, and cybersecurity dedicated to building integrated compliance and control environments for modern enterprises."
                : "Privanta شركة متخصصة في الحوكمة، إدارة المخاطر، والأمن السيبراني تعمل على بناء بيئات امتثال وتحكم متكاملة للمؤسسات الحديثة."}
            </p>
            <div className="company-about-body-col slide-right">
              <p>
                {en
                  ? "Privanta was founded in Egypt with a clear ambition to redefine how compliance and governance are built across modern enterprises, by unifying cybersecurity, law, and governance under a single, measurable operating model."
                  : "انطلقت Privanta من مصر برؤية واضحة لإعادة تعريف كيفية بناء الامتثال والحوكمة في المؤسسات الحديثة، عبر دمج الأمن السيبراني، القانون، والحوكمة تحت نموذج موحد وقابل للقياس."}
              </p>
              <p>
                {en
                  ? "We believe that true compliance is not written into documents; it is engineered into systems and daily operations, becoming an intrinsic part of how an organisation functions, not a burden separate from it."
                  : "نؤمن أن الامتثال الحقيقي لا يُكتب في وثائق، بل يُهندس داخل الأنظمة والعمليات اليومية بحيث يصبح جزءاً من طريقة عمل المؤسسة، وليس عبئاً منفصلاً عنها."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gradient mx-auto max-w-[1280px] px-6" />

      <section className="section-medium company-mv-section">
        <div className="container-privanta grid gap-6 md:grid-cols-2 md:gap-8">
          <article className="company-mv-card will-animate">
            <p className="company-mv-card__label text-[var(--teal)]">{en ? "Mission" : "المهمة"}</p>
            <p className="company-mv-card__body">
              {en
                ? "To transform compliance from a periodic obligation into a continuous, intelligent, and measurable operational capability."
                : "تحويل الامتثال من التزام دوري إلى قدرة تشغيلية مستمرة، ذكية، وقابلة للقياس."}
            </p>
          </article>
          <article className="company-mv-card will-animate company-mv-card--delay">
            <p className="company-mv-card__label text-[var(--gold)]">{en ? "Vision" : "الرؤية"}</p>
            <p className="company-mv-card__body">
              {en
                ? "To lead the next generation of intelligent governance systems across the Middle East, built from Egypt, delivered to the world."
                : "قيادة الجيل القادم من أنظمة الحوكمة الذكية في الشرق الأوسط، من مصر إلى العالم."}
            </p>
          </article>
        </div>
      </section>

      <div className="divider-gradient mx-auto max-w-[1280px] px-6" />

      <section className="section-medium">
        <div className="container-privanta">
          <h2 className="heading mb-8 text-[var(--text-primary)] will-animate">
            {en ? "Our Values" : "قيمنا"}
          </h2>

          <div className="company-values-grid grid gap-5 md:grid-cols-2">
            {values.map((value, index) => (
              <div
                key={index}
                className={`surface-card company-value-card will-animate-scale company-value-card--${index + 1} p-6`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-[var(--teal)] p-2 text-white">{value.icon}</div>
                  <h3 className="heading text-lg text-[var(--text-primary)]">{value.title}</h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="company-quote-section">
        <div className="container-privanta company-quote-wrap will-animate">
          <span className="company-quote-mark" aria-hidden>
            &ldquo;
          </span>
          <blockquote className="company-quote">
            {en
              ? "Compliance should operate like infrastructure, not paperwork."
              : "الامتثال يجب أن يعمل كبنية تحتية، لا كأوراق إدارية."}
          </blockquote>
          <span className="company-quote-divider" aria-hidden />
        </div>
      </section>

      <section className="section-surface section-medium company-cta-section">
        <div className="container-privanta text-center">
          <h2 className="heading mb-3 text-[var(--text-primary)] will-animate">
            {en ? "Let's Build Something That Lasts" : "لنبنِ شيئاً يدوم"}
          </h2>
          <p className="prose-narrow mx-auto mb-6 text-[var(--text-secondary)] will-animate">
            {en ? "One conversation is all it takes to begin." : "محادثة واحدة تكفي للبداية."}
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-demo company-cta-btn inline-flex">
              {en ? "Get in Touch" : "تواصل معنا"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
