import Image from "next/image";
import { Container } from "@/components/ui/container";

export function BlogHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#080e18] pt-[144px] pb-[96px] md:pt-[192px] md:pb-[128px]">
      <Image
        src="/images/blog/hero.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-10 object-cover object-center select-none"
      />
      <Container width="wide">
        <div className="relative mx-auto flex max-w-[576px] flex-col items-center gap-6 text-center text-white">
          <h1 className="font-normal tracking-[0.2px]">
            {title}
          </h1>
          <p className="text-lead text-white/90">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
