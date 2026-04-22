"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { getHeartsaveMypad } from "@/lib/get-content";
import { useLocale } from "next-intl";

export function ProductVideo() {
  const locale = useLocale();
  const heartsaveMypad = getHeartsaveMypad(locale);

  const { youtubeId, heading, description, playLabel } = heartsaveMypad.video;
  const [playing, setPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <section className="relative overflow-hidden py-[70px] md:py-[90px]">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(256.46deg, rgba(197, 39, 39, 0.92) 4%, rgba(26, 29, 33, 0.94) 96%)",
        }}
      />

      <Container width="wide">
        <header className="mx-auto mb-10 max-w-[640px] text-center md:mb-12">
          <h2 className="text-white">{heading}</h2>
          <p className="text-lead mt-3 text-white/80">{description}</p>
        </header>

        <div className="relative mx-auto w-full max-w-[1150px] overflow-hidden rounded-[19px] border border-white/15 bg-black/30 md:rounded-[32px]">
          <div className="relative aspect-video w-full">
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={heading}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={playLabel}
                className="group absolute inset-0 h-full w-full cursor-pointer"
              >
                <Image
                  src={thumbnailUrl}
                  alt={heading}
                  width={1280}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 1437px"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                  <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white/95 shadow-2xl transition-transform group-hover:scale-110 md:h-[77px] md:w-[77px]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="#b21c1c"
                      className="ml-1 h-6 w-6 md:h-8 md:w-8"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
