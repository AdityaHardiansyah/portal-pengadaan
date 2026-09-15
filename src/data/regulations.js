import { FileText, Buildings, Bank, Scroll } from "@phosphor-icons/react";

export const regulationCategories = [
  {
    id: "perpres",
    title: "Peraturan Presiden",
    icon: Buildings,
  },
  {
    id: "permen",
    title: "Peraturan Menteri/Lembaga",
    icon: FileText,
  },
  {
    id: "kepmen",
    title: "Keputusan Menteri/Lembaga",
    icon: Bank,
  },
  {
    id: "se",
    title: "Surat Edaran",
    icon: Scroll,
  },
  {
    id: "lainnya",
    title: "Lain-lain",
    icon: FileText,
  },
];

export const regulations = [
  // Contoh data kategori lain

  {
    id: 1,
    category: "perpres",
    title:
      "Peraturan Presiden Nomor 16 Tahun 2018 Tentang Pengadaan Barang/Jasa Pemerintah",
    date: "16 Maret 2018",
    url: "https://drive.google.com/drive/folders/1ETSk87JwccMSmDccbDJWNgvtNdza2mII?usp=sharing",
  },
  {
    id: 2,
    category: "perpres",
    title:
      "Peraturan Presiden Nomor 12 Tahun 2021 Tentang Perubahan atas Peraturan Presiden Nomor 16 Tahun 2018 Tentang Pengadaan Barang/Jasa Pemerintah",
    date: "02 Februari 2021",
    url: "https://drive.google.com/drive/folders/1ETSk87JwccMSmDccbDJWNgvtNdza2mII?usp=sharing",
  },
  {
    id: 3,
    category: "perpres",
    title:
      "Peraturan Presiden Nomor 46 Tahun 2025 Tentang Perubahan Kedua atas Peraturan Presiden Nomor 16 Tahun 2018 Tentang Pengadaan Barang/Jasa Pemerintah",
    date: "30 April 2025",
    url: "https://drive.google.com/drive/folders/1ETSk87JwccMSmDccbDJWNgvtNdza2mII?usp=sharing",
  },
];
