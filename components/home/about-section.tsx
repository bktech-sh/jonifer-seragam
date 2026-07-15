import { siteConfig } from "@/data/site";
import { heroImages } from "@/data/home-content";
import { ImageCarousel } from "@/components/home/image-carousel";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-10 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-[#3b8384] uppercase">
            Tentang Kami
          </p>
          <h2 className="font-heading mt-4 text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-4xl">
            Partner produksi kaos, seragam, dan selempang custom.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#1c1c1c]/70">
            {siteConfig.name} melayani produksi dengan proses yang jelas dari
            pemilihan bahan sampai estimasi harga — cocok untuk kebutuhan
            personal, komunitas, hingga korporat.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#1c1c1c]/50">
            Pilih bahan, tentukan detail sablon atau bordir, lalu produksi dengan
            quality control di setiap tahap. Cek estimasi biaya sendiri di halaman
            katalog sebelum menghubungi admin — tidak ada kejutan harga di akhir.
          </p>
        </div>
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl">
          <ImageCarousel
            images={heroImages}
            alt="Ruang produksi dan showroom Jonifer Seragam"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
