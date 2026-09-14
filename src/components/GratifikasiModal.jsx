import {
  X,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  WarningCircle,
} from "@phosphor-icons/react";

const GratifikasiModal = ({ isOpen, onClose, onContinue }) => {
  if (!isOpen) return null;

  // ==============================
  // TAUTAN AKSI
  // ==============================
  const actionLinks = [
    {
      name: "WBS Bappenas",
      description: "Whistleblowing System",
      url: "https://wbs.bappenas.go.id/",
      image: "/images/wbs-bappenas.png",
    },
    {
      name: "SP4N-LAPOR!",
      description: "lapor.go.id",
      url: "https://www.lapor.go.id/",
      image: "/images/sp4n-lapor.png",
    },
    {
      name: "Lapor Gratifikasi",
      description: "UPG Bappenas",
      url: "https://link.bappenas.go.id/LaporGratifikasiBappenas",
      image: "/images/upg-bappenas.png",
    },
    {
      name: "GOL KPK",
      description: "gol.kpk.go.id",
      url: "https://gol.kpk.go.id/",
      image: "/images/gol-kpk.png",
    },
  ];

  // ==============================
  // HANDLE CONTINUE
  // ==============================
  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm">
      {/* =========================================
          MODAL CONTAINER
      ========================================= */}
      <div className="relative flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl lg:flex-row">
        {/* =========================================
            CLOSE BUTTON
        ========================================= */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200 hover:text-slate-950"
        >
          <X size={22} weight="bold" />
        </button>

        {/* =========================================
            LEFT SIDE
        ========================================= */}
        <div className="relative flex w-full flex-col overflow-hidden px-7 pb-7 pt-8 lg:w-[52%] lg:px-10 lg:pb-8 lg:pt-10">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-50" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-52 w-52 rounded-full bg-red-50/70" />

          {/* =========================================
              LABEL
          ========================================= */}
          <div className="relative flex items-center gap-3">
            <div className="h-1 w-14 rounded-full bg-red-600" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              Komitmen Bersama
            </span>
          </div>

          {/* =========================================
              TITLE
          ========================================= */}
          <div className="relative mt-5 pr-8">
            <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
              <span className="text-red-600">TOLAK GRATIFIKASI,</span>
              <br />
              JAGA INTEGRITAS
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Ditawari hadiah atau bingkisan karena jabatan?
              <br />
              <strong className="text-slate-800">
                Tolak dengan tegas.
              </strong>{" "}
              Integritas dimulai dari keputusan sederhana untuk berkata
              <span className="font-semibold text-red-600"> "tidak" </span>
              pada gratifikasi.
            </p>
          </div>

          {/* =========================================
              ILLUSTRATION
          ========================================= */}
          <div className="relative mt-6 flex min-h-[280px] flex-1 items-end justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-red-50 via-white to-slate-50">
            <img
              src="/images/gratifikasi-illustration.png"
              alt="Ilustrasi penolakan gratifikasi"
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>

        {/* =========================================
            RIGHT SIDE
        ========================================= */}
        <div className="w-full bg-gradient-to-br from-red-50/70 via-white to-slate-50 px-7 pb-7 pt-8 lg:flex lg:w-[48%] lg:flex-col lg:px-9 lg:pb-9 lg:pt-10">
          {/* =========================================
              HEADER
          ========================================= */}
          <div className="mb-7 flex items-center justify-between pr-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
                Saluran Pelaporan
              </span>

              <h3 className="mt-1 text-2xl font-bold text-slate-950">
                Tautan Aksi
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Berlaku untuk semua pilihan di atas
              </p>
            </div>

            <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-red-100 sm:flex">
              <ShieldCheck
                size={30}
                weight="duotone"
                className="text-red-600"
              />
            </div>
          </div>

          {/* =========================================
              ACTION LINKS
          ========================================= */}
          <div className="grid grid-cols-2 gap-3">
            {actionLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
              >
                {/* Logo + External Icon */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex h-16 flex-1 items-center justify-center rounded-xl bg-white">
                    <img
                      src={link.image}
                      alt={link.name}
                      className="h-14 w-auto max-w-full object-contain"
                    />
                  </div>

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-red-50">
                    <ArrowUpRight
                      size={17}
                      weight="bold"
                      className="text-slate-400 transition group-hover:text-red-600"
                    />
                  </div>
                </div>

                {/* Name */}
                <h4 className="mt-3 text-sm font-bold text-slate-900">
                  {link.name}
                </h4>

                {/* Description */}
                <p className="mt-1 text-xs leading-4 text-slate-500">
                  {link.description}
                </p>
              </a>
            ))}
          </div>

          {/* =========================================
              REMINDER
          ========================================= */}
          <div className="mt-5 rounded-2xl border border-red-100 bg-white p-4">
            <div className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50">
                <WarningCircle
                  size={21}
                  weight="duotone"
                  className="text-red-600"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">Ingat!</p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Jangan menerima hadiah, uang, bingkisan, fasilitas, atau
                  pemberian lainnya yang berkaitan dengan jabatan dan tugas
                  kedinasan.
                </p>
              </div>
            </div>
          </div>

          {/* =========================================
              BOTTOM ACTION
          ========================================= */}
          <div className="mt-auto pt-7">
            {/* Continue Button */}
            <button
              type="button"
              onClick={handleContinue}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"
            >
              Saya Paham & Lanjutkan
              <ArrowRight size={20} weight="bold" />
            </button>

            {/* Footer Text */}
            <p className="mt-3 text-center text-[11px] leading-4 text-slate-400">
              Dengan melanjutkan, Anda menyatakan komitmen untuk menjaga
              integritas dan menolak gratifikasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GratifikasiModal;
