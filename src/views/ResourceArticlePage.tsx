import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { useI18n } from "@/i18n/useI18n";
import { ArticleBody } from "@/components/resources/ArticleBody";
import { getAdjacentArticles, getArticleBySlug } from "@/lib/resourcesArticles";

export default function ResourceArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useI18n();
  const en = locale === "en";
  const article = slug ? getArticleBySlug(slug) : undefined;
  const { prev, next } = slug ? getAdjacentArticles(slug) : {};

  const [progress, setProgress] = useState(0);
  const [barVisible, setBarVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0);
      setBarVisible(scrollTop > 120);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  const title = en ? article.title.en : article.title.ar;
  const description = en ? article.description.en : article.description.ar;
  const category = en ? article.category.en : article.category.ar;
  const date = en ? article.date.en : article.date.ar;
  const readTime = en ? article.readTime.en : article.readTime.ar;
  const byline = en ? "By Privanta" : "بواسطة Privanta";
  const markdown = en ? article.body.en : article.body.ar;
  const CategoryIcon = article.categoryIcon;

  return (
    <article className="article-reader">
      <div
        className="article-reader-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden
      />
      <header
        className={`article-reader-toolbar ${barVisible ? "article-reader-toolbar--visible" : ""}`}
      >
        <div className="article-reader-toolbar-inner">
          <Link to="/resources" className="article-reader-back">
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {en ? "Resources" : "الموارد"}
          </Link>
          <span className="article-reader-toolbar-title">{title}</span>
        </div>
      </header>

      <div className="article-reader-hero-band">
        <div className="article-reader-meta">
          <span className="article-reader-category">
            <CategoryIcon className="h-4 w-4" />
            {category}
          </span>
          <span className="article-reader-meta-dot" aria-hidden>
            ·
          </span>
          <time dateTime={date}>{date}</time>
          <span className="article-reader-meta-dot" aria-hidden>
            ·
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {readTime}
          </span>
        </div>

        <h1 className="article-reader-title">{title}</h1>
        <p className="article-reader-deck">{description}</p>

        <div className="article-reader-author">
          <div className="article-reader-avatar" aria-hidden>
            P
          </div>
          <p className="article-reader-author-name">{byline}</p>
        </div>
      </div>

      <div className="article-reader-content-wrap">
        <ArticleBody markdown={markdown} />
      </div>

      <footer className="article-reader-footer">
        <div className="article-reader-nav">
          {prev ? (
            <Link
              to={`/resources/${prev.slug}`}
              className="article-reader-nav-card article-reader-nav-card--prev"
            >
              <span className="article-reader-nav-label">{en ? "Previous" : "السابق"}</span>
              <span className="article-reader-nav-title">
                {en ? prev.title.en : prev.title.ar}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/resources/${next.slug}`}
              className="article-reader-nav-card article-reader-nav-card--next"
            >
              <span className="article-reader-nav-label">{en ? "Next" : "التالي"}</span>
              <span className="article-reader-nav-title">
                {en ? next.title.en : next.title.ar}
              </span>
              <ArrowRight className="article-reader-nav-arrow h-4 w-4 rtl:rotate-180" />
            </Link>
          ) : null}
        </div>

        <Link to="/resources" className="btn-outline mx-auto mt-10 inline-flex">
          {en ? "Back to all articles" : "العودة إلى كل المقالات"}
        </Link>
      </footer>
    </article>
  );
}
