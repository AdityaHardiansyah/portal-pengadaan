import {
  Scales,
  FileText,
  Buildings,
  Gavel,
  Bank,
  Scroll,
} from "@phosphor-icons/react";

export const regulationCategories = [
  {
    id: "uu",
    title: "Undang-Undang",
    icon: Scales,
  },
  {
    id: "pp",
    title: "Peraturan Pemerintah",
    icon: FileText,
  },
  {
    id: "perpres",
    title: "Peraturan Presiden",
    icon: Buildings,
  },
  {
    id: "keppres",
    title: "Keputusan/Instruksi Presiden",
    icon: Gavel,
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
  {
    id: 1,
    category: "uu",
    title: "UU Nomor 03 Tahun 2014 tentang Perindustrian",
    date: "24 November 2023",
    url: "https://drive.google.com/drive/folders/1ETSk87JwccMSmDccbDJWNgvtNdza2mII?usp=sharing",
  },

  {
    id: 2,
    category: "uu",
    title: "UU Nomor 17 Tahun 2003 tentang Keuangan Negara",
    date: "01 November 2023",
    url: "https://drive.google.com/drive/folders/1ETSk87JwccMSmDccbDJWNgvtNdza2mII?usp=sharing",
  },

  {
    id: 3,
    category: "uu",
    title: "UU Nomor 1 Tahun 2004 tentang Perbendaharaan Negara",
    date: "01 November 2023",
    url: "https://drive.google.com/drive/folders/1ETSk87JwccMSmDccbDJWNgvtNdza2mII?usp=sharing",
  },

  // Contoh data kategori lain
  {
    id: 4,
    category: "pp",
    title: "Peraturan Pemerintah",
    date: "01 November 2023",
    url: "https://drive.google.com/drive/folders/1ETSk87JwccMSmDccbDJWNgvtNdza2mII?usp=sharing",
  },

  {
    id: 5,
    category: "perpres",
    title: "Peraturan Presiden",
    date: "01 November 2023",
    url: "https://drive.google.com/drive/folders/1ETSk87JwccMSmDccbDJWNgvtNdza2mII?usp=sharing",
  },
];
