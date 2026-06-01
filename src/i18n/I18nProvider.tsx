import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { getStoredLocale, LANG_STORAGE_KEY, type SiteLocale } from "@/lib/language";
import { translate } from "@/i18n/dictionary";
import { I18nContext } from "@/i18n/locale-context";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<SiteLocale>(() => getStoredLocale());

  useEffect(() => {
    const update = () => setLocale(getStoredLocale());
    const onStorage = (e: StorageEvent) => {
      if (e.key === null || e.key === LANG_STORAGE_KEY) update();
    };
    window.addEventListener("privanta:locale", update);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("privanta:locale", update);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (locale === "ar") {
      html.lang = "ar";
      html.setAttribute("dir", "rtl");
    } else {
      html.lang = "en";
      html.setAttribute("dir", "ltr");
    }

    document.body.classList.remove("lang-en", "lang-ar");
    document.body.classList.add(locale === "ar" ? "lang-ar" : "lang-en");
  }, [locale]);

  const t = useCallback((path: string) => translate(locale, path), [locale]);

  const value = useMemo(() => ({ locale, t }), [locale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
