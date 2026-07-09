import Image from "next/image";
import Link from "next/link";
import { buildWhatsAppLink, siteConfig } from "@/data/site";

const usps = [
  {
    title: "Bahan Pilihan",
    description:
      "Cotton Combed hingga Cotton Bambu — kami hanya pakai bahan yang sudah teruji nyaman dan awet.",
  },
  {
    title: "Sablon & Bordir Presisi",
    description:
      "Detail rapi, warna tajam, tahan lama — dikerjakan tim berpengalaman dengan quality control ketat.",
  },
  {
    title: "Harga Transparan",
    description:
      "Hitung estimasi harga sendiri sebelum order. Tidak ada biaya tersembunyi.",
  },
];

export default function HomePage() {
  const waHref = buildWhatsAppLink(
    "Hi Admin Jonifer Seragam, saya ingin tanya-tanya soal produk."
  );

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden sm:min-h-[680px]">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=2000&q=80"
          alt="Tumpukan kaos custom hasil produksi Jonifer Seragam"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#1c1c1c]/85 via-[#1c1c1c]/60 to-[#1c1c1c]/30" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <span className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#a9d6d6] uppercase">
            <span className="h-px w-4 bg-[#a9d6d6]" />
            Konveksi Custom
          </span>
          <h1 className="font-heading max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.name} — {siteConfig.tagline}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {siteConfig.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/katalog"
              className="inline-flex items-center justify-center rounded-full bg-[#51ACAD] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3b8384]"
            >
              Hitung Estimasi Harga
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Ringkasan singkat */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
              Partner produksi kaos, seragam, dan selempang custom.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[#1c1c1c]/70">
            {siteConfig.name} melayani produksi kaos, seragam komunitas/perusahaan,
            hingga selempang dengan proses yang jelas dari pemilihan bahan sampai
            estimasi harga. Cocok untuk kebutuhan personal, komunitas, hingga
            korporat.
          </p>
        </div>
      </section>

      {/* USP */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
            Kenapa Jonifer Seragam
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {usps.map((usp) => (
              <div key={usp.title} className="flex flex-col gap-2">
                <div className="h-1.5 w-10 rounded-full bg-[#51ACAD]" />
                <h3 className="font-heading text-lg font-semibold text-[#1c1c1c]">
                  {usp.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#1c1c1c]/70">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#51ACAD] py-16 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading max-w-lg text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Sudah tahu bahan dan jumlah pesanan? Cek estimasi harganya sekarang.
          </h2>
          <Link
            href="/katalog"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#3b8384] transition-colors hover:bg-[#EEE5E1]"
          >
            Buka Kalkulator Harga
          </Link>
        </div>
      </section>
    </div>
  );
}
