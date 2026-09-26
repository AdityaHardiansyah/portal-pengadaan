import { FileText, Buildings, Bank, Scroll } from "@phosphor-icons/react";

export const regulationCategories = [
  {
    id: "perpres",
    title: "Peraturan Presiden",
    description:
      "Peraturan yang ditetapkan oleh Presiden sebagai dasar kebijakan dan penyelenggaraan pengadaan barang/jasa pemerintah.",
    icon: Buildings,
  },
  {
    id: "permen",
    title: "Peraturan Menteri/Lembaga",
    description:
      "Peraturan yang ditetapkan oleh kementerian atau lembaga untuk mengatur pelaksanaan dan tata kelola pengadaan barang/jasa.",
    icon: FileText,
  },
  {
    id: "kepmen",
    title: "Keputusan Menteri/Lembaga",
    description:
      "Keputusan yang ditetapkan oleh Menteri atau pimpinan lembaga sebagai pedoman atau penetapan dalam pelaksanaan pengadaan.",
    icon: Bank,
  },
  {
    id: "uu",
    title: "Undang-Undang",
    description:
      "Undang-undang yang menjadi dasar hukum dalam pengadaan barang/jasa pemerintah.",
    icon: Scroll,
  },
  {
    id: "lainnya",
    title: "Lain-lain",
    description:
      "Dokumen dan ketentuan lainnya yang berkaitan dengan pengadaan barang/jasa pemerintah.",
    icon: FileText,
  },
];

export const regulations = [
  {
    id: 1,
    category: "permen",
    title:
      "Peraturan Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah Nomor 5 Tahun 2020",
    description:
      "Tentang Konfirmasi Status Wajib Pajak Dalam Pengadaan Barang/Jasa Pemerintah.",
    date: "26 Mei 2020",
    url: "https://drive.google.com/file/d/1Y3z08XKuVrSUnpMy_TpfUBLCFBf7Tf9a/view?usp=sharing",
  },
  {
    id: 2,
    category: "permen",
    title:
      "Peraturan Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah Republik Indonesia Nomor 12 Tahun 2021  ",
    description:
      "Tentang Pedoman Pelaksanaan Pengadaan Barang/Jasa Pemerintah Melalui Penyedia",
    date: "31 Mei 2021",
    url: "https://drive.google.com/file/d/1Pc89d1bFEaqJvQWUXXUpooOIOgn-Unbi/view?usp=sharing",
  },
  {
    id: 3,
    category: "perpres",
    title: "Peraturan Presiden Nomor 46 Tahun 2025 ",
    description:
      "Tentang Perubahan Kedua atas Peraturan Presiden Nomor 16 Tahun 2018 Tentang Pengadaan Barang/Jasa Pemerintah.",
    date: "30 April 2025",
    url: "https://drive.google.com/drive/folders/1ETSk87JwccMSmDccbDJWNgvtNdza2mII?usp=sharing",
  },
  {
    id: 4,
    category: "kepmen",
    title:
      "Keputusan Kepala Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah Republik Indonesia Nomor 93 Tahun 2025 ",
    description:
      "Tentang Pelaksanaan E-Purchasing Katalog Elektronik Melalui Metode Mini-Kompetisi.",
    date: "08 Juli 2025",
    url: "https://drive.google.com/file/d/1xRfPD1QEPkCP929dQf4S9GoZ5SJyA0Kh/view?usp=sharing",
  },
  {
    id: 5,
    category: "permen",
    title:
      "Peraturan Lembaga Kebijakan Pengadaan Barang/Jasa Pemerinta Republik Indonesia Nomor 9 Tahun 2021",
    description:
      "Tentang Toko Daring Dan Katalog Elektronik Dalam Pengadaan Barang/Jasa Pemerintah.",
    date: "04 Mei 2021",
    url: "https://drive.google.com/file/d/1df4hEP_BW_nHZc6fjQChCDMtZuqMi4wn/view?usp=drive_link",
  },
  {
    id: 6,
    category: "uu",
    title: "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008",
    description: "Tentang Keterbukaan Informasi Publik.",
    date: "30 April 2008",
    url: "https://drive.google.com/file/d/1xJD4bvsAWMUmc1JRdrNvcIRQp0XOuE1C/view?usp=sharing",
  },
  {
    id: 7,
    category: "lainnya",
    title:
      "Tautan Pelaporan dan Pengaduan saat Mengakses Portal UKPBJ Bappenas",
    url: "https://drive.google.com/file/d/129kdcobXkY3fYsOsMRcxHH20xQ55OAva/view?usp=sharing",
  },
];
