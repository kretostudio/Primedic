import Image from "next/image";
import { Container } from "@/components/ui/container";

export function BilginTipBand() {
  return (
    <section
      aria-label="Bilgin Tıp Medikal — 35. yıl"
      className="bg-white py-11 md:py-[52px]"
    >
      <Container>
        <div className="flex items-center justify-center">
          <Image
            src="/logos/bilgin-tip.webp"
            alt="Bilgin Tıp Medikal — 35. yıl"
            width={345}
            height={199}
            sizes="(min-width: 768px) 276px, 48vw"
            className="h-auto w-full max-w-[276px] object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
