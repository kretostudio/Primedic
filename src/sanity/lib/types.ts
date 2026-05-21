import type { PortableTextBlock } from "@portabletext/react";
import type { Image as SanityImage } from "sanity";

export type Locale = "tr" | "en";

export type CoverImage = SanityImage & { alt?: string };

export type CategoryRef = {
  _id: string;
  title: string;
  slug: string;
};

export type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  featured?: boolean;
  coverImage: CoverImage;
  coverUrl?: string;
  categories?: CategoryRef[];
};

export type Post = PostListItem & {
  body?: PortableTextBlock[];
  tags?: string[];
  seo?: { title?: string; description?: string };
  linkedTranslation?: { slug: string; language: Locale } | null;
};
