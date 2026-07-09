import { missionPoints } from "@/data/profil-content";

export function VisionMission() {
  return (
    <section className="bg-[#EEF5F5] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#3b8384] uppercase">
              Visi
            </p>
            <h2 className="font-heading mt-4 text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
              Menjadi konveksi custom pilihan utama yang mengutamakan kualitas
              dan transparansi harga.
            </h2>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#3b8384] uppercase">
              Misi
            </p>
            <ul className="mt-4 flex flex-col gap-4">
              {missionPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#51ACAD]" />
                  <p className="text-base leading-relaxed text-[#1c1c1c]/70">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
