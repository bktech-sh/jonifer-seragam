"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioPreview } from "@/data/home-content";
import { PortfolioLightbox } from "@/components/home/portfolio-lightbox";

export function PortfolioPreviewSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const images = portfolioPreview.map((item) => item.image);

  return (
    <section className="bg-[#EEF5F5] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#3b8384] uppercase">
              Portofolio
            </p>
            <h2 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
              Hasil Produksi Kami
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[#1c1c1c]/70">
              Sebagian dokumentasi hasil produksi untuk klien personal, komunitas,
              hingga instansi.
            </p>
          </div>
          <Link
            href="/portofolio"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#3b8384] hover:text-[#1c1c1c]"
          >
            Lihat Semua Portofolio →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {portfolioPreview.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label="Lihat foto"
              className={`group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl ${
                item.large
                  ? "col-span-2 aspect-video lg:col-span-2 lg:row-span-2 lg:aspect-auto"
                  : "aspect-4/3"
              }`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                loading="lazy"
                sizes={
                  item.large
                    ? "(min-width: 1024px) 50vw, 100vw"
                    : "(min-width: 1024px) 25vw, 50vw"
                }
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <PortfolioLightbox
          images={images}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  );
}
