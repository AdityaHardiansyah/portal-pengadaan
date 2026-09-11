import { useState } from "react";

import { ArrowUpRight, Globe } from "@phosphor-icons/react";

const colorStyles = {
  blue: {
    iconGradient: "from-blue-50 to-blue-100",
    iconGradientHover: "group-hover:from-blue-100 group-hover:to-blue-200",
    iconColor: "text-blue-600",
    glow: "bg-blue-300",
    ring: "border-blue-300",
    hoverBorder: "hover:border-blue-200",
    arrow: "group-hover:text-blue-600",
  },

  indigo: {
    iconGradient: "from-indigo-50 to-indigo-100",
    iconGradientHover: "group-hover:from-indigo-100 group-hover:to-indigo-200",
    iconColor: "text-indigo-600",
    glow: "bg-indigo-300",
    ring: "border-indigo-300",
    hoverBorder: "hover:border-indigo-200",
    arrow: "group-hover:text-indigo-600",
  },

  violet: {
    iconGradient: "from-violet-50 to-violet-100",
    iconGradientHover: "group-hover:from-violet-100 group-hover:to-violet-200",
    iconColor: "text-violet-600",
    glow: "bg-violet-300",
    ring: "border-violet-300",
    hoverBorder: "hover:border-violet-200",
    arrow: "group-hover:text-violet-600",
  },

  orange: {
    iconGradient: "from-orange-50 to-orange-100",
    iconGradientHover: "group-hover:from-orange-100 group-hover:to-orange-200",
    iconColor: "text-orange-600",
    glow: "bg-orange-300",
    ring: "border-orange-300",
    hoverBorder: "hover:border-orange-200",
    arrow: "group-hover:text-orange-600",
  },

  emerald: {
    iconGradient: "from-emerald-50 to-emerald-100",
    iconGradientHover:
      "group-hover:from-emerald-100 group-hover:to-emerald-200",
    iconColor: "text-emerald-600",
    glow: "bg-emerald-300",
    ring: "border-emerald-300",
    hoverBorder: "hover:border-emerald-200",
    arrow: "group-hover:text-emerald-600",
  },

  rose: {
    iconGradient: "from-rose-50 to-rose-100",
    iconGradientHover: "group-hover:from-rose-100 group-hover:to-rose-200",
    iconColor: "text-rose-600",
    glow: "bg-rose-300",
    ring: "border-rose-300",
    hoverBorder: "hover:border-rose-200",
    arrow: "group-hover:text-rose-600",
  },

  cyan: {
    iconGradient: "from-cyan-50 to-cyan-100",
    iconGradientHover: "group-hover:from-cyan-100 group-hover:to-cyan-200",
    iconColor: "text-cyan-600",
    glow: "bg-cyan-300",
    ring: "border-cyan-300",
    hoverBorder: "hover:border-cyan-200",
    arrow: "group-hover:text-cyan-600",
  },

  teal: {
    iconGradient: "from-teal-50 to-teal-100",
    iconGradientHover: "group-hover:from-teal-100 group-hover:to-teal-200",
    iconColor: "text-teal-600",
    glow: "bg-teal-300",
    ring: "border-teal-300",
    hoverBorder: "hover:border-teal-200",
    arrow: "group-hover:text-teal-600",
  },

  amber: {
    iconGradient: "from-amber-50 to-amber-100",
    iconGradientHover: "group-hover:from-amber-100 group-hover:to-amber-200",
    iconColor: "text-amber-600",
    glow: "bg-amber-300",
    ring: "border-amber-300",
    hoverBorder: "hover:border-amber-200",
    arrow: "group-hover:text-amber-600",
  },
};

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  const [isHovered, setIsHovered] = useState(false);

  const colors = colorStyles[service.color] || colorStyles.blue;

  /*
   * ============================================
   * FEATURED SERVICE
   * ============================================
   */
  if (service.featured) {
    return (
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          bg-gradient-to-br
          from-slate-50
          via-white
          to-cyan-50
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-cyan-200
          hover:shadow-xl
          lg:col-span-2
        "
      >
        {/* Background decoration */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-64
            w-64
            rounded-full
            bg-cyan-200/30
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-20
            -left-20
            h-64
            w-64
            rounded-full
            bg-blue-200/20
            blur-3xl
          "
        />

        {/* Content */}
        <div className="relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* =================================
              IMAGE / ICON
          ================================= */}
          <div className="flex min-h-[280px] items-center justify-center">
            {service.image ? (
              <img
                src={service.image}
                alt={service.title}
                className="
                  max-h-[280px]
                  w-full
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            ) : (
              <div
                className="
                  relative
                  flex
                  h-52
                  w-52
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-100
                  to-blue-100
                  shadow-inner
                "
              >
                <Icon size={120} weight="duotone" className="text-cyan-600" />
              </div>
            )}
          </div>

          {/* =================================
              INFORMATION
          ================================= */}
          <div>
            {/* Label */}
            <span
              className="
                inline-flex
                rounded-full
                bg-cyan-100
                px-3
                py-1
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-cyan-700
              "
            >
              Layanan Pengadaan Elektronik
            </span>

            {/* Title */}
            <h3
              className="
                mt-4
                text-2xl
                font-bold
                leading-tight
                text-gray-900
                md:text-3xl
              "
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-gray-600
                md:text-base
              "
            >
              {service.description}
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {service.buttons?.map((button, index) => (
                <a
                  key={index}
                  href={button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      index === 0
                        ? `
                          bg-blue-600
                          text-white
                          shadow-md
                          hover:bg-blue-700
                          hover:shadow-lg
                        `
                        : `
                          border
                          border-gray-200
                          bg-white
                          text-gray-700
                          hover:border-cyan-300
                          hover:bg-cyan-50
                          hover:text-cyan-700
                        `
                    }
                  `}
                >
                  <Globe size={18} weight="bold" />

                  {button.label}

                  <ArrowUpRight size={16} weight="bold" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /*
   * ============================================
   * NORMAL SERVICE CARD
   * ============================================
   */
  return (
    <a
      href={service.url}
      target={service.external ? "_blank" : undefined}
      rel={service.external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group
        relative
        block
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        ${colors.hoverBorder}
      `}
    >
      {/* Arrow */}
      <div className="absolute right-6 top-6">
        <ArrowUpRight
          size={24}
          weight="bold"
          className={`
            text-gray-300
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
            ${colors.arrow}
          `}
        />
      </div>

      {/* Icon */}
      <div className="relative flex h-20 w-20 items-center justify-center">
        {/* Glow */}
        <div
          className={`
            absolute
            inset-0
            rounded-2xl
            opacity-0
            blur-xl
            transition-opacity
            duration-500
            group-hover:opacity-60
            ${colors.glow}
          `}
        />

        {/* Ring */}
        <div
          className={`
            absolute
            inset-0
            scale-90
            rounded-2xl
            border-2
            opacity-0
            transition-all
            duration-500
            group-hover:scale-125
            group-hover:opacity-100
            ${colors.ring}
          `}
        />

        {/* Icon background */}
        <div
          className={`
            relative
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            shadow-sm
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:shadow-md
            ${colors.iconGradient}
            ${colors.iconGradientHover}
          `}
        >
          <Icon
            size={56}
            weight={isHovered ? "fill" : "duotone"}
            className={`
              transition-transform
              duration-300
              group-hover:-rotate-6
              group-hover:scale-110
              ${colors.iconColor}
            `}
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          {service.description}
        </p>
      </div>
    </a>
  );
};

export default ServiceCard;
