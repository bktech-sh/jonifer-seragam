export const siteConfig = {
  name: "Jonifer Seragam",
  tagline: "Konveksi Kaos & Seragam Custom Kualitas Premium",
  description:
    "Produksi kaos, seragam, dan selempang custom dengan bahan pilihan, sablon presisi, dan harga transparan. Hitung estimasi harga langsung, pesan lewat WhatsApp.",
  domain: "joniferseragam.id",
  whatsapp: "6281268529556", // TODO: ganti dengan nomor WhatsApp admin asli
  social: {
    instagram: "https://instagram.com/joniferseragam",
  },
  address: "Jakarta, Indonesia", // TODO: alamat lengkap dari klien
};

export const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil" },
  { href: "/katalog", label: "Katalog" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/faq", label: "FAQ" },
];

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}
