import { ArrowUpRight } from "@phosphor-icons/react";
import { externalLinks } from "../data/externalLinks";

const ExternalLinks = () => {
  return (
    <section id="tautan" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* ============================
            HEADING
        ============================ */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Tautan Eksternal
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Sistem & Portal Terkait
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Akses berbagai sistem dan portal terkait pengadaan barang/jasa.
          </p>
        </div>

        {/* ============================
            LINKS
        ============================ */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {externalLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                flex
                min-h-[130px]
                items-center
                justify-between
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-xl
              "
            >
              {/* ============================
                  DECORATIVE GLOW
              ============================ */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-8
                  -top-8
                  h-24
                  w-24
                  rounded-full
                  bg-blue-100
                  opacity-0
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:opacity-70
                "
              />

              {/* ============================
                  LEFT CONTENT
              ============================ */}
              <div className="relative flex min-w-0 items-center gap-4">
                {/* Logo */}
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                  {/* Glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      bg-blue-300
                      opacity-0
                      blur-lg
                      transition-opacity
                      duration-500
                      group-hover:opacity-40
                    "
                  />

                  {/* Ring */}
                  <div
                    className="
                      absolute
                      inset-0
                      scale-90
                      rounded-xl
                      border-2
                      border-blue-300
                      opacity-0
                      transition-all
                      duration-500
                      ease-out
                      group-hover:scale-125
                      group-hover:opacity-100
                    "
                  />

                  {/* Logo Container */}
                  <div
                    className="
                      relative
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-gray-50
                      to-gray-100
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:-rotate-3
                      group-hover:scale-110
                      group-hover:from-blue-50
                      group-hover:to-blue-100
                      group-hover:shadow-md
                    "
                  >
                    {link.logo ? (
                      <img
                        src={link.logo}
                        alt={link.name}
                        className="
                          h-9
                          w-9
                          object-contain
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />
                    ) : (
                      <span
                        className="
                          text-sm
                          font-bold
                          text-gray-600
                          transition-colors
                          duration-300
                          group-hover:text-blue-600
                        "
                      >
                        {link.shortName}
                      </span>
                    )}
                  </div>
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3
                    className="
                      truncate
                      font-semibold
                      text-gray-900
                      transition-colors
                      duration-300
                      group-hover:text-blue-700
                    "
                  >
                    {link.name}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                    {link.description}
                  </p>
                </div>
              </div>

              {/* ============================
                  ARROW
              ============================ */}
              <div
                className="
                  relative
                  ml-4
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-300
                  group-hover:bg-blue-50
                "
              >
                <ArrowUpRight
                  size={20}
                  weight="bold"
                  className="
                    text-gray-400
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-blue-600
                  "
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExternalLinks;
