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
  {
    slug: "konveksi-bukittinggi-jasa-seragam-kaos-custom-terpercaya",
    title:
      "Konveksi Bukittinggi: Rekomendasi Jasa Seragam & Kaos Custom Terpercaya",
    excerpt:
      "Cari konveksi Bukittinggi yang bisa dipercaya untuk seragam kantor, kaos komunitas, atau PDH instansi? Ini alasan kenapa produksi lokal lebih menguntungkan.",
    publishedAt: "2026-07-01T09:00:00.000Z",
    coverImage:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "paragraph",
        children: [
          {
            text: "Mencari konveksi Bukittinggi yang bisa diajak kerja sama jangka panjang bukan perkara mudah. Banyak pelanggan di Bukittinggi dan sekitarnya akhirnya order ke kota lain karena mengira konveksi lokal tidak punya kapasitas produksi besar. ",
          },
          {
            text: "Padahal Jonifer Seragam sudah bertahun-tahun melayani produksi seragam dan kaos custom langsung dari Bukittinggi",
            bold: true,
          },
          {
            text: ", dengan kualitas yang tidak kalah dari konveksi kota besar.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Kenapa Pilih Konveksi Bukittinggi Dibanding Kirim dari Luar Kota?" }],
      },
      {
        type: "list",
        format: "unordered",
        items: [
          [
            { text: "Bisa cek bahan dan sample langsung: ", bold: true },
            {
              text: "kamu bisa datang ke toko fisik kami di Jl. Perintis Kemerdekaan, Bukittinggi, untuk lihat dan pegang langsung bahan sebelum order.",
            },
          ],
          [
            { text: "Ongkos kirim lebih hemat: ", bold: true },
            {
              text: "tanpa biaya ekspedisi antar pulau, cocok untuk instansi, sekolah, dan UMKM di Bukittinggi, Agam, dan sekitar Sumatera Barat.",
            },
          ],
          [
            { text: "Komunikasi lebih cepat: ", bold: true },
            {
              text: "revisi desain atau ukuran bisa langsung dikoordinasikan tanpa selisih waktu pengiriman jauh.",
            },
          ],
          [
            { text: "Dukung ekonomi lokal: ", bold: true },
            { text: "produksi dikerjakan oleh tim penjahit dan tukang sablon/bordir asli Bukittinggi." },
          ],
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Layanan Konveksi Bukittinggi dari Jonifer Seragam" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Sebagai konveksi Bukittinggi, kami melayani produksi ",
          },
          {
            text: "kaos custom, seragam kantor, PDH instansi, almamater sekolah, rompi, hingga jaket komunitas",
            bold: true,
          },
          {
            text: ", lengkap dengan pilihan sablon atau bordir sesuai kebutuhan desain.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Siapa Saja yang Sudah Percaya?" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Dari sekolah, kantor pemerintahan, komunitas motor, hingga UMKM lokal di Bukittinggi dan Sumatera Barat sudah mempercayakan produksi seragam mereka ke Jonifer Seragam. Lihat contoh hasil kerja kami di halaman ",
          },
          { text: "Portofolio", italic: true },
          {
            text: " untuk gambaran kualitas jahitan dan sablon/bordir kami.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Kunjungi Toko Kami di Bukittinggi" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Toko kami buka setiap Senin–Sabtu, 08.00–17.00 WIB di Jl. Perintis Kemerdekaan, Bukittinggi, Sumatera Barat. Datang langsung untuk konsultasi bahan dan desain, atau hubungi admin lewat WhatsApp untuk konsultasi jarak jauh dan estimasi harga instan.",
          },
        ],
      },
    ],
  },
  {
    slug: "konveksi-sumatera-barat-padang-payakumbuh-agam",
    title:
      "Konveksi Sumatera Barat: Melayani Padang, Payakumbuh, Agam, dan Sekitarnya",
    excerpt:
      "Butuh konveksi di Padang, Payakumbuh, atau Agam? Jonifer Seragam berbasis di Bukittinggi dan siap kirim ke seluruh wilayah Sumatera Barat tanpa ribet.",
    publishedAt: "2026-07-05T09:00:00.000Z",
    coverImage:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "paragraph",
        children: [
          {
            text: "Meski berbasis di Bukittinggi, ",
          },
          {
            text: "Jonifer Seragam rutin melayani pesanan konveksi dari berbagai kota di Sumatera Barat",
            bold: true,
          },
          {
            text: " seperti Padang, Payakumbuh, Agam, Bukittinggi, dan Kabupaten Lima Puluh Kota. Lokasi bukan halangan berkat sistem pemesanan online dan pengiriman yang sudah terjadwal rutin ke berbagai daerah.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Konveksi untuk Kota Padang" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Untuk pelanggan di Padang, kami sudah biasa mengerjakan pesanan seragam kantor, kaos event, dan PDH instansi dalam jumlah besar. Proses konsultasi desain dan ukuran bisa dilakukan penuh lewat WhatsApp, tidak perlu datang langsung ke Bukittinggi.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Konveksi untuk Payakumbuh dan Lima Puluh Kota" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Jarak Payakumbuh ke Bukittinggi relatif dekat, sehingga pengiriman barang jadi maupun pengambilan sample bahan bisa dilakukan lebih cepat dibanding pesan dari konveksi luar provinsi. ",
          },
          {
            text: "Cocok untuk sekolah dan instansi yang butuh seragam dengan tenggat waktu ketat.",
            italic: true,
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Konveksi untuk Agam dan Sekitar Bukittinggi" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Karena lokasi produksi dan toko fisik kami memang berada di Bukittinggi, pelanggan dari Kabupaten Agam dan kecamatan sekitarnya bisa datang langsung untuk konsultasi bahan, coba ukuran, atau ambil pesanan tanpa biaya kirim tambahan.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Cara Order dari Luar Kota" }],
      },
      {
        type: "list",
        format: "ordered",
        items: [
          [
            { text: "Hitung estimasi harga", bold: true },
            { text: " lewat halaman Katalog sesuai jenis produk dan jumlah pesanan." },
          ],
          [
            { text: "Konsultasi desain dan bahan", bold: true },
            { text: " lewat WhatsApp, termasuk kirim foto referensi logo atau warna." },
          ],
          [
            { text: "Konfirmasi DP dan jadwal produksi", bold: true },
            { text: " setelah desain dan spesifikasi disepakati." },
          ],
          [
            { text: "Barang dikirim", bold: true },
            { text: " ke alamat kamu di Padang, Payakumbuh, Agam, atau kota lain di Sumatera Barat menggunakan ekspedisi pilihan." },
          ],
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Di mana pun lokasimu di Sumatera Barat, tim Jonifer Seragam siap bantu dari konsultasi sampai barang jadi dikirim. Hubungi admin via WhatsApp untuk mulai konsultasi kebutuhan konveksimu.",
          },
        ],
      },
    ],
  },
  {
    slug: "rekomendasi-seragam-sekolah-dan-instansi-di-bukittinggi",
    title:
      "Rekomendasi Konveksi Seragam Sekolah dan Instansi di Bukittinggi",
    excerpt:
      "Sekolah dan instansi di Bukittinggi butuh seragam rapi, seragam, dan tahan lama dengan harga bersaing? Ini panduan memilih konveksi seragam sekolah yang tepat.",
    publishedAt: "2026-07-10T09:00:00.000Z",
    coverImage:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "paragraph",
        children: [
          {
            text: "Setiap tahun ajaran baru atau pergantian periode kepengurusan, sekolah dan instansi di Bukittinggi menghadapi kebutuhan yang sama: ",
          },
          {
            text: "mencari konveksi seragam yang bisa dipercaya soal kualitas bahan, kerapian jahitan, dan ketepatan waktu produksi",
            bold: true,
          },
          { text: "." },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Kebutuhan Seragam Sekolah" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Untuk sekolah di Bukittinggi dan sekitarnya, kami melayani produksi ",
          },
          {
            text: "seragam identitas, kaos olahraga, almamater, hingga atribut OSIS/ekstrakurikuler",
            bold: true,
          },
          {
            text: ", dengan bordir nama dan logo sekolah yang presisi dan rapi.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Kebutuhan Seragam Instansi dan Kantor" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Instansi pemerintahan maupun swasta di Bukittinggi umumnya butuh ",
          },
          { text: "PDH, PDL, rompi, dan seragam identitas pegawai", bold: true },
          {
            text: " dengan standar warna dan logo yang konsisten di setiap batch produksi, terutama untuk instansi dengan jumlah pegawai besar dan rotasi seragam berkala.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Hal yang Perlu Diperhatikan Sekolah/Instansi Sebelum Order" }],
      },
      {
        type: "list",
        format: "unordered",
        items: [
          [
            { text: "Konsistensi warna: ", bold: true },
            {
              text: "pastikan konveksi punya standar warna baku, terutama untuk logo dan atribut sekolah/instansi yang harus sama persis tiap tahun.",
            },
          ],
          [
            { text: "Data ukuran siswa/pegawai: ", bold: true },
            { text: "kumpulkan data ukuran lebih awal agar distribusi ukuran S-XXL sesuai kebutuhan riil." },
          ],
          [
            { text: "Jadwal produksi jelas: ", bold: true },
            {
              text: "untuk seragam sekolah yang harus siap sebelum tahun ajaran baru, pesan minimal 1 bulan sebelum jadwal pemakaian.",
            },
          ],
          [
            { text: "Garansi revisi: ", bold: true },
            { text: "tanyakan kebijakan revisi jika ada kesalahan ukuran atau cacat produksi sebelum DP disepakati." },
          ],
        ],
      },
      {
        type: "heading",
        level: 2,
        children: [{ text: "Kenapa Sekolah dan Instansi di Bukittinggi Pilih Jonifer Seragam" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Sebagai konveksi lokal Bukittinggi, kami memahami kebutuhan spesifik sekolah dan instansi di Sumatera Barat—mulai dari standar warna almamater, model PDH instansi daerah, hingga jadwal produksi yang harus selaras dengan kalender akademik atau agenda instansi.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Sekolah atau instansimu di Bukittinggi butuh seragam baru untuk tahun ajaran atau periode berikutnya? Hubungi tim Jonifer Seragam via WhatsApp untuk konsultasi kebutuhan dan penawaran harga khusus partai besar.",
          },
        ],
      },
    ],
  },
];
