import type { Metadata } from "next";
import Image from "next/image";
import { portfolioItems } from "@/data/portofolio";
import { PortfolioGrid } from "@/components/portofolio/portfolio-grid";

export const metadata: Metadata = {
  title: "Portofolio — Jonifer Seragam",
  description:
    "Lihat hasil produksi kaos, seragam, PDH, almamater, rompi, jaket custom, dan bordir dari Jonifer Seragam untuk berbagai klien.",
};

export default function PortofolioPage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-[320px] items-center overflow-hidden sm:min-h-[380px]">
        <Image
          src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=2000&q=80"
          alt="Portofolio hasil produksi Jonifer Seragam"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#1c1c1c]/85 via-[#1c1c1c]/60 to-[#1c1c1c]/30" />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#a9d6d6] uppercase">
            Portofolio
          </p>
          <h1 className="font-heading mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Hasil Kerja Kami
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Sebagian dokumentasi produksi untuk klien personal, komunitas,
            hingga instansi. Klik salah satu untuk lihat detail dan foto lainnya.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PortfolioGrid items={portfolioItems} />
        </div>
      </section>
    </div>
  );
}
