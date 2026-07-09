import { differentiators } from "@/data/profil-content";

export function DifferentiatorsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
          Kenapa Memilih Kami
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl bg-[#EEF5F5] p-6 sm:p-8"
            >
              <div className="h-1.5 w-10 rounded-full bg-[#51ACAD]" />
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
