import { buildWhatsAppLink } from "@/data/site";

export function CaraPemesananCtaSection() {
  const waHref = buildWhatsAppLink(
    "Hi Admin Jonifer Seragam, saya mau konsultasi untuk pemesanan PDH."
  );

  return (
    <section className="bg-[#f7f7f7] py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading max-w-lg text-2xl font-semibold leading-tight text-[#1c1c1c] sm:text-3xl">
          Siap Mulai Pesan PDH?
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-[#1c1c1c]/70 sm:text-base">
          Konsultasikan kebutuhan PDH Anda ke admin kami lewat WhatsApp,
          langsung dibantu dari konsultasi sampai pengiriman.
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#51ACAD] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3b8384]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.18c-1.6 0-3.13-.43-4.45-1.24l-.32-.19-3.12.82.83-3.04-.21-.32a8.15 8.15 0 0 1-1.25-4.35c0-4.52 3.68-8.2 8.2-8.2 4.52 0 8.2 3.68 8.2 8.2 0 4.52-3.68 8.32-8.2 8.32Zm4.5-6.15c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
          </svg>
          Chat Admin via WhatsApp
        </a>
      </div>
    </section>
  );
}
