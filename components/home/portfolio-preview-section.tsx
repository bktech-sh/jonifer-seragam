import Link from "next/link";
import { getPortfolioHeroImages } from "@/data/portofolio";
import { ProductGallery } from "@/components/katalog/product-gallery";

export async function PortfolioPreviewSection() {
  const images = await getPortfolioHeroImages();

  if (images.length === 0) return null;

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

        <ProductGallery name="Portofolio" images={images} autoplay={false} />
      </div>
    </section>
  );
}
