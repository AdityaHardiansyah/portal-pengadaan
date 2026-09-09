import { Search, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="beranda" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Portal Informasi Pengadaan
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Informasi dan Layanan
            <span className="text-blue-600"> Pengadaan</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Akses informasi, regulasi, panduan, layanan, statistik, dan berbagai
            sumber daya pengadaan dalam satu portal.
          </p>

          {/* Search */}
          <div className="mt-8 flex max-w-2xl items-center rounded-xl border bg-white p-2 shadow-sm">
            <Search className="ml-3 h-5 w-5 text-gray-400" />

            <input
              type="text"
              placeholder="Cari informasi atau layanan..."
              className="flex-1 px-4 py-3 outline-none"
            />

            <button className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              Cari
            </button>
          </div>

          {/* Quick link */}
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
            <span>Informasi populer:</span>

            <a
              href="#layanan"
              className="flex items-center gap-1 font-medium text-blue-600"
            >
              Peraturan
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
