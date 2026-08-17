import Image from "next/image";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-10 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-[#3b8384] uppercase">
            Tentang Kami
          </p>
          <h2 className="font-heading mt-4 text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-4xl">
            Dibalik setiap seragam yang kami produksi, ada tanggung jawab untuk menjaga kepercayaan pelanggan.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#1c1c1c]/70">
            Kepercayaan pelanggan adalah alasan kami terus berkembang. Karena bagi kami, setiap seragam yang kami produksi akan menjadi bagian dari cerita, identitas, dan kebanggaan tim yang memakainya.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#1c1c1c]/50">
            Pilih bahan, tentukan detail sablon atau bordir, lalu produksi dengan
            quality control di setiap tahap. Cek estimasi biaya sendiri di halaman
            katalog sebelum menghubungi admin
          </p>
        </div>
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl">
          <Image
            src="https://ik.imagekit.io/jgcvqpss3/DSC_5457.jpg"
            alt="Ruang produksi dan showroom Jonifer Seragam"
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
