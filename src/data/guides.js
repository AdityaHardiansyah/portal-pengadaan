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
    id: "umum",
    title: "Panduan Umum",
    icon: BookOpen,
  },
  {
    id: "pengadaan",
    title: "Panduan Pengadaan",
    icon: FileText,
  },
  {
    id: "bimtek",
    title: "Panduan Bimtek",
    icon: GraduationCap,
  },
  {
    id: "pelaksanaan",
    title: "Panduan Pelaksanaan",
    icon: ClipboardText,
  },
  {
    id: "evaluasi",
    title: "Panduan Evaluasi",
    icon: CheckSquare,
  },
  {
    id: "lainnya",
    title: "Panduan Lainnya",
    icon: Scroll,
  },
];

export const guides = [
  {
    id: 1,
    category: "umum",
    title: "Panduan Pelaksanaan Pengadaan Barang/Jasa",
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
