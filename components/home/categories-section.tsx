import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/home-content";

export function CategoriesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
          Kategori Produk
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-8 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href="/katalog"
              className="group flex flex-col gap-2 overflow-hidden rounded-xl border border-black/5 transition-all duration-150 active:scale-[0.97] sm:gap-4 sm:rounded-2xl sm:active:scale-100 hover:shadow-lg hover:shadow-black/10"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1 px-3 pb-3 sm:px-5 sm:pb-6">
                <h3 className="font-heading text-sm font-semibold text-[#1c1c1c] sm:text-xl">
                  {category.name}
                </h3>
                <p className="text-xs leading-relaxed text-[#1c1c1c]/70 sm:text-sm">
                  {category.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#3b8384] sm:text-sm">
                  Lihat Detail
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
