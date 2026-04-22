import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getYonetmelik } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function YonetmelikHero() {
  const locale = await getLocale();
  const yonetmelik = getYonetmelik(locale);
  const { title, linkText, linkHref, bodyText } = yonetmelik.hero;

  return (
    <section className="relative isolate overflow-hidden bg-[#080e18]">
      <Image
        src="/images/yonetmelik/hero.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 object-cover object-center select-none"
      />
      <Container width="wide" className="relative z-10">
        <div className="flex min-h-[512px] flex-col justify-end pt-[160px] pb-[96px] md:pt-[208px] md:pb-[128px] lg:min-h-[690px]">
          <Reveal delay={0.1} y={28}>
            <h1 className="max-w-[1055px] text-[28px] font-bold uppercase leading-[1.1] text-white md:text-[36px] lg:text-[48px]">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.25} y={24} className="mt-10 max-w-[1200px] text-[16px] font-light leading-[1.3] tracking-[1.1px] text-white md:mt-12 md:text-[22px] md:tracking-[1.3px] lg:text-[29px] lg:tracking-[1.45px]">
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline decoration-solid underline-offset-[6px] transition-colors hover:text-white/80"
            >
              {linkText}
            </a>
            <span>{bodyText}</span>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
