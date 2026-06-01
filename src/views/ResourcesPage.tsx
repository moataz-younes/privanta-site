import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/useI18n";
import {
  type ArticleCategoryKey,
  resourceArticles,
} from "@/lib/resourcesArticles";
import { cn } from "@/lib/utils";

const filterOptions: { key: ArticleCategoryKey; en: string; ar: string }[] = [
  { key: "all", en: "All", ar: "الكل" },
  { key: "regulatory", en: "Regulatory", ar: "تنظيمي" },
  { key: "security", en: "Security", ar: "أمن" },
  { key: "ai", en: "AI Governance", ar: "حوكمة الذكاء الاصطناعي" },
  { key: "case-study", en: "Case Studies", ar: "دراسات الحالة" },
];

export default function ResourcesPage() {
  const { locale } = useI18n();
  const en = locale === "en";
  const [activeFilter, setActiveFilter] = useState<ArticleCategoryKey>("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return resourceArticles;
    return resourceArticles.filter((a) => a.categoryKey === activeFilter);
  }, [activeFilter]);

  return (
    <div className="resources-page">
      {/* Cover hero */}
      <section className="resources-cover" aria-labelledby="resources-hero-title">
        <img
          src="/resources-cover.png"
          alt=""
          className="resources-cover-image"
          fetchPriority="high"
        />
        <div className="resources-cover-overlay" aria-hidden />
        <div className="resources-cover-content">
          <div className="resources-cover-copy">
            <h1 id="resources-hero-title" className="resources-cover-title">
              {en
                ? "Intelligence for Modern Compliance Leader"
                : "ذكاء لقائد الامتثال الحديث"}
            </h1>
            <p className="resources-cover-subtitle">
              {en
                ? "Regulatory updates, security insights, AI governance, and real-world case studies"
                : "تحديثات تنظيمية، رؤى أمنية، حوكمة الذكاء الاصطناعي، ودراسات حالة واقعية"}
            </p>
          </div>
        </div>
      </section>

      <section className="container-privanta pb-4 pt-8 md:pt-10">
        <div className="resources-filters">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setActiveFilter(opt.key)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                activeFilter === opt.key
                  ? "bg-[var(--teal)] text-[#0B0F1A]"
                  : "border border-[var(--border-mid)] text-[var(--text-secondary)] hover:border-[var(--teal)] hover:text-[var(--text-primary)]",
              )}
            >
              {en ? opt.en : opt.ar}
            </button>
          ))}
        </div>
      </section>

      <div className="divider-gradient mx-auto max-w-[1280px] px-6" />

      <section className="section-medium">
        <div className="container-privanta grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => {
            const CategoryIcon = article.categoryIcon;
            const title = en ? article.title.en : article.title.ar;
            const description = en ? article.description.en : article.description.ar;
            const category = en ? article.category.en : article.category.ar;
            const date = en ? article.date.en : article.date.ar;
            const readTime = en ? article.readTime.en : article.readTime.ar;

            return (
              <Link
                key={article.slug}
                to={`/resources/${article.slug}`}
                className="surface-card group block p-5 transition-all duration-200 hover:border-[rgba(99,240,221,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <CategoryIcon className="h-4 w-4 shrink-0 text-[var(--teal)]" />
                    <span className="text-sm font-medium text-[var(--teal)]">{category}</span>
                  </div>
                  <div className="text-end text-sm text-[var(--text-muted)]">
                    <div>{date}</div>
                    <div>{readTime}</div>
                  </div>
                </div>

                <h2 className="heading mb-3 text-lg leading-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--teal)]">
                  {title}
                </h2>

                <p className="mb-5 text-[var(--text-secondary)] leading-relaxed">{description}</p>

                <span className="text-sm font-semibold text-[var(--gold)] transition-colors group-hover:text-[var(--teal)]">
                  {en ? "Read article" : "اقرأ المقالة"}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section-surface section-medium">
        <div className="container-privanta text-center">
          <h2 className="heading mb-3 text-[var(--text-primary)]">
            {en ? "Weekly Compliance Intelligence" : "ذكاء الامتثال الأسبوعي"}
          </h2>
          <p className="prose-narrow mx-auto mb-6 text-[var(--text-secondary)]">
            {en
              ? "Get practical insights on GCC regulatory changes and implementation strategies delivered to your inbox."
              : "احصل على رؤى عملية حول التغيرات التنظيمية الخليجية واستراتيجيات التنفيذ تسليمها إلى بريدك."}
          </p>

          <div className="mx-auto max-w-md">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder={en ? "Enter your work email" : "أدخل بريدك الإلكتروني للعمل"}
                className="flex-1 rounded-lg border border-[var(--border-mid)] bg-[var(--bg-surface)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--teal)] focus:outline-none"
              />
              <button type="button" className="btn-demo shrink-0">
                {en ? "Subscribe" : "اشترك"}
              </button>
            </div>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              {en
                ? "Weekly newsletter · Unsubscribe anytime · No spam"
                : "نشرة بريدية أسبوعية · إلغاء الاشتراك في أي وقت · لا بريد مزعج"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
