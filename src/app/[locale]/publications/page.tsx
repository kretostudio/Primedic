import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

const SITE_URL = "https://primedic.com.tr";
const TR_PATH = "/tr/publications";
const EN_PATH = "/en/publications";

const copy = {
  tr: {
    title: "Yayınlar",
    description:
      "Primedic ve Bilgin Tıp yayınları, kurumsal dokümanlar ve basın kitlerine bu sayfadan erişebileceksiniz.",
    seoTitle: "Yayınlar | Primedic — Bilgin Tıp",
  },
  en: {
    title: "Publications",
    description:
      "You'll be able to access Primedic and Bilgin Tıp publications, corporate documents, and press kits from this page.",
    seoTitle: "Publications | Primedic — Bilgin Tıp",
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

export default async function PublicationsPage({
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
