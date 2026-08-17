import Image from "next/image";

export function CaraPemesananHero() {
  return (
    <section className="relative overflow-hidden bg-[#1c1c1c] py-16 sm:py-24">
      <Image
        src="https://ik.imagekit.io/jgcvqpss3/cara%20pemesanan_heading.png?tr=w-2000,q-80,f-auto"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#1c1c1c]/70" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-[0.2em] text-[#a9d6d6] uppercase">
          Cara Pemesanan
        </p>
        <h1 className="font-heading mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          Cara Pemesanan PDH di Jonifer Seragam
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Dari konsultasi kebutuhan sampai pesanan sampai di tangan Anda —
          begini alur pemesanan PDH di Jonifer Seragam.
        </p>
      </div>
    </section>
  );
}
