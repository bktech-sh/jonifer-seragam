import { testimonials } from "@/data/home-content";
import { TestimonialCarousel } from "@/components/testimonial-carousel";

export function TestimonialSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
          Kata Mereka
        </h2>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
