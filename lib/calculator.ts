export function calculateTotal({
  fabricPrice,
  qty,
  embroideryPrice,
}: {
  fabricPrice: number;
  qty: number;
  embroideryPrice: number;
}): number {
  return fabricPrice * qty + embroideryPrice * qty;
}

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
