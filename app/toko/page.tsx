import type { Metadata } from "next";
import { StoreHero } from "@/components/stores/store-hero";
import { StoreList } from "@/components/stores/store-list";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Toko Kami — Jonifer Seragam",
  description:
    "Daftar lokasi toko Jonifer Seragam di Bukittinggi, kunjungi langsung untuk konsultasi bahan dan ambil pesanan.",
};

export default function StorePage() {
  return (
    <div className="flex flex-col">
      <StoreHero />
      <StoreList />
      <CtaSection />
    </div>
  );
}
