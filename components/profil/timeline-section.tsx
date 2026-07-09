import { timeline } from "@/data/profil-content";

export function TimelineSection() {
  return (
    <section className="bg-[#EEF5F5] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
          Perjalanan Kami
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {timeline.map((item) => (
            <div key={item.year} className="flex flex-col gap-2">
              <span className="font-heading text-3xl font-semibold text-[#51ACAD]">
                {item.year}
              </span>
              <h3 className="font-heading text-lg font-semibold text-[#1c1c1c]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#1c1c1c]/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
