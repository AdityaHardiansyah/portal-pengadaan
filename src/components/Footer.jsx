import {
  ArrowUpRight,
  Envelope,
  WhatsappLogo,
  Phone,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* ============================
              BRAND
          ============================ */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-11
                  w-15
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-600
                  font-bold
                  text-white
                "
              >
                UKPBJ
              </div>

              <div>
                <h2 className="font-bold">Unit kerja Pengadaan Barang/Jasa</h2>

                <p className="text-xs text-gray-400">
                  Unit Kerja Pengadaan Barang/Jasa
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-400">
              Portal informasi dan layanan pengadaan barang/jasa untuk mendukung
              akses informasi pengadaan secara mudah, transparan, dan
              terintegrasi.
            </p>
          </div>

          {/* ============================
              NAVIGASI
          ============================ */}
          <div>
            <h3 className="font-semibold">Navigasi</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Beranda
                </a>
              </li>

              <li>
                <a
                  href="/#layanan"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Informasi & Layanan
                </a>
              </li>

              <li>
                <a
                  href="/#statistik"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Statistik
                </a>
              </li>

              <li>
                <a
                  href="/#tautan"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Tautan
                </a>
              </li>
            </ul>
          </div>

          {/* ============================
              KONTAK
          ============================ */}
          <div>
            <h3 className="font-semibold">Kontak</h3>

            <div className="mt-4 space-y-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6281391200901"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3"
              >
                <WhatsappLogo
                  size={20}
                  weight="duotone"
                  className="
                    shrink-0
                    text-emerald-400
                    transition
                    group-hover:text-emerald-300
                  "
                />

                <div>
                  <p className="text-sm font-medium text-gray-300">WhatsApp</p>

                  <p className="mt-0.5 text-sm text-gray-400 transition group-hover:text-white">
                    0813-9120-0901
                  </p>

                  <p className="text-xs text-gray-500">Chat Only</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:ulp@bappenas.go.id" className="group flex gap-3">
                <Envelope
                  size={20}
                  weight="duotone"
                  className="
                    shrink-0
                    text-blue-400
                    transition
                    group-hover:text-blue-300
                  "
                />

                <div>
                  <p className="text-sm font-medium text-gray-300">Email</p>

                  <p className="mt-0.5 text-sm text-gray-400 transition group-hover:text-white">
                    ulp@bappenas.go.id
                  </p>
                </div>
              </a>

              {/* Telephone */}
              <a href="tel:0213929094" className="group flex gap-3">
                <Phone
                  size={20}
                  weight="duotone"
                  className="
                    shrink-0
                    text-amber-400
                    transition
                    group-hover:text-amber-300
                  "
                />

                <div>
                  <p className="text-sm font-medium text-gray-300">Telephone</p>

                  <p className="mt-0.5 text-sm text-gray-400 transition group-hover:text-white">
                    021 3929094
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ============================
            BOTTOM
        ============================ */}
        <div
          className="
            mt-12
            flex
            flex-col
            gap-4
            border-t
            border-gray-800
            pt-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Portal Pengadaan. Seluruh hak cipta
            dilindungi.
          </p>

          <a
            href="/"
            className="
              inline-flex
              items-center
              gap-1
              text-xs
              text-gray-400
              transition
              hover:text-white
            "
          >
            Portal Pengadaan
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
