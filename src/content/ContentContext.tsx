import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import en, { type Content } from "./en.ts";
import es from "./es.ts";
import ar from "./ar.ts";

export type Locale = "en" | "es" | "ar";

type ContentContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: Content;
};

const ContentContext = createContext<ContentContextValue | undefined>(
  undefined
);

const LOCALE_STORAGE_KEY = "locale";

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored =
      (localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null) || undefined;
    if (stored === "en" || stored === "es" || stored === "ar") {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  const content: Content = useMemo(() => {
    switch (locale) {
      case "ar":
        return ar;
      case "es":
        return es;
      case "en":
      default:
        return en;
    }
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, content }),
    [locale, content]
  );

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used within ContentProvider");
  return ctx;
}
