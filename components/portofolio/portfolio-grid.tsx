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
            className="group flex flex-col gap-2 text-left"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl sm:rounded-2xl">
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
            <span className="w-fit rounded-full bg-[#EEF5F5] px-2 py-0.5 text-[10px] font-semibold text-[#3b8384] uppercase sm:text-xs">
              {item.category}
            </span>
            <p className="text-xs font-semibold text-[#1c1c1c] sm:text-sm">
              {item.client}
            </p>
            <p className="-mt-1 text-xs leading-relaxed text-[#1c1c1c]/70 sm:text-sm">
              {item.product}
            </p>
          </button>
        ))}
      </div>

      {activeItem && (
        <PortfolioModal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </>
  );
}
