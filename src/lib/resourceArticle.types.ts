import type { LucideIcon } from "lucide-react";

export type ArticleCategoryKey = "all" | "regulatory" | "security" | "ai" | "case-study";

export type ArticleLocaleFields = {
  en: string;
  ar: string;
};

export type ResourceArticleMeta = {
  slug: string;
  categoryKey: Exclude<ArticleCategoryKey, "all">;
  order: number;
  published: boolean;
  category: ArticleLocaleFields;
  title: ArticleLocaleFields;
  description: ArticleLocaleFields;
  date: ArticleLocaleFields;
  readTime: ArticleLocaleFields;
};

export type ResourceArticle = ResourceArticleMeta & {
  categoryIcon: LucideIcon;
  body: ArticleLocaleFields;
};
