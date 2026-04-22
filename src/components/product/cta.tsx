import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { getHeartsaveMypad } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function ProductCTA() {
  const locale = await getLocale();
  const heartsaveMypad = getHeartsaveMypad(locale);

  const { pretitle, title, description, actionLabel, actionHref } =
    heartsaveMypad.cta;

  return (
    <section className="bg-white py-[77px] text-[#2D2E2E] md:py-[112px]">
      <Container>
        <div className="mx-auto flex max-w-[1108px] flex-col items-center text-center">
          <span className="inline-flex h-[36px] items-center justify-center rounded-full border border-[#b21c1c] bg-white px-5 text-[16px] font-bold leading-none text-[#2D2E2E] md:text-[19px]">
            {pretitle}
          </span>

          <h2
            className="text-display mt-5 max-w-[768px] bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #b21c1c 38%, #2D2E2E 73%)",
            }}
          >
            {title}
          </h2>

          <div className="mt-5 h-[4px] w-[192px] bg-[#b21c1c] md:w-[240px]" />

          <p className="text-lead-lg mx-auto mt-10 max-w-[880px] font-medium text-[#2D2E2E]">
            {description}
          </p>

          <div className="mt-10">
            <Link
              href={actionHref}
              className="inline-flex h-[38px] items-center justify-center whitespace-nowrap rounded-[19px] border-2 border-[#b21c1c] bg-white px-5 text-[13px] font-medium text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b21c1c]/40 md:h-[45px] md:px-6 md:text-[16px] lg:text-[19px]"
            >
              {actionLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
