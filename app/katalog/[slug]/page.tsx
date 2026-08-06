import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fallbackProductCategories, getCategoryBySlug } from "@/data/catalog";
import { buildWhatsAppLink } from "@/data/site";
import { PriceCalculator } from "@/components/katalog/price-calculator";
import { ProductGallery } from "@/components/katalog/product-gallery";

export async function generateStaticParams() {
  const categories = fallbackProductCategories;
  return categories.map((category) => ({ slug: category.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const categories = fallbackProductCategories;
  const category = getCategoryBySlug(categories, slug);

  if (!category) {
    return { title: "Kategori Tidak Ditemukan — Jonifer Seragam" };
  }

  return {
    title: `${category.name} — Katalog Jonifer Seragam`,
    description: category.description,
  };
}

export default async function KatalogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categories = fallbackProductCategories;
  const category = getCategoryBySlug(categories, slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <section className="bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/katalog"
            className="text-sm font-semibold text-[#3b8384] hover:text-[#1c1c1c]"
          >
            ← Kembali ke Katalog
          </Link>
          <h1 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
            {category.name}
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#1c1c1c]/70">
            {category.explanation}
          </p>

          <ProductGallery name={category.name} images={category.galleryImages} />
        </div>
      </section>

      {category.id === "lanyard" ? (
        <section className="bg-[#EEF5F5] py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-xl font-semibold tracking-tight text-[#1c1c1c] sm:text-2xl">
              Tertarik Pesan {category.name}?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#1c1c1c]/70">
              Konsultasikan kebutuhan dan jumlah pesanan langsung dengan admin kami via WhatsApp.
            </p>
            <a
              href={buildWhatsAppLink(
                `Hi Admin Jonifer Seragam, saya ingin memesan ${category.name}. Mohon info lebih lanjut, terima kasih.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#51ACAD] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3b8384]"
            >
              Order via WhatsApp
            </a>
          </div>
        </section>
      ) : (
        <section className="bg-[#EEF5F5] py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-xl font-semibold tracking-tight text-[#1c1c1c] sm:text-2xl">
              Hitung Estimasi Harga
            </h2>
            <div className="mt-6">
              <PriceCalculator categories={categories} fixedCategoryId={category.id} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
