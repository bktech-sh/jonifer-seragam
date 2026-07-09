"use client";

import { useEffect, useRef } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const PIXELS_PER_SECOND = 40;

export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
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
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.name}
          className="flex w-[85%] shrink-0 flex-col gap-4 rounded-2xl bg-[#EEF5F5] p-6 sm:w-[45%] sm:p-8 lg:w-[30%]"
        >
          <p className="text-base leading-relaxed text-[#1c1c1c]/80">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1c1c1c]">
              {testimonial.name}
            </p>
            <p className="text-sm text-[#1c1c1c]/60">{testimonial.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
