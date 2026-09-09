import { Search, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
            PBJ
          </div>

          <div>
            <h1 className="font-bold text-gray-900">Portal Pengadaan</h1>

            <p className="text-xs text-gray-500">
              Informasi & Layanan Pengadaan
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#beranda"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Beranda
          </a>

          <a
            href="#layanan"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Informasi & Layanan
          </a>

          <a
            href="#statistik"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Statistik
          </a>

          <a
            href="#tautan"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Tautan
          </a>
        </nav>

        {/* Search */}
        <button className="hidden rounded-lg border p-2 hover:bg-gray-50 md:block">
          <Search className="h-5 w-5 text-gray-600" />
        </button>

        {/* Mobile Menu */}
        <button className="rounded-lg border p-2 md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
