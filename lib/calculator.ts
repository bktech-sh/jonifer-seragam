import { pricePerColor, pricePerEmbroideryPoint } from "@/data/catalog";

export function calculateTotal({
  fabricPrice,
  qty,
  embroideryPoints,
  colorCount,
}: {
  fabricPrice: number;
  qty: number;
  embroideryPoints: number;
  colorCount: number;
}): number {
  return (
    fabricPrice * qty +
    pricePerEmbroideryPoint * embroideryPoints * qty +
    pricePerColor * colorCount * qty
  );
}

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
