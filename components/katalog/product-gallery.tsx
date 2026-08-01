"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { isVideoUrl } from "@/data/catalog";

type ProductGalleryProps = {
  name: string;
  images: string[];
};

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

export function ProductGallery({ name, images }: ProductGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  if (images.length === 0) return null;

  const visibleCount = Math.min(images.length, 4);
  const visible = images.slice(0, visibleCount);
  const remaining = images.length - visibleCount;
  const activeSrc = lightboxIndex === null ? null : images[lightboxIndex];

  return (
    <>
      <div className="mt-6 grid grid-cols-4 auto-rows-27.5 gap-3 sm:auto-rows-32.5 lg:auto-rows-37.5">
        {visible.map((src, index) => {
          const isOverlayTile = index === visibleCount - 1 && remaining > 0;
          const video = isVideoUrl(src);

          return (
            <button
              key={src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className={`group relative overflow-hidden rounded-xl bg-black/5 ${tileSpanClass(index, visibleCount)}`}
            >
              {video ? (
                <video
                  src={src}
                  className="h-full w-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />
              ) : (
                <Image
                  src={src}
                  alt={`${name} ${index + 1}`}
                  fill
                  loading={index === 0 ? undefined : "lazy"}
                  priority={index === 0}
                  sizes="(min-width: 1024px) 400px, 50vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              )}
              {video && !isOverlayTile && <PlayBadge />}
              {isOverlayTile && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/50 text-lg font-semibold text-white">
                  +{remaining}
                </span>
              )}
            </button>
          );
        })}
      </div>

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
