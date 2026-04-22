import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Pretitle } from "@/components/ui/pretitle";
import { Reveal } from "@/components/ui/reveal";
import { getHero } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function Hero() {
  const locale = await getLocale();
  const hero = getHero(locale);

  return (
    <section className="relative isolate overflow-hidden bg-[#3c0a0a] pt-[140px] pb-[60px] md:pt-[160px] md:pb-[80px]">
      <Image
        src="/images/hero/backdrop.webp"
        alt="Primedic HeartSave myPAD hero arkaplanı — kırmızı gradyan ışık efekti"
        width={1920}
        height={1503}
        priority
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center select-none"
      />

      <Container>
        <div className="relative mx-auto flex max-w-[1100px] flex-col items-center text-center">
          <div className="relative z-10 flex flex-col items-center">
            <Reveal delay={0.1} y={20}>
              <Pretitle>{hero.pretitle}</Pretitle>
            </Reveal>

            <Reveal delay={0.2} y={28}>
              <h1 className="mt-7 max-w-[720px] text-balance text-[30px] font-semibold leading-[1.2] text-white md:text-[40px] lg:text-[46px]">
                {hero.titleLine1} {hero.titleLine2}
              </h1>
            </Reveal>

            <Reveal delay={0.35} y={24}>
              <p className="mt-4 max-w-[620px] text-[15px] leading-[1.55] tracking-[-0.3px] text-white/90 md:text-[17px] md:leading-[26px]">
                {hero.description}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.5} y={40} duration={0.7} className="w-full">
            <div className="pointer-events-none relative z-0 mt-8 flex w-full justify-center md:mt-10">
              <Image
                src="/images/hero/composition.webp"
                alt="HeartSave myPAD — kompakt defibrilatör cihazı: LTE & Wifi bağlantı, CPR geri bildirimi, IP66 dayanıklılık, 1.1 kg, 5 yıl batarya, pediatrik mod"
                width={1248}
                height={1248}
                priority
                sizes="(min-width: 1280px) 940px, (min-width: 1024px) 820px, (min-width: 640px) 620px, 92vw"
                className="h-auto w-full max-w-[940px] object-contain"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
