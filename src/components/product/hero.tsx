import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getHeartsaveMypad } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function ProductHero() {
  const locale = await getLocale();
  const heartsaveMypad = getHeartsaveMypad(locale);

  const { brand, tagline, ctaLabel, ctaHref, imageSrc, imageAlt } =
    heartsaveMypad.hero;

  return (
    <section className="relative isolate overflow-hidden lg:min-h-[785px]">
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(231.58deg, rgba(178, 28, 28, 0.9) 11.9%, rgba(26, 29, 33, 0.81) 60.7%)",
        }}
      />

      <Container width="wide">
        <div className="grid gap-6 pt-[104px] pb-[48px] md:pt-[120px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-0 lg:pt-[136px]">
          <div className="flex flex-col items-center justify-center text-center lg:pl-[4%] xl:pl-[8%] 2xl:pl-[10%]">
            <Reveal delay={0.1} y={24}>
              <h1 className="whitespace-nowrap text-[26px] font-bold leading-[1.15] tracking-[0.2px] text-white md:text-[32px] lg:text-[38px] lg:leading-[48px]">
                {brand}
              </h1>
            </Reveal>

            <Reveal delay={0.25} y={24}>
              <p className="mt-6 max-w-[435px] text-[18px] font-semibold leading-[1.2] tracking-[0.2px] text-white md:text-[24px] lg:mt-[30px] lg:text-[30px] lg:leading-[36px]">
                {tagline}
              </p>
            </Reveal>

            <Reveal delay={0.4} y={16}>
              <div className="mt-7 lg:mt-[32px]">
                <Link
                  href={ctaHref}
                  className="inline-flex h-[40px] items-center justify-center whitespace-nowrap rounded-[19px] border-2 border-[#b21c1c] bg-white px-6 text-[15px] font-medium text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3c0a0a] md:h-[45px] md:px-7 md:text-[17px] lg:text-[19px]"
                >
                  {ctaLabel}
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1023}
              height={998}
              priority
              sizes="(min-width: 1280px) 576px, (min-width: 1024px) 496px, 90vw"
              className="h-auto w-full max-w-[416px] object-contain lg:max-w-[496px] xl:max-w-[576px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
