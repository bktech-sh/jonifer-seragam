"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { PortfolioProject } from "@/data/portofolio";
import { isVideoUrl } from "@/data/catalog";
import { buildWhatsAppLink } from "@/data/site";

export function PortfolioModal({
  project,
  onClose,
}: {
  project: PortfolioProject;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSrc = project.images[activeIndex];

  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % project.images.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (prev) => (prev - 1 + project.images.length) % project.images.length
        );
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project.images.length, onClose]);

  function goToNext() {
    setActiveIndex((prev) => (prev + 1) % project.images.length);
  }

  function goToPrev() {
    setActiveIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1c1c1c]/80 p-4"
      onClick={onClose}
    >
      <div
        className="flex h-[80vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white sm:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Carousel */}
        <div className="relative h-1/2 w-full shrink-0 bg-[#1c1c1c] sm:h-full sm:w-3/5">
          {isVideoUrl(activeSrc) ? (
            <video
              src={activeSrc}
              className="h-full w-full object-contain"
              controls
              autoPlay
              playsInline
            />
          ) : (
            <Image
              src={activeSrc}
              alt={`${project.name} ${activeIndex + 1}`}
              fill
              sizes="(min-width: 640px) 60vw, 100vw"
              className="object-contain"
            />
          )}

          {project.images.length > 1 && (
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
                {project.images.map((image, index) => (
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
            <h2 className="font-heading text-xl font-semibold text-[#1c1c1c]">
              {project.name}
            </h2>
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

          <a
            href={buildWhatsAppLink(
              `Hi Admin Jonifer Seragam, saya ingin buat pesanan seperti "${project.name}". Boleh minta info lebih lanjut?`
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
