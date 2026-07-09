import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug, productCategories } from "@/data/catalog";
import { PriceCalculator } from "@/components/katalog/price-calculator";

export function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

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
  const category = getCategoryBySlug(slug);

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

          <div className="mt-6 grid grid-cols-3 gap-3">
            {category.galleryImages.map((src, index) => (
              <div
                key={src}
                className="relative aspect-square w-full overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={`${category.name} ${index + 1}`}
                  fill
                  loading={index === 0 ? undefined : "lazy"}
                  priority={index === 0}
                  sizes="(min-width: 1024px) 200px, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF5F5] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-[#1c1c1c] sm:text-2xl">
            Hitung Estimasi Harga
          </h2>
          <div className="mt-6">
            <PriceCalculator fixedCategoryId={category.id} />
          </div>
        </div>
      </section>
    </div>
  );
}
