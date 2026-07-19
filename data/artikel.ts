export interface ArtikelTextNode {
  text: string;
  bold?: boolean;
  italic?: boolean;
}

export interface ArtikelParagraphNode {
  type: "paragraph";
  children: ArtikelTextNode[];
}

export interface ArtikelHeadingNode {
  type: "heading";
  level: 2 | 3;
  children: ArtikelTextNode[];
}

export interface ArtikelListNode {
  type: "list";
  format: "ordered" | "unordered";
  items: ArtikelTextNode[][];
}

export type ArtikelContentNode =
  | ArtikelParagraphNode
  | ArtikelHeadingNode
  | ArtikelListNode;

export interface ArtikelItem {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  coverImage: string;
  content: ArtikelContentNode[];
}

export const artikelData: ArtikelItem[] = [
  {
    slug: "cara-memilih-bahan-kaos-untuk-seragam-kantor",
    title: "Cara Memilih Bahan Kaos yang Tepat untuk Seragam Kantor",
    excerpt:
      "Bahan yang salah bikin seragam gerah dan cepat rusak. Kenali karakter Cotton Combed, CVC, dan Lacoste sebelum order seragam kantor dalam jumlah besar.",
    publishedAt: "2026-06-02T09:00:00.000Z",
    coverImage:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "paragraph",
        children: [
          {
            text: "Banyak perusahaan baru sadar bahan seragam salah pilih setelah kaos dipakai sebulan, warnanya kusam, atau terasa panas dipakai seharian. ",
          },
          {
            text: "Padahal pemilihan bahan adalah keputusan paling menentukan kualitas seragam",
            bold: true,
          },
          { text: ", bukan sekadar soal harga per pcs." },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Berikut tiga bahan yang paling sering dipakai untuk seragam kantor dan kaos custom, beserta karakteristiknya.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "1. Cotton Combed" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Cotton Combed adalah bahan katun 100% yang seratnya telah disisir sehingga lebih halus dan rapi dibanding cotton biasa. ",
          },
          { text: "Menyerap keringat dengan sangat baik", bold: true },
          {
            text: ", cocok untuk daerah panas dan aktivitas outdoor. Tersedia dalam gramasi 20s, 24s, dan 30s — makin kecil angkanya, makin tebal bahannya.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "2. CVC (Cotton Viscose)" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Campuran katun dan viscose membuat CVC lebih ",
          },
          { text: "stabil, tidak mudah melar", bold: true },
          {
            text: ", dan warnanya lebih tahan lama dibanding cotton combed murni. Pilihan tepat untuk seragam yang harus sering dicuci dan disetrika.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "3. Lacoste (Pique)" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Bahan berpori dengan tekstur khas, biasa dipakai untuk polo shirt seragam kantor karena kesannya lebih formal dan rapi dibanding kaos oblong biasa. ",
          },
          {
            text: "Cocok untuk seragam customer service atau front office.",
            italic: true,
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Tips Memilih Bahan" }],
      },
      {
        type: "list",
        format: "unordered",
        items: [
          [
            { text: "Cek kebutuhan aktivitas: ", bold: true },
            { text: "outdoor butuh bahan menyerap keringat, indoor bisa pakai bahan lebih formal." },
          ],
          [
            { text: "Sesuaikan budget: ", bold: true },
            { text: "cotton combed 30s lebih ekonomis dibanding 20s untuk pemesanan besar." },
          ],
          [
            { text: "Minta sample bahan: ", bold: true },
            { text: "sebelum order dalam jumlah besar, selalu minta contoh bahan fisik dari admin." },
          ],
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Masih bingung bahan mana yang cocok untuk seragam kantor kamu? Konsultasikan langsung kebutuhanmu ke tim Jonifer Seragam lewat WhatsApp, kami bantu rekomendasikan bahan sesuai budget dan kebutuhan.",
          },
        ],
      },
    ],
  },
  {
    slug: "perbedaan-sablon-plastisol-dan-bordir-komputer",
    title: "Sablon Plastisol vs Bordir Komputer, Mana yang Cocok untuk Seragammu?",
    excerpt:
      "Sablon dan bordir punya kelebihan masing-masing. Pahami perbedaan daya tahan, biaya, dan tampilan sebelum menentukan teknik untuk logo seragam.",
    publishedAt: "2026-06-10T09:00:00.000Z",
    coverImage:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "paragraph",
        children: [
          {
            text: "Saat memesan seragam custom, salah satu keputusan penting adalah ",
          },
          { text: "teknik aplikasi logo", bold: true },
          {
            text: ": sablon atau bordir. Keduanya punya karakter berbeda dan cocok untuk kebutuhan yang berbeda pula.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Sablon Plastisol" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Tinta plastisol menghasilkan warna tajam dan detail gambar yang presisi, cocok untuk desain penuh warna atau gradasi. ",
          },
          { text: "Lebih ekonomis untuk pemesanan dalam jumlah besar", bold: true },
          {
            text: " dan proses produksinya relatif lebih cepat dibanding bordir.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Bordir Komputer" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Bordir memberikan kesan lebih ",
          },
          { text: "premium, timbul, dan tahan lama", bold: true },
          {
            text: " karena benangnya menyatu langsung dengan kain. Ideal untuk logo perusahaan di dada atau lengan yang butuh kesan formal dan elegan, seperti PDH atau almamater.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Perbandingan Singkat" }],
      },
      {
        type: "list",
        format: "unordered",
        items: [
          [
            { text: "Daya tahan: ", bold: true },
            { text: "bordir lebih tahan lama dan tidak mudah retak dibanding sablon." },
          ],
          [
            { text: "Biaya: ", bold: true },
            { text: "sablon lebih murah untuk desain kompleks dan jumlah warna banyak." },
          ],
          [
            { text: "Kesan visual: ", bold: true },
            { text: "bordir terasa premium, sablon lebih fleksibel untuk desain artistik." },
          ],
          [
            { text: "Jenis bahan: ", bold: true },
            { text: "bahan tebal seperti PDH lebih cocok dibordir, kaos tipis lebih cocok disablon." },
          ],
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Belum yakin mau pilih sablon atau bordir untuk seragam perusahaanmu? Tim Jonifer Seragam siap bantu konsultasi gratis sesuai jenis bahan dan desain logo kamu lewat WhatsApp.",
          },
        ],
      },
    ],
  },
  {
    slug: "tips-menentukan-jumlah-order-seragam-perusahaan",
    title: "Tips Menentukan Jumlah Order Seragam agar Tidak Kelebihan Stok",
    excerpt:
      "Order terlalu banyak bikin stok menumpuk, terlalu sedikit bikin karyawan baru kehabisan seragam. Begini cara menghitung jumlah order yang pas.",
    publishedAt: "2026-06-18T09:00:00.000Z",
    coverImage:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "paragraph",
        children: [
          {
            text: "Menentukan jumlah order seragam bukan sekadar mengalikan jumlah karyawan. ",
          },
          { text: "Ada beberapa faktor yang sering terlewat", bold: true },
          {
            text: " dan berujung pada stok yang menumpuk di gudang atau malah kekurangan saat ada karyawan baru masuk.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "1. Hitung Kebutuhan Riil, Bukan Cuma Jumlah Karyawan" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Idealnya setiap karyawan mendapat 2-3 pcs seragam agar bisa dicuci bergantian. Tambahkan buffer 5-10% untuk antisipasi karyawan baru dalam 6 bulan ke depan.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "2. Manfaatkan Skema Harga Bertingkat" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Sebagian besar konveksi, termasuk kami, menerapkan ",
          },
          { text: "harga lebih murah per pcs untuk jumlah order lebih besar", bold: true },
          {
            text: ". Cek dulu tabel harga di halaman Katalog untuk tahu di titik mana harga mulai turun signifikan, supaya order bisa lebih efisien.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "3. Pisahkan Ukuran Berdasarkan Data, Bukan Perkiraan" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Kesalahan umum adalah order rata dari S sampai XL tanpa data ukuran aktual karyawan. ",
          },
          { text: "Selalu lakukan survei ukuran sebelum order", italic: true },
          {
            text: " agar distribusi ukuran sesuai kebutuhan sebenarnya dan tidak ada sisa ukuran yang tidak terpakai.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "4. Pertimbangkan Waktu Produksi" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Order dalam jumlah besar butuh waktu produksi lebih lama. Rencanakan pemesanan minimal 3-4 minggu sebelum tanggal seragam dibutuhkan, terutama untuk seragam dengan bordir atau desain kompleks.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Butuh bantuan menghitung estimasi jumlah dan biaya order seragam perusahaanmu? Hubungi tim Jonifer Seragam via WhatsApp, kami bantu hitungkan sesuai kebutuhan dan budget kamu.",
          },
        ],
      },
    ],
  },
];
