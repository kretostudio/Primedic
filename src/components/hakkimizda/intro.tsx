import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { getHakkimizda } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function HakkimizdaIntro() {
  const locale = await getLocale();
  const hakkimizda = getHakkimizda(locale);
  const { paragraphs, actionLabel, actionHref } = hakkimizda.intro;

  return (
    <section className="bg-white py-[96px] text-[#2d2e2e] md:py-[140px]">
      <Container width="wide">
        <div className="mx-auto flex max-w-[1404px] flex-col items-center text-center">
          <div className="space-y-8 md:space-y-10">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[16px] font-normal leading-[1.55] tracking-[0.2px] text-black md:text-[20px] md:leading-[1.45] lg:text-[24px] lg:leading-[36px]"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-14 md:mt-20">
            {actionHref.startsWith("http") ? (
              <a
                href={actionHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[48px] items-center justify-center whitespace-nowrap rounded-[24px] border-2 border-[#b21c1c] bg-white px-6 text-[16px] font-medium leading-none text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b21c1c]/40 md:h-[56px] md:px-10 md:text-[20px] lg:text-[24px]"
              >
                {actionLabel}
              </a>
            ) : (
              <Link
                href={actionHref}
                className="inline-flex h-[48px] items-center justify-center whitespace-nowrap rounded-[24px] border-2 border-[#b21c1c] bg-white px-6 text-[16px] font-medium leading-none text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b21c1c]/40 md:h-[56px] md:px-10 md:text-[20px] lg:text-[24px]"
              >
                {actionLabel}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
