import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { type FeatureRow, type SpecBadge } from "@/lib/content";
import { getFeatures } from "@/lib/get-content";
import { getLocale } from "next-intl/server";
import { cn } from "@/lib/cn";

export async function Features() {
  const locale = await getLocale();
  const features = getFeatures(locale);

  return (
    <section
      id="urunler"
      className="relative overflow-hidden bg-white py-[64px] md:py-[90px]"
      style={{
        backgroundImage:
          "linear-gradient(151deg, rgba(178, 28, 28, 0.9) 31%, rgba(26, 29, 33, 0.81) 89%)",
      }}
      aria-labelledby="features-title"
    >
      <Container width="wide">
        <div className="mx-auto flex max-w-[880px] flex-col">
          <div className="flex flex-col items-center text-center">
            <Reveal y={20}>
              <span className="inline-flex h-[29px] items-center justify-center rounded-[30px] border border-black bg-white px-5 text-[10px] font-bold text-black md:text-[15px]">
                {features.pretitle}
              </span>
            </Reveal>
            <Reveal delay={0.1} y={24}>
              <h2
                id="features-title"
                className="mt-8 max-w-[448px] leading-[1.2] text-white"
              >
                {features.title}
              </h2>
            </Reveal>
            <Reveal delay={0.2} y={20}>
              <p className="text-lead-lg mt-2 max-w-[848px] text-white">
                {features.description}
              </p>
            </Reveal>
          </div>

          <div className="mt-11 flex flex-col gap-6">
            {features.rows.map((row, i) => (
              <Reveal key={row.title} delay={i * 0.1} y={36}>
                <FeatureCard row={row} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeatureCard({ row }: { row: FeatureRow }) {
  return (
    <article
      className="relative rounded-[16px] border-[1.2px] border-[#101132] p-4 backdrop-blur-[8px] md:p-6"
      style={{
        backgroundImage:
          "linear-gradient(68deg, rgba(0, 0, 0, 0.3) 25.25%, rgba(83, 84, 108, 0.3) 98.05%)",
      }}
    >
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-13">
        <div className="flex flex-1 gap-3">
          <RailMarker />
          <div className="flex-1">
            <h3 className="font-medium text-white">
              {row.title}
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              {row.bullets.map((parts, i) => (
                <li key={i} className="flex gap-2.5">
                  <CheckCircle className="mt-1 h-4 w-4 shrink-0" />
                  <p className="text-body-lg text-white">
                    {parts.map((part, j) => (
                      <span
                        key={j}
                        className={part.strong ? "font-semibold" : undefined}
                      >
                        {part.text}
                      </span>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative w-full shrink-0 lg:w-[336px]">
          {row.badges ? (
            <div className="relative h-[180px] w-full overflow-hidden rounded-[13px] md:h-[242px]">
              <Image
                src={row.image}
                alt={row.imageAlt}
                width={row.imageWidth}
                height={row.imageHeight}
                sizes="(min-width: 1024px) 336px, 100vw"
                className="absolute inset-0 h-full w-full object-cover object-right"
              />
            </div>
          ) : (
            <div className="relative h-[180px] w-full md:h-[242px]">
              <Image
                src={row.image}
                alt={row.imageAlt}
                width={row.imageWidth}
                height={row.imageHeight}
                sizes="(min-width: 1024px) 336px, 100vw"
                className="absolute inset-0 h-full w-full object-contain object-right"
              />
            </div>
          )}
          {row.badges && <SpecBadges badges={row.badges} />}
        </div>
      </div>
    </article>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="14" cy="14" r="13" stroke="#ffffff" strokeWidth="1.5" />
      <path
        d="M8.5 14.5l3.5 3.5 7.5-8"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RailMarker() {
  return (
    <div className="flex flex-shrink-0 flex-col items-center">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
          <path
            d="M5 8l7 7 7-7M5 14l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        aria-hidden
        className="mt-2 w-px flex-1 bg-gradient-to-b from-white/40 via-white/10 to-white/0"
      />
    </div>
  );
}

function SpecBadges({
  badges,
}: {
  badges: ReadonlyArray<SpecBadge>;
}) {
  return (
    <ul className="pointer-events-none absolute -left-5 top-1/2 hidden -translate-y-1/2 flex-col gap-2.5 lg:flex">
      {badges.map((b, i) => {
        const offsets = ["-translate-x-3", "translate-x-1.5", "-translate-x-1.5"];
        return (
          <li
            key={b.label}
            className={cn(
              "pointer-events-auto flex items-center gap-3 overflow-hidden rounded-[16px] border border-[#2c2d47] px-3 py-2.5 text-white backdrop-blur-[30px]",
              offsets[i],
            )}
            style={{
              backgroundImage:
                "linear-gradient(160deg, rgba(27,28,54,0.16) 24%, rgba(112,113,122,0.16) 66%)",
            }}
          >
            <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[13px] bg-white/[0.07] shadow-[0_0_0_1px_#2d2e48]">
              <BadgeIcon name={b.icon} />
            </span>
            <span className="flex flex-col">
              <span className="text-[10px] font-normal uppercase leading-[13px] tracking-[0.04em] text-white/90 md:text-[11px]">
                {b.label}
              </span>
              <span className="text-[13px] font-bold leading-[19px] tracking-[-0.31px] text-white">
                {b.value}
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function BadgeIcon({ name }: { name: SpecBadge["icon"] }) {
  const base = {
    viewBox: "0 0 32 32",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: "h-6 w-6 text-white",
  };
  switch (name) {
    case "shield":
      return (
        <svg {...base}>
          <path d="M16 4l10 4v9c0 6-4.5 10.5-10 11-5.5-.5-10-5-10-11V8z" />
          <path d="M11 16l3.5 3.5L21 13" />
        </svg>
      );
    case "target":
      return (
        <svg {...base}>
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="6" />
          <circle cx="16" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...base}>
          <path d="M4 16h5l3-8 4 16 3-8h9" />
        </svg>
      );
  }
}
