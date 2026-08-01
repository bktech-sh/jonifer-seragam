import { csvToObjects } from "@/lib/csv";

export type FabricType = {
  id: string;
  name: string;
  description?: string;
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
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_4134.PNG?tr=w-800,q-75,f-auto",
    galleryImages: [
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_7302.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_9116.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_7318.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_4985.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_5906.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_9112.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_7314.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_7315.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_4856.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_7720.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_7756.JPG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_5905.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_8056.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_0993.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_1094.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_7319.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_8306.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_7742.JPG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_3746.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_1092.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_7748.JPG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_7753.JPG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_8307.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_8312.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_0981.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_8311.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_5908.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_4908.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_8308.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-standar/IMG_8313.HEIC?tr=w-700,q-70,f-auto",
    ],
    fabricTypes: [
      {
        id: "american-drill-standar",
        name: "American Drill",
        description: "Paling umum & hemat, cocok untuk kampus/pemakaian harian.",
        pricePerPc: 110000,
        image:
          "https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "ventura-standar",
        name: "Ventura",
        description: "Lebih kokoh & nyaman, cocok untuk kantor/indoor.",
        pricePerPc: 130000,
        image:
          "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "verlando-standar",
        name: "Verlando",
        description: "Lebih kaku tapi awet, cocok untuk outdoor/aktivitas berat.",
        pricePerPc: 130000,
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
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_8429.HEIC?tr=w-800,q-75,f-auto",
    galleryImages: [
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_7644.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_5552.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_7645.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_5569.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_5589.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_7632.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_8624.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_5580.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_3159.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_8613.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_2027.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_2026.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_8619.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_5624.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_8623.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_5581.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_5568.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_8617.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_8426.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_5608.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_7637.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tunik/IMG_8618.HEIC?tr=w-700,q-70,f-auto",
    ],
    fabricTypes: [
      {
        id: "american-drill-tunik",
        name: "American Drill",
        description: "Paling umum & hemat, cocok untuk kampus/pemakaian harian.",
        pricePerPc: 120000,
        image:
          "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "ventura-tunik",
        name: "Ventura",
        description: "Lebih kokoh & nyaman, cocok untuk kantor/indoor.",
        pricePerPc: 140000,
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "verlando-tunik",
        name: "Verlando",
        description: "Lebih kaku tapi awet, cocok untuk outdoor/aktivitas berat.",
        pricePerPc: 140000,
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
      "https://ik.imagekit.io/jgcvqpss3/pdh-tactical/IMG_5369.HEIC?tr=w-800,q-75,f-auto",
    galleryImages: [
      "https://ik.imagekit.io/jgcvqpss3/pdh-tactical/IMG_5007.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tactical/IMG_5010.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tactical/IMG_5009.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tactical/IMG_5006.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tactical/IMG_5008.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tactical/IMG_5005.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tactical/IMG_7647.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-tactical/IMG_5384.HEIC?tr=w-700,q-70,f-auto",
    ],
    fabricTypes: [
      {
        id: "american-drill-tactical",
        name: "American Drill",
        description: "Paling umum & hemat, cocok untuk kampus/pemakaian harian.",
        pricePerPc: 160000,
        image:
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "ventura-tactical",
        name: "Ventura",
        description: "Lebih kokoh & nyaman, cocok untuk kantor/indoor.",
        pricePerPc: 180000,
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "verlando-tactical",
        name: "Verlando",
        description: "Lebih kaku tapi awet, cocok untuk outdoor/aktivitas berat.",
        pricePerPc: 180000,
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
      "https://ik.imagekit.io/jgcvqpss3/pdh-2in1/IMG_4387.HEIC?tr=w-800,q-75,f-auto",
    galleryImages: [
      "https://ik.imagekit.io/jgcvqpss3/pdh-2in1/1ee5af8b-6565-44c0-90d5-7f54896bb764.jpg?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-2in1/IMG_4984.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-2in1/IMG_4983.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-2in1/53603b8b-506c-4bc6-b3ad-076000179cb8.jpg?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-2in1/IMG_4386.heic?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-2in1/IMG_4401.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/pdh-2in1/IMG_4388.HEIC?tr=w-700,q-70,f-auto",
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
      "https://ik.imagekit.io/jgcvqpss3/almamater/IMG_8516.HEIC?tr=w-800,q-75,f-auto",
    galleryImages: [
      "https://ik.imagekit.io/jgcvqpss3/almamater/IMG_3093.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/almamater/IMG_3091.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/almamater/IMG_3092.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/almamater/IMG_8517.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/almamater/IMG_8520.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/almamater/IMG_8518.MOV/ik-video.mp4",
      "https://ik.imagekit.io/jgcvqpss3/almamater/IMG_8519.MOV/ik-video.mp4",
    ],
    fabricTypes: [
      {
        id: "american-drill-almamater-furing-setengah",
        name: "American Drill - Furing Setengah",
        description: "Paling umum & hemat, cocok untuk kampus/pemakaian harian.",
        pricePerPc: 130000,
        image:
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "ventura-almamater-furing-setengah",
        name: "Ventura - Furing Setengah",
        description: "Lebih kokoh & nyaman, cocok untuk kantor/indoor.",
        pricePerPc: 150000,
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "verlando-almamater-furing-setengah",
        name: "Verlando - Furing Setengah",
        description: "Lebih kaku tapi awet, cocok untuk outdoor/aktivitas berat.",
        pricePerPc: 150000,
        image:
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "american-drill-almamater-full-furing",
        name: "American Drill - Full Furing",
        description: "Paling umum & hemat, cocok untuk kampus/pemakaian harian.",
        pricePerPc: 145000,
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "ventura-almamater-full-furing",
        name: "Ventura - Full Furing",
        description: "Lebih kokoh & nyaman, cocok untuk kantor/indoor.",
        pricePerPc: 165000,
        image:
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "verlando-almamater-full-furing",
        name: "Verlando - Full Furing",
        description: "Lebih kaku tapi awet, cocok untuk outdoor/aktivitas berat.",
        pricePerPc: 165000,
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=70",
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
      "https://ik.imagekit.io/jgcvqpss3/rompi/IMG_4915.HEIC?tr=w-800,q-75,f-auto",
    galleryImages: [
      "https://ik.imagekit.io/jgcvqpss3/rompi/IMG_1875.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/rompi/IMG_1874.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/rompi/IMG_3058.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/rompi/IMG_3059.HEIC?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/rompi/b23a7990-eff3-4ed3-8211-8f57da39783c.jpg?tr=w-700,q-70,f-auto",
    ],
    fabricTypes: [
      {
        id: "american-drill-rompi-tanpa-furing",
        name: "American Drill - Tanpa Furing",
        description: "Paling umum & hemat, cocok untuk kampus/pemakaian harian.",
        pricePerPc: 80000,
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "ventura-rompi-tanpa-furing",
        name: "Ventura - Tanpa Furing",
        description: "Lebih kokoh & nyaman, cocok untuk kantor/indoor.",
        pricePerPc: 100000,
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "verlando-rompi-tanpa-furing",
        name: "Verlando - Tanpa Furing",
        description: "Lebih kaku tapi awet, cocok untuk outdoor/aktivitas berat.",
        pricePerPc: 100000,
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "american-drill-rompi-full-furing",
        name: "American Drill - Full Furing",
        description: "Paling umum & hemat, cocok untuk kampus/pemakaian harian.",
        pricePerPc: 90000,
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "ventura-rompi-full-furing",
        name: "Ventura - Full Furing",
        description: "Lebih kokoh & nyaman, cocok untuk kantor/indoor.",
        pricePerPc: 110000,
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "verlando-rompi-full-furing",
        name: "Verlando - Full Furing",
        description: "Lebih kaku tapi awet, cocok untuk outdoor/aktivitas berat.",
        pricePerPc: 110000,
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
      "https://ik.imagekit.io/jgcvqpss3/polo/Salinan%20DSC04909.JPG?tr=w-800,q-75,f-auto",
    galleryImages: [
      "https://ik.imagekit.io/jgcvqpss3/polo/84E58F0F-8540-43C2-A64F-D7CBA30C61FE.jpg?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/polo/0644a0a2-943a-4e4e-86ba-d18c6ed3051b.jpg?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/polo/EF202DE5-2322-4D3A-9119-7DC0616E87B4.jpg?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/polo/Polo_Velmont%20Hotel.png?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/polo/Salinan%20DSC04711.JPG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/polo/Salinan%20DSC04930.JPG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/polo/Salinan%20DSC04605.JPG?tr=w-700,q-70,f-auto",
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
      "https://ik.imagekit.io/jgcvqpss3/jaket/IMG_4991.PNG?tr=w-800,q-75,f-auto",
    galleryImages: [
      "https://ik.imagekit.io/jgcvqpss3/jaket/IMG_4990.PNG?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/jaket/IMG_4987.PNG?tr=w-700,q-70,f-auto",
    ],
    fabricTypes: [
      {
        id: "american-drill-jaket",
        name: "American Drill",
        description: "Paling umum & hemat, cocok untuk kampus/pemakaian harian.",
        pricePerPc: 175000,
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "ventura-jaket",
        name: "Ventura",
        description: "Lebih kokoh & nyaman, cocok untuk kantor/indoor.",
        pricePerPc: 195000,
        image:
          "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=600&q=70",
      },
      {
        id: "verlando-jaket",
        name: "Verlando",
        description: "Lebih kaku tapi awet, cocok untuk outdoor/aktivitas berat.",
        pricePerPc: 195000,
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=70",
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
      "https://ik.imagekit.io/jgcvqpss3/lanyard/IMG_6018.HEIC?tr=w-800,q-75,f-auto",
    galleryImages: [
      "https://ik.imagekit.io/jgcvqpss3/lanyard/fa8fe696-6f4e-4772-8eb9-78c02a31d2f1.jpg?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/lanyard/662926a9-c766-46ee-bc89-e3f7f2315908.jpg?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/lanyard/d8f8e31f-0035-452c-be9b-21ea2ab25b2c.jpg?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/lanyard/d93b3a81-b3c7-4cd7-9f98-ad975e4b9c94.jpg?tr=w-700,q-70,f-auto",
      "https://ik.imagekit.io/jgcvqpss3/lanyard/7bec0fac-cdb7-42d7-9f51-7750f3c27553.jpg?tr=w-700,q-70,f-auto",
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

const VIDEO_EXTENSIONS = [".mp4", ".mov", ".webm", ".m4v"];

export function isVideoUrl(url: string): boolean {
  const path = url.split("?")[0].toLowerCase();
  return VIDEO_EXTENSIONS.some((ext) => path.endsWith(ext));
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
