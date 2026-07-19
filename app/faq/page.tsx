import type { Metadata } from "next";
import { FaqHero } from "@/components/faq/faq-hero";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { FaqCtaSection } from "@/components/faq/faq-cta-section";

export const metadata: Metadata = {
  title: "FAQ — Jonifer Seragam",
  description:
    "Jawaban atas pertanyaan yang sering ditanyakan seputar pemesanan, produksi, pembayaran, dan pengiriman di Jonifer Seragam.",
};

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <FaqHero />
      <FaqAccordion />
      <FaqCtaSection />
    </div>
  );
}
