import Image from "next/image";
import { Container } from "@/components/ui/container";
import { getHeartsaveMypad } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function ProductOverview() {
  const locale = await getLocale();
  const heartsaveMypad = getHeartsaveMypad(locale);

  const { title, description, groups } = heartsaveMypad.overview;

  return (
    <section className="relative overflow-hidden bg-white py-[58px] text-[#2D2E2E] md:py-[90px]">
      <Image
        src="/images/product/heartbeat-left.svg"
        alt="Kalp ritmi dalgası — sol dekoratif EKG çizgisi"
        width={384}
        height={184}
        unoptimized
        className="pointer-events-none absolute left-0 top-[128px] hidden w-[218px] select-none md:block lg:top-[140px] lg:w-[270px] xl:w-[308px]"
      />
      <Image
        src="/images/product/heartbeat-right.svg"
        alt="Kalp ritmi dalgası — sağ dekoratif EKG çizgisi"
        width={375}
        height={184}
        unoptimized
        className="pointer-events-none absolute right-0 top-[128px] hidden w-[218px] select-none md:block lg:top-[140px] lg:w-[270px] xl:w-[308px]"
      />

      <Container>
        <div className="relative z-10 mx-auto max-w-[672px] text-center">
          <h2
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "radial-gradient(100% 45% at 50% 50%, #9F2322 0%, #70717A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </h2>
          <p className="text-lead mt-6 text-[#2D2E2E]/85">
            {description}
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-12 max-w-[848px] space-y-12 md:mt-16 md:space-y-16">
          {groups.map((group) => (
            <div key={group.tag}>
              <div className="mb-8 flex justify-start">
                <span className="inline-flex items-center rounded-full border border-[#b21c1c] bg-white px-4 py-1.5 text-[13px] font-normal leading-none text-[#b21c1c] md:text-[16px]">
                  {group.tag}
                </span>
              </div>

              <ul className="grid gap-x-10 gap-y-10 md:grid-cols-3">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <h3 className="text-[18px] font-bold leading-[1.25] text-[#2D2E2E] md:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="text-body mt-4 text-[#2D2E2E]/85">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-12 h-px w-full bg-[#b21c1c]/30 md:mt-14" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
