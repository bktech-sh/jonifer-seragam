import type { Metadata } from "next";
import { ArtikelHero } from "@/components/artikel/artikel-hero";
import { ArtikelCard } from "@/components/artikel/artikel-card";
import { artikelData } from "@/data/artikel";

export const metadata: Metadata = {
  title: "Artikel — Jonifer Seragam",
  description:
    "Tips memilih bahan, teknik sablon dan bordir, serta panduan order seragam custom dari tim Jonifer Seragam.",
};

export default function ArtikelPage() {
  return (
    <div className="flex flex-col">
      <ArtikelHero />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {artikelData.map((artikel) => (
              <ArtikelCard key={artikel.slug} artikel={artikel} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
