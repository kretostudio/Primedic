import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getIletisim } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function IletisimHero() {
  const locale = await getLocale();
  const iletisim = getIletisim(locale);
  const { title, description } = iletisim.hero;

  return (
    <section className="relative isolate overflow-hidden bg-[#080e18] pt-[144px] pb-[96px] md:pt-[192px] md:pb-[128px]">
      <Image
        src="/images/iletisim/hero.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-10 object-cover object-center select-none"
      />

      <Container width="wide">
        <div className="mx-auto flex max-w-[624px] flex-col items-center gap-6 text-center text-white">
          <Reveal delay={0.1} y={24}>
            <h1 className="font-normal tracking-[0.2px]">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.25} y={20}>
            <p className="text-lead text-white/90">
              {description.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
