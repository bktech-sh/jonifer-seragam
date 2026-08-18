"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { isVideoUrl } from "@/data/catalog";

type ProductGalleryProps = {
  name: string;
  images: string[];
  pages?: string[][];
};

const PAGE_SIZE = 4;
const AUTOPLAY_MS = 6000;

function tileSpanClass(index: number, total: number): string {
  if (total === 1) return "col-span-2 row-span-2";
  if (total === 2) return "col-span-2 row-span-1";
  if (index === 0) return "col-span-2 row-span-2";
  if (index === 1) return "col-span-2 row-span-1";
  return "col-span-1 row-span-1";
}

function PlayBadge() {
  return (
    <span className="absolute inset-0 flex items-center justify-center bg-black/20">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1c1c1c]">
        ▶
      </span>
    </span>
  );
}

export function ProductGallery({ name, images, pages: explicitPages }: ProductGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const pages = useMemo(() => {
    if (explicitPages) {
      let cursor = 0;
      return explicitPages.map((group) =>
        group.map((src) => ({ src, realIndex: cursor++ }))
      );
    }

    const chunks: { src: string; realIndex: number }[][] = [];
    for (let i = 0; i < images.length; i += PAGE_SIZE) {
      chunks.push(
        images.slice(i, i + PAGE_SIZE).map((src, j) => ({ src, realIndex: i + j }))
      );
    }
    return chunks;
  }, [images, explicitPages]);

  const scrollToPage = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = track.children[index] as HTMLElement | undefined;
    if (!target) return;
    track.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (lightboxIndex !== null || pages.length <= 1) return;

    const id = setInterval(() => {
      setPage((prev) => {
        const next = (prev + 1) % pages.length;
        scrollToPage(next);
        return next;
      });
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [lightboxIndex, pages.length, scrollToPage]);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setPage((prev) => (prev === index ? prev : index));
  }, []);

  const onPointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    dragStartX.current = event.clientX;
    dragScrollLeft.current = track.scrollLeft;
  }, []);

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !isDragging.current) return;
    track.scrollLeft = dragScrollLeft.current - (event.clientX - dragStartX.current);
  }, []);

  const endDrag = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    scrollToPage(page);
  }, [page, scrollToPage]);

  const close = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () =>
      setLightboxIndex((current) =>
        current === null ? null : (current - 1 + images.length) % images.length
      ),
    [images.length]
  );
  const showNext = useCallback(
    () =>
      setLightboxIndex((current) =>
        current === null ? null : (current + 1) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, close, showPrev, showNext]);

  const goToPage = useCallback(
    (index: number) => {
      const next = (index + pages.length) % pages.length;
      setPage(next);
      scrollToPage(next);
    },
    [pages.length, scrollToPage]
  );

  if (images.length === 0) return null;

  const activeSrc = lightboxIndex === null ? null : images[lightboxIndex];

  return (
    <>
      <div className="relative mt-6">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="flex snap-x snap-mandatory gap-0 overflow-x-auto scroll-smooth scrollbar-none"
      >
        {pages.map((pageImages, pageIndex) => (
          <div
            key={pageIndex}
            className="grid w-full flex-none snap-start grid-cols-4 auto-rows-35 gap-3 sm:auto-rows-60 lg:auto-rows-70"
          >
            {pageImages.map(({ src, realIndex }, index) => {
              const video = isVideoUrl(src);

              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => setLightboxIndex(realIndex)}
                  className={`group relative overflow-hidden rounded-xl bg-black/5 ${tileSpanClass(index, pageImages.length)}`}
                >
                  {video ? (
                    <video
                      src={src}
                      className="h-full w-full animate-fade-in object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <Image
                      src={src}
                      alt={`${name} ${realIndex + 1}`}
                      fill
                      loading={pageIndex === 0 && index === 0 ? undefined : "lazy"}
                      priority={pageIndex === 0 && index === 0}
                      sizes="(min-width: 1024px) 400px, 50vw"
                      className="animate-fade-in object-cover transition duration-300 group-hover:scale-105"
                    />
                  )}
                  {video && <PlayBadge />}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {pages.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goToPage(page - 1)}
            className="absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#51ACAD] text-white shadow transition hover:bg-[#3b8384] sm:left-2 sm:h-12 sm:w-12"
            aria-label="Galeri sebelumnya"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 -translate-x-0.5 sm:h-6 sm:w-6">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goToPage(page + 1)}
            className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#51ACAD] text-white shadow transition hover:bg-[#3b8384] sm:right-2 sm:h-12 sm:w-12"
            aria-label="Galeri berikutnya"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 translate-x-0.5 sm:h-6 sm:w-6">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </>
      )}
      </div>

      {pages.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {pages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setPage(index);
                scrollToPage(index);
              }}
              aria-label={`Halaman galeri ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === page ? "w-6 bg-[#51ACAD]" : "w-2 bg-[#1c1c1c]/20"
              }`}
            />
          ))}
        </div>
      )}

      {activeSrc !== null && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              close();
            }}
            className="absolute right-4 top-4 text-2xl text-white/80 hover:text-white"
            aria-label="Tutup"
          >
            ✕
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              className="absolute left-2 text-3xl text-white/80 hover:text-white sm:left-4"
              aria-label="Sebelumnya"
            >
              ‹
            </button>
          )}

          <div
            className="relative h-[80vh] w-[90vw] max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            {isVideoUrl(activeSrc) ? (
              <video
                src={activeSrc}
                className="h-full w-full rounded-lg object-contain"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <Image
                src={activeSrc}
                alt={`${name} ${lightboxIndex + 1}`}
                fill
                sizes="90vw"
                className="rounded-lg object-contain"
              />
            )}
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-2 text-3xl text-white/80 hover:text-white sm:right-4"
              aria-label="Berikutnya"
            >
              ›
            </button>
          )}

          <div className="absolute bottom-4 text-sm text-white/70">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
