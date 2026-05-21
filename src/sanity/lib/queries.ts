import { groq } from "next-sanity";

export const postsListQuery = groq`
  *[_type == "post" && language == $locale && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    featured,
    coverImage,
    "categories": categories[]->{ _id, title, "slug": slug.current }
  }
`;

export const featuredPostQuery = groq`
  *[_type == "post" && language == $locale && featured == true && defined(slug.current)]
    | order(publishedAt desc)[0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    coverImage,
    "categories": categories[]->{ _id, title, "slug": slug.current }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && language == $locale && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    coverImage,
    body,
    tags,
    seo,
    "categories": categories[]->{ _id, title, "slug": slug.current },
    "linkedTranslation": linkedTranslation->{
      "slug": slug.current,
      language
    }
  }
`;

export const postSlugsByLocaleQuery = groq`
  *[_type == "post" && language == $locale && defined(slug.current)][].slug.current
`;
