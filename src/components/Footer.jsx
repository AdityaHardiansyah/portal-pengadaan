const Footer = () => {
  return (
    <footer className="border-t bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold">Portal Pengadaan</h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Portal informasi dan layanan pengadaan barang/jasa pemerintah.
            </p>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="font-semibold">Informasi</h4>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#layanan" className="hover:text-white">
                  Peraturan
                </a>
              </li>

              <li>
                <a href="#layanan" className="hover:text-white">
                  Panduan
                </a>
              </li>

              <li>
                <a href="#statistik" className="hover:text-white">
                  Statistik
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold">Kontak</h4>

            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>Unit Kerja Pengadaan Barang/Jasa</p>

              <p>Email: informasi@domain.go.id</p>

              <p>Telepon: (021) 000000</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © 2026 Portal Pengadaan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
