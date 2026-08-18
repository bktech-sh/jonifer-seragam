import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  fallbackProductCategories,
  getCategoryBySlug,
  getKatalogFolderImages,
  getKatalogGalleryImages,
} from "@/data/catalog";
import { buildWhatsAppLink } from "@/data/site";
import { PriceCalculator } from "@/components/katalog/price-calculator";
import { ProductGallery } from "@/components/katalog/product-gallery";

const BORDIR_SERAGAM_SLUG = "bordir-seragam";
const BORDIR_HERO_IMAGE = "https://ik.imagekit.io/jgcvqpss3/katalog-detail/Heading.png";
const BORDIR_SUB_KATALOG = [
  { title: "Bordir Standar", folder: "/katalog-detail/bordir-standar" },
  { title: "Bordir Timbul", folder: "/katalog-detail/bordir-timbul" },
];

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

  const isBordirSeragam = category.id === BORDIR_SERAGAM_SLUG;

  const liveGalleryImages = isBordirSeragam
    ? []
    : await getKatalogGalleryImages(category.id);
  const galleryImages =
    liveGalleryImages.length > 0 ? liveGalleryImages : category.galleryImages;

  const subKatalog = isBordirSeragam
    ? await Promise.all(
        BORDIR_SUB_KATALOG.map(async (item) => {
          const images = await getKatalogFolderImages(item.folder);
          return { ...item, images: images.length > 0 ? images : [category.image] };
        })
      )
    : [];

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

          {isBordirSeragam ? (
            <>
              <div className="relative mt-6 mx-auto w-full overflow-hidden rounded-2xl">
                <Image
                  src={BORDIR_HERO_IMAGE}
                  alt={category.name}
                  width={1600}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 1152px, 100vw"
                  className="mx-auto h-auto w-full object-contain"
                />
              </div>

              {subKatalog.map((item) => (
                <div key={item.title} className="mt-10 first:mt-8">
                  <h2 className="font-heading text-lg font-semibold text-[#1c1c1c] sm:text-xl">
                    {item.title}
                  </h2>
                  <ProductGallery name={item.title} images={item.images} />
                </div>
              ))}
            </>
          ) : (
            <ProductGallery name={category.name} images={galleryImages} />
          )}
        </div>
      </section>

      {["lanyard", "bordir-seragam", "vendor-bordir"].includes(category.id) ? (
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
