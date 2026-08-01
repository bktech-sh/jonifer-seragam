import { csvToObjects } from "@/lib/csv";

export type FabricType = {
  id: string;
  name: string;
  pricePerPc: number;
  image: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  explanation: string;
  image: string;
  galleryImages: string[];
  fabricTypes: FabricType[];
};

// NOTE: all prices below are placeholders pending real data from the client (deadline Jul 15).
// Data is kept modular here so it can be swapped without touching component/calculator logic.
// Fallback data used when the Google Sheet URLs below are unset or the fetch fails.
export const fallbackProductCategories: ProductCategory[] = [
  {
    id: "pdh-standar",
    name: "PDH Standar",
    description:
      "Seragam organisasi yang dirancang untuk mencerminkan identitas dan profesionalisme tim. Cocok untuk himpunan mahasiswa, BEM, UKM, komunitas, maupun instansi.",
    explanation:
      "Seragam organisasi yang dirancang untuk mencerminkan identitas dan profesionalisme tim. Cocok untuk himpunan mahasiswa, BEM, UKM, komunitas, maupun instansi.",
    image:
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_4850.HEIC?updatedAt=1785600611644?auto=format&fit=crop&w=800&q=70",
    galleryImages: [
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&w=700&q=70",
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=700&q=70",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=700&q=70",
    ],
    fabricTypes: [
      {
        id: "cotton-cardet",
        name: "Cotton Cardet",
        pricePerPc: 50000,
        image:
          "https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "cotton-combed-30",
        name: "Cotton Combed 30",
        pricePerPc: 55000,
        image:
          "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "cotton-combed-24s",
        name: "Cotton Combed 24s",
        pricePerPc: 60000,
        image:
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=70",
      },
    ],
  },
  {
    id: "pdh-tunik",
    name: "PDH Tunik",
    description:
      "Seragam dengan potongan lebih panjang sekitar 10 cm dibanding model standar, memberikan kenyamanan dan tampilan yang lebih sesuai untuk muslimah tanpa mengurangi kesan profesional.",
    explanation:
      "Seragam dengan potongan lebih panjang sekitar 10 cm dibanding model standar, memberikan kenyamanan dan tampilan yang lebih sesuai untuk muslimah tanpa mengurangi kesan profesional.",
    image:
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_8429.HEIC?updatedAt=1785600682836?auto=format&fit=crop&w=800&q=70",
    galleryImages: [
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=700&q=70",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=70",
    ],
    fabricTypes: [
      {
        id: "cotton-combed-30-tunik",
        name: "Cotton Combed 30",
        pricePerPc: 58000,
        image:
          "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "cotton-combed-20s-tunik",
        name: "Cotton Combed 20s",
        pricePerPc: 65000,
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=70",
      },
    ],
  },
  {
    id: "pdh-tactical",
    name: "PDH Tactical",
    description:
      "Seragam dengan desain yang lebih fungsional untuk aktivitas lapangan. Dilengkapi saku tambahan dan ventilasi pada bagian punggung untuk meningkatkan kenyamanan, mobilitas, dan kemudahan membawa perlengkapan kerja.",
    explanation:
      "Seragam dengan desain yang lebih fungsional untuk aktivitas lapangan. Dilengkapi saku tambahan dan ventilasi pada bagian punggung untuk meningkatkan kenyamanan, mobilitas, dan kemudahan membawa perlengkapan kerja.",
    image:
      "https://ik.imagekit.io/jgcvqpss3/pdh-tactical/IMG_5369.HEIC?updatedAt=1785600705045?tr=w-800,q-75,f-auto",
    galleryImages: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=700&q=70",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70",
    ],
    fabricTypes: [
      {
        id: "cotton-bambu",
        name: "Cotton Bambu",
        pricePerPc: 70000,
        image:
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "cotton-combed-20s-tactical",
        name: "Cotton Combed 20s",
        pricePerPc: 68000,
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=70",
      },
    ],
  },
  {
    id: "pdh-2in1",
    name: "PDH 2in1",
    description:
      "Inovasi PDH yang dapat digunakan sebagai kemeja maupun rompi dalam satu produk. Lebih fleksibel untuk berbagai kebutuhan kegiatan formal maupun lapangan tanpa perlu membuat dua seragam terpisah.",
    explanation:
      "Inovasi PDH yang dapat digunakan sebagai kemeja maupun rompi dalam satu produk. Lebih fleksibel untuk berbagai kebutuhan kegiatan formal maupun lapangan tanpa perlu membuat dua seragam terpisah.",
    image:
      "https://ik.imagekit.io/jgcvqpss3/pdh-2in1/IMG_4387.HEIC?updatedAt=1785600771149?auto=format&fit=crop&w=800&q=70",
    galleryImages: [
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&w=700&q=70",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=700&q=70",
    ],
    fabricTypes: [
      {
        id: "cotton-combed-30-2in1",
        name: "Cotton Combed 30",
        pricePerPc: 60000,
        image:
          "https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&w=600&q=70",
      },
    ],
  },
  {
    id: "almamater",
    name: "Almamater",
    description:
      "Almamater custom yang dirancang untuk memperkuat identitas organisasi, kampus, maupun komunitas dengan tampilan yang rapi dan berkelas.",
    explanation:
      "Almamater custom yang dirancang untuk memperkuat identitas organisasi, kampus, maupun komunitas dengan tampilan yang rapi dan berkelas.",
    image:
      "https://ik.imagekit.io/jgcvqpss3/almamater/IMG_8516.HEIC?updatedAt=1785600940661?auto=format&fit=crop&w=800&q=70",
    galleryImages: [
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=700&q=70",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70",
    ],
    fabricTypes: [
      {
        id: "drill-almamater",
        name: "Drill American",
        pricePerPc: 85000,
        image:
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=600&q=70",
      },
    ],
  },
  {
    id: "rompi",
    name: "Rompi",
    description:
      "Rompi custom yang praktis digunakan untuk kegiatan lapangan, KKN, pengabdian masyarakat, maupun aktivitas komunitas. Memberikan identitas tim yang jelas tanpa mengurangi kenyamanan saat beraktivitas.",
    explanation:
      "Rompi custom yang praktis digunakan untuk kegiatan lapangan, KKN, pengabdian masyarakat, maupun aktivitas komunitas. Memberikan identitas tim yang jelas tanpa mengurangi kenyamanan saat beraktivitas.",
    image:
      "https://ik.imagekit.io/jgcvqpss3/rompi/IMG_4915.HEIC?updatedAt=1785600805246?auto=format&fit=crop&w=800&q=70",
    galleryImages: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70",
    ],
    fabricTypes: [
      {
        id: "parasut-rompi",
        name: "Parasut",
        pricePerPc: 45000,
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "canvas-rompi",
        name: "Canvas",
        pricePerPc: 60000,
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=70",
      },
    ],
  },
  {
    id: "polo",
    name: "Polo",
    description:
      "Pilihan seragam yang nyaman dengan tampilan semi formal. Cocok digunakan untuk kegiatan kantor, gathering, komunitas, maupun instansi.",
    explanation:
      "Pilihan seragam yang nyaman dengan tampilan semi formal. Cocok digunakan untuk kegiatan kantor, gathering, komunitas, maupun instansi.",
    image:
      "https://ik.imagekit.io/jgcvqpss3/polo/Salinan%20DSC04909.JPG?updatedAt=1785600889462?auto=format&fit=crop&w=800&q=70",
    galleryImages: [
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=700&q=70",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=70",
    ],
    fabricTypes: [
      {
        id: "cotton-pique-polo",
        name: "Cotton Pique",
        pricePerPc: 65000,
        image:
          "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=600&q=70",
      },
    ],
  },
  {
    id: "jaket",
    name: "Jaket",
    description:
      "Jaket custom untuk angkatan sekolah, universitas, komunitas, dan perusahaan yang ingin tampil lebih kompak, profesional, dan memiliki identitas yang kuat.",
    explanation:
      "Jaket custom untuk angkatan sekolah, universitas, komunitas, dan perusahaan yang ingin tampil lebih kompak, profesional, dan memiliki identitas yang kuat.",
    image:
      "https://ik.imagekit.io/jgcvqpss3/jaket/IMG_4991.PNG?updatedAt=1785600830338?auto=format&fit=crop&w=800&q=70",
    galleryImages: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=70",
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=700&q=70",
    ],
    fabricTypes: [
      {
        id: "fleece-jaket",
        name: "Fleece",
        pricePerPc: 75000,
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "taslan-jaket",
        name: "Taslan",
        pricePerPc: 90000,
        image:
          "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=600&q=70",
      },
    ],
  },
  {
    id: "lanyard",
    name: "Lanyard",
    description:
      "Lanyard custom untuk kebutuhan identitas organisasi, seminar, event, dan instansi dengan desain yang dapat disesuaikan.",
    explanation:
      "Lanyard custom untuk kebutuhan identitas organisasi, seminar, event, dan instansi dengan desain yang dapat disesuaikan.",
    image:
      "https://ik.imagekit.io/jgcvqpss3/lanyard/IMG_6018.HEIC?updatedAt=1785600968089?auto=format&fit=crop&w=800&q=70",
    galleryImages: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=700&q=70",
    ],
    fabricTypes: [
      {
        id: "polyester-lanyard",
        name: "Polyester",
        pricePerPc: 15000,
        image:
          "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=70",
      },
    ],
  },
  {
    id: "bordir-seragam",
    name: "Bordir Seragam",
    description:
      "Layanan bordir untuk berbagai kebutuhan seragam organisasi, instansi, perusahaan, sekolah, dan komunitas.",
    explanation:
      "Layanan bordir untuk berbagai kebutuhan seragam organisasi, instansi, perusahaan, sekolah, dan komunitas.",
    image:
      "https://ik.imagekit.io/jgcvqpss3/IMG_5433%20(1).PNG?auto=format&fit=crop&w=800&q=70",
    galleryImages: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=70",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=700&q=70",
    ],
    fabricTypes: [
      {
        id: "cotton-combed-30-bordir",
        name: "Cotton Combed 30",
        pricePerPc: 55000,
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=70",
      },
    ],
  },
  {
    id: "vendor-bordir",
    name: "Vendor Bordir",
    description:
      "Melayani bordir untuk kebutuhan partai besar berbagai produk seperti logo instansi, atribut sekolah, mukena, baju kurung.",
    explanation:
      "Melayani bordir untuk kebutuhan partai besar berbagai produk seperti logo instansi, atribut sekolah, mukena, baju kurung.",
    image:
      "https://ik.imagekit.io/jgcvqpss3/IMG_20211019_105431-01.jpeg?auto=format&fit=crop&w=800&q=70",
    galleryImages: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=70",
    ],
    fabricTypes: [
      {
        id: "cotton-combed-30-vendor-bordir",
        name: "Cotton Combed 30",
        pricePerPc: 55000,
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=70",
      },
    ],
  },
];

