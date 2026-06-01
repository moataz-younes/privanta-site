import { useState } from "react";
import { Check, Copy, Facebook, Linkedin, Share2 } from "lucide-react";
import { useI18n } from "@/i18n/useI18n";
import { buildShareLinks, getAbsoluteShareUrl } from "@/lib/shareUrls";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ArticleShareProps = {
  path: string;
  title: string;
  className?: string;
  onActivate?: () => void;
};

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const networkIcon = {
  facebook: Facebook,
  linkedin: Linkedin,
  x: XIcon,
} as const;

export function ArticleShare({ path, title, className, onActivate }: ArticleShareProps) {
  const { locale } = useI18n();
  const en = locale === "en";
  const [copied, setCopied] = useState(false);
  const shareLinks = buildShareLinks(path, title);
  const absoluteUrl = getAbsoluteShareUrl(path);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt(en ? "Copy this link:" : "انسخ الرابط:", absoluteUrl);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "article-share-trigger inline-flex min-h-10 min-w-10 touch-manipulation items-center justify-center rounded-lg border border-[var(--border-mid)] bg-[rgba(8,14,24,0.85)] text-[var(--text-secondary)] transition-colors hover:border-[var(--teal)] hover:text-[var(--text-primary)]",
            className,
          )}
          aria-label={en ? "Share article" : "مشاركة المقالة"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onActivate?.();
          }}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <Share2 className="h-4 w-4" strokeWidth={2} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="article-share-menu z-[10020] min-w-[12.5rem] border-[var(--border-mid)] bg-[#0D1A26] p-1.5"
        onClick={(e) => e.stopPropagation()}
      >
        {shareLinks.map((item) => {
          const Icon = networkIcon[item.id];
          return (
            <DropdownMenuItem key={item.id} asChild className="cursor-pointer rounded-md p-0 focus:bg-[rgba(99,240,221,0.08)]">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-2.5 px-3 py-2.5 text-sm text-[var(--text-primary)]"
              >
                <Icon className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                <span>{en ? item.labelEn : item.labelAr}</span>
              </a>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuItem
          className="cursor-pointer rounded-md focus:bg-[rgba(99,240,221,0.08)]"
          onSelect={(e) => {
            e.preventDefault();
            void copyLink();
          }}
        >
          <span className="flex w-full items-center gap-2.5 px-1 py-1.5 text-sm text-[var(--text-primary)]">
            {copied ? (
              <Check className="h-4 w-4 shrink-0 text-[var(--teal)]" />
            ) : (
              <Copy className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
            )}
            <span>{copied ? (en ? "Link copied" : "تم نسخ الرابط") : en ? "Copy link" : "نسخ الرابط"}</span>
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
