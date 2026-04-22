"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getAksesuarlar } from "@/lib/get-content";
import { useLocale } from "next-intl";

const MANUAL_COOLDOWN_MS = 900;

export function AksesuarFeatureStrip() {
  const locale = useLocale();
  const aksesuarlar = getAksesuarlar(locale);
  const { featureStrip } = aksesuarlar;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const lastUserInteractionRef = useRef(0);
  const dragRef = useRef<{
    active: boolean;
    moved: boolean;
    startX: number;
    startScroll: number;
  }>({ active: false, moved: false, startX: 0, startScroll: 0 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const scroller = scrollerRef.current;
    if (!wrapper || !scroller) return;

    const markUserInteraction = () => {
      lastUserInteractionRef.current = Date.now();
    };

    const computeProgress = () => {
      const max = Math.max(1, scroller.scrollWidth - scroller.clientWidth);
      return Math.min(1, Math.max(0, scroller.scrollLeft / max));
    };

    const updateFromPageScroll = () => {
      // Skip if the user just interacted with the strip directly.
      if (Date.now() - lastUserInteractionRef.current < MANUAL_COOLDOWN_MS) {
        setProgress(computeProgress());
        return;
      }
      const max = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
      if (max === 0) return;
      const rect = wrapper.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = windowH;
      const end = -rect.height;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.min(1, Math.max(0, raw));
      scroller.scrollLeft = clamped * max;
      setProgress(clamped);
    };

    const onPageScroll = () => requestAnimationFrame(updateFromPageScroll);
    const onScrollerScroll = () => {
      setProgress(computeProgress());
    };

    const onWheel = (e: WheelEvent) => {
      // Treat vertical wheel as horizontal pan when cursor is over the strip.
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        scroller.scrollLeft += e.deltaY;
        markUserInteraction();
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragRef.current = {
        active: true,
        moved: false,
        startX: e.clientX,
        startScroll: scroller.scrollLeft,
      };
      scroller.setPointerCapture(e.pointerId);
      scroller.style.cursor = "grabbing";
      markUserInteraction();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragRef.current.active) return;
      const dx = e.clientX - dragRef.current.startX;
      if (Math.abs(dx) > 4) dragRef.current.moved = true;
      scroller.scrollLeft = dragRef.current.startScroll - dx;
      markUserInteraction();
    };

    const endDrag = (e: PointerEvent) => {
      if (!dragRef.current.active) return;
      dragRef.current.active = false;
      try {
        scroller.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
      scroller.style.cursor = "grab";
    };

    // Prevent click after a drag selection
    const onClickCapture = (e: MouseEvent) => {
      if (dragRef.current.moved) {
        e.preventDefault();
        e.stopPropagation();
        dragRef.current.moved = false;
      }
    };

    updateFromPageScroll();
    window.addEventListener("scroll", onPageScroll, { passive: true });
    window.addEventListener("resize", updateFromPageScroll);
    scroller.addEventListener("scroll", onScrollerScroll, { passive: true });
    scroller.addEventListener("wheel", onWheel, { passive: false });
    scroller.addEventListener("pointerdown", onPointerDown);
    scroller.addEventListener("pointermove", onPointerMove);
    scroller.addEventListener("pointerup", endDrag);
    scroller.addEventListener("pointercancel", endDrag);
    scroller.addEventListener("click", onClickCapture, true);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
      window.removeEventListener("resize", updateFromPageScroll);
      scroller.removeEventListener("scroll", onScrollerScroll);
      scroller.removeEventListener("wheel", onWheel);
      scroller.removeEventListener("pointerdown", onPointerDown);
      scroller.removeEventListener("pointermove", onPointerMove);
      scroller.removeEventListener("pointerup", endDrag);
      scroller.removeEventListener("pointercancel", endDrag);
      scroller.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
      aria-label="HeartSave myPAD özellikleri"
      role="region"
    >
      <div
        ref={scrollerRef}
        className="-mx-6 flex cursor-grab items-stretch gap-[20px] overflow-x-auto overscroll-x-contain px-6 py-8 pr-10 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ touchAction: "pan-y" }}
      >
        {featureStrip.map((card) => (
          <article
            key={card.id}
            className="flex w-[192px] shrink-0 flex-col rounded-[16px] border border-white/15 pb-4 shadow-[0_19px_38px_-12px_rgba(0,0,0,0.65)] md:w-[235px] xl:w-[256px] 2xl:w-[288px]"
            style={{
              backgroundImage:
                "linear-gradient(80deg, rgba(0,0,0,0.3) 25%, rgba(83,84,108,0.3) 98%)",
            }}
          >
            <div className="relative h-[160px] w-full overflow-hidden rounded-t-[16px] md:h-[200px] xl:h-[224px] 2xl:h-[256px]">
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={588}
                height={500}
                sizes="235px"
                draggable={false}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
            <p className="text-body-lg mt-3 px-4 text-center font-medium text-white">
              {card.label}
            </p>
          </article>
        ))}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#3d4452] to-transparent opacity-80 hidden md:block"
      />

      <div
        className="mt-5 h-[2px] w-full max-w-[224px] overflow-hidden rounded-full bg-white/15"
        aria-hidden
      >
        <div
          className="h-full bg-white/70 transition-[width] duration-150"
          style={{ width: `${Math.max(12, progress * 100)}%` }}
        />
      </div>

      <span className="sr-only" aria-live="polite">
        Fare ile sürükleyerek veya sayfayı kaydırarak aksesuar şeridini ilerletin.
      </span>
    </div>
  );
}
