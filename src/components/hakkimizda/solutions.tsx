import { Container } from "@/components/ui/container";
import { getHakkimizda } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function HakkimizdaSolutions() {
  const locale = await getLocale();
  const hakkimizda = getHakkimizda(locale);
  const { title, description, cards } = hakkimizda.solutions;

  return (
    <section className="bg-gradient-to-b from-[#080e18] to-[#555c6a] py-[77px] md:py-[112px]">
      <Container width="wide">
        <header className="mx-auto flex max-w-[640px] flex-col items-center gap-5 text-center text-white md:gap-6">
          <h2 className="font-medium tracking-[0.2px]">
            {title}
          </h2>
          <p className="text-lead">
            {description}
          </p>
        </header>

        <ul className="mx-auto mt-13 grid max-w-[1120px] gap-10 md:mt-19 md:grid-cols-3 md:gap-8 lg:gap-13">
          {cards.map((card) => (
            <li
              key={card.number}
              className="flex flex-col items-center text-center text-white"
            >
              <NumberBadge value={card.number} />
              <h3 className="mt-6 font-bold">
                {card.title}
              </h3>
              <p className="text-body-lg mt-5 max-w-[320px] text-white/90">
                {card.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function NumberBadge({ value }: { value: string }) {
  return (
    <span
      aria-hidden
      className="relative flex h-[53px] w-[48px] items-center justify-center rounded-[6px] bg-white"
    >
      <span className="text-[38px] font-bold leading-none text-[#b21c1c]">
        {value}
      </span>
    </span>
  );
}
