import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getUseCases } from "@/lib/get-content";
import { getLocale } from "next-intl/server";
import { UseCaseIcon } from "@/components/ui/use-case-icon";

export async function UseCases() {
  const locale = await getLocale();
  const useCases = getUseCases(locale);

  return (
    <section
      id="yonetmelik"
      className="relative bg-white py-[96px] md:py-[112px]"
      style={{
        backgroundImage:
          "linear-gradient(172deg, rgba(178, 28, 28, 0.9) 72.2%, rgba(26, 29, 33, 0.81) 96.95%)",
      }}
      aria-labelledby="use-cases-title"
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal y={20}>
            <span className="inline-flex h-[36px] items-center justify-center rounded-[30px] border border-[#6b8e6f] bg-white px-5 text-[19px] font-semibold text-black">
              {useCases.pretitle}
            </span>
          </Reveal>
          <Reveal delay={0.1} y={24}>
            <h2
              id="use-cases-title"
              className="mt-[31px] max-w-[660px] text-center font-medium leading-[1.2] text-white text-[24px] md:text-[30px] lg:text-[38px]"
            >
              {useCases.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2} y={20}>
            <p className="mt-[31px] max-w-[1052px] text-center font-normal leading-[1.25] text-white text-[16px] md:text-[20px] lg:text-[26px] lg:leading-[32px]">
              {useCases.description}
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:gap-10 xl:max-w-[860px] xl:mx-auto">
          {useCases.items.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 0.08} y={28}>
              <div
                className="relative h-full min-h-[223px] rounded-[19px] p-[19px] md:p-[19px]"
                style={{
                  backgroundImage:
                    "linear-gradient(73deg, rgba(0, 0, 0, 0.3) 25.25%, rgba(83, 84, 108, 0.3) 98%)",
                }}
              >
                <UseCaseIcon
                  name={item.icon}
                  className="h-[45px] w-[45px] text-white"
                />
                <div className="mt-[30px]">
                  <h3 className="text-[19px] font-bold leading-[22px] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-[6px] text-[16px] font-medium leading-[22px] text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <Link
            href={useCases.actionHref}
            className="inline-flex h-[45px] items-center justify-center whitespace-nowrap rounded-[19px] border-2 border-[#b21c1c] bg-white px-6 text-[19px] font-medium leading-none text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b21c1c]/40"
          >
            {useCases.actionLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
