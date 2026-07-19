export const siteConfig = {
  name: "Jonifer Seragam",
  tagline: "Konveksi Kaos & Seragam Custom Kualitas Premium",
  heroTitle: "Vendor Seragam Kerja Custom Terdepan di Kota Bukittinggi",
  description:
    "Konveksi penyedia Seragam PDH, PDH 2in1, Tactical, Rompi, Jaket dengan kualitas premium dan harga spesial. Hitung estimasi harga langsung, konsultasikan atau pesan langsung melalui WhatsApp.",
  domain: "joniferseragam.id",
  whatsapp: "6285121242420",
  social: {
    instagram: "https://instagram.com/joniferseragam",
  },
  address: "Jl. Perintis Kemerdekaan, Bukittinggi, Sumatera Barat",
};

export const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil" },
  { href: "/katalog", label: "Katalog" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/toko", label: "Toko" },
  { href: "/artikel", label: "Artikel" },
  { href: "/cara-pemesanan", label: "Cara Pemesanan" },
  { href: "/faq", label: "FAQ" },
];

export const desktopNavItems: Array<
  | { type: "link"; href: string; label: string }
  | {
      type: "group";
      label: string;
      href: string;
      children: { href: string; label: string }[];
    }
> = [
  { type: "link", href: "/", label: "Beranda" },
  { type: "link", href: "/profil", label: "Profil" },
  { type: "link", href: "/katalog", label: "Katalog" },
  { type: "link", href: "/portofolio", label: "Portofolio" },
  { type: "link", href: "/artikel", label: "Artikel" },
  {
    type: "group",
    href: "/toko",
    label: "Bantuan",
    children: [
      { href: "/toko", label: "Toko" },
      { href: "/cara-pemesanan", label: "Cara Pemesanan" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}
