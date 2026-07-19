export const siteConfig = {
  name: "Jonifer Seragam",
  tagline: "Konveksi Kaos & Seragam Custom Kualitas Premium",
  description:
    "Produksi kaos, seragam, dan selempang custom dengan bahan pilihan, sablon presisi, dan harga transparan. Hitung estimasi harga langsung, pesan lewat WhatsApp.",
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
