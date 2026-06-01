export type {
  ArticleCategoryKey,
  ArticleLocaleFields,
  ResourceArticle,
  ResourceArticleMeta,
} from "@/lib/resourceArticle.types";

export { resourceArticles } from "@/lib/loadResourceArticles";

import { resourceArticles } from "@/lib/loadResourceArticles";
import type { ResourceArticle } from "@/lib/resourceArticle.types";

export function getArticleBySlug(slug: string): ResourceArticle | undefined {
  return resourceArticles.find((a) => a.slug === slug);
}

export function getAdjacentArticles(slug: string): {
  prev?: ResourceArticle;
  next?: ResourceArticle;
} {
  const idx = resourceArticles.findIndex((a) => a.slug === slug);
  if (idx < 0) return {};
  return {
    prev: idx > 0 ? resourceArticles[idx - 1] : undefined,
    next: idx < resourceArticles.length - 1 ? resourceArticles[idx + 1] : undefined,
  };
}
