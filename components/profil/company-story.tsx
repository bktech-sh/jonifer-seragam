import Image from "next/image";
import { siteConfig } from "@/data/site";

export function CompanyStory() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative order-2 aspect-4/3 w-full overflow-hidden rounded-3xl lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1000&q=75"
              alt="Ruang produksi dan showroom Jonifer Seragam"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#3b8384] uppercase">
              Cerita Kami
            </p>
            <h2 className="font-heading mt-4 text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
              Dari konveksi kecil menjadi partner produksi terpercaya
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#1c1c1c]/70">
              {siteConfig.name} berawal dari kebutuhan sederhana: membantu
              komunitas dan bisnis kecil mendapatkan kaos dan seragam custom
              tanpa proses yang berbelit. Seiring waktu, kami memperluas kapasitas
              produksi untuk melayani pesanan dalam jumlah besar, mulai dari
              instansi hingga perusahaan.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#1c1c1c]/70">
              Yang tidak berubah adalah komitmen kami terhadap kualitas bahan,
              presisi sablon dan bordir, serta transparansi harga — semua bisa
              dihitung sendiri oleh pelanggan sebelum memutuskan order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
