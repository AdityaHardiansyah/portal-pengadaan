import {
  ArrowUpRight,
  Envelope,
  WhatsappLogo,
  Phone,
  MapPin,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-[#061F35] text-white">
      {/* ============================
          TOP ACCENT
      ============================ */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#0B3B62] via-[#C9A227] to-[#0B3B62]" />

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
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-[#0B3B62]
                  to-[#082C4B]
                  text-sm
                  font-bold
                  text-white
                  ring-1
                  ring-white/10
                "
              >
                UKPBJ
              </div>

              <div>
                <h2 className="font-bold leading-tight">
                  Unit Kerja Pengadaan Barang/Jasa
                </h2>

                <p className="mt-0.5 text-xs text-gray-400">
                  Kementerian PPN / Bappenas
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-400">
              Portal informasi dan layanan pengadaan barang/jasa untuk mendukung
              akses informasi pengadaan secara mudah, transparan, dan
              terintegrasi.
            </p>

            {/* Alamat */}
            <div className="mt-6 flex gap-3">
              <MapPin
                size={20}
                weight="duotone"
                className="mt-0.5 shrink-0 text-[#C9A227]"
              />

              <p className="max-w-sm text-sm leading-6 text-gray-400">
                Jl. Taman Suropati No. 2, Menteng, Jakarta Pusat 10310
              </p>
            </div>
          </div>

          {/* ============================
              NAVIGASI
          ============================ */}
          <div>
            <h3 className="font-semibold">Navigasi</h3>

            <span className="mt-2 block h-0.5 w-8 rounded-full bg-[#C9A227]" />

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/"
                  className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-gray-600 transition group-hover:bg-[#C9A227]" />
                  Beranda
                </a>
              </li>

              <li>
                <a
                  href="/#layanan"
                  className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-gray-600 transition group-hover:bg-[#C9A227]" />
                  Informasi & Layanan
                </a>
              </li>

              <li>
                <a
                  href="/#statistik"
                  className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-gray-600 transition group-hover:bg-[#C9A227]" />
                  Statistik
                </a>
              </li>

              <li>
                <a
                  href="/#tautan"
                  className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-gray-600 transition group-hover:bg-[#C9A227]" />
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

            <span className="mt-2 block h-0.5 w-8 rounded-full bg-[#C9A227]" />

            <div className="mt-4 space-y-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6281391200901"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  gap-3
                  rounded-lg
                  p-2
                  transition
                  hover:bg-white/5
                "
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition group-hover:ring-white/20">
                  <WhatsappLogo
                    size={18}
                    weight="duotone"
                    className="text-emerald-400 transition group-hover:text-emerald-300"
                  />
                </span>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    WhatsApp
                  </p>

                  <p className="mt-0.5 truncate text-sm font-medium text-gray-300 transition group-hover:text-white">
                    0813-9120-0901
                  </p>

                  <p className="text-xs text-gray-500">Chat Only</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:ulp@bappenas.go.id"
                className="
                  group
                  flex
                  gap-3
                  rounded-lg
                  p-2
                  transition
                  hover:bg-white/5
                "
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition group-hover:ring-white/20">
                  <Envelope
                    size={18}
                    weight="duotone"
                    className="text-sky-400 transition group-hover:text-sky-300"
                  />
                </span>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Email
                  </p>

                  <p className="mt-0.5 truncate text-sm font-medium text-gray-300 transition group-hover:text-white">
                    ulp@bappenas.go.id
                  </p>
                </div>
              </a>

              {/* Telephone */}
              <a
                href="tel:0213929094"
                className="
                  group
                  flex
                  gap-3
                  rounded-lg
                  p-2
                  transition
                  hover:bg-white/5
                "
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition group-hover:ring-white/20">
                  <Phone
                    size={18}
                    weight="duotone"
                    className="text-[#C9A227] transition group-hover:text-[#E0BC46]"
                  />
                </span>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Telepon
                  </p>

                  <p className="mt-0.5 truncate text-sm font-medium text-gray-300 transition group-hover:text-white">
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
            border-white/10
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
              group
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
            <ArrowUpRight
              size={14}
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
