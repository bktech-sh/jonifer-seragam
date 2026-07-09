"use client";

import { useEffect, useRef, useState } from "react";

type Option = {
  value: number;
  label: string;
  priceLabel: string;
};

export function OptionDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: Option[];
  value: number;
  onChange: (value: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selected = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className="flex h-11 w-full items-center justify-between rounded-xl border border-black/10 px-4 text-left text-sm font-medium text-[#1c1c1c] transition-colors focus:border-[#51ACAD] focus:outline-none"
      >
        <span>
          {selected.label}
          <span className="ml-1.5 text-[#1c1c1c]/50">{selected.priceLabel}</span>
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 shrink-0 text-[#1c1c1c]/50 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-1 max-h-64 w-full overflow-y-auto rounded-xl border border-black/10 bg-white p-1 shadow-lg shadow-black/10"
        >
          {options.map((option) => (
            <li key={option.value} role="option" aria-selected={option.value === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  option.value === value
                    ? "bg-[#EEF5F5] font-semibold text-[#1c1c1c]"
                    : "text-[#1c1c1c] hover:bg-[#EEF5F5]/60"
                }`}
              >
                <span>{option.label}</span>
                <span className="text-[#1c1c1c]/50">{option.priceLabel}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
