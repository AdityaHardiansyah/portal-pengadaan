import {
  Scroll,
  BookOpen,
  ChatsCircle,
  PresentationChart,
  Handshake,
  UserList,
  Desktop,
  ChartLineUp,
  Prohibit,
} from "@phosphor-icons/react";

export const services = [
  {
    id: 1,
    title: "Peraturan",
    description: "Peraturan Terkait Pengadaan Barang/Jasa Pemerintah.",
    icon: Scroll,
    color: "blue",
    url: "/peraturan",
    external: false,
  },

  {
    id: 2,
    title: "Panduan",
    description: "Panduan Terkait Pengadaan Barang/Jasa Pemerintah.",
    icon: BookOpen,
    color: "indigo",
    url: "/panduan",
    external: false,
  },

  {
    id: 3,
    title: "Layanan Permintaan Informasi Publik",
    description:
      "Layanan permintaan informasi Publik Secara Elektronik Melalui PPID Kementerian PPN/Bappenas.",
    icon: ChatsCircle,
    color: "violet",
    url: "https://ppid.bappenas.go.id/",
    external: true,
  },

  {
    id: 4,
    title: "Layanan Informasi Pelatihan/Bimtek PBJ",
    description:
      "Informasi terkait pelatihan/bimtek PBJ yang diselenggarakan oleh LKPP.",
    icon: PresentationChart,
    color: "orange",
    url: "https://linktr.ee/pelatihanpbj",
    external: true,
  },

  {
    id: 5,
    title: "Layanan Clearing House PBJ",
    description: "Forum Penyelesaian Masalah/Advokasi Pengadaan Barang/Jasa.",
    icon: Handshake,
    color: "emerald",
    url: "https://sertifikasipbj.lkpp.go.id/",
    external: true,
  },

  {
    id: 6,
    title: "Layanan Informasi RUP",
    description: "Informasi Rencana Umum Pengadaan.",
    icon: ChartLineUp,
    color: "teal",
    url: "https://data.inaproc.id/realisasi?tahun=2026&jenis_klpd=1&instansi=K25&eselon=00",
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
    title: "Layanan Daftar Penyedia",
    description: "Informasi tentang daftar penyedia barang/jasa.",
    icon: UserList,
    color: "cyan",
    url: "https://data.inaproc.id/realisasi?tahun=2026&jenis_klpd=1&instansi=K25&eselon=00",
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
