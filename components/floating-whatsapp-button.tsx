import { buildWhatsAppLink } from "@/data/site";

export function FloatingWhatsAppButton() {
  const href = buildWhatsAppLink(
    "Hi Admin Jonifer Seragam, saya ingin tanya-tanya soal produk."
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.16c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11a16.7 16.7 0 0 1-1.7-.63c-3-1.29-4.95-4.3-5.1-4.5-.15-.2-1.22-1.62-1.22-3.09s.77-2.19 1.04-2.49c.27-.3.6-.37.8-.37h.57c.19 0 .43-.03.67.51.24.55.83 1.9.9 2.04.07.15.12.32.02.51-.1.2-.15.32-.3.5-.14.18-.3.4-.44.53-.14.15-.3.31-.13.6.17.3.76 1.26 1.63 2.04 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.07.18-.2.75-.86.95-1.16.2-.3.4-.24.66-.14.27.09 1.71.8 2 .95.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
      </svg>
    </a>
  );
}
