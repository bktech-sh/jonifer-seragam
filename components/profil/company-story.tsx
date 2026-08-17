import Image from "next/image";

export function CompanyStory() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative order-2 aspect-4/3 w-full overflow-hidden rounded-3xl lg:order-1">
            <Image
              src="https://ik.imagekit.io/jgcvqpss3/toko/IMG_0665.HEIC?updatedAt=1784485325460?tr=w-800,q-75,f-auto"
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
              <span className="font-semibold text-[#1c1c1c]">Awal mula</span>{" "}
              Jonifer Group mulai berkiprah dalam industri bordir di Kota
              Bukittinggi dengan fokus sebagai vendor jasa bordir.{" "}
              <span className="font-semibold text-[#1c1c1c]">
                Lahirnya Jonifer Seragam
              </span>{" "}
              Dengan berpengalaman dalam industri tekstil selama lebih dari 20
              tahun, Jonifer Group telah mengembangkan sayap untuk meluncurkan
              unit bisnis-salah satunya Jonifer Seragam untuk melayani sektor
              pembuatan pakaian seragam untuk instansi/mahasiswa.
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
