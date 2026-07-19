import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artikelData } from "@/data/artikel";
import { ArtikelContent } from "@/components/artikel/artikel-content";
import { ArtikelSidebar } from "@/components/artikel/artikel-sidebar";

export async function generateStaticParams() {
  return artikelData.map((artikel) => ({ slug: artikel.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artikel = artikelData.find((item) => item.slug === slug);

  if (!artikel) {
    return { title: "Artikel Tidak Ditemukan — Jonifer Seragam" };
  }

  return {
    title: `${artikel.title} — Jonifer Seragam`,
    description: artikel.excerpt,
  };
}

export default async function ArtikelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artikel = artikelData.find((item) => item.slug === slug);

  if (!artikel) {
    notFound();
  }

  const formattedDate = new Date(artikel.publishedAt).toLocaleDateString(
    "id-ID",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      <div className="mb-8">
        <Link
          href="/artikel"
          className="inline-flex items-center text-sm font-semibold text-[#3b8384] transition-colors hover:text-[#1c1c1c]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
            aria-hidden="true"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Artikel
        </Link>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <article className="lg:w-3/4">
          <div className="relative mb-8 h-[260px] w-full overflow-hidden rounded-2xl shadow-lg sm:h-[360px] md:h-[440px]">
            <Image
              src={artikel.coverImage}
              alt={artikel.title}
              fill
              priority
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-cover"
            />
          </div>

          <header className="mb-8 border-b border-black/10 pb-6">
            <span className="inline-block rounded-full bg-[#EEF5F5] px-3 py-1 text-sm font-semibold text-[#3b8384]">
              {formattedDate}
            </span>
            <h1 className="font-heading mt-4 text-2xl leading-tight font-semibold text-[#1c1c1c] sm:text-3xl md:text-4xl">
              {artikel.title}
            </h1>
          </header>

          <ArtikelContent content={artikel.content} />
        </article>

        <div className="lg:w-1/4">
          <ArtikelSidebar currentSlug={artikel.slug} />
        </div>
      </div>
    </div>
  );
}
