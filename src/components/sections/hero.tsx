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
    <section className="relative isolate overflow-hidden bg-[#3c0a0a] pt-[160px] pb-[80px] md:pt-[200px] md:pb-[120px]">
      <Image
        src="/images/hero/backdrop.webp"
        alt="Primedic HeartSave myPAD hero arkaplanı — kırmızı gradyan ışık efekti"
        width={1920}
        height={1503}
        priority
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center select-none"
      />

      <Container width="wide">
        <div className="relative flex flex-col items-center text-center">
          <div className="relative z-10 flex flex-col items-center">
            <Reveal delay={0.1} y={20}>
              <Pretitle>{hero.pretitle}</Pretitle>
            </Reveal>

            <Reveal delay={0.2} y={28}>
              <h1 className="text-display mt-8 max-w-[900px] text-balance text-white sm:max-w-none">
                {hero.titleLine1} {hero.titleLine2}
              </h1>
            </Reveal>

            <Reveal delay={0.35} y={24}>
              <p className="text-lead mt-6 max-w-[820px] text-white/75">
                {hero.description}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.5} y={40} duration={0.7}>
            <div className="pointer-events-none relative z-0 -mt-10 flex w-full justify-center md:-mt-14 lg:-mt-20">
              <Image
                src="/images/hero/composition.webp"
                alt="HeartSave myPAD — kompakt defibrilatör cihazı: LTE & Wifi bağlantı, CPR geri bildirimi, IP66 dayanıklılık, 1.1 kg, 5 yıl batarya, pediatrik mod"
                width={1248}
                height={1248}
                priority
                sizes="(min-width: 1024px) 780px, (min-width: 640px) 520px, 85vw"
                className="h-auto w-full max-w-[780px] object-contain"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
