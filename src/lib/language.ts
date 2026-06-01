export type SiteLocale = "en" | "ar";

export const LANG_STORAGE_KEY = "privanta-lang";

export function getStoredLocale(): SiteLocale {
  try {
    const value = localStorage.getItem(LANG_STORAGE_KEY);
    if (value === "ar" || value === "en") return value;
  } catch {
    /* ignore */
  }
  return "en";
}

export function applyLocale(lang: SiteLocale): void {
  const html = document.documentElement;
  if (lang === "ar") {
    html.lang = "ar";
    html.setAttribute("dir", "rtl");
  } else {
    html.lang = "en";
    html.setAttribute("dir", "ltr");
  }

  document.body.classList.remove("lang-en", "lang-ar");
  document.body.classList.add(lang === "ar" ? "lang-ar" : "lang-en");

  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }

  window.dispatchEvent(new CustomEvent("privanta:locale", { detail: lang }));
}
