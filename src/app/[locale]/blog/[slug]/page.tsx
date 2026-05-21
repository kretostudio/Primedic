import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { MenuBar } from "@/components/sections/menu-bar";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { PostBody } from "@/components/blog/portable-text";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, postSlugsByLocaleQuery } from "@/sanity/lib/queries";
import { routing } from "@/i18n/routing";
import { urlForImage } from "@/sanity/lib/image";
import type { Post } from "@/sanity/lib/types";
import { dummyPosts } from "@/lib/dummy-posts";
import { getLocale } from "next-intl/server";

const SITE_URL = "https://primedic.com.tr";
const DEFAULT_OG_IMAGE = "https://primedic.com.tr/og-image.png";
const DEFAULT_DESC_TR =
  "Primedic blog — kalp sağlığı, AED ve acil müdahale konularında uzman içerikler.";
const DEFAULT_DESC_EN =
  "Primedic blog — expert content on heart health, AED, and emergency response.";

export const revalidate = 60;

export async function generateStaticParams() {
  const perLocale = await Promise.all(
    routing.locales.map(async (locale) => {
      const slugs = await client.fetch<string[]>(postSlugsByLocaleQuery, {
        locale,
      });
      return (slugs ?? []).map((slug) => ({ locale, slug }));
    }),
  );
  const sanityParams = perLocale.flat();
  const dummyParams = dummyPosts.map((p) => ({
    locale: p.language,
    slug: p.slug,
  }));
  return [...sanityParams, ...dummyParams];
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const post =
    (await client.fetch<Post | null>(postBySlugQuery, { slug, locale })) ??
    (dummyPosts.find((p) => p.slug === slug && p.language === locale) as
      | Post
      | undefined) ??
    null;
  if (!post) {
    return {
      title:
        locale === "en"
          ? "Post not found — Primedic Blog"
          : "Yazı bulunamadı — Primedic Blog",
    };
  }

  const canonical = `${SITE_URL}/${locale}/blog/${post.slug}`;
  const title = post.seo?.title ?? `${post.title} | Primedic Blog`;
  const description = post.seo?.description ?? post.excerpt ?? undefined;
  const dummyCover = (post as Post & { coverUrl?: string }).coverUrl;
  const ogImage = dummyCover
    ? `${SITE_URL}${dummyCover}`
    : post.coverImage?.asset
      ? urlForImage(post.coverImage).width(1200).height(630).url()
      : undefined;

  // Build hreflang languages dynamically from linkedTranslation.
  // Only emit when the editor has linked a translation in Sanity Studio.
  const translation = post.linkedTranslation ?? null;
  let alternatesLanguages: Record<string, string> | undefined;
  if (translation?.slug && translation?.language && translation.language !== locale) {
    const trSlug = locale === "tr" ? post.slug : translation.slug;
    const enSlug = locale === "en" ? post.slug : translation.slug;
    alternatesLanguages = {
      "tr-TR": `${SITE_URL}/tr/blog/${trSlug}`,
      "en-US": `${SITE_URL}/en/blog/${enSlug}`,
      "x-default": `${SITE_URL}/tr/blog/${trSlug}`,
    };
  }

  return {
    title,
    description,
    alternates: {
      canonical,
      ...(alternatesLanguages && { languages: alternatesLanguages }),
    },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      locale: "tr_TR",
      siteName: "Primedic — Bilgin Tıp",
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630 }]
        : undefined,
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const sanityPost = await client.fetch<Post | null>(
    postBySlugQuery,
    { slug, locale },
    { next: { revalidate: 60, tags: ["post", `post:${slug}`] } },
  );
  const post =
    sanityPost ??
    (dummyPosts.find((p) => p.slug === slug && p.language === locale) as
      | Post
      | undefined) ??
    null;

  if (!post) notFound();

  const coverUrl = (post as Post & { coverUrl?: string }).coverUrl
    ? (post as Post & { coverUrl?: string }).coverUrl!
    : post.coverImage
      ? urlForImage(post.coverImage).width(2000).height(1125).url()
      : null;

  const canonical = `${SITE_URL}/${locale}/blog/${post.slug}`;
  const schemaDescription =
    post.seo?.description ??
    post.excerpt ??
    (locale === "en" ? DEFAULT_DESC_EN : DEFAULT_DESC_TR);
  const schemaImage = coverUrl ?? DEFAULT_OG_IMAGE;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: schemaDescription,
    image: schemaImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: "Primedic — Bilgin Tıp" },
    publisher: {
      "@type": "Organization",
      name: "Primedic — Bilgin Tıp",
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    inLanguage: locale === "en" ? "en-US" : "tr-TR",
  };

  const dateLabel = new Date(post.publishedAt).toLocaleDateString(
    locale === "en" ? "en-US" : "tr-TR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
  const category = post.categories?.[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <MenuBar />
      <main>
        <article className="bg-white">
          <div aria-hidden className="h-[112px] bg-[#3c0a0a] md:h-[112px]" />
          <header className="bg-white pt-[72px] pb-[72px] text-black md:pt-[108px] md:pb-[96px]">
            <Container>
              <div className="mx-auto max-w-[880px]">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-black/50 transition-colors hover:text-black"
                >
                  <span aria-hidden>←</span> Blog
                </Link>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-black/55">
                  {category ? (
                    <span className="inline-flex items-center rounded-[30px] border border-[#b21c1c] px-4 py-1 text-[12px] font-medium tracking-[0.2px] text-[#b21c1c]">
                      {category.title}
                    </span>
                  ) : null}
                  <time dateTime={post.publishedAt}>{dateLabel}</time>
                </div>

                <h1 className="mt-6 text-black">{post.title}</h1>

                {post.excerpt ? (
                  <p className="text-lead mt-6 text-black/70">{post.excerpt}</p>
                ) : null}
              </div>
            </Container>
          </header>

          <div className="bg-white pb-[96px] md:pb-[140px]">
            <Container>
              <div className="mx-auto -mt-[48px] max-w-[1120px] md:-mt-[72px]">
                {coverUrl ? (
                  <div className="relative aspect-[16/9] min-h-[220px] overflow-hidden rounded-[24px] bg-black/5 ring-1 ring-black/5">
                    <Image
                      src={coverUrl}
                      alt={post.coverImage?.alt ?? post.title}
                      width={2000}
                      height={1125}
                      sizes="(min-width: 1024px) 1100px, 92vw"
                      priority
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    aria-hidden
                    className="aspect-[16/9] min-h-[220px] rounded-[24px] bg-black/5 ring-1 ring-black/5"
                  />
                )}
              </div>

              <div className="mx-auto mt-16 max-w-[880px] md:mt-20">
                {post.body ? <PostBody value={post.body} /> : null}

                {post.tags && post.tags.length > 0 ? (
                  <ul className="mt-16 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-black/[0.04] px-4 py-1.5 text-[13px] font-medium text-black/75"
                      >
                        #{tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Container>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
