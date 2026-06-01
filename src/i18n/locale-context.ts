import { createContext } from "react";
import type { SiteLocale } from "@/lib/language";

export type I18nContextValue = {
  locale: SiteLocale;
  t: (path: string) => string;
};

export const I18nContext = createContext<I18nContextValue | null>(null);
