import Image from "next/image";
import Link from "next/link";
import { desktopNavItems, siteConfig } from "@/data/site";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopNavGroup } from "@/components/desktop-nav-group";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="https://ik.imagekit.io/jgcvqpss3/Fix%20%20Katalog%20PDH%20Final%20(1)%20(1).png"
            alt={siteConfig.name}
            width={188}
            height={178}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-8 md:flex"
        >
          {desktopNavItems.map((item) =>
            item.type === "group" ? (
              <DesktopNavGroup key={item.href} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#1c1c1c]/70 transition-colors hover:text-[#51ACAD]"
              >
                {item.label}
              </Link>
            )
          )}
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
