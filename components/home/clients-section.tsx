import Image from "next/image";
import { clients } from "@/data/home-content";

const row1 = clients.slice(0, 15);
const row2 = clients.slice(15);

function ClientRow({
  items,
  reverse = false,
}: {
  items: typeof clients;
  reverse?: boolean;
}) {
  const track = [...items, ...items];

  return (
    <div className="relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div
        className={`flex w-max gap-4 sm:gap-6 ${reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
      >
        {track.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex aspect-video w-40 shrink-0 items-center justify-center sm:w-48"
          >
            <Image
              src={client.image}
              alt={client.name}
              width={160}
              height={90}
              className="h-full w-full object-contain"
            />
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
      <div className="mx-auto mt-6 flex max-w-6xl flex-col gap-8 sm:mt-10 sm:gap-12">
        <ClientRow items={row1} />
        <ClientRow items={row2} reverse />
      </div>
    </section>
  );
}
