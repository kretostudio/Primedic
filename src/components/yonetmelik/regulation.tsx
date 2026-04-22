import Image from "next/image";
import { Container } from "@/components/ui/container";
import { getYonetmelik } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

function ParagraphText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p className="text-lead text-white">
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={i} className="font-semibold">
              {part.slice(2, -2)}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

export async function YonetmelikRegulation() {
  const locale = await getLocale();
  const yonetmelik = getYonetmelik(locale);
  const { pretitle, title, chapters } = yonetmelik.regulation;
  const download = yonetmelik.download;

  return (
    <section
      className="relative isolate overflow-hidden bg-white py-[70px] md:py-[112px]"
      style={{
        backgroundImage:
          "linear-gradient(111.27deg, rgba(178, 28, 28, 0.9) 48.04%, rgba(26, 29, 33, 0.81) 90.38%)",
      }}
    >
      <Container width="wide">
        <header className="mx-auto flex max-w-[880px] flex-col items-center text-center">
          <span className="inline-flex h-[36px] items-center justify-center rounded-full border border-[#6b8e6f] bg-white px-5 text-[13px] font-semibold leading-none text-black md:text-[16px] lg:text-[19px]">
            {pretitle}
          </span>

          <h2 className="mt-10 max-w-[662px] text-[24px] font-semibold leading-[1.2] text-white md:text-[32px] lg:text-[38px]">
            {title}
          </h2>
        </header>

        <div className="mx-auto mt-16 max-w-[1155px] space-y-20">
          {chapters.map((chapter) => (
            <div key={chapter.number}>
              <header className="mx-auto max-w-[990px] text-center">
                <h3 className="text-white">
                  {chapter.number}
                </h3>
                <p className="text-[22px] font-semibold leading-[1.2] text-white md:text-[26px] lg:text-[30px] lg:leading-[42px]">
                  {chapter.title}
                </p>
              </header>

              <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
                {chapter.articles.map((article) => (
                  <article key={article.heading}>
                    <h4 className="font-bold text-white lg:leading-[50px]">
                      {article.heading}
                    </h4>
                    <div className="mt-4 space-y-3 md:mt-6 md:space-y-4">
                      {article.paragraphs.map((para, i) => (
                        <ParagraphText key={i} text={para} />
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-5 md:mt-24">
          <Image
            src="/images/yonetmelik/pdf-icon.svg"
            alt="PDF belgesi"
            width={166}
            height={172}
            unoptimized
            className="h-[96px] w-auto md:h-[128px]"
          />
          <a
            href={download.href}
            download
            className="inline-flex h-[38px] items-center justify-center whitespace-nowrap rounded-[19px] border-2 border-[#b21c1c] bg-white px-5 text-[13px] font-bold text-[#b21c1c] transition-colors hover:bg-[#b21c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3c0a0a] md:h-[45px] md:px-6 md:text-[16px] lg:text-[19px]"
          >
            {download.label}
          </a>
        </div>
      </Container>
    </section>
  );
}
