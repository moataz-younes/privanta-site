import { Bot, FileText, FolderOpen, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type {
  ArticleCategoryKey,
  ResourceArticle,
  ResourceArticleMeta,
} from "@/lib/resourceArticle.types";

const categoryIcons: Record<
  Exclude<ArticleCategoryKey, "all">,
  LucideIcon
> = {
  regulatory: FileText,
  security: Shield,
  ai: Bot,
  "case-study": FolderOpen,
};

const metaModules = import.meta.glob("../../content/articles/*/index.json", {
  eager: true,
  import: "default",
}) as Record<string, ResourceArticleMeta>;

const enModules = import.meta.glob("../../content/articles/*/en.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const arModules = import.meta.glob("../../content/articles/*/ar.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function folderFromPath(path: string): string {
  const match = path.match(/content\/articles\/([^/]+)\//);
  return match?.[1] ?? "";
}

function buildArticles(): ResourceArticle[] {
  const articles: ResourceArticle[] = [];

  for (const [metaPath, meta] of Object.entries(metaModules)) {
    if (!meta.published) continue;

    const folder = folderFromPath(metaPath);
    const enPath = `../../content/articles/${folder}/en.md`;
    const arPath = `../../content/articles/${folder}/ar.md`;
    const bodyEn = enModules[enPath];
    const bodyAr = arModules[arPath];

    if (!bodyEn || !bodyAr) {
      console.warn(`[resources] Missing markdown for article "${meta.slug}"`);
      continue;
    }

    articles.push({
      ...meta,
      categoryIcon: categoryIcons[meta.categoryKey],
      body: { en: bodyEn.trim(), ar: bodyAr.trim() },
    });
  }

  return articles.sort((a, b) => a.order - b.order);
}

export const resourceArticles: ResourceArticle[] = buildArticles();
