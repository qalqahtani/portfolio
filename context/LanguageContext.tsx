"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { content as arContent } from "@/config/content.ar";
import { content as enContent } from "@/config/content.en";
import type { Content } from "@/config/content.interface";

type Language = "ar" | "en";

interface LanguageContextValue {
  language: Language;
  content: Content;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to Arabic — must match the server-rendered html[lang="ar"]
  const [language, setLanguage] = useState<Language>("ar");

  // Restore saved preference after mount (avoids hydration mismatch)
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved === "en") {
      setLanguage("en");
    }
  }, []);

  // Mutate <html> attributes whenever language changes
  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute(
      "dir",
      language === "ar" ? "rtl" : "ltr"
    );
    localStorage.setItem("lang", language);
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));

  const content = language === "ar" ? arContent : enContent;

  return (
    <LanguageContext.Provider value={{ language, content, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
