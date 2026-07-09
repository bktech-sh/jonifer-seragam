import Image from "next/image";
import Link from "next/link";
import { buildWhatsAppLink, siteConfig } from "@/data/site";

export function HeroSection() {
  const waHref = buildWhatsAppLink(
    "Hi Admin Jonifer Seragam, saya ingin tanya-tanya soal produk."
  );

  return (
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
          Your Trustworthy Uniform Vendor
        </span>
        <h1 className="font-heading max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
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
            Lihat Katalog
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
  );
}
