import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-small.png"
            alt=""
            width={188}
            height={178}
            priority
            className="h-9 w-9 rounded-lg object-cover"
          />
          <span className="font-heading text-lg font-semibold tracking-tight text-[#1c1c1c]">
            {siteConfig.name}
          </span>
        </Link>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1c1c1c]/70 transition-colors hover:text-[#51ACAD]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/katalog"
          className="hidden rounded-full bg-[#51ACAD] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3b8384] md:inline-flex"
        >
          Lihat Katalog
        </Link>

        <MobileNav />
      </div>
    </header>
  );
}
