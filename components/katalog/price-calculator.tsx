"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  embroideryOptions,
  orderQuantity,
  type ProductCategory,
} from "@/data/catalog";
import { buildWhatsAppLink } from "@/data/site";
import { calculateTotal, formatRupiah } from "@/lib/calculator";
import { OptionDropdown } from "@/components/katalog/option-dropdown";

function formatDeadline(value: string): string {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function PriceCalculator({
  categories,
  fixedCategoryId,
}: {
  categories: ProductCategory[];
  fixedCategoryId?: string;
}) {
  const [categoryId, setCategoryId] = useState(
    fixedCategoryId ?? categories[0].id
  );
  const category = useMemo(
    () => categories.find((c) => c.id === categoryId)!,
    [categoryId]
  );
  const hideEmbroidery = category.id === "celana" || category.id === "rok";
  const hideFabric = category.id === "vendor-bordir";
  const unlimitedQty = category.id === "vendor-bordir";
  const requireEmbroidery = category.id === "vendor-bordir";
  const embroideryChoices = requireEmbroidery
    ? embroideryOptions.filter((option) => option.id !== "none")
    : embroideryOptions;

  const [fabricId, setFabricId] = useState(category.fabricTypes[0].id);
  const fabric = useMemo(
    () => category.fabricTypes.find((f) => f.id === fabricId) ?? category.fabricTypes[0],
    [category, fabricId]
  );

  const [qty, setQty] = useState(orderQuantity.default);
  const [embroideryIndex, setEmbroideryIndex] = useState(0);
  const [isTimbul, setIsTimbul] = useState(false);
  const [deadline, setDeadline] = useState("");
  const [qtyError, setQtyError] = useState<string | null>(null);

  const embroidery = embroideryChoices[embroideryIndex] ?? embroideryChoices[0];
  const embroideryPrice = hideEmbroidery ? 0 : isTimbul ? embroidery.priceTimbul : embroidery.price;

  function handleSelectCategory(nextCategoryId: string) {
    setCategoryId(nextCategoryId);
    const nextCategory = categories.find((c) => c.id === nextCategoryId)!;
    setFabricId(nextCategory.fabricTypes[0].id);
    setEmbroideryIndex(0);
  }

  function handleQtyChange(value: number) {
    if (unlimitedQty) {
      setQty(Math.max(1, value));
      setQtyError(null);
      return;
    }
    const clamped = Math.min(orderQuantity.max, Math.max(orderQuantity.min, value));
    setQty(clamped);
    if (value < orderQuantity.min || value > orderQuantity.max) {
      setQtyError(
        `Jumlah pesanan harus antara ${orderQuantity.min}–${orderQuantity.max} pcs.`
      );
    } else {
      setQtyError(null);
    }
  }

  const total = calculateTotal({
    fabricPrice: fabric.pricePerPc,
    qty,
    embroideryPrice,
  });

  const waMessage = [
    `Hi Admin Jonifer Seragam, saya ingin memesan dengan detail berikut:`,
    `- Kategori: ${category.name}`,
    ...(hideFabric ? [] : [`- Jenis Bahan: ${fabric.name}`]),
    `- Jumlah: ${qty} pcs`,
    ...(hideEmbroidery
      ? []
      : [`- Bordir: ${embroidery.label}${isTimbul ? " (Timbul)" : ""}`]),
    `- Estimasi Total: ${formatRupiah(total)}`,
    ...(deadline ? [`- Deadline: ${formatDeadline(deadline)}`] : []),
    ``,
    `Mohon info langkah selanjutnya, terima kasih.`,
  ].join("\n");

  const waHref = buildWhatsAppLink(waMessage);

  let stepCounter = fixedCategoryId ? 0 : 1;
  const embroideryFirstStep = hideFabric && !hideEmbroidery ? ++stepCounter : 0;
  const fabricStep = hideFabric ? 0 : ++stepCounter;
  const qtyStep = ++stepCounter;
  const embroideryStep = !hideFabric && !hideEmbroidery ? ++stepCounter : 0;
  const deadlineStep = ++stepCounter;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start lg:gap-10">
      {/* Input steps */}
      <div className="flex flex-col gap-8">
        {/* Step 1: Category (hidden when fixedCategoryId is set) */}
        {!fixedCategoryId && (
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#1c1c1c]">
              1. Pilih Kategori Produk
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => handleSelectCategory(c.id)}
                  aria-pressed={c.id === categoryId}
                  className={`flex flex-col gap-2 rounded-xl border p-2 text-left transition-colors ${
                    c.id === categoryId
                      ? "border-[#51ACAD] bg-[#EEF5F5]"
                      : "border-black/10 bg-white hover:border-[#51ACAD]/50"
                  }`}
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-semibold text-[#1c1c1c] sm:text-sm">
                    {c.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Embroidery first when fabric step is hidden */}
        {embroideryFirstStep > 0 && (
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#1c1c1c]">
              {embroideryFirstStep}. Pilih Bordir
            </h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start">
              <div className="flex-1">
                <OptionDropdown
                  label="Bordir"
                  value={embroideryIndex}
                  onChange={setEmbroideryIndex}
                  options={embroideryChoices.map((option, index) => ({
                    value: index,
                    label: option.label,
                    priceLabel:
                      (isTimbul ? option.priceTimbul : option.price) === 0
                        ? "Gratis"
                        : `+${formatRupiah(isTimbul ? option.priceTimbul : option.price)}`,
                  }))}
                />
              </div>
              <label className="flex h-11 shrink-0 items-center gap-2 rounded-xl border border-black/10 px-4 text-sm font-medium text-[#1c1c1c]">
                <input
                  type="checkbox"
                  checked={isTimbul}
                  onChange={(e) => setIsTimbul(e.target.checked)}
                  className="h-4 w-4 accent-[#51ACAD]"
                />
                Bordir Timbul
              </label>
            </div>
          </div>
        )}

        {/* Fabric */}
        {!hideFabric && (
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#1c1c1c]">
              {fabricStep}. Pilih Jenis Bahan
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {category.fabricTypes.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFabricId(f.id)}
                  aria-pressed={f.id === fabricId}
                  className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                    f.id === fabricId
                      ? "border-[#51ACAD] bg-[#EEF5F5]"
                      : "border-black/10 bg-white hover:border-[#51ACAD]/50"
                  }`}
                >
                  <div className="relative aspect-square w-14 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1c1c1c]">
                      {f.name}
                    </p>
                    <p className="text-xs text-[#1c1c1c]/60">
                      {formatRupiah(f.pricePerPc)}/pcs
                    </p>
                    {f.description && (
                      <p className="mt-1 text-xs text-[#1c1c1c]/50">
                        {f.description}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Qty */}
        <div>
          <h2 className="font-heading text-lg font-semibold text-[#1c1c1c]">
            {qtyStep}. Jumlah Pesanan
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleQtyChange(qty - 1)}
              aria-label="Kurangi jumlah"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-lg font-semibold text-[#1c1c1c] transition-colors hover:border-[#51ACAD]"
            >
              −
            </button>
            <input
              type="number"
              inputMode="numeric"
              value={qty}
              onChange={(e) => handleQtyChange(Number(e.target.value))}
              min={unlimitedQty ? 1 : orderQuantity.min}
              max={unlimitedQty ? undefined : orderQuantity.max}
              aria-describedby={qtyError ? "qty-error" : undefined}
              className="h-11 w-24 rounded-full border border-black/10 text-center text-base font-semibold text-[#1c1c1c] focus:border-[#51ACAD] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => handleQtyChange(qty + 1)}
              aria-label="Tambah jumlah"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-lg font-semibold text-[#1c1c1c] transition-colors hover:border-[#51ACAD]"
            >
              +
            </button>
            <span className="text-sm text-[#1c1c1c]/60">pcs</span>
          </div>
          {qtyError ? (
            <p id="qty-error" role="alert" className="mt-2 text-sm text-red-600">
              {qtyError}
            </p>
          ) : !unlimitedQty ? (
            <p className="mt-2 text-xs text-[#1c1c1c]/50">
              Minimal {orderQuantity.min} pcs, maksimal {orderQuantity.max} pcs.
            </p>
          ) : null}
        </div>

        {/* Embroidery (after fabric) */}
        {embroideryStep > 0 && (
          <div>
            <h2 className="font-heading text-lg font-semibold text-[#1c1c1c]">
              {embroideryStep}. Pilih Bordir
            </h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start">
              <div className="flex-1">
                <OptionDropdown
                  label="Bordir"
                  value={embroideryIndex}
                  onChange={setEmbroideryIndex}
                  options={embroideryChoices.map((option, index) => ({
                    value: index,
                    label: option.label,
                    priceLabel:
                      (isTimbul ? option.priceTimbul : option.price) === 0
                        ? "Gratis"
                        : `+${formatRupiah(isTimbul ? option.priceTimbul : option.price)}`,
                  }))}
                />
              </div>
              <label className="flex h-11 shrink-0 items-center gap-2 rounded-xl border border-black/10 px-4 text-sm font-medium text-[#1c1c1c]">
                <input
                  type="checkbox"
                  checked={isTimbul}
                  onChange={(e) => setIsTimbul(e.target.checked)}
                  className="h-4 w-4 accent-[#51ACAD]"
                />
                Bordir Timbul
              </label>
            </div>
          </div>
        )}

        {/* Deadline (optional, informational only) */}
        <div>
          <h2 className="font-heading text-lg font-semibold text-[#1c1c1c]">
            {deadlineStep}. Deadline (Opsional)
          </h2>
          <div className="mt-4">
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="h-11 w-full max-w-xs rounded-xl border border-black/10 px-4 text-sm font-medium text-[#1c1c1c] focus:border-[#51ACAD] focus:outline-none sm:w-auto"
            />
          </div>
          <p className="mt-2 text-xs text-[#1c1c1c]/50">
            Tanggal ini hanya untuk informasi ke admin, tidak memengaruhi estimasi harga.
          </p>
        </div>
      </div>

      {/* Summary panel */}
      <div className="rounded-2xl bg-[#1c1c1c] p-6 sm:p-8 lg:sticky lg:top-24">
        <h2 className="font-heading text-lg font-semibold text-white">
          Ringkasan Pesanan
        </h2>
        <dl className="mt-6 flex flex-col gap-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-white/60">Kategori</dt>
            <dd className="text-right font-medium text-white">{category.name}</dd>
          </div>
          {!hideFabric && (
            <div className="flex justify-between gap-4">
              <dt className="text-white/60">Jenis Bahan</dt>
              <dd className="text-right font-medium text-white">{fabric.name}</dd>
            </div>
          )}
          {!hideFabric && (
            <div className="flex justify-between gap-4">
              <dt className="text-white/60">Harga/pcs</dt>
              <dd className="text-right font-medium text-white">
                {formatRupiah(fabric.pricePerPc)}
              </dd>
            </div>
          )}
          <div className="flex justify-between gap-4">
            <dt className="text-white/60">Jumlah</dt>
            <dd className="text-right font-medium text-white">{qty} pcs</dd>
          </div>
          {!hideEmbroidery && (
            <div className="flex justify-between gap-4">
              <dt className="text-white/60">Bordir</dt>
              <dd className="text-right font-medium text-white">
                {embroidery.label}
                {isTimbul ? " (Timbul)" : ""}
              </dd>
            </div>
          )}
          {deadline && (
            <div className="flex justify-between gap-4">
              <dt className="text-white/60">Deadline</dt>
              <dd className="text-right font-medium text-white">
                {formatDeadline(deadline)}
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="text-xs text-white/60 uppercase tracking-wide">
            Estimasi Total
          </p>
          <p className="font-heading mt-1 text-2xl font-semibold text-white sm:text-3xl">
            {formatRupiah(total)}
          </p>
        </div>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={Boolean(qtyError)}
          onClick={(e) => {
            if (qtyError) e.preventDefault();
          }}
          className={`mt-6 flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
            qtyError
              ? "cursor-not-allowed bg-white/20 text-white/40"
              : "bg-[#51ACAD] text-white hover:bg-[#3b8384]"
          }`}
        >
          Order via WhatsApp
        </a>
      </div>
    </div>
  );
}
