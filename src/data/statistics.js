export const statisticsData = {
  /* =====================================================
     TAHUN 2026
  ===================================================== */

  2026: {
    summary: {
      totalPaket: 315,
    },

    /* ---------------------------------------------
       1. JUMLAH PAKET PENGADAAN
    --------------------------------------------- */

    status: [
      {
        name: "Berhasil",
        value: 202,
      },
      {
        name: "Dalam Proses",
        value: 32,
      },
      {
        name: "Gagal",
        value: 28,
      },
      {
        name: "Batal",
        value: 53,
      },
    ],

    /* ---------------------------------------------
       2. JENIS PENGADAAN
       
       Total:
       251 + 41 + 16 + 5 + 2 = 315
    --------------------------------------------- */

    jenisPengadaan: [
      {
        name: "Jasa Konsultasi Individual",
        value: 251,
        percentage: 79.7,
      },
      {
        name: "Jasa Konsultasi Badan Usaha",
        value: 41,
        percentage: 13.0,
      },
      {
        name: "Jasa Lainnya",
        value: 16,
        percentage: 5.1,
      },
      {
        name: "Pekerjaan Konstruksi",
        value: 5,
        percentage: 1.6,
      },
      {
        name: "Barang",
        value: 2,
        percentage: 0.6,
      },
    ],

    /* ---------------------------------------------
       3. DETAIL JENIS PENGADAAN

       Setiap jenis terdiri dari:
       - Berhasil
       - Dalam Proses
       - Gagal
       - Batal

       CATATAN:
       Nilai status per jenis belum tersedia.
       Jangan mengisi dengan angka asumsi.
    --------------------------------------------- */

    detailJenisPengadaan: [
      {
        name: "Konsultasi Individual",

        // Total jenis = 251
        total: 253,

        berhasil: 166,
        dalamProses: 12,
        gagal: 25,
        batal: 50,
      },

      {
        name: "Konsultan Badan Usaha",

        // Total jenis = 41
        total: 40,

        berhasil: 18,
        dalamProses: 19,
        gagal: 2,
        batal: 1,
      },

      {
        name: "Jasa Lainnya",

        // Total jenis = 15
        total: 15,

        berhasil: 13,
        dalamProses: 0,
        gagal: 1,
        batal: 1,
      },

      {
        name: "Pekerjaan Konstruksi",

        // Total jenis = 5
        total: 5,

        berhasil: 4,
        dalamProses: 0,
        gagal: 0,
        batal: 1,
      },

      {
        name: "Barang",

        // Total jenis = 2
        total: 2,

        berhasil: 1,
        dalamProses: 1,
        gagal: 0,
        batal: 0,
      },
    ],

    /* ---------------------------------------------
       4. METODE PEMILIHAN

       Total:
       257 + 11 + 34 + 5 + 6 + 2 = 315
    --------------------------------------------- */

    metodePemilihan: [
      {
        name: "Seleksi",
        shortName: "Seleksi",
        value: 257,
      },
      {
        name: "Penunjukkan Langsung Permintaan Berulang (Repeat Order)",
        shortName: "Repeat Order",
        value: 11,
      },
      {
        name: "Penunjukkan Langsung",
        shortName: "Penunjukkan Langsung",
        value: 34,
      },
      {
        name: "Pengecualian",
        shortName: "Pengecualian",
        value: 5,
      },
      {
        name: "Tender",
        shortName: "Tender",
        value: 6,
      },
      {
        name: "Tender Cepat",
        shortName: "Tender Cepat",
        value: 2,
      },
    ],

    /* ---------------------------------------------
       NILAI PENGADAAN

       Belum tersedia.
    --------------------------------------------- */

    nilaiBulanan: [],
  },

  /* =====================================================
     TAHUN 2025
  ===================================================== */

  2025: {
    summary: {
      totalPaket: 254,
    },

    /* ---------------------------------------------
       1. JUMLAH PAKET PENGADAAN
    --------------------------------------------- */

    status: [
      {
        name: "Berhasil",
        value: 198,
      },
      {
        name: "Dalam Proses",
        value: 3,
      },
      {
        name: "Gagal",
        value: 11,
      },
      {
        name: "Batal",
        value: 42,
      },
    ],

    /* ---------------------------------------------
       2. JENIS PENGADAAN
    --------------------------------------------- */

    jenisPengadaan: [
      {
        name: "Jasa Konsultasi",
        value: 20,
        percentage: 7.9,
      },
      {
        name: "Jasa Lainnya",
        value: 234,
        percentage: 92.1,
      },
    ],

    /* ---------------------------------------------
       3. DETAIL JENIS PENGADAAN

       Total:
       220 + 20 + 14 = 254
    --------------------------------------------- */

    detailJenisPengadaan: [
      {
        name: "Konsultasi Individual",

        total: 221,

        berhasil: 173,
        dalamProses: 0,
        gagal: 10,
        batal: 38,
      },

      {
        name: "Jasa Lainnya",

        total: 20,

        berhasil: 18,
        dalamProses: 0,
        gagal: 0,
        batal: 2,
      },

      {
        name: "Konsultan Badan Usaha",

        total: 13,

        berhasil: 7,
        dalamProses: 3,
        gagal: 1,
        batal: 2,
      },

      {
        name: "Pekerjaan Konstruksi",

        total: 0,

        berhasil: 0,
        dalamProses: 0,
        gagal: 0,
        batal: 0,
      },

      {
        name: "Barang",

        total: 0,

        berhasil: 0,
        dalamProses: 0,
        gagal: 0,
        batal: 0,
      },
    ],

    /* ---------------------------------------------
       4. METODE PEMILIHAN

       Total:
       169 + 65 + 2 + 17 + 1 + 0 = 254
    --------------------------------------------- */

    metodePemilihan: [
      {
        name: "Seleksi",
        shortName: "Seleksi",
        value: 169,
      },
      {
        name: "Penunjukkan Langsung Permintaan Berulang (Repeat Order)",
        shortName: "Repeat Order",
        value: 65,
      },
      {
        name: "Penunjukkan Langsung",
        shortName: "Penunjukkan Langsung",
        value: 2,
      },
      {
        name: "Pengecualian",
        shortName: "Pengecualian",
        value: 17,
      },
      {
        name: "Tender",
        shortName: "Tender",
        value: 1,
      },
      {
        name: "Tender Cepat",
        shortName: "Tender Cepat",
        value: 0,
      },
    ],

    /* ---------------------------------------------
       NILAI PENGADAAN
    --------------------------------------------- */

    nilaiBulanan: [],
  },

  /* =====================================================
     TAHUN 2024
  ===================================================== */

  2024: {
    summary: {
      totalPaket: 0,
    },

    status: [],

    jenisPengadaan: [],

    detailJenisPengadaan: [],

    metodePemilihan: [],

    nilaiBulanan: [],
  },
};
