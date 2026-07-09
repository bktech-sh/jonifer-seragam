import { siteConfig } from "@/data/site";

export function ProfilHero() {
  return (
    <section className="bg-[#1c1c1c] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-[0.2em] text-[#a9d6d6] uppercase">
          Profil Perusahaan
        </p>
        <h1 className="font-heading mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          Mengenal {siteConfig.name} Lebih Dekat
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Partner produksi kaos, seragam, dan selempang custom yang mengutamakan
          kualitas, kecepatan, dan transparansi harga.
        </p>
      </div>
    </section>
  );
}
