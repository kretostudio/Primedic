"use client";

import { useState, useCallback } from "react";
import { Container } from "@/components/ui/container";
import { getStats } from "@/lib/get-content";
import { useLocale } from "next-intl";

export function StatsCarousel() {
  const locale = useLocale();
  const stats = getStats(locale);
  const [index, setIndex] = useState(0);
  const total = stats.slides.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total],
  );

  const slide = stats.slides[index];

  return (
    <section
      className="relative bg-black py-[80px] md:py-[112px] lg:py-[140px]"
      style={{
        backgroundImage:
          "linear-gradient(178deg, rgba(178, 28, 28, 0.90) 20.56%, rgba(178, 28, 28, 0.90) 70.84%, rgba(26, 29, 33, 0.81) 98.96%)",
      }}
      aria-labelledby="stats-title"
    >
      <Container width="wide">
        <h2
          id="stats-title"
          className="mx-auto max-w-[420px] text-center font-semibold text-white text-[26px] leading-[1.3] md:max-w-[520px] md:text-[32px] lg:max-w-[560px] lg:text-[38px]"
        >
          {stats.title}
        </h2>

        <div className="relative mx-auto mt-8 max-w-[1060px]">
          <div className="rounded-[16px] border-[1.2px] border-white bg-white p-4 md:p-6 lg:p-8 backdrop-blur-[8px] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
            <div
              className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[16px] border border-[#272834] p-4 md:p-5"
              style={{
                backgroundImage:
                  "linear-gradient(55.38deg, rgba(51,51,62,0.16) 6.2%, rgba(83,84,108,0.16) 98%)",
              }}
            >
              <div className="flex min-h-[180px] w-full flex-col items-center justify-center">
                <div className="flex w-full max-w-[960px] flex-col items-start gap-4">
                  <p className="text-[12px] font-semibold uppercase leading-[1.2] tracking-[0.12em] text-[#b21c1c] md:text-[13px]">
                    {slide.source}
                  </p>
                  <p
                    className="mx-auto w-full max-w-[900px] text-center text-[18px] font-semibold leading-[1.4] text-black md:text-[22px] lg:text-[28px]"
                    style={{ fontFeatureSettings: "'dlig' 1" }}
                  >
                    {slide.quote.map((part, i) => (
                      <span
                        key={i}
                        className={part.strong ? "font-extrabold" : undefined}
                      >
                        {part.text}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div
                className="flex gap-4"
                role="tablist"
                aria-label={locale === "en" ? "Statistic sources" : "İstatistik kaynakları"}
              >
                {stats.slides.map((_, i) => {
                  const isActive = i === index;
                  return (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`${locale === "en" ? "Slide" : "Slayt"} ${i + 1}`}
                      onClick={() => setIndex(i)}
                      className="flex h-6 w-6 items-center justify-center"
                    >
                      <span
                        className={
                          isActive
                            ? "relative flex h-6 w-6 items-center justify-center rounded-full border border-[#b21c1c]"
                            : ""
                        }
                      >
                        <span
                          className={`block h-1.5 w-1.5 rounded-full ${
                            isActive ? "bg-[#b21c1c]" : "bg-[#272834]/60"
                          }`}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Arrow buttons — black arrow glyph with a white stroke border */}
          <button
            type="button"
            onClick={prev}
            aria-label={locale === "en" ? "Previous" : "Önceki"}
            className="absolute left-[-22px] top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-black text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 md:flex"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={locale === "en" ? "Next" : "Sonraki"}
            className="absolute right-[-22px] top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-black text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 md:flex"
          >
            <ArrowRight />
          </button>
        </div>
      </Container>
    </section>
  );
}

function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