export const pricePerEmbroideryPoint = 2500;
export const pricePerColor = 5000;
export const embroideryPointOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export const colorVariationOptions = [1, 2, 3, 4, 5, 6, 7, 8];
export const orderQuantity = { min: 20, max: 1000, default: 20 };

export function getCategoryBySlug(
  categories: ProductCategory[],
  slug: string
): ProductCategory | undefined {
  return categories.find((category) => category.id === slug);
}

export function getStartingPrice(category: ProductCategory): number {
  return Math.min(...category.fabricTypes.map((fabric) => fabric.pricePerPc));
}

// Public Google Sheet (CSV export) — same spreadsheet as the portfolio sheet,
// different tabs (gid). The sheet only contains publicly-displayed catalog
// data, so the URLs themselves are not sensitive.
const KATEGORI_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/1yWL7rxMMSPI57xVXCUk2Bl4tW3RyaIN0AbVgjt3X400/export?format=csv&gid=268143483";
const BAHAN_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/1yWL7rxMMSPI57xVXCUk2Bl4tW3RyaIN0AbVgjt3X400/export?format=csv&gid=241352106";

function rowToCategory(row: Record<string, string>): Omit<ProductCategory, "fabricTypes"> | null {
  if (!row.id || !row.name) return null;

  const galleryImages = [row.gallery_1, row.gallery_2, row.gallery_3].filter(
    (url): url is string => Boolean(url)
  );

  return {
    id: row.id,
    name: row.name,
    description: row.description || "",
    explanation: row.explanation || row.description || "",
    image: row.image || "",
    galleryImages,
  };
}

