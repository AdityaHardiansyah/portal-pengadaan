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
    icon: BookOpen,
  },
  {
    id: "ppk",
    title: "Panduan PPK",
    icon: FileText,
  },
  {
    id: "pokja",
    title: "Panduan Pokja Pemilihan",
    icon: GraduationCap,
  },
  {
    id: "pp",
    title: "Panduan PP",
    icon: ClipboardText,
  },
  {
    id: "penyedia",
    title: "Panduan Pelaku Usaha/Penyedia",
    icon: CheckSquare,
  },
  {
    id: "sop",
    title: "Standar Operasional Prosedur (SOP)",
    icon: Scroll,
  },
  {
    id: "lainnya",
    title: "Lain - lain",
    icon: Scroll,
  },
];

export const guides = [
  {
    id: 1,
    category: "pa/kpa",
    title: "Panduan Pelaksanaan Pengadaan Barang/Jasa",
    description: "Panduan Pelaksanaan Pengadaan Barang/Jasa Pemerintah",
    date: "2026",
    url: "https://drive.google.com/drive/folders/1_v4nkKgwHR-V3tSFAdUlLEDc7Z7jGRdn?usp=drive_link",
  },

  {
    id: 2,
    category: "pengadaan",
    title: "Panduan Pengadaan Barang/Jasa Pemerintah",
    date: "2026",
    url: "https://drive.google.com/drive/folders/1_v4nkKgwHR-V3tSFAdUlLEDc7Z7jGRdn?usp=drive_link",
  },

  {
    id: 3,
    category: "pelaksanaan",
    title: "Panduan Pelaksanaan Pengadaan",
    date: "2026",
    url: "https://drive.google.com/drive/folders/1_v4nkKgwHR-V3tSFAdUlLEDc7Z7jGRdn?usp=drive_link",
  },
];
