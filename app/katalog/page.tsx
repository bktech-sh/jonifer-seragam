import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getStartingPrice, productCategories } from "@/data/catalog";
import { formatRupiah } from "@/lib/calculator";

export const metadata: Metadata = {
  title: "Katalog Produk — Jonifer Seragam",
  description:
    "Jelajahi katalog kaos, seragam, PDH, almamater, rompi, jaket custom, dan bordir dari Jonifer Seragam. Lihat pilihan bahan dan estimasi harga tiap kategori.",
};

export default function KatalogPage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-[320px] items-center overflow-hidden sm:min-h-[380px]">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2000&q=80"
          alt="Katalog produk Jonifer Seragam"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#1c1c1c]/85 via-[#1c1c1c]/60 to-[#1c1c1c]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#a9d6d6] uppercase">
            Katalog
          </p>
          <h1 className="font-heading mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Pilih Kategori Produk
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Lihat pilihan bahan tiap kategori dan hitung estimasi harga sesuai
            kebutuhan pesananmu.
          </p>
        </div>
      </section>

      {/* Category list */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-[#1c1c1c] sm:text-2xl">
            Semua Kategori
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:gap-5">
            {productCategories.map((category) => (
              <Link
                key={category.id}
                href={`/katalog/${category.id}`}
                className="group flex gap-4 overflow-hidden rounded-2xl border border-black/5 p-3 transition-all hover:border-[#51ACAD]/40 hover:shadow-lg hover:shadow-black/5 sm:gap-6 sm:p-4"
              >
                <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-xl sm:w-40">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    loading="lazy"
                    sizes="(min-width: 640px) 160px, 96px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-base font-semibold text-[#1c1c1c] sm:text-xl">
                      {category.name}
                    </h3>
                    <span className="rounded-full bg-[#EEF5F5] px-2.5 py-0.5 text-[10px] font-semibold text-[#3b8384] uppercase sm:text-xs">
                      {category.fabricTypes.length} pilihan bahan
                    </span>
                  </div>
                  <p className="hidden text-sm leading-relaxed text-[#1c1c1c]/70 sm:block">
                    {category.description}
                  </p>
                  <div className="mt-1 flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold text-[#3b8384] sm:text-sm">
                      Mulai dari {formatRupiah(getStartingPrice(category))}/pcs
                    </p>
                    <span className="hidden items-center gap-1 text-sm font-semibold text-[#1c1c1c]/40 transition-colors group-hover:text-[#3b8384] sm:flex">
                      Lihat Detail
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
