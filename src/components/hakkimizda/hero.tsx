import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getHakkimizda } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function HakkimizdaHero() {
  const locale = await getLocale();
  const hakkimizda = getHakkimizda(locale);
  const { titleLine1, titleLine2, actionLabel, actionHref, tiles } =
    hakkimizda.hero;
  const [tallLeft, shortTop, shortBottom, tallRight] = tiles;

  return (
    <section
      className="relative isolate overflow-hidden rounded-bl-[48px] rounded-br-[48px] pt-[128px] pb-[80px] md:pt-[176px] md:pb-[112px]"
      style={{
        backgroundImage:
          "linear-gradient(256deg, rgba(178, 28, 28, 0.9) 4%, rgba(26, 29, 33, 0.81) 84%), radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 0%, rgba(26,29,33,0.85) 70%, #1a1d21 100%)",
      }}
    >
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
          <div className="flex flex-col items-center text-center">
            <Reveal delay={0.05} y={20}>
              <Image
                src="/logos/bilgin-tip-vectorized.webp"
                alt="Bilgin Tıp Medikal — 35. Yıl"
                width={319}
                height={184}
                priority
                className="mb-8 h-auto w-[200px] object-contain md:mb-10 md:w-[240px] lg:w-[256px]"
              />
            </Reveal>

            <Reveal delay={0.1} y={24}>
              <h1 className="text-[32px] font-bold leading-[1.2] tracking-[0.2px] text-white md:text-[40px] lg:text-[44px] lg:leading-[60px]">
                <span className="block">{titleLine1}</span>
                <span className="block">{titleLine2}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.3} y={16}>
              <Link
                href={actionHref}
                className="mt-8 inline-flex h-[40px] items-center justify-center whitespace-nowrap rounded-[20px] border-2 border-[#b21c1c] bg-white px-5 text-[13px] font-medium leading-none text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:h-[45px] md:px-7 md:text-[16px] lg:text-[19px]"
              >
                {actionLabel}
              </Link>
            </Reveal>
          </div>

          <div className="grid h-[368px] grid-cols-3 grid-rows-2 gap-3 md:h-[448px] md:gap-4">
            <HeroTile
              src={tallLeft.src}
              alt={tallLeft.alt}
              className="col-start-1 row-span-2"
              priority
            />
            <HeroTile
              src={shortTop.src}
              alt={shortTop.alt}
              className="col-start-2 row-start-1"
            />
            <HeroTile
              src={shortBottom.src}
              alt={shortBottom.alt}
              className="col-start-2 row-start-2"
            />
            <HeroTile
              src={tallRight.src}
              alt={tallRight.alt}
              className="col-start-3 row-span-2"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroTile({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] ring-1 ring-white/10 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={1040}
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 44vw"
        priority={priority}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
