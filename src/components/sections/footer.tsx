import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { getFooterContent } from "@/lib/get-content";
import { getLocale } from "next-intl/server";

export async function Footer() {
  const locale = await getLocale();
  const footerContent = getFooterContent(locale);

  return (
    <footer
      className="py-[52px] md:py-[64px]"
      style={{
        backgroundImage:
          "linear-gradient(92deg, rgba(178, 28, 28, 0.9) 32.79%, rgba(26, 29, 33, 0.9) 105.32%), linear-gradient(#2a0505, #2a0505)",
      }}
    >
      <Container width="wide">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="flex items-start">
            <Image
              src="/logos/bilgin-tip-footer.svg"
              alt="Bilgin Tıp Medikal — 35. yıl"
              width={382}
              height={220}
              unoptimized
              className="h-auto w-[224px] object-contain md:w-[256px]"
            />
          </div>

          {/* Columns */}
          <div className="grid gap-8 md:grid-cols-[auto_auto_auto_1fr] md:items-start md:justify-items-end">
            {footerContent.companyColumns.map((col) => (
              <nav key={col.title} aria-label={col.title} className="min-w-[112px]">
                <h3 className="text-eyebrow text-white/60">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5 text-[12px] text-white/85">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="flex flex-col items-start md:items-end">
              <ul aria-label="Sosyal medya" className="flex gap-2.5">
                {footerContent.socials.map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-[#3c0a0a]"
                    >
                      <SocialIcon name={s.id} />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-13 border-t border-white/10 pt-5 text-center text-[10px] text-white/50">
          © {new Date().getFullYear()} Bilgin Tıp · Primedic HeartSave myPAD
        </div>
      </Container>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "facebook":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className="h-4 w-4">
          <path d="M12 10h2l.4-3H12V5.5c0-.9.3-1.5 1.6-1.5H14.5V1.3C14.3 1.3 13.4 1.2 12.4 1.2 10.3 1.2 9 2.4 9 4.6V7H7v3h2v8h3v-8z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-4 w-4">
          <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="14.2" cy="5.8" r="0.8" fill="currentColor" />
        </svg>
      );
    case "twitter":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className="h-4 w-4">
          <path d="M15 3h2.3l-5 5.7L18 17h-4.3l-3.4-4.4L6.4 17H4l5.4-6.2L4 3h4.4l3 4.1L15 3z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className="h-4 w-4">
          <path d="M5 4.3a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zM3.8 8h2.4v9H3.8V8zM8 8h2.3v1.3c.4-.7 1.2-1.5 2.7-1.5 2.3 0 3 1.5 3 3.7V17h-2.4v-4.9c0-1.2-.4-2-1.5-2-1 0-1.5.7-1.7 1.5V17H8V8z" />
        </svg>
      );
    default:
      return null;
  }
}
