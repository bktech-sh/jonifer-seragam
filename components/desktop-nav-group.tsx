"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type NavGroup = {
  label: string;
  href: string;
  children: { href: string; label: string }[];
};

export function DesktopNavGroup({ item }: { item: NavGroup }) {
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
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex cursor-pointer items-center gap-1 text-sm font-medium text-[#1c1c1c]/70 transition-colors hover:text-[#51ACAD]"
      >
        {item.label}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-3 flex w-48 flex-col gap-1 rounded-2xl border border-black/5 bg-white p-3 shadow-xl shadow-black/10">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#1c1c1c] transition-colors hover:bg-[#EEF5F5]"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
