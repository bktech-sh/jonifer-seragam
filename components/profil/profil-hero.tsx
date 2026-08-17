import { siteConfig } from "@/data/site";
import { profilHeroImages } from "@/data/home-content";
import { ImageCarousel } from "@/components/home/image-carousel";

export function ProfilHero() {
  return (
    <section className="relative overflow-hidden bg-[#1c1c1c] py-16 sm:py-24">
      <ImageCarousel images={profilHeroImages} />
      <div className="absolute inset-0 bg-linear-to-r from-[#1c1c1c]/90 via-[#1c1c1c]/70 to-[#1c1c1c]/40" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-[0.2em] text-[#a9d6d6] uppercase">
          Profil Perusahaan
        </p>
        <h1 className="font-heading mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          Mengenal {siteConfig.name} Lebih Dekat
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Konveksi penyedia Seragam PDH, PDH 2in1, Tactical, Almamater, Rompi, Jaket terdepan di Kota Bukittinggi
        </p>
      </div>
    </section>
  );
}
