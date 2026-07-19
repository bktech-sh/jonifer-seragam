import { clients } from "@/data/home-content";

function ClientRow({ reverse = false }: { reverse?: boolean }) {
  const track = [...clients, ...clients];

  return (
    <div className="relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div
        className={`flex w-max gap-4 sm:gap-6 ${reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
      >
        {track.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex aspect-video w-40 shrink-0 items-center justify-center rounded-xl border border-[#1c1c1c]/10 bg-[#f7f7f7] px-3 text-center text-xs font-medium text-[#1c1c1c]/50 sm:w-48"
          >
            {client.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientsSection() {
  return (
    <section className="overflow-hidden bg-white py-12 sm:py-10 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
          Dipercaya Oleh
        </h2>
      </div>
      <div className="mx-auto mt-6 flex max-w-6xl flex-col gap-4 sm:mt-10 sm:gap-6">
        <ClientRow />
        <ClientRow />
      </div>
    </section>
  );
}
