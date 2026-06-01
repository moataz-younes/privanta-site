import { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "@/i18n/useI18n";
import { Brain, Monitor } from "lucide-react";

export default function Products() {
  const { locale } = useI18n();
  const en = locale === "en";
  const location = useLocation();

  useLayoutEffect(() => {
    const raw = location.hash.replace(/^#/, "");
    if (!raw) return;
    requestAnimationFrame(() => {
      document.getElementById(raw)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash, location.pathname]);

  return (
    <div>
      <section className="container-privanta pb-8 pt-2 md:pb-10">
        <p className="section-label section-label-teal">{en ? "PRODUCTS" : "المنتجات"}</p>
        <h1 className="display-hero mt-4 max-w-[14ch] text-[var(--text-primary)]">
          {en ? "Technology That Powers Continuous Compliance" : "تقنية تمكّن الامتثال المستمر"}
        </h1>
        <p className="prose-narrow mt-4 text-base text-[var(--text-secondary)]">
          {en
            ? "Two purpose-built tools. One unified compliance vision."
            : "أداتان مصممتان لهدف واحد. رؤية امتثال موحّدة."}
        </p>
      </section>

      <div className="divider-gradient mx-auto max-w-[1280px] px-6" />

      <section id="platform" className="section-medium scroll-mt-28">
        <div className="container-privanta grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(47,191,204,0.08)]">
              <Monitor className="h-5 w-5 text-[var(--teal)]" />
            </div>
            <h2 className="heading text-[var(--text-primary)]">Privanta Platform</h2>
            <p className="mt-2 text-xs font-semibold tracking-[0.14em] text-[var(--text-muted)]">GRC OPERATING SYSTEM</p>
          <p className="prose-narrow mt-6 text-[var(--text-secondary)]">
            {en
              ? "A unified GRC system for real-time visibility and operational control over compliance, risk, and governance. Built for teams that are done with spreadsheet-based audits."
              : "نظام GRC موحّد للرؤية اللحظية والتحكم التشغيلي في الامتثال والمخاطر والحوكمة."}
          </p>
          <ul className="list-triangle prose-narrow mt-8 space-y-2">
            {(en
              ? [
                  "Real-time compliance tracking across all frameworks",
                  "Risk & incident management with automated escalation",
                  "Control validation & evidence management",
                  "Audit readiness dashboards with exportable reports",
                ]
              : [
                  "تتبع امتثال لحظي عبر الأطر",
                  "إدارة مخاطر وحوادث مع تصعيد آلي",
                  "التحقق من الضوابط وإدارة الأدلة",
                  "لوحات جاهزية للتدقيق مع تقارير قابلة للتصدير",
                ]
            ).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="prose-narrow mt-6 text-sm text-[var(--text-muted)]">
            {en
              ? "Faster audits · Stronger control assurance · Full operational visibility"
              : "تدقيق أسرع · ضمان أقوى للضوابط · رؤية تشغيلية كاملة"}
          </p>
          <Link to="/contact#book-demo" className="btn-demo mt-8 inline-flex">
            {en ? "Request Demo" : "اطلب عرضًا"}
          </Link>
          </div>
          <div className="surface-card p-4">
            <div className="aspect-[16/10] rounded-lg bg-[rgba(13,26,38,0.8)]" />
          </div>
        </div>
      </section>

      <section id="maat" className="section-surface section-medium scroll-mt-28 border-y border-[var(--border-sub)]">
        <div className="container-privanta grid items-center gap-8 md:grid-cols-2">
          <div className="md:order-2">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(124,92,255,0.14)]">
              <Brain className="h-5 w-5 text-[var(--gold)]" />
            </div>
            <h2 className="heading text-[var(--text-primary)]">Maat AI</h2>
            <p className="mt-2 text-xs font-semibold tracking-[0.14em] text-[var(--text-muted)]">AI LEGAL INTELLIGENCE</p>
          <p className="prose-narrow mt-6 text-[var(--text-secondary)]">
            {en
              ? "An AI legal assistant built for legal research, regulatory analysis, and compliance decision support. Maat speaks the language of law and technology, fluently."
              : "مساعد قانوني بالذكاء الاصطناعي للبحث والتحليل التنظيمي ودعم قرارات الامتثال."}
          </p>

          <div className="mt-8 rounded-2xl border border-[var(--border-mid)] bg-[rgba(13,26,38,0.6)] p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--teal)]">{en ? "Example" : "مثال"}</p>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              <span className="text-[var(--text-primary)]">{en ? "Query: " : "سؤال: "}</span>
              {en
                ? "“What are the data localization requirements under PDPL for financial institutions?”"
                : "«ما متطلبات توطين البيانات بموجب PDPL للمؤسسات المالية؟»"}
            </p>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              <span className="text-[var(--text-primary)]">Maat AI: </span>
              {en
                ? "“Under Saudi PDPL, financial institutions must store personal data of Saudi residents on local servers. Cross-border transfer is permitted only with explicit consent or under approved contractual clauses…”"
                : "«بموجب PDPL السعودي، يجب تخزين بيانات المقيمين محليًا. التحويل عبر الحدود مسموح بموافقة صريحة أو بنود تعاقدية معتمدة…»"}
            </p>
            <p className="mt-3 text-xs text-[var(--text-muted)]">
              Sources: PDPL Art. 29 · SAMA Framework · NCA Guidelines 2024
            </p>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.14em] text-[var(--teal)]">
            {en ? "Capabilities" : "القدرات"}
          </p>
          <ul className="list-triangle prose-narrow mt-4 space-y-2">
            {(en
              ? [
                  "Multi-jurisdiction legal research across frameworks",
                  "Contract analysis & automated risk flagging",
                  "Regulatory interpretation in plain language",
                  "Context-aware legal reasoning and recommendations",
                ]
              : [
                  "بحث قانوني متعدد الولايات",
                  "تحليل عقود وإبراز مخاطر آلي",
                  "تفسير تنظيمي بلغة واضحة",
                  "استدلال قانوني سياقي وتوصيات",
                ]
            ).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="prose-narrow mt-6 text-sm text-[var(--text-muted)]">
            {en ? "Faster legal workflows · Smarter decisions · Less manual effort" : "سرعة · قرارات أذكى · جهد يدوي أقل"}
          </p>
          <Link to="/products/maat" className="btn-outline mt-6 inline-flex">
            {en ? "See Maat in Action" : "شاهد Maat"}
          </Link>
          </div>
          <div className="surface-card p-4 md:order-1">
            <div className="aspect-[16/10] rounded-lg bg-[rgba(13,26,38,0.8)]" />
          </div>
        </div>
      </section>

      <section className="section-medium text-center">
        <div className="container-privanta">
          <h2 className="heading text-xl text-[var(--text-primary)]">
            {en ? "Ready to See It Live?" : "جاهز لرؤيته مباشرة؟"}
          </h2>
          <p className="prose-narrow mx-auto mt-3 text-[var(--text-secondary)]">
            {en ? "Book a 30-minute demo and see both products in action." : "احجز عرضًا 30 دقيقة لترى المنتجين معًا."}
          </p>
          <Link to="/contact#book-demo" className="btn-demo mt-8 inline-flex">
            {en ? "Book Your Demo" : "احجز العرض"}
          </Link>
        </div>
      </section>
    </div>
  );
}
