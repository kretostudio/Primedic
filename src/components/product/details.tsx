import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SpecIcon } from "@/components/product/spec-icon";
import { getHeartsaveMypad } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function ProductDetails() {
  const locale = await getLocale();
  const heartsaveMypad = getHeartsaveMypad(locale);

  const { heading, description, cards } = heartsaveMypad.details;

  return (
    <section
      className="relative overflow-hidden py-[80px] text-white md:py-[112px]"
      style={{
        background:
          "linear-gradient(34.64deg, rgba(178, 28, 28, 0.9) 54%, rgba(26, 29, 33, 0.81) 89%), #ffffff",
      }}
    >

      <Container width="wide">
        <header className="mx-auto max-w-[660px] text-center">
          <h2
            className="mx-auto max-w-[405px] bg-clip-text text-[22px] font-semibold leading-[1.2] tracking-[-0.4px] text-transparent md:text-[27px] lg:text-[30px] lg:leading-[42px]"
            style={{
              backgroundImage:
                "radial-gradient(100% 45% at 50% 50%, #FFFFFF 30%, rgba(255,255,255,0.40) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {heading}
          </h2>
          <p className="mx-auto mt-5 text-[14px] font-normal leading-[1.3] tracking-[-0.35px] text-white md:text-[18px] lg:text-[21px] lg:leading-[26px]">
            {description}
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-[1052px] space-y-6 md:mt-16">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`grid gap-6 rounded-[29px] border border-white/15 p-5 md:p-8 lg:items-center lg:gap-10 lg:p-[58px] ${
                card.imageOnRight
                  ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,352px)]"
                  : "lg:grid-cols-[minmax(0,352px)_minmax(0,1fr)]"
              }`}
              style={{
                background:
                  "linear-gradient(63.23deg, rgba(0, 0, 0, 0.3) 25%, rgba(83, 84, 108, 0.3) 98%)",
              }}
            >
              <div
                className={`relative ${card.imageOnRight ? "lg:order-2" : "lg:order-1"}`}
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  width={card.imageWidth}
                  height={card.imageHeight}
                  sizes="(min-width: 1024px) 352px, 90vw"
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className={card.imageOnRight ? "lg:order-1" : "lg:order-2"}>
                <h3 className="text-[18px] font-semibold leading-[1.2] tracking-[-0.35px] text-white md:text-[21px] lg:text-[23px]">
                  {card.title}
                </h3>
                <p className="mt-4 text-[12px] font-normal leading-[1.3] tracking-[-0.25px] text-white md:text-[14px] lg:text-[15px] lg:leading-[19px]">
                  {card.description}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {card.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex h-[75px] flex-col items-center justify-center gap-1 border border-white bg-[rgba(197,39,39,0.13)] px-2 py-2.5 text-center"
                    >
                      <SpecIcon name={spec.icon} className="h-5 w-5 text-white" />
                      <dt className="text-[8px] font-normal uppercase leading-[11px] text-white md:text-[8px]">
                        {spec.label}
                      </dt>
                      <dd className="text-[10px] font-bold leading-[14px] tracking-[-0.25px] text-white md:text-[10px]">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
