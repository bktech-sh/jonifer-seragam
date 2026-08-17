"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const PIXELS_PER_SECOND = 40;

export function TestimonialCarousel({
  images,
}: {
  images: string[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let frameId: number;
    let lastTime: number | null = null;

    const step = (time: number) => {
      if (lastTime === null) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!pausedRef.current) {
        const maxScroll = scroller.scrollWidth - scroller.clientWidth;
        if (maxScroll > 0) {
          const next = scroller.scrollLeft + PIXELS_PER_SECOND * delta;
          scroller.scrollLeft = next >= maxScroll ? 0 : next;
        }
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    const pause = () => {
      pausedRef.current = true;
    };
    const resume = () => {
      pausedRef.current = false;
    };

    scroller.addEventListener("pointerdown", pause);
    scroller.addEventListener("pointerup", resume);
    scroller.addEventListener("pointerleave", resume);
    scroller.addEventListener("mouseenter", pause);
    scroller.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(frameId);
      scroller.removeEventListener("pointerdown", pause);
      scroller.removeEventListener("pointerup", resume);
      scroller.removeEventListener("pointerleave", resume);
      scroller.removeEventListener("mouseenter", pause);
      scroller.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="scrollbar-hidden -mx-4 mt-10 flex gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:gap-6 sm:px-6 lg:-mx-8 lg:px-8"
    >
      {images.map((image) => (
        <div
          key={image}
          className="flex h-80 shrink-0 overflow-hidden rounded-2xl bg-[#EEF5F5] sm:h-96"
        >
          <Image
            src={image}
            alt="Testimoni pelanggan"
            width={600}
            height={800}
            loading="lazy"
            className="h-full w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}
