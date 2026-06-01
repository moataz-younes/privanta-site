import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { applyLocale, getStoredLocale, LANG_STORAGE_KEY, type SiteLocale } from "@/lib/language";

const options: { value: SiteLocale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "ar", label: "AR" },
];

export function LanguageSwitcher() {
  const [locale, setLocale] = useState<SiteLocale>(() => getStoredLocale());
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onLocale = () => setLocale(getStoredLocale());
    const onStorageKey = (e: StorageEvent) => {
      if (e.key === null || e.key === LANG_STORAGE_KEY) setLocale(getStoredLocale());
    };
    window.addEventListener("privanta:locale", onLocale);
    window.addEventListener("storage", onStorageKey);
    return () => {
      window.removeEventListener("privanta:locale", onLocale);
      window.removeEventListener("storage", onStorageKey);
    };
  }, []);

  const choose = useCallback((next: SiteLocale) => {
    applyLocale(next);
    setLocale(next);
    setOpen(false);
  }, []);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        className={cn(
          "inline-flex h-9 min-w-[5.125rem] items-center justify-between gap-1 rounded-lg px-3 text-sm font-medium",
          "text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
          "outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        onClick={() => setOpen((v) => !v)}
      >
        <Globe className="h-[15px] w-[15px] shrink-0 opacity-80" aria-hidden />
        <span className="min-w-[1.75rem] text-center tabular-nums">{locale.toUpperCase()}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 shrink-0 opacity-70 transition-transform duration-200 ease-out",
            open && "-rotate-180",
          )}
          aria-hidden
        />
      </button>

      <div
        className={cn(
          "absolute end-0 top-full z-[60] mt-1.5 min-w-[6.75rem]",
          "origin-top transition duration-200 ease-out",
          open
            ? "visible scale-100 opacity-100"
            : "invisible pointer-events-none scale-[0.98] opacity-0",
        )}
        role="listbox"
        aria-label="Select language"
      >
        <div className="glass-strong rounded-xl border border-white/10 p-1 shadow-elevated">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={locale === opt.value}
              className={cn(
                "flex w-full rounded-lg px-2.5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                locale === opt.value
                  ? "bg-white/10 text-brand-cyan"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
              )}
              onClick={() => choose(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
