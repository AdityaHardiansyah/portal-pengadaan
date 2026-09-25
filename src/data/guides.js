import {
  BookOpen,
  FileText,
  GraduationCap,
  ClipboardText,
  CheckSquare,
  Scroll,
} from "@phosphor-icons/react";

export const guideCategories = [
  {
    id: "pa/kpa",
    title: "Panduan PA/KPA",
    description:
      "Panduan bagi Pengguna Anggaran (PA) dan Kuasa Pengguna Anggaran (KPA) dalam pelaksanaan Pengadaan Barang/Jasa Pemerintah.",
    icon: BookOpen,
  },
  {
    id: "ppk",
    title: "Panduan PPK",
    description:
      "Panduan bagi Pejabat Pembuat Komitmen (PPK) dalam perencanaan, pelaksanaan, dan pengendalian Pengadaan Barang/Jasa.",
    icon: FileText,
  },
  {
    id: "pokja",
    title: "Panduan Pokja Pemilihan",
    description:
      "Panduan bagi Pokja Pemilihan dalam melaksanakan proses pemilihan penyedia barang/jasa sesuai dengan ketentuan yang berlaku.",
    icon: GraduationCap,
  },
  {
    id: "pp",
    title: "Panduan PP",
    description:
      "Panduan bagi Pejabat Pengadaan (PP) dalam melaksanakan proses Pengadaan Barang/Jasa Pemerintah.",
    icon: ClipboardText,
  },
  {
    id: "penyedia",
    title: "Panduan Pelaku Usaha/Penyedia",
    description:
      "Panduan bagi pelaku usaha dan penyedia dalam mengikuti dan melaksanakan proses Pengadaan Barang/Jasa Pemerintah.",
    icon: CheckSquare,
  },
  {
    id: "sop",
    title: "Standar Operasional Prosedur (SOP)",
    description:
      "Standar Operasional Prosedur yang menjadi acuan dalam pelaksanaan proses dan kegiatan Pengadaan Barang/Jasa.",
    icon: Scroll,
  },
  {
    id: "lainnya",
    title: "Lain - lain",
    description:
      "Panduan dan dokumen pendukung lainnya yang berkaitan dengan Pengadaan Barang/Jasa Pemerintah.",
    icon: Scroll,
  },
];

export const guides = [
  {
    id: 1,
    category: "pa/kpa",
    title: "Panduan Pelaksanaan Pengadaan Barang/Jasa",
    description:
      "Panduan bagi PA/KPA dalam memahami dan melaksanakan proses Pengadaan Barang/Jasa Pemerintah.",
    date: "2026",
    url: "https://drive.google.com/drive/folders/1_v4nkKgwHR-V3tSFAdUlLEDc7Z7jGRdn?usp=drive_link",
  },

  {
    id: 2,
    category: "lainnya",
    title: "Panduan Pengadaan Barang/Jasa Pemerintah",
    description:
      "Panduan umum mengenai pelaksanaan Pengadaan Barang/Jasa Pemerintah.",
    date: "2026",
    url: "https://drive.google.com/drive/folders/1_v4nkKgwHR-V3tSFAdUlLEDc7Z7jGRdn?usp=drive_link",
  },

  {
    id: 3,
    category: "lainnya",
    title: "Panduan Pelaksanaan Pengadaan",
    description:
      "Panduan yang memberikan informasi mengenai tahapan dan pelaksanaan Pengadaan Barang/Jasa.",
    date: "2026",
    url: "https://drive.google.com/drive/folders/1_v4nkKgwHR-V3tSFAdUlLEDc7Z7jGRdn?usp=drive_link",
  },
];
