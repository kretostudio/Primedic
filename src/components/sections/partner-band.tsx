import Image from "next/image";
import { Container } from "@/components/ui/container";

export function PartnerBand() {
  return (
    <section
      aria-label="Primedic — Designed & Developed in Germany"
      className="bg-white py-[38px]"
    >
      <Container>
        <div className="flex items-center justify-center">
          <Image
            src="/logos/primedic-german-approved.webp"
            alt="Designed & Developed in Germany — PRIMEDIC Saves Life. Everywhere."
            width={672}
            height={141}
            sizes="(min-width: 768px) 540px, 64vw"
            className="h-auto w-full max-w-[540px] object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
