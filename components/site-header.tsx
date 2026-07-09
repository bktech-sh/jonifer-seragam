import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

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
          Hitung Estimasi
        </Link>

        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <details className="relative md:hidden">
      <summary
        aria-label="Buka menu"
        className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full [&::-webkit-details-marker]:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          className="h-6 w-6 text-[#1c1c1c]"
          aria-hidden="true"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>

      <nav
        aria-label="Navigasi mobile"
        className="absolute right-0 top-14 flex w-56 flex-col gap-1 rounded-2xl border border-black/5 bg-white p-3 shadow-xl shadow-black/10"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#1c1c1c] transition-colors hover:bg-[#EEF5F5]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/katalog"
          className="mt-1 rounded-xl bg-[#51ACAD] px-4 py-2.5 text-center text-sm font-semibold text-white"
        >
          Hitung Estimasi
        </Link>
      </nav>
    </details>
  );
}
