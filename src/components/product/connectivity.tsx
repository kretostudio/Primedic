import Image from "next/image";
import { Container } from "@/components/ui/container";
import { getHeartsaveMypad } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function ProductConnectivity() {
  const locale = await getLocale();
  const heartsaveMypad = getHeartsaveMypad(locale);

  const { title, description, items } = heartsaveMypad.connectivity;

  return (
    <section className="relative overflow-hidden bg-white py-[70px] text-[#2D2E2E] md:py-[112px]">
      <Image
        src="/images/product/connectivity-screenshot-1.webp"
        alt="HeartSave myPAD bağlantı yönetim paneli ekran görüntüsü — cihaz durum takibi"
        width={696}
        height={532}
        className="pointer-events-none absolute bottom-[-160px] right-[-180px] hidden w-[640px] -rotate-[4.67deg] select-none lg:block"
      />
      <Image
        src="/images/product/connectivity-screenshot-2.webp"
        alt="HeartSave myPAD IoT konumlandırma haritası ekran görüntüsü"
        width={522}
        height={401}
        className="pointer-events-none absolute left-[-200px] top-[-40px] hidden w-[480px] rotate-[8.78deg] select-none lg:block"
      />

      <Container className="relative z-10">
        <header className="mx-auto max-w-[640px] text-center">
          <h2 className="text-[#b21c1c]">
            {title}
          </h2>
          <p className="text-lead mt-6 text-[#2D2E2E]">
            {description}
          </p>
        </header>

        <div className="mx-auto mt-12 grid max-w-[1152px] gap-5 md:grid-cols-2 md:gap-6">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[30px] border-2 border-[#b21c1c] p-8 md:p-11"
            >
              <h3 className="text-[#2D2E2E]">
                {item.title}
              </h3>
              <p className="text-body mt-5 text-[#2D2E2E]/90">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
