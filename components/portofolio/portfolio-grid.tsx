"use client";

import { useState } from "react";
import Image from "next/image";
import type { PortfolioItem } from "@/data/portofolio";
import { PortfolioModal } from "@/components/portofolio/portfolio-modal";

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={item.product}
            type="button"
            onClick={() => setActiveItem(item)}
            className="group flex flex-col gap-2 overflow-hidden rounded-xl border border-black/5 text-left transition-all hover:border-[#51ACAD]/40 hover:shadow-lg hover:shadow-black/5 sm:gap-3 sm:rounded-2xl"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden">
              <Image
                src={item.images[0]}
                alt={item.product}
                fill
                loading={index < 4 ? undefined : "lazy"}
                priority={index < 4}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-1 px-2 pb-2 sm:px-3 sm:pb-3">
              <span className="w-fit rounded-full bg-[#EEF5F5] px-2 py-0.5 text-[10px] font-semibold text-[#3b8384] uppercase sm:text-xs">
                {item.category}
              </span>
              <p className="text-xs font-semibold text-[#1c1c1c] sm:text-sm">
                {item.client}
              </p>
              <p className="text-xs leading-relaxed text-[#1c1c1c]/70 sm:text-sm">
                {item.product}
              </p>
              <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#3b8384] transition-colors group-hover:text-[#1c1c1c] sm:text-sm">
                Lihat Detail
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <PortfolioModal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </>
  );
}
