import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { OrderStepsSection } from "@/components/home/order-steps-section";
import { UspSection } from "@/components/home/usp-section";
import { ClientsSection } from "@/components/home/clients-section";
import { StatsSection } from "@/components/home/stats-section";
import { PortfolioPreviewSection } from "@/components/home/portfolio-preview-section";
import { TestimonialSection } from "@/components/home/testimonial-section";
import { GoogleReviewSection } from "@/components/home/google-review-section";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <UspSection />
      <CategoriesSection />
      <OrderStepsSection />
      <ClientsSection />
      <StatsSection />
      <PortfolioPreviewSection />
      <TestimonialSection />
      <GoogleReviewSection />
      <CtaSection />
    </div>
  );
}
