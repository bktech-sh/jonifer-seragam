"use client";

import { useState } from "react";
import Link from "next/link";
import { artikelData } from "@/data/artikel";

export function ArtikelSidebar({ currentSlug }: { currentSlug: string }) {
  const [query, setQuery] = useState("");

  const otherArtikel = artikelData
    .filter((artikel) => artikel.slug !== currentSlug)
    .filter((artikel) =>
      artikel.title.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <aside className="sticky top-24">
      <div className="rounded-2xl border border-black/5 bg-[#EEF5F5]/40 p-6 shadow-md">
        <h3 className="font-heading text-lg font-semibold text-[#1c1c1c]">
          Artikel Lainnya
        </h3>

        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Cari artikel..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-lg border border-black/10 bg-white px-4 py-2 pr-10 text-sm text-[#1c1c1c] transition-all focus:border-transparent focus:ring-2 focus:ring-[#51ACAD] focus:outline-none"
          />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-[#1c1c1c]/40"
            aria-hidden="true"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="mt-5 flex max-h-[600px] flex-col gap-3 overflow-y-auto">
          {otherArtikel.length > 0 ? (
            otherArtikel.map((artikel) => (
              <Link
                key={artikel.slug}
                href={`/artikel/${artikel.slug}`}
                className="group rounded-lg border border-black/5 bg-white p-3 transition-all hover:border-[#51ACAD]/40 hover:shadow-md"
              >
                <h4 className="line-clamp-2 text-sm font-semibold text-[#1c1c1c] transition-colors group-hover:text-[#3b8384]">
                  {artikel.title}
                </h4>
                <p className="mt-2 text-xs text-[#1c1c1c]/50">
                  {new Date(artikel.publishedAt).toLocaleDateString("id-ID", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </Link>
            ))
          ) : (
            <p className="py-4 text-center text-sm text-[#1c1c1c]/50">
              Artikel tidak ditemukan
            </p>
          )}
        </div>
      </div>
    </aside>
  );
}
