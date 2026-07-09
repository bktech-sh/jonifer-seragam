import Image from "next/image";
import { usps } from "@/data/home-content";

export function UspSection() {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
          Kenapa Jonifer Seragam
        </h2>
        <div className="mt-6 flex flex-col gap-5 sm:mt-10 sm:grid sm:grid-cols-3 sm:gap-10">
          {usps.map((usp, index) => (
            <div
              key={usp.title}
              className={`flex flex-row items-center gap-4 pb-5 sm:flex-col sm:items-stretch sm:gap-4 sm:border-none sm:pb-0 ${
                index < usps.length - 1 ? "border-b border-[#1c1c1c]/10" : ""
              }`}
            >
              <div className="relative aspect-square w-32 shrink-0 overflow-hidden rounded-2xl shadow-sm shadow-black/10 sm:aspect-4/3 sm:w-full sm:rounded-2xl sm:shadow-none">
                <Image
                  src={usp.image}
                  alt={usp.title}
                  fill
                  loading="lazy"
                  sizes="(min-width: 640px) 33vw, 128px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <div className="h-1.5 w-10 rounded-full bg-[#51ACAD]" />
                <h3 className="font-heading text-base font-semibold text-[#1c1c1c] sm:text-lg">
                  {usp.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#1c1c1c]/70 sm:text-sm">
                  {usp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
