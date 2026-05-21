"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useEffect, useRef, useState } from "react";

type Language = {
  code: "tr" | "en";
  label: string;
  flag: string;
};

const languages: ReadonlyArray<Language> = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = languages.find((l) => l.code === locale) ?? languages[0];

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const switchLocale = (lang: Language) => {
    setOpen(false);
    if (lang.code === locale) return;
    // Cast needed because pathname may be a dynamic template like "/blog/[slug]"
    // which the strict router type rejects without explicit params.
    router.replace(pathname as never, { locale: lang.code });
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        data-tap-exempt
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${selected.label}`}
        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-[14px] text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        <span aria-hidden className="text-[16px] leading-none">
          {selected.flag}
        </span>
        <span className="font-medium">{selected.code.toUpperCase()}</span>
        <svg
          viewBox="0 0 12 12"
          aria-hidden
          className={`h-3 w-3 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M3 4.5l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Languages"
          className="absolute bottom-full right-0 mb-2 min-w-[180px] overflow-hidden rounded-[14px] border border-white/15 bg-[#2a0505] p-1 shadow-2xl md:right-0 md:left-auto"
        >
          {languages.map((lang) => {
            const isActive = lang.code === locale;
            return (
              <li key={lang.code} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => switchLocale(lang)}
                  className={`flex w-full items-center gap-3 rounded-[10px] px-3 py-2.5 text-left text-[14px] transition-colors hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none ${
                    isActive
                      ? "bg-white/10 font-semibold text-white"
                      : "font-medium text-white/80"
                  }`}
                >
                  <span aria-hidden className="text-[18px] leading-none">
                    {lang.flag}
                  </span>
                  <span className="flex-1">{lang.label}</span>
                  <span className="text-[12px] uppercase tracking-wider text-white/50">
                    {lang.code.toUpperCase()}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
