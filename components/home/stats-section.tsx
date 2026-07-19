import { stats } from "@/data/home-content";
import { Counter } from "@/components/home/counter";

export function StatsSection() {
  return (
    <section className="bg-[#1c1c1c] py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Dipercaya Berbagai Kalangan
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
          Ribuan klien dari kampus, komunitas, hingga perusahaan sudah
          mempercayakan kebutuhan seragam dan kaos custom mereka kepada kami.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:gap-10 sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span className="font-heading text-3xl font-semibold tracking-tight text-[#51ACAD] sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="mt-2 text-xs font-medium text-white/70 sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
