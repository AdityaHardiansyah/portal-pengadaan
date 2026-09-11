import { MagnifyingGlass, List, X } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      {/* ============================
          TOP ACCENT
      ============================ */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#0B3B62] via-[#C9A227] to-[#0B3B62]" />

      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        {/* ============================
            LOGO
        ============================ */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0B3B62] to-[#082C4B] font-bold text-white shadow-sm">
            PBJ
          </div>

          <div>
            <h1 className="font-bold leading-tight tracking-tight text-gray-900">
              Portal Pengadaan
            </h1>

            <p className="text-xs text-gray-500">
              Informasi & Layanan Pengadaan
            </p>
          </div>
        </a>

        {/* ============================
            DESKTOP NAVIGATION
        ============================ */}
        <nav className="hidden items-center gap-9 lg:flex">
          <a
            href="/"
            className="group relative py-1 text-sm font-medium text-gray-700 transition hover:text-[#0B3B62]"
          >
            Beranda
            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-[#C9A227] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="/#layanan"
            className="group relative py-1 text-sm font-medium text-gray-700 transition hover:text-[#0B3B62]"
          >
            Informasi & Layanan
            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-[#C9A227] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="/#statistik"
            className="group relative py-1 text-sm font-medium text-gray-700 transition hover:text-[#0B3B62]"
          >
            Statistik
            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-[#C9A227] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="/#tautan"
            className="group relative py-1 text-sm font-medium text-gray-700 transition hover:text-[#0B3B62]"
          >
            Tautan
            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-[#C9A227] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* ============================
            SEARCH
        ============================ */}
        <button
          type="button"
          className="
            hidden
            rounded-lg
            border
            border-gray-200
            p-2.5
            transition
            hover:border-[#0B3B62]/30
            hover:bg-[#0B3B62]/5
            lg:block
          "
          aria-label="Pencarian"
        >
          <MagnifyingGlass
            size={20}
            weight="regular"
            className="text-gray-600"
          />
        </button>

        {/* ============================
            MOBILE MENU BUTTON
        ============================ */}
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="
            rounded-lg
            border
            border-gray-200
            p-2.5
            transition
            hover:border-[#0B3B62]/30
            hover:bg-[#0B3B62]/5
            lg:hidden
          "
          aria-label="Menu"
        >
          {mobileMenu ? (
            <X size={22} weight="regular" className="text-gray-700" />
          ) : (
            <List size={22} weight="regular" className="text-gray-700" />
          )}
        </button>
      </div>

      {/* ============================
          MOBILE NAVIGATION
      ============================ */}
      <div
        className={`grid transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenu
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden border-t border-gray-100 bg-white">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            <a
              href="/"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg border-l-2 border-transparent px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-[#C9A227] hover:bg-[#0B3B62]/5 hover:text-[#0B3B62]"
            >
              Beranda
            </a>

            <a
              href="/#layanan"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg border-l-2 border-transparent px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-[#C9A227] hover:bg-[#0B3B62]/5 hover:text-[#0B3B62]"
            >
              Informasi & Layanan
            </a>

            <a
              href="/#statistik"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg border-l-2 border-transparent px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-[#C9A227] hover:bg-[#0B3B62]/5 hover:text-[#0B3B62]"
            >
              Statistik
            </a>

            <a
              href="/#tautan"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg border-l-2 border-transparent px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-[#C9A227] hover:bg-[#0B3B62]/5 hover:text-[#0B3B62]"
            >
              Tautan
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
