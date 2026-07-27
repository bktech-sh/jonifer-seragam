import Image from "next/image";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="overflow-hidden bg-[#51ACAD] py-16 sm:py-20">
      <div className="relative mx-auto flex max-w-6xl flex-col items-end justify-center gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-start gap-6 sm:w-auto">
          <h2 className="font-heading max-w-lg text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Sudah tahu bahan dan jumlah pesanan? Cek estimasi harganya sekarang.
          </h2>
          <Link
            href="/katalog"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#3b8384] transition-colors hover:bg-[#EEF5F5]"
          >
            Lihat Katalog
          </Link>
        </div>
        <Image
          src="https://ik.imagekit.io/jgcvqpss3/Screenshot_2026-07-27_at_20.38.09-removebg-preview.png?updatedAt=1785159529252"
          alt="Ilustrasi produk Jonifer Seragam"
          width={320}
          height={320}
          className="absolute right-4 bottom-[-70%] h-auto w-36 shrink-0 sm:static sm:right-auto sm:bottom-auto sm:mb-[-10%] sm:w-36 lg:w-44"
        />
      </div>
    </section>
  );
}
