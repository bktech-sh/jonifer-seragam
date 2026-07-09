import { steps } from "@/data/home-content";

export function OrderStepsSection() {
  return (
    <section className="bg-[#EEF5F5] py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
          Cara Order
        </h2>

        {/* Mobile: compact 2x2 grid */}
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:hidden">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-2">
              <span className="font-heading flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#51ACAD] text-xs font-semibold text-white">
                {step.number}
              </span>
              <h3 className="font-heading text-sm font-semibold text-[#1c1c1c]">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#1c1c1c]/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tablet/Desktop: grid layout */}
        <div className="mt-14 hidden gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-start gap-3">
              <span className="font-heading flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#51ACAD] text-sm font-semibold text-white">
                {step.number}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base font-semibold text-[#1c1c1c]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#1c1c1c]/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
