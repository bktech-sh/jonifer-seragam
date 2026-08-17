import type { Metadata } from "next";
import { ProfilHero } from "@/components/profil/profil-hero";
import { CompanyStory } from "@/components/profil/company-story";
import { VisionMission } from "@/components/profil/vision-mission";
import { DifferentiatorsSection } from "@/components/profil/differentiators-section";
import { TimelineSection } from "@/components/profil/timeline-section";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Profil Perusahaan — Jonifer Seragam",
  description:
    "Kenal lebih dekat dengan Jonifer Seragam: cerita, visi-misi, dan keunggulan kami sebagai partner produksi kaos, seragam, dan selempang custom.",
};

export default function ProfilPage() {
  return (
    <div className="flex flex-col">
      <ProfilHero />
      <CompanyStory />
      <VisionMission />
      <DifferentiatorsSection />
      <TimelineSection />
      <CtaSection />
    </div>
  );
}
