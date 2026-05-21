import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

const SITE_URL = "https://primedic.com.tr";
const TR_PATH = "/tr/privacy";
const EN_PATH = "/en/privacy";

const copy = {
  tr: {
    title: "Gizlilik Politikası",
    description:
      "Kişisel verilerinizin nasıl işlendiğine dair detaylar bu sayfada yakında yayınlanacaktır.",
    seoTitle: "Gizlilik Politikası | Primedic — Bilgin Tıp",
  },
  en: {
    title: "Privacy Policy",
    description:
      "Details about how your personal data is processed will be published on this page soon.",
    seoTitle: "Privacy Policy | Primedic — Bilgin Tıp",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = copy[locale] ?? copy.tr;
  const canonical = `${SITE_URL}${locale === "en" ? EN_PATH : TR_PATH}`;
  return {
    title: t.seoTitle,
    description: t.description,
    alternates: {
      canonical,
      languages: {
        "tr-TR": `${SITE_URL}${TR_PATH}`,
        "en-US": `${SITE_URL}${EN_PATH}`,
        "x-default": `${SITE_URL}${TR_PATH}`,
      },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  const t = copy[locale] ?? copy.tr;
  return (
    <PlaceholderPage
      locale={locale}
      title={t.title}
      description={t.description}
    />
  );
}
