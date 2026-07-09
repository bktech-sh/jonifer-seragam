export type PortfolioItem = {
  images: string[];
  client: string;
  product: string;
  category: string;
  description: string;
  specs: { label: string; value: string }[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=75",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=75",
    ],
    client: "Komunitas Motor Jakarta",
    product: "Kaos custom untuk kegiatan touring",
    category: "Kaos",
    description:
      "Produksi 120 pcs kaos custom untuk kegiatan touring tahunan komunitas, dengan sablon logo di bagian dada dan punggung.",
    specs: [
      { label: "Bahan", value: "Cotton Combed 30" },
      { label: "Jumlah", value: "120 pcs" },
      { label: "Sablon", value: "3 warna, dada & punggung" },
      { label: "Durasi", value: "10 hari kerja" },
    ],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&w=1000&q=75",
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=1000&q=75",
    ],
    client: "PT Cipta Sejahtera",
    product: "PDH Standar untuk seragam kantor",
    category: "PDH Standar",
    description:
      "Seragam PDH Standar untuk 80 karyawan, menggunakan Cotton Combed 30 dengan bordir nama dan logo perusahaan.",
    specs: [
      { label: "Bahan", value: "Cotton Combed 30" },
      { label: "Jumlah", value: "80 pcs" },
      { label: "Bordir", value: "Nama & logo perusahaan" },
      { label: "Durasi", value: "14 hari kerja" },
    ],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1000&q=75",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=75",
    ],
    client: "Dinas Perhubungan Kota",
    product: "PDH Tunik untuk seragam instansi",
    category: "PDH Tunik",
    description:
      "Seragam PDH Tunik untuk staf instansi, dipesan dalam jumlah besar dengan potongan yang konsisten di setiap ukuran.",
    specs: [
      { label: "Bahan", value: "Cotton Combed 20s" },
      { label: "Jumlah", value: "200 pcs" },
      { label: "Model", value: "Tunik, lengan panjang" },
      { label: "Durasi", value: "21 hari kerja" },
    ],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=75",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1000&q=75",
    ],
    client: "Tim SAR Relawan",
    product: "PDH Tactical untuk kebutuhan lapangan",
    category: "PDH Tactical",
    description:
      "PDH Tactical dengan bahan Cotton Bambu yang lebih kuat, dirancang untuk aktivitas lapangan tim relawan.",
    specs: [
      { label: "Bahan", value: "Cotton Bambu" },
      { label: "Jumlah", value: "60 pcs" },
      { label: "Fitur", value: "Jahitan ganda, saku tambahan" },
      { label: "Durasi", value: "12 hari kerja" },
    ],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1000&q=75",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=75",
    ],
    client: "Universitas Nusantara",
    product: "Jaket almamater angkatan 2026",
    category: "Almamater",
    description:
      "Jaket almamater untuk angkatan baru, menggunakan bahan Drill American dengan bordir logo fakultas.",
    specs: [
      { label: "Bahan", value: "Drill American" },
      { label: "Jumlah", value: "300 pcs" },
      { label: "Bordir", value: "Logo fakultas & nama angkatan" },
      { label: "Durasi", value: "25 hari kerja" },
    ],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1000&q=75",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=75",
    ],
    client: "EO Acara Kreatif",
    product: "Rompi custom untuk kerja lapangan",
    category: "Rompi",
    description:
      "Rompi custom untuk panitia event, dengan bahan Parasut yang ringan dan mudah dipakai di atas pakaian apa pun.",
    specs: [
      { label: "Bahan", value: "Parasut" },
      { label: "Jumlah", value: "45 pcs" },
      { label: "Sablon", value: "Logo panitia, 2 warna" },
      { label: "Durasi", value: "7 hari kerja" },
    ],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=75",
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1000&q=75",
    ],
    client: "Startup Digital Kreasi",
    product: "Jaket custom dengan desain sesuai permintaan",
    category: "Jaket Custom",
    description:
      "Jaket custom bahan Fleece untuk merchandise internal startup, dengan sablon logo pada bagian dada.",
    specs: [
      { label: "Bahan", value: "Fleece" },
      { label: "Jumlah", value: "50 pcs" },
      { label: "Sablon", value: "Logo dada, 1 warna" },
      { label: "Durasi", value: "9 hari kerja" },
    ],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=75",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1000&q=75",
    ],
    client: "Koperasi Karyawan Sejahtera",
    product: "Bordir logo pada kaos seragam",
    category: "Bordir",
    description:
      "Layanan bordir logo koperasi pada kaos seragam anggota, dikerjakan dengan detail presisi dan warna benang tahan lama.",
    specs: [
      { label: "Bahan", value: "Cotton Combed 30" },
      { label: "Jumlah", value: "90 pcs" },
      { label: "Bordir", value: "Logo koperasi, 4 titik" },
      { label: "Durasi", value: "10 hari kerja" },
    ],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=75",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1000&q=75",
    ],
    client: "Klinik Sehat Bersama",
    product: "Seragam kerja dengan bordir nama",
    category: "Bordir",
    description:
      "Seragam kerja staf klinik dengan bordir nama masing-masing karyawan pada bagian dada.",
    specs: [
      { label: "Bahan", value: "Cotton Combed 24s" },
      { label: "Jumlah", value: "35 pcs" },
      { label: "Bordir", value: "Nama karyawan, per pcs" },
      { label: "Durasi", value: "8 hari kerja" },
    ],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1000&q=75",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=75",
    ],
    client: "Komunitas Basket Kota",
    product: "Kaos sablon dengan warna tajam",
    category: "Sablon",
    description:
      "Kaos jersey komunitas basket dengan sablon full color, warna tajam dan tidak mudah pudar setelah dicuci berkali-kali.",
    specs: [
      { label: "Bahan", value: "Dry-fit Polyester" },
      { label: "Jumlah", value: "40 pcs" },
      { label: "Sablon", value: "Full color, DTF" },
      { label: "Durasi", value: "8 hari kerja" },
    ],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=75",
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=1000&q=75",
    ],
    client: "Toko Retail Fashion",
    product: "Seragam staf toko custom",
    category: "PDH Standar",
    description:
      "Seragam staf toko retail dengan desain simpel dan bordir nama brand pada bagian lengan.",
    specs: [
      { label: "Bahan", value: "Cotton Combed 30" },
      { label: "Jumlah", value: "25 pcs" },
      { label: "Bordir", value: "Nama brand, lengan kiri" },
      { label: "Durasi", value: "7 hari kerja" },
    ],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=1000&q=75",
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&w=1000&q=75",
    ],
    client: "Bank Swasta Nasional",
    product: "Seragam formal untuk kebutuhan korporat",
    category: "PDH Standar",
    description:
      "Seragam formal untuk staf front office bank, menggunakan bahan premium dengan potongan yang rapi dan profesional.",
    specs: [
      { label: "Bahan", value: "Cotton Combed 24s Premium" },
      { label: "Jumlah", value: "150 pcs" },
      { label: "Bordir", value: "Logo bank, dada kiri" },
      { label: "Durasi", value: "18 hari kerja" },
    ],
  },
];
