import {
  Scroll,
  BookOpen,
  ChatsCircle,
  PresentationChart,
  Handshake,
  Megaphone,
  Desktop,
  ChartLineUp,
  Prohibit,
} from "@phosphor-icons/react";

export const services = [
  {
    id: 1,
    title: "Peraturan",
    description: "Peraturan dan regulasi pengadaan barang/jasa.",
    icon: Scroll,
    color: "blue",
    url: "/peraturan",
    external: false,
  },

  {
    id: 2,
    title: "Panduan",
    description: "Panduan pelaksanaan pengadaan barang/jasa.",
    icon: BookOpen,
    color: "indigo",
    url: "/panduan",
    external: false,
  },

  {
    id: 3,
    title: "Permintaan Informasi UKPBJ",
    description: "Layanan permintaan informasi UKPBJ.",
    icon: ChatsCircle,
    color: "violet",
    url: "https://ppid.bappenas.go.id/",
    external: true,
  },

  {
    id: 4,
    title: "Informasi Bimtek",
    description: "Informasi bimbingan teknis pengadaan.",
    icon: PresentationChart,
    color: "orange",
    url: "https://linktr.ee/pelatihanpbj",
    external: true,
  },

  {
    id: 5,
    title: "Clearing House",
    description: "Layanan konsultasi dan penyelesaian permasalahan.",
    icon: Handshake,
    color: "emerald",
    url: "https://sertifikasipbj.lkpp.go.id/",
    external: true,
  },

  {
    id: 6,
    title: "Whistleblowing System Bappenas",
    description: "Saluran pelaporan dugaan pelanggaran di lingkungan Bappenas.",
    icon: Megaphone,
    color: "rose",
    url: "https://wbs.bappenas.go.id/",
    external: true,
  },
  {
    id: 7,
    title: "Layanan Pengadaan Secara Elektronik",
    description:
      "Layanan pengadaan secara elektronik untuk mendukung pelaksanaan pengadaan barang/jasa secara transparan, efektif, dan akuntabel.",
    icon: Desktop,
    color: "cyan",

    featured: true,

    image: "/images/lpse-illustration.png",

    buttons: [
      {
        label: "Website SPSE Bappenas",
        url: "https://spse.inaproc.id/bappenas",
      },
      {
        label: "Layanan SPSE",
        url: "https://spse.inaproc.id/bappenas/kontak",
      },
    ],

    external: true,
  },

  {
    id: 8,
    title: "RUP",
    description: "Informasi Rencana Umum Pengadaan.",
    icon: ChartLineUp,
    color: "teal",
    url: "https://data.inaproc.id/rup",
    external: true,
  },

  {
    id: 9,
    title: "Daftar Hitam",
    description: "Informasi daftar hitam penyedia.",
    icon: Prohibit,
    color: "amber",
    url: "https://daftar-hitam.inaproc.id/",
    external: true,
  },
];
