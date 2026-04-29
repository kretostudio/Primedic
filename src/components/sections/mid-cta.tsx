import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getCtaBanner } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function MidCTA() {
  const locale = await getLocale();
  const ctaBanner = getCtaBanner(locale);

  return (
    <section
      id="hakkimizda"
      className="relative bg-white py-[96px]"
      aria-labelledby="cta-title"
    >
      <Container width="wide">
        <div className="flex flex-col items-center gap-[41px] text-center">
          <Reveal y={24}>
            <div className="flex flex-col items-center gap-3">
              <span className="inline-flex h-[36px] items-center justify-center rounded-[30px] border border-[#b21c1c] bg-white px-5 text-[16px] font-bold leading-none text-black md:text-[19px]">
                {ctaBanner.pretitle}
              </span>

              <h2
                id="cta-title"
                className="text-display-xl"
              >
                <span className="block whitespace-nowrap text-[#b21c1c]">
                  {ctaBanner.title}
                </span>
                <span className="block whitespace-nowrap text-black">
                  {ctaBanner.titleAccent}
                </span>
              </h2>

              <span
                aria-hidden
                className="h-[4px] w-[240px] max-w-[60%] bg-[#b21c1c]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} y={20}>
            <p className="text-lead-lg max-w-[1108px] font-medium text-[#2d2e2e]">
              {ctaBanner.description}
            </p>
          </Reveal>

          <Reveal delay={0.25} y={16}>
            <Link
              href={ctaBanner.actionHref}
              className="inline-flex h-[38px] items-center justify-center whitespace-nowrap rounded-[19px] border-2 border-[#b21c1c] bg-white px-5 text-[13px] font-medium leading-none text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white md:h-[45px] md:px-6 md:text-[16px] lg:text-[19px]"
            >
              {ctaBanner.actionLabel}
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
