"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  return (
    <div ref={containerRef} className="relative md:hidden">
      <button
        type="button"
        aria-label="Buka menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full"
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
      </button>

      {open && (
        <nav
          aria-label="Navigasi mobile"
          className="absolute top-14 right-0 flex w-56 flex-col gap-1 rounded-2xl border border-black/5 bg-white p-3 shadow-xl shadow-black/10"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#1c1c1c] transition-colors hover:bg-[#EEF5F5]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/katalog"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-xl bg-[#51ACAD] px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Lihat Katalog
          </Link>
        </nav>
      )}
    </div>
  );
}
