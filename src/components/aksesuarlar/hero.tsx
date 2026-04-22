import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getAksesuarlar } from "@/lib/get-content";
import { getLocale } from "next-intl/server";
import { AksesuarFeatureStrip } from "./feature-strip";

export async function AksesuarHero() {
  const locale = await getLocale();
  const aksesuarlar = getAksesuarlar(locale);
  const { hero } = aksesuarlar;

  return (
    <section
      className="relative isolate overflow-hidden pt-[115px] pb-[51px] md:pt-[154px] md:pb-[77px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #080e18 0%, #2b3240 50%, #3d4452 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[77px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.15) 100%)",
        }}
      />
      <Container width="wide">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10">
          <div className="flex flex-col gap-5">
            <Reveal delay={0.1} y={24}>
              <h1 className="font-bold tracking-[0.2px] text-white">
                {hero.title}
              </h1>
            </Reveal>
            <Reveal delay={0.25} y={20}>
              <p className="text-lead max-w-[422px] text-white/90">
                {hero.description}
              </p>
            </Reveal>
            <Reveal delay={0.4} y={16}>
              <div>
                <Link
                  href={hero.actionHref}
                  className="inline-flex h-[32px] items-center justify-center whitespace-nowrap rounded-[16px] border-2 border-[#b21c1c] bg-white px-4 text-[11px] font-medium leading-none text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:h-[36px] md:px-6 md:text-[13px] lg:text-[15px]"
                >
                  {hero.actionLabel}
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative h-[269px] w-full md:h-[333px]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={1220}
              height={1232}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <AksesuarFeatureStrip />
        </div>
      </Container>
    </section>
  );
}
