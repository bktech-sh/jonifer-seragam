import Image from "next/image";
import Link from "next/link";
import { portfolioPreview } from "@/data/home-content";

export function PortfolioPreviewSection() {
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
          {portfolioPreview.map((item) => (
            <div
              key={item.caption}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl ${
                item.large
                  ? "col-span-2 aspect-video lg:col-span-2 lg:row-span-2 lg:aspect-auto"
                  : "aspect-4/3"
              }`}
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                loading="lazy"
                sizes={
                  item.large
                    ? "(min-width: 1024px) 50vw, 100vw"
                    : "(min-width: 1024px) 25vw, 50vw"
                }
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1c1c1c]/80 via-[#1c1c1c]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-2.5 sm:p-4">
                <span className="w-fit rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white uppercase backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-xs">
                  {item.tag}
                </span>
                <p className="text-xs font-medium text-white sm:text-sm">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
