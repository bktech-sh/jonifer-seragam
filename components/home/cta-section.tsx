import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bg-[#51ACAD] py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:px-6 lg:px-8">
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
    </section>
  );
}
