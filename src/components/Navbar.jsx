import { useState, useEffect } from "react";
import { Search, Menu, X, Landmark } from "lucide-react";

const NAV_LINKS = [
  { href: "#beranda", label: "Beranda", active: true },
  { href: "#layanan", label: "Informasi & Layanan" },
  { href: "#statistik", label: "Statistik" },
  { href: "#tautan", label: "Tautan" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
        isScrolled
          ? "border-gray-200 shadow-md"
          : "border-transparent shadow-none"
      }`}
    >
      {/* Signature top accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#0B3B62] via-[#C9A227] to-[#0B3B62]" />

      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
        }`}
      >
        {/* Logo */}
        <a
          href="#beranda"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0B3B62] to-[#082C4B] text-white shadow-sm sm:h-10 sm:w-10">
            <Landmark className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
          </div>

          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold tracking-tight text-gray-900 sm:text-base">
              Portal Pengadaan
            </h1>
            <p className="hidden truncate text-xs text-gray-500 sm:block">
              Informasi & Layanan Pengadaan
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex lg:gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative whitespace-nowrap py-1 text-sm font-medium transition-colors ${
                link.active
                  ? "text-[#0B3B62]"
                  : "text-gray-600 hover:text-[#0B3B62]"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-[#C9A227] transition-all duration-300 ${
                  link.active ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            aria-label="Cari"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-[#0B3B62]/30 hover:bg-[#0B3B62]/5 hover:text-[#0B3B62] lg:flex"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:border-[#0B3B62]/30 hover:bg-[#0B3B62]/5 hover:text-[#0B3B62] lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`grid transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden border-t border-gray-100">
          <nav className="flex flex-col gap-1 px-4 pt-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-lg border-l-2 px-3 py-2.5 text-sm font-medium transition-colors ${
                  link.active
                    ? "border-[#C9A227] bg-[#0B3B62]/5 text-[#0B3B62]"
                    : "border-transparent text-gray-700 hover:border-[#C9A227]/50 hover:bg-gray-50 hover:text-[#0B3B62]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 mx-4 my-3 focus-within:border-[#0B3B62]/50">
            <Search className="h-4 w-4 shrink-0 text-gray-400" />
            <input
              type="text"
              placeholder="Cari layanan..."
              className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
