
"use client";

import { useEffect, useState } from "react";

export type Locale = "ar" | "fr";

const STORAGE_KEY = "atelier-noura-locale";

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState<Locale>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (saved === "ar" || saved === "fr") {
      setLocale(saved);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("font-latin", locale === "fr");

    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, mounted]);

  function toggleLocale() {
    setLocale((current) => (current === "ar" ? "fr" : "ar"));
  }

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={
        locale === "ar"
          ? "Passer à la langue française"
          : "التبديل إلى اللغة العربية"
      }
      className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#e7ddd2] px-4 text-sm font-semibold text-[#6b4f3f] transition hover:bg-[#f2e2e0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b7160]"
    >
      {mounted ? (locale === "ar" ? "FR" : "ع") : "FR"}
    </button>
  );
}
