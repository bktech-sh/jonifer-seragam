import Image from "next/image";
import Link from "next/link";
import { buildWhatsAppLink, siteConfig } from "@/data/site";

const categories = [
  {
    name: "PDH Standar",
    description: "Pakaian Dinas Harian dengan potongan standar, rapi untuk kebutuhan kantor.",
    image:
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "PDH Tunik",
    description: "PDH model tunik untuk seragam instansi maupun organisasi.",
    image:
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "PDH Tactical",
    description: "PDH tactical dengan bahan dan jahitan yang lebih kuat untuk lapangan.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Almamater",
    description: "Jaket almamater untuk kampus, sekolah, atau organisasi kemahasiswaan.",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Rompi",
    description: "Rompi custom untuk kerja lapangan, event, atau seragam komunitas.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Jaket Custom",
    description: "Jaket custom dengan desain dan bahan sesuai kebutuhan.",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Bordir",
    description: "Layanan bordir presisi untuk logo, nama, atau detail lainnya.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=70",
  },
];

const steps = [
  {
    number: "1",
    title: "Pilih Bahan",
    description: "Tentukan jenis kain sesuai kebutuhan dan budget.",
  },
  {
    number: "2",
    title: "Atur Jumlah & Custom",
    description: "Masukkan jumlah pesanan, titik bordir, dan jumlah warna.",
  },
  {
    number: "3",
    title: "Lihat Estimasi",
    description: "Total harga muncul otomatis, tanpa perlu tanya dulu.",
  },
  {
    number: "4",
    title: "Order via WhatsApp",
    description: "Kirim ringkasan pesanan langsung ke admin dalam satu klik.",
  },
];

const testimonials = [
  {
    quote:
      "Prosesnya jelas dari awal, harga sudah kelihatan sebelum order. Hasil sablonnya juga rapi dan sesuai contoh.",
    name: "Rangga P.",
    role: "Ketua Panitia Acara Kampus",
  },
  {
    quote:
      "Seragam kantor kami dikerjakan tepat waktu dan kualitas bahannya konsisten untuk pesanan ratusan pcs.",
    name: "Dewi S.",
    role: "HR Manager, Perusahaan Swasta",
  },
];

const portfolioPreview = [
  {
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=70",
    caption: "Kaos polos custom",
    tag: "Kaos",
    large: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=70",
    caption: "Seragam komunitas",
    tag: "Seragam",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&w=800&q=70",
    caption: "PDH formal instansi",
    tag: "PDH",
  },
  {
    image:
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=70",
    caption: "Setelan jas & jaket",
    tag: "Jaket Custom",
  },
  {
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=70",
    caption: "Variasi warna & bahan",
    tag: "Bordir",
  },
];

const usps = [
  {
    title: "Bahan Pilihan",
    description:
      "Cotton Combed hingga Cotton Bambu — kami hanya pakai bahan yang sudah teruji nyaman dan awet, tidak mudah melar, dan warnanya tahan lama meski dicuci berkali-kali.",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Sablon & Bordir Presisi",
    description:
      "Detail rapi, warna tajam, tahan lama — dikerjakan tim berpengalaman dengan quality control di setiap tahap, dari desain sampai finishing akhir.",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Harga Transparan",
    description:
      "Hitung estimasi harga sendiri di halaman katalog sebelum order. Tidak ada biaya tersembunyi, tidak perlu nego bolak-balik lewat chat.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=70",
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
            Your Trustworthy Uniform Vendor
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
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#3b8384] uppercase">
              Tentang Kami
            </p>
            <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-[#1c1c1c] sm:text-4xl">
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
            <Image
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1000&q=75"
              alt="Ruang produksi dan showroom Jonifer Seragam"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Kategori Produk */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
            Kategori Produk
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                href="/katalog"
                className="group flex flex-col gap-4 overflow-hidden rounded-2xl border border-black/5 transition-shadow hover:shadow-lg hover:shadow-black/10"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1 px-5 pb-6">
                  <h3 className="font-heading text-xl font-semibold text-[#1c1c1c]">
                    {category.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1c1c1c]/70">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Order */}
      <section className="bg-[#EEF5F5] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
            Cara Order
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-start gap-3">
                <span className="font-heading flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#51ACAD] text-sm font-semibold text-white">
                  {step.number}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-base font-semibold text-[#1c1c1c]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1c1c1c]/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
            Kenapa Jonifer Seragam
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {usps.map((usp) => (
              <div key={usp.title} className="flex flex-col gap-4">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={usp.image}
                    alt={usp.title}
                    fill
                    loading="lazy"
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-1.5 w-10 rounded-full bg-[#51ACAD]" />
                  <h3 className="font-heading text-lg font-semibold text-[#1c1c1c]">
                    {usp.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1c1c1c]/70">
                    {usp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-[#EEF5F5] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-[#3b8384] uppercase">
                Portofolio
              </p>
              <h2 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
                Hasil Produksi Kami
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[#1c1c1c]/70">
                Sebagian dokumentasi hasil produksi untuk klien personal, komunitas,
                hingga instansi.
              </p>
            </div>
            <Link
              href="/portofolio"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#3b8384] hover:text-[#1c1c1c]"
            >
              Lihat Semua Portofolio →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {portfolioPreview.map((item) => (
              <div
                key={item.caption}
                className={`group relative overflow-hidden rounded-2xl ${
                  item.large
                    ? "aspect-4/3 sm:col-span-2 sm:aspect-video lg:col-span-2 lg:row-span-2 lg:aspect-auto"
                    : "aspect-4/3"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  loading="lazy"
                  sizes={
                    item.large
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  }
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1c1c1c]/80 via-[#1c1c1c]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4">
                  <span className="w-fit rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white uppercase backdrop-blur-sm">
                    {item.tag}
                  </span>
                  <p className="text-sm font-medium text-white">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
            Kata Mereka
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col gap-4 rounded-2xl bg-[#EEF5F5] p-6 sm:p-8"
              >
                <p className="text-base leading-relaxed text-[#1c1c1c]/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-[#1c1c1c]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#1c1c1c]/60">{testimonial.role}</p>
                </div>
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
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#3b8384] transition-colors hover:bg-[#EEF5F5]"
          >
            Buka Kalkulator Harga
          </Link>
        </div>
      </section>
    </div>
  );
}
