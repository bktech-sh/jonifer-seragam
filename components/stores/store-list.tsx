import Image from "next/image";
import { stores } from "@/data/stores";

export function StoreList() {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {stores.map((store) => (
            <div
              key={store.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#1c1c1c]/10"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  loading="lazy"
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF5F5] text-[#51ACAD]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h2 className="font-heading text-lg font-semibold text-[#1c1c1c] sm:text-xl">
                  {store.name}
                </h2>
                <p className="text-sm leading-relaxed text-[#1c1c1c]/70">
                  {store.address}
                </p>
                <p className="text-sm font-medium text-[#1c1c1c]/70">
                  {store.hours}
                </p>
                <a
                  href={store.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-[#51ACAD] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3b8384]"
                >
                  Buka di Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
