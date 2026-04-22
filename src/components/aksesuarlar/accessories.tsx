"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useCallback, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import {
  accessoryThemes,
  type AccessoryGroup,
  type AccessoryRow,
} from "@/lib/content.aksesuarlar";
import { getAksesuarlar } from "@/lib/get-content";
import { useLocale } from "next-intl";

type OpenMap = Record<string, string | null>;

export function AksesuarAccessories() {
  const locale = useLocale();
  const aksesuarlar = getAksesuarlar(locale);
  const { section, categories, groups } = aksesuarlar;
  const [openRows, setOpenRows] = useState<OpenMap>(() =>
    Object.fromEntries(groups.map((g) => [g.id, null])),
  );
  const groupRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const setGroupRef = useCallback(
    (groupId: string) => (node: HTMLDivElement | null) => {
      groupRefs.current[groupId] = node;
    },
    [],
  );

  const toggleRow = (groupId: string, rowId: string) => {
    setOpenRows((prev) => ({
      ...prev,
      [groupId]: prev[groupId] === rowId ? null : rowId,
    }));
  };

  const handleChipClick = (groupId: string, rowId: string) => {
    setOpenRows((prev) => ({ ...prev, [groupId]: rowId }));
    const node = groupRefs.current[groupId];
    if (node) {
      const top = node.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-[61px] md:py-[90px]">
      <Container width="wide">
        <Reveal as="header" y={24} className="mx-auto flex max-w-[610px] flex-col items-center gap-2.5 text-center">
          <span className="inline-flex h-[29px] items-center justify-center rounded-[24px] border border-[#9f2322] bg-white px-4 text-[13px] font-semibold leading-none text-black md:text-[15px]">
            {section.pretitle}
          </span>
          <h2
            className="text-display-xl bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "radial-gradient(100% 45% at 50% 50%, #9F2322 0%, #70717A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {section.title}
          </h2>
          <span aria-hidden className="h-[3px] w-[192px] max-w-[60%] bg-[#9f2322]" />
        </Reveal>

        {/* Chip slider */}
        <div
          className="-mx-5 mt-9 overflow-x-auto overscroll-x-contain px-5 py-6 md:mt-13 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            className="mx-auto flex w-fit gap-4 md:gap-[34px]"
            role="list"
            aria-label={section.categoryHeader}
          >
            {categories.map((chip) => {
              const theme = accessoryThemes[chip.tone];
              return (
                <button
                  key={chip.id}
                  type="button"
                  role="listitem"
                  onClick={() => handleChipClick(chip.groupId, chip.rowId)}
                  className="flex h-[86px] w-[86px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-[13px] text-center shadow-[0_10px_21px_-5px_rgba(0,0,0,0.22)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f2322]/40"
                  style={{ backgroundColor: theme.chipBg }}
                >
                  <span
                    aria-hidden
                    className="flex h-[37px] w-[37px] items-center justify-center"
                  >
                    <Image
                      src={chip.icon}
                      alt={`${chip.label} kategori ikonu`}
                      width={54}
                      height={54}
                      className="h-auto w-auto max-h-[34px] max-w-[34px] object-contain"
                    />
                  </span>
                  <span className="px-1.5 text-[10px] font-bold leading-tight text-[#22415e]">
                    {chip.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Groups */}
        <div className="mx-auto mt-9 flex max-w-[704px] flex-col gap-6 md:mt-13 md:gap-8 2xl:max-w-[896px]">
          {groups.map((group) => (
            <GroupCard
              key={group.id}
              group={group}
              openRowId={openRows[group.id] ?? null}
              onToggle={(rowId) => toggleRow(group.id, rowId)}
              registerRef={setGroupRef(group.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

type GroupCardProps = {
  group: AccessoryGroup;
  openRowId: string | null;
  onToggle: (rowId: string) => void;
  registerRef: (node: HTMLDivElement | null) => void;
};

function GroupCard({ group, openRowId, onToggle, registerRef }: GroupCardProps) {
  const theme = accessoryThemes[group.theme];
  const openRow = group.rows.find((r) => r.id === openRowId) ?? null;

  return (
    <div
      ref={registerRef}
      id={`aksesuar-${group.id}`}
      className="overflow-hidden rounded-[10px] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.1)]"
    >
      <div className="grid gap-0 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-4 p-5 md:p-8">
          {/* group content */}
          <p
            className="text-[9px] font-bold leading-tight md:text-[10px]"
            style={{ color: theme.eyebrow }}
          >
            {group.eyebrow}
          </p>
          <h3 className="text-[17px] font-bold leading-[1.15] text-[#070f17] md:text-[21px]">
            {group.title}
          </h3>

          <ul className="flex flex-col gap-3">
            {group.rows.map((row) => {
              const isOpen = openRowId === row.id;
              return (
                <li key={row.id}>
                  <AccordionRow
                    row={row}
                    isOpen={isOpen}
                    onToggle={() => onToggle(row.id)}
                    borderColor={theme.border}
                    bg={isOpen ? theme.cardBgActive : theme.cardBg}
                  />
                </li>
              );
            })}
          </ul>

          {openRow && (
            <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-[10px] md:hidden">
              <Image
                key={openRow.image.src}
                src={openRow.image.src}
                alt={openRow.image.alt}
                width={766}
                height={1368}
                sizes="(max-width: 768px) 90vw, 0px"
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
            </div>
          )}

          <div className="pt-1.5">
            <Link
              href={group.actionHref}
              className="inline-flex items-center gap-2 rounded-[6px] px-4 py-2 text-[12px] font-medium text-[#070f17] transition-colors md:text-[13px]"
              style={{ backgroundColor: theme.button }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.buttonHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.button;
              }}
            >
              {group.actionLabel}
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <VisualColumn openRow={openRow} defaultImage={group.defaultImage} />
      </div>
    </div>
  );
}

type AccordionRowProps = {
  row: AccessoryRow;
  isOpen: boolean;
  onToggle: () => void;
  borderColor: string;
  bg: string;
};

function AccordionRow({
  row,
  isOpen,
  onToggle,
  borderColor,
  bg,
}: AccordionRowProps) {
  return (
    <div
      className="rounded-[6px] border transition-[background-color] duration-200"
      style={{ borderColor, backgroundColor: bg }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`row-body-${row.id}`}
        className="flex w-full items-start gap-2.5 px-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
      >
        <span className="flex-1">
          <span className="block text-[11px] font-bold leading-[1.25] text-[#070f17] md:text-[13px]">
            {row.title}
          </span>
          <span className="mt-0.5 block text-[8px] font-semibold leading-[1.35] text-[#070f17]/80 md:text-[9px]">
            {row.subtitle}
          </span>
        </span>
        <span
          aria-hidden
          className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5 text-[#070f17]"
          >
            <path d="M5 8l5 5 5-5" />
          </svg>
        </span>
      </button>

      <div
        id={`row-body-${row.id}`}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-body-sm space-y-2.5 px-4 pb-4 text-[#070f17]/85">
            {row.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualColumn({
  openRow,
  defaultImage,
}: {
  openRow: AccessoryRow | null;
  defaultImage: { src: string; alt: string };
}) {
  const image = openRow?.image ?? defaultImage;

  return (
    <div className="relative hidden self-stretch md:block">
      <Image
        key={image.src}
        src={image.src}
        alt={image.alt}
        width={766}
        height={1368}
        sizes="(max-width: 1024px) 40vw, 380px"
        className="absolute inset-0 h-full w-full object-contain object-top"
      />
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M3 8h10" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

