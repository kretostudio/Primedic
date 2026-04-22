"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getFaq } from "@/lib/get-content";
import { useLocale } from "next-intl";
import { cn } from "@/lib/cn";

const INITIAL_VISIBLE = 5;

export function FAQ() {
  const locale = useLocale();
  const faqData = getFaq(locale);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const toggle = (i: number) =>
    setOpenIndex((current) => (current === i ? null : i));

  const hasMore = faqData.items.length > INITIAL_VISIBLE;
  const visibleItems = showAll
    ? faqData.items
    : faqData.items.slice(0, INITIAL_VISIBLE);

  const showMoreLabel =
    locale === "en"
      ? showAll
        ? "Show less"
        : "Show more"
      : showAll
        ? "Daha az göster"
        : "Daha fazla göster";

  return (
    <section
      id="iletisim"
      className="relative bg-white py-[52px]"
      aria-labelledby="faq-title"
    >
      <Container width="wide">
        <div className="mx-auto max-w-[900px] px-3 md:px-[52px] lg:px-[72px]">
          <Reveal y={24}>
            <h2
              id="faq-title"
              className="max-w-[472px] text-[22px] font-bold leading-[1.2] tracking-[-0.4px] text-black md:text-[29px] lg:text-[35px]"
              style={{ textShadow: "6px 10px 20px rgba(0,0,0,0.05)" }}
            >
              {faqData.title}
            </h2>
          </Reveal>

          <ul className="mt-6 flex flex-col gap-2.5">
            {visibleItems.map((item, i) => {
              const isOpen = openIndex === i;
              const panelId = `faq-panel-${i}`;
              const btnId = `faq-button-${i}`;
              return (
                <li
                  key={item.question}
                  className="rounded-[3px] border border-[#b21c1c] bg-white"
                >
                  <h3 className="flex">
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(i)}
                      className="flex w-full items-start justify-between gap-4 p-4 text-left"
                    >
                      <span className="flex flex-1 flex-col gap-2.5">
                        <span className="text-[12px] font-bold leading-[1.3] text-[#272d27] md:text-[14px] lg:text-[15px] lg:leading-[19px]">
                          {item.question}
                        </span>
                        {isOpen && (
                          <span
                            id={panelId}
                            className="whitespace-pre-line text-[11px] font-normal leading-[1.55] text-[#272d27] md:text-[13px] lg:text-[15px] lg:leading-[21px]"
                          >
                            {item.answer}
                          </span>
                        )}
                      </span>
                      <span
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-full border border-[#b21c1c] transition-colors",
                          isOpen
                            ? "bg-[#b21c1c] text-white"
                            : "bg-white text-[#b21c1c]",
                        )}
                        aria-hidden
                      >
                        {isOpen ? <ChevronDown /> : <ChevronRight />}
                      </span>
                    </button>
                  </h3>
                </li>
              );
            })}
          </ul>

          {hasMore && (
            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                aria-expanded={showAll}
                aria-label={showMoreLabel}
                title={showMoreLabel}
                className="flex h-11 w-[90px] items-center justify-center rounded-[19px] border-2 border-[#9f2322] bg-white transition-colors hover:bg-[#b21c1c]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b21c1c]/40"
              >
                <span
                  className={cn(
                    "inline-flex transition-transform",
                    showAll ? "rotate-180" : "rotate-0",
                  )}
                  aria-hidden
                >
                  <ExpandIcon />
                </span>
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="h-[22px] w-[22px]"
    >
      <circle cx="14" cy="14" r="14" fill="#C52727" fillOpacity="0.86" />
      <path
        d="M9.4375 12.2812L14.0008 16.8239L18.5641 12.2813"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
