import Image from "next/image";
import Link from "next/link";
import type { ArtikelItem } from "@/data/artikel";

function formatTanggal(dateString: string) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArtikelCard({ artikel }: { artikel: ArtikelItem }) {
  return (
    <Link
      href={`/artikel/${artikel.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-md transition-all hover:border-[#51ACAD]/40 hover:shadow-xl hover:shadow-black/5"
    >
      <div className="relative h-52 w-full overflow-hidden bg-black/5">
        <Image
          src={artikel.coverImage}
          alt={artikel.title}
          fill
          sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="text-xs font-semibold tracking-wide text-[#3b8384] uppercase">
          {formatTanggal(artikel.publishedAt)}
        </p>
        <h3 className="font-heading text-lg font-semibold leading-snug text-[#1c1c1c] transition-colors group-hover:text-[#3b8384] sm:text-xl">
          {artikel.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-[#1c1c1c]/70">
          {artikel.excerpt}
        </p>

        <div className="mt-auto flex items-center gap-1 pt-4 text-sm font-semibold text-[#3b8384] transition-all group-hover:gap-2">
          Baca Selengkapnya
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
        </div>
      </div>
    </Link>
  );
}
