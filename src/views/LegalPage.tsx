import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ArticleBody } from "@/components/resources/ArticleBody";
import { useI18n } from "@/i18n/useI18n";
import { getLegalDocument, type LegalDocSlug } from "@/lib/legal";

const VALID_SLUGS: LegalDocSlug[] = ["privacy", "terms", "cookies"];

function isLegalSlug(slug: string | undefined): slug is LegalDocSlug {
  return slug !== undefined && VALID_SLUGS.includes(slug as LegalDocSlug);
}

export default function LegalPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useI18n();
  const en = locale === "en";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, locale]);

  if (!isLegalSlug(slug)) {
    return <Navigate to="/" replace />;
  }

  const doc = getLegalDocument(slug);
  if (!doc) {
    return <Navigate to="/" replace />;
  }

  const title = en ? doc.title.en : doc.title.ar;
  const effectiveDate = en ? doc.effectiveDate.en : doc.effectiveDate.ar;
  const markdown = en ? doc.body.en : doc.body.ar;
  const backLabel = en ? "Home" : "الرئيسية";

  return (
    <article className="article-reader legal-page">
      <header className="article-reader-toolbar article-reader-toolbar--visible">
        <div className="article-reader-toolbar-inner">
          <Link to="/" className="article-reader-back">
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {backLabel}
          </Link>
          <span className="article-reader-toolbar-title">{title}</span>
        </div>
      </header>

      <div className="article-reader-hero-band">
        <h1 className="article-reader-title">{title}</h1>
        <p className="article-reader-deck">{effectiveDate}</p>
      </div>

      <div className="article-reader-content-wrap">
        <ArticleBody markdown={markdown} />
      </div>
    </article>
  );
}
