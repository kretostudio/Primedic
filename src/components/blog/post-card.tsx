import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { urlForImage } from "@/sanity/lib/image";
import type { PostListItem } from "@/sanity/lib/types";

const PLACEHOLDER_IMAGE = "/placeholder-blog.jpg";

export function PostCard({ post }: { post: PostListItem }) {
  const category = post.categories?.[0];
  const imageUrl = post.coverUrl
    ? post.coverUrl
    : post.coverImage
      ? urlForImage(post.coverImage).width(1160).height(840).url()
      : PLACEHOLDER_IMAGE;

  return (
    <article className="group flex flex-col gap-4">
      <Link
        href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
        className="relative block aspect-[580/420] overflow-hidden rounded-[13px] bg-black/5 ring-1 ring-black/[0.04]"
        aria-label={post.title}
      >
        <Image
          src={imageUrl}
          alt={post.coverImage?.alt ?? post.title}
          width={1160}
          height={840}
          sizes="(min-width: 1024px) 27vw, (min-width: 640px) 40vw, 74vw"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-col gap-2.5">
        <h3 className="font-medium text-black transition-colors group-hover:text-[#b21c1c]">
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
            className="focus-visible:outline-none focus-visible:underline"
          >
            {post.title}
          </Link>
        </h3>

        {category ? (
          <span className="inline-flex w-fit items-center justify-center rounded-[24px] border border-[#b21c1c] px-4 py-1 text-[10px] font-medium leading-[13px] tracking-[0.2px] text-[#b21c1c]">
            {category.title}
          </span>
        ) : null}
      </div>
    </article>
  );
}
