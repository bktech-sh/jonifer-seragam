import { orderSteps } from "@/data/cara-pemesanan";

export function CaraPemesananSteps() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-col gap-10">
          {orderSteps.map((step, index) => (
            <li key={step.title} className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#51ACAD] font-heading text-base font-semibold text-white">
                {index + 1}
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-heading text-lg font-semibold text-[#1c1c1c] sm:text-xl">
                  {step.title}
                </h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm leading-relaxed text-[#1c1c1c]/70 sm:text-base"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
