import type { Metadata } from "next";
import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { HakkimizdaHero } from "@/components/hakkimizda/hero";
import { HakkimizdaIntro } from "@/components/hakkimizda/intro";
import { HakkimizdaSolutions } from "@/components/hakkimizda/solutions";
import { HakkimizdaStory } from "@/components/hakkimizda/story";
import { ProductCTA } from "@/components/product/cta";
import { hakkimizda } from "@/lib/content.hakkimizda";

const SITE_URL = "https://primedic.com.tr";
const CANONICAL = `${SITE_URL}/tr/hakkimizda`;

const meta = {
  tr: {
    title: "Hakkımızda — 35 Yıllık Medikal Tecrübe | Bilgin Tıp",
    description:
      "35 yılı aşkın tecrübesi ile Bilgin Tıp Medikal; ostomi, yara bakımı ve acil müdahale sistemleri alanlarında güvenilir çözüm ortağınız.",
    path: "/tr/hakkimizda",
  },
  en: {
    title: "About Us — 35 Years of Medical Excellence | Bilgin Tıp",
    description:
      "With over 35 years of experience, Bilgin Tıp Medikal is your trusted partner in ostomy, wound care and emergency response solutions.",
    path: "/en/about-us",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = meta[locale] ?? meta.tr;
  const canonical = `${SITE_URL}${t.path}`;

  return {
    title: t.title,
    description: t.description,
    keywords: [...hakkimizda.seo.keywords],
    alternates: {
      canonical,
      languages: {
        "tr-TR": `${SITE_URL}/tr/hakkimizda`,
        "en-US": `${SITE_URL}/en/about-us`,
        "x-default": `${SITE_URL}/tr/hakkimizda`,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: t.title,
      description: t.description,
      locale: locale === "en" ? "en_US" : "tr_TR",
      siteName: "Primedic — Bilgin Tıp",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${CANONICAL}#about`,
      url: CANONICAL,
      name: hakkimizda.seo.title,
      description: hakkimizda.seo.description,
      inLanguage: "tr-TR",
      isPartOf: { "@id": `${SITE_URL}#website` },
      about: {
        "@type": "Organization",
        name: "Bilgin Tıp Medikal",
        url: "https://www.bilgintip.com.tr",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hakkımızda",
          item: CANONICAL,
        },
      ],
    },
  ],
};

export default function HakkimizdaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MenuBar />
      <main className="bg-white">
        <HakkimizdaHero />
        <HakkimizdaIntro />
        <HakkimizdaSolutions />
        <HakkimizdaStory />
        <ProductCTA />
      </main>
      <Footer />
    </>
  );
}
