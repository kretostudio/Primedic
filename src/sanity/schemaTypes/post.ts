import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Yazısı / Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Dil / Language",
      type: "string",
      options: {
        list: [
          { title: "🇹🇷 Türkçe", value: "tr" },
          { title: "🇬🇧 English", value: "en" },
        ],
        layout: "radio",
      },
      initialValue: "tr",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "linkedTranslation",
      title: "Diğer Dildeki Versiyon / Translated Version",
      type: "reference",
      to: [{ type: "post" }],
      description:
        "Bu yazının diğer dildeki karşılığını seçin. TR post → EN versiyona, EN post → TR versiyona referans verir. hreflang için kullanılır. İki yönlü link için her iki postta da bu alan doldurulmalıdır.",
      options: {
        filter: ({ document }) => {
          const currentLanguage = (document as { language?: string })?.language;
          if (!currentLanguage) return { filter: "" };
          return {
            filter: "language != $currentLanguage",
            params: { currentLanguage },
          };
        },
      },
    }),
    defineField({
      name: "title",
      title: "Başlık / Title",
      type: "string",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Özet / Excerpt",
      type: "text",
      rows: 3,
      description:
        "Liste kartlarında ve SEO meta'sında gösterilir (≈160 karakter önerilir). / Shown in listing cards and SEO meta (≈160 chars).",
      validation: (Rule) => Rule.max(240),
    }),
    defineField({
      name: "coverImage",
      title: "Kapak Görseli / Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "İçerik / Content",
      type: "blockContent",
    }),
    defineField({
      name: "categories",
      title: "Kategoriler / Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      description:
        "Kategoriler postun diline göre filtrelenir. / Categories are filtered by the post's language.",
    }),
    defineField({
      name: "tags",
      title: "Etiketler / Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "publishedAt",
      title: "Yayın Tarihi / Publish Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Öne Çıkar / Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "title", title: "Meta Title", type: "string" },
        {
          name: "description",
          title: "Meta Description",
          type: "text",
          rows: 2,
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Yayın tarihi, yeni → eski",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      language: "language",
      media: "coverImage",
      date: "publishedAt",
    },
    prepare({ title, language, media, date }) {
      const flag = language === "en" ? "🇬🇧" : "🇹🇷";
      const subtitle = date
        ? new Date(date).toLocaleDateString(
            language === "en" ? "en-US" : "tr-TR",
          )
        : undefined;
      return { title: `${flag}  ${title}`, subtitle, media };
    },
  },
});