function rowToFabric(row: Record<string, string>): (FabricType & { categoryId: string }) | null {
  const price = Number(row.price_per_pc);
  if (!row.category_id || !row.id || !row.name || !Number.isFinite(price)) {
    return null;
  }

  return {
    categoryId: row.category_id,
    id: row.id,
    name: row.name,
    pricePerPc: price,
    image: row.image || "",
  };
}

// Fetches categories + fabric types from two public Google Sheets and joins
// them by category_id. Falls back to fallbackProductCategories if either URL
// is unset, either fetch fails, or the joined result has no usable categories.
export async function getProductCategories(): Promise<ProductCategory[]> {
  if (!KATEGORI_SHEET_CSV_URL || !BAHAN_SHEET_CSV_URL) {
    return fallbackProductCategories;
  }

  try {
    const [categoriesRes, fabricsRes] = await Promise.all([
      fetch(KATEGORI_SHEET_CSV_URL, { next: { revalidate: false } }),
      fetch(BAHAN_SHEET_CSV_URL, { next: { revalidate: false } }),
    ]);

    if (!categoriesRes.ok || !fabricsRes.ok) return fallbackProductCategories;

    const categoryRows = csvToObjects(await categoriesRes.text());
    const fabricRows = csvToObjects(await fabricsRes.text());

    const allFabrics = fabricRows
      .map(rowToFabric)
      .filter((f): f is FabricType & { categoryId: string } => f !== null);

    const categories = categoryRows
      .map(rowToCategory)
      .filter((c): c is Omit<ProductCategory, "fabricTypes"> => c !== null)
      .map((category) => ({
        ...category,
        fabricTypes: allFabrics
          .filter((fabric) => fabric.categoryId === category.id)
          .map(({ id, name, pricePerPc, image }) => ({ id, name, pricePerPc, image })),
      }))
      .filter((category) => category.fabricTypes.length > 0);

    return categories.length > 0 ? categories : fallbackProductCategories;
  } catch {
    return fallbackProductCategories;
  }
}
