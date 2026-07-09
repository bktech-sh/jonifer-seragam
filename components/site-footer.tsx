import Link from "next/link";
import { buildWhatsAppLink, navLinks, siteConfig } from "@/data/site";

export function SiteFooter() {
  const waHref = buildWhatsAppLink(
    "Hi Admin Jonifer Seragam, saya ingin tanya-tanya soal produk."
  );

  return (
    <footer className="border-t border-black/5 bg-[#EEE5E1]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-heading text-lg font-semibold text-[#1c1c1c]">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-[#1c1c1c]/70">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#1c1c1c]">Navigasi</p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#1c1c1c]/70 hover:text-[#51ACAD]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#1c1c1c]">Kontak</p>
            <ul className="mt-3 space-y-2 text-sm text-[#1c1c1c]/70">
              <li>{siteConfig.address}</li>
              <li>
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#51ACAD]">
                  Chat WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#1c1c1c]">Sosial Media</p>
            <ul className="mt-3 space-y-2 text-sm text-[#1c1c1c]/70">
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#51ACAD]"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-[#1c1c1c]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Semua hak dilindungi.
          </p>
          <p>
            Dibuat oleh{" "}
            <a
              href="https://bktech.id"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-[#51ACAD]"
            >
              BKTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
