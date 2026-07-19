"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { PortfolioItem } from "@/data/portofolio";
import { buildWhatsAppLink } from "@/data/site";

export function PortfolioModal({
  item,
  onClose,
}: {
  item: PortfolioItem;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [item]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % item.images.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (prev) => (prev - 1 + item.images.length) % item.images.length
        );
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item.images.length, onClose]);

  function goToNext() {
    setActiveIndex((prev) => (prev + 1) % item.images.length);
  }

  function goToPrev() {
    setActiveIndex(
      (prev) => (prev - 1 + item.images.length) % item.images.length
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.product}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1c1c1c]/80 p-4"
      onClick={onClose}
    >
      <div
        className="flex h-[80vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white sm:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Carousel */}
        <div className="relative h-1/2 w-full shrink-0 bg-[#1c1c1c] sm:h-full sm:w-3/5">
          <Image
            src={item.images[activeIndex]}
            alt={`${item.product} ${activeIndex + 1}`}
            fill
            sizes="(min-width: 640px) 60vw, 100vw"
            className="object-cover"
          />

          {item.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrev}
                aria-label="Foto sebelumnya"
                className="absolute top-1/2 left-2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-[#1c1c1c] transition-colors hover:bg-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Foto berikutnya"
                className="absolute top-1/2 right-2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-[#1c1c1c] transition-colors hover:bg-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
                {item.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Ke foto ${index + 1}`}
                    className={`h-1.5 cursor-pointer rounded-full transition-all ${
                      index === activeIndex ? "w-5 bg-white" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Detail */}
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="w-fit rounded-full bg-[#EEF5F5] px-2.5 py-1 text-xs font-semibold text-[#3b8384] uppercase">
              {item.category}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup"
              className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#1c1c1c]/60 transition-colors hover:bg-[#EEF5F5] hover:text-[#1c1c1c]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h2 className="font-heading text-xl font-semibold text-[#1c1c1c]">
            {item.client}
          </h2>
          <p className="text-sm font-semibold text-[#3b8384]">{item.product}</p>
          <p className="text-sm leading-relaxed text-[#1c1c1c]/70">
            {item.description}
          </p>

          <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/5 pt-4">
            {item.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-xs text-[#1c1c1c]/50 uppercase">
                  {spec.label}
                </dt>
                <dd className="mt-0.5 text-sm font-medium text-[#1c1c1c]">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={buildWhatsAppLink(
              `Hi Admin Jonifer Seragam, saya ingin buat pesanan seperti "${item.product}" yang dibuat untuk ${item.client}. Boleh minta info lebih lanjut?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center rounded-full bg-[#51ACAD] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3b8384]"
          >
            Tanya Pesanan Serupa
          </a>
        </div>
      </div>
    </div>
  );
}
