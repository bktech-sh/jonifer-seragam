import Link from "next/link";
import { buildWhatsAppLink, navLinks, siteConfig } from "@/data/site";

export function SiteFooter() {
  const waHref = buildWhatsAppLink(
    "Hi Admin Jonifer Seragam, saya ingin tanya-tanya soal produk."
  );

  return (
    <footer className="border-t border-black/5 bg-[#EEF5F5]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-heading text-lg font-semibold text-[#1c1c1c]">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-[#1c1c1c]/70">
              {siteConfig.tagline}
            </p>
            <p className="mt-1 text-xs tracking-wide text-[#1c1c1c]/50 italic">
              Your Trustworthy Uniform Vendor
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
                  className="inline-flex items-center gap-2 hover:text-[#51ACAD]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#51ACAD]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M16.6 5.82c-1.006-.99-1.57-2.34-1.57-3.82h-3.14v14.15c0 1.62-1.32 2.94-2.94 2.94a2.94 2.94 0 0 1 0-5.88c.31 0 .61.05.9.14V9.9a6.14 6.14 0 0 0-.9-.07c-3.36 0-6.08 2.72-6.08 6.08s2.72 6.08 6.08 6.08 6.08-2.72 6.08-6.08V8.36a9.24 9.24 0 0 0 5.36 1.72V6.94c-1.15 0-2.28-.4-3.16-1.12-.24-.2-.45-.42-.63-.66z" />
                  </svg>
                  TikTok
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
