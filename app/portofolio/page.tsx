import type { Metadata } from "next";
import { getPortfolioHeroImages, getPortfolioSegments } from "@/data/portofolio";
import { PortfolioBrowser } from "@/components/portofolio/portfolio-browser";
import { ImageCarousel } from "@/components/home/image-carousel";

export const metadata: Metadata = {
  title: "Portofolio — Jonifer Seragam",
  description:
    "Lihat hasil produksi kaos, seragam, PDH, almamater, rompi, jaket custom, dan bordir dari Jonifer Seragam untuk berbagai klien.",
};

export default async function PortofolioPage() {
  const [segments, heroImages] = await Promise.all([
    getPortfolioSegments(),
    getPortfolioHeroImages(),
  ]);

  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-[320px] items-center overflow-hidden bg-[#1c1c1c] sm:min-h-[380px]">
        <ImageCarousel images={heroImages} alt="Portofolio hasil produksi Jonifer Seragam" />
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
          {segments.length === 0 ? (
            <p className="text-center text-sm text-[#1c1c1c]/60">
              Belum ada portofolio untuk ditampilkan.
            </p>
          ) : (
            <PortfolioBrowser segments={segments} />
          )}
        </div>
      </section>
    </div>
  );
}
