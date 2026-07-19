import type { Metadata } from "next";
import { CaraPemesananHero } from "@/components/cara-pemesanan/cara-pemesanan-hero";
import { CaraPemesananSteps } from "@/components/cara-pemesanan/cara-pemesanan-steps";
import { CaraPemesananCtaSection } from "@/components/cara-pemesanan/cara-pemesanan-cta-section";

export const metadata: Metadata = {
  title: "Cara Pemesanan — Jonifer Seragam",
  description:
    "Alur pemesanan PDH di Jonifer Seragam, dari konsultasi kebutuhan, penawaran harga, DP, desain, produksi, hingga pengiriman.",
};

export default function CaraPemesananPage() {
  return (
    <div className="flex flex-col">
      <CaraPemesananHero />
      <CaraPemesananSteps />
      <CaraPemesananCtaSection />
    </div>
  );
}
