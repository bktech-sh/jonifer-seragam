import { customerExperiencePoints } from "@/data/profil-content";

export function CustomerExperienceSection() {
  return (
    <section className="bg-white py-16 sm:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading max-w-xl text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
          Apa yang akan dirasakan customer ketika bekerja sama dengan Jonifer
          Seragam?
        </h2>
        <ul className="mt-8 flex flex-col gap-4">
          {customerExperiencePoints.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#51ACAD]" />
              <p className="text-base leading-relaxed text-[#1c1c1c]/70">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
