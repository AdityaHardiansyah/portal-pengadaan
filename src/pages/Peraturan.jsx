import { useMemo, useState } from "react";

import {
  MagnifyingGlass,
  CalendarBlank,
  FileText,
  ArrowUpRight,
} from "@phosphor-icons/react";

import { regulationCategories, regulations } from "../data/regulations";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Peraturan = () => {
  const [activeCategory, setActiveCategory] = useState("uu");
  const [search, setSearch] = useState("");

  const filteredRegulations = useMemo(() => {
    return regulations.filter((item) => {
      const matchCategory = item.category === activeCategory;

      const matchSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-white">
      {/* =========================================
          NAVBAR
      ========================================= */}
      <Navbar />

      {/* =========================================
          MAIN
      ========================================= */}
      <main className="min-h-[calc(100vh-80px)]">
        {/* =====================================
            HEADER
        ===================================== */}
        <section className="px-6 pb-8 pt-12">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Peraturan
              </h1>

              <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                Kumpulan peraturan dan regulasi terkait pengadaan barang/jasa.
              </p>

              {/* SEARCH */}
              <div className="relative mx-auto mt-8 max-w-md">
                <MagnifyingGlass
                  size={20}
                  weight="regular"
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari peraturan..."
                  className="
                    w-full
                    rounded-full
                    border
                    border-gray-300
                    bg-white
                    py-3
                    pl-11
                    pr-4
                    text-sm
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================
            CONTENT
        ===================================== */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
              {/* =================================
                  SIDEBAR
              ================================= */}
              <aside>
                <div
                  className="
                    overflow-hidden
                    rounded-xl
                    bg-gradient-to-br
                    from-blue-700
                    to-blue-600
                    p-2
                  "
                >
                  {regulationCategories.map((category) => {
                    const Icon = category.icon;

                    const active = activeCategory === category.id;

                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setActiveCategory(category.id)}
                        className={`
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-lg
                            px-4
                            py-3
                            text-left
                            text-sm
                            font-semibold
                            transition-all
                            duration-200
                            ${
                              active
                                ? "bg-blue-800 text-white shadow-sm"
                                : "text-white/90 hover:bg-white/10"
                            }
                          `}
                      >
                        <span
                          className={`
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              border
                              ${
                                active
                                  ? "border-white bg-white/10"
                                  : "border-white/60"
                              }
                            `}
                        >
                          <Icon
                            size={17}
                            weight={active ? "fill" : "regular"}
                          />
                        </span>

                        <span>{category.title}</span>
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* =================================
                  DOCUMENT LIST
              ================================= */}
              <div>
                {filteredRegulations.length > 0 ? (
                  <div className="grid gap-5 md:grid-cols-2">
                    {filteredRegulations.map((item) => (
                      <a
                        key={item.id}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            relative
                            block
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            p-5
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-blue-200
                            hover:shadow-lg
                          "
                      >
                        {/* Arrow */}
                        <div
                          className="
                              absolute
                              right-5
                              top-5
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-full
                              bg-gray-50
                              transition
                              group-hover:bg-blue-50
                            "
                        >
                          <ArrowUpRight
                            size={17}
                            weight="bold"
                            className="
                                text-gray-400
                                transition
                                group-hover:text-blue-600
                              "
                          />
                        </div>

                        {/* Icon */}
                        <div
                          className="
                              flex
                              h-11
                              w-11
                              items-center
                              justify-center
                              rounded-xl
                              bg-blue-50
                              text-blue-600
                              transition-all
                              duration-300
                              group-hover:scale-110
                              group-hover:bg-blue-600
                              group-hover:text-white
                            "
                        >
                          <FileText size={23} weight="duotone" />
                        </div>

                        {/* Title */}
                        <h3
                          className="
                              mt-5
                              pr-10
                              text-base
                              font-semibold
                              leading-6
                              text-gray-900
                              transition-colors
                              group-hover:text-blue-700
                            "
                        >
                          {item.title}
                        </h3>

                        {/* Date */}
                        <div
                          className="
                              mt-4
                              flex
                              items-center
                              gap-2
                              text-xs
                              text-gray-500
                            "
                        >
                          <CalendarBlank size={15} weight="regular" />

                          <span>{item.date}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  /* =================================
                     EMPTY STATE
                  ================================= */
                  <div
                    className="
                      flex
                      min-h-[300px]
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-dashed
                      border-gray-300
                      bg-gray-50
                    "
                  >
                    <div className="text-center">
                      <FileText
                        size={42}
                        weight="duotone"
                        className="
                          mx-auto
                          text-gray-300
                        "
                      />

                      <p className="mt-3 font-medium text-gray-600">
                        Data peraturan tidak ditemukan
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        Coba gunakan kata kunci pencarian lain.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================
          FOOTER
      ========================================= */}
      <Footer />
    </div>
  );
};

export default Peraturan;
