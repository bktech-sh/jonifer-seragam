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
export const productCategories: ProductCategory[] = [
  {
    id: "pdh-standar",
    name: "PDH Standar",
    description: "Pakaian Dinas Harian dengan potongan standar, rapi untuk kebutuhan kantor.",
    explanation:
      "PDH Standar dirancang untuk kebutuhan seragam harian kantor maupun instansi. Potongannya rapi dan formal, cocok dipakai rutin tanpa mengurangi kenyamanan sepanjang hari kerja.",
    image:
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&w=800&q=70",
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
    description: "PDH model tunik untuk seragam instansi maupun organisasi.",
    explanation:
      "PDH Tunik mengikuti model seragam instansi dengan siluet tunik yang lebih tertutup dan formal. Pilihan tepat untuk organisasi yang butuh keseragaman tampilan di acara resmi.",
    image:
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=70",
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
    description: "PDH tactical dengan bahan dan jahitan yang lebih kuat untuk lapangan.",
    explanation:
      "PDH Tactical dibuat dari bahan yang lebih kuat dan jahitan ekstra kokoh, ditujukan untuk aktivitas lapangan yang butuh daya tahan lebih dari seragam biasa.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=70",
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
    id: "almamater",
    name: "Almamater",
    description: "Jaket almamater untuk kampus, sekolah, atau organisasi kemahasiswaan.",
    explanation:
      "Jaket Almamater menjadi identitas kebanggaan angkatan atau institusi. Kami produksi dengan bahan yang adem dipakai lama dan bordir logo yang presisi.",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=70",
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
    description: "Rompi custom untuk kerja lapangan, event, atau seragam komunitas.",
    explanation:
      "Rompi custom cocok untuk kebutuhan kerja lapangan, panitia event, atau identitas komunitas. Praktis dipakai di atas pakaian apa pun dengan tetap terlihat rapi.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=70",
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
    id: "jaket-custom",
    name: "Jaket Custom",
    description: "Jaket custom dengan desain dan bahan sesuai kebutuhan.",
    explanation:
      "Jaket custom bisa disesuaikan modelnya, mulai dari bomber hingga hoodie zipper, dengan pilihan bahan yang menyesuaikan cuaca dan kebutuhan aktivitas.",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=70",
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
    id: "bordir",
    name: "Bordir",
    description: "Layanan bordir presisi untuk logo, nama, atau detail lainnya.",
    explanation:
      "Layanan bordir kami mengerjakan logo, nama, atau detail kecil dengan presisi tinggi dan warna benang yang tahan lama meski sering dicuci.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=70",
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
];

export const pricePerEmbroideryPoint = 2500;
export const pricePerColor = 5000;
export const embroideryPointOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export const colorVariationOptions = [1, 2, 3, 4, 5, 6, 7, 8];
export const orderQuantity = { min: 20, max: 1000, default: 20 };

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((category) => category.id === slug);
}

export function getStartingPrice(category: ProductCategory): number {
  return Math.min(...category.fabricTypes.map((fabric) => fabric.pricePerPc));
}
