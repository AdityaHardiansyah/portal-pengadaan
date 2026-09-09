const StatisticCard = ({
  title,
  value,
  description,
  icon: Icon,
  color = "blue",
}) => {
  const colorStyles = {
    blue: {
      bg: "bg-blue-50",
      icon: "text-blue-600",
      border: "hover:border-blue-200",
      glow: "group-hover:bg-blue-100",
    },

    emerald: {
      bg: "bg-emerald-50",
      icon: "text-emerald-600",
      border: "hover:border-emerald-200",
      glow: "group-hover:bg-emerald-100",
    },

    violet: {
      bg: "bg-violet-50",
      icon: "text-violet-600",
      border: "hover:border-violet-200",
      glow: "group-hover:bg-violet-100",
    },

    orange: {
      bg: "bg-orange-50",
      icon: "text-orange-600",
      border: "hover:border-orange-200",
      glow: "group-hover:bg-orange-100",
    },

    cyan: {
      bg: "bg-cyan-50",
      icon: "text-cyan-600",
      border: "hover:border-cyan-200",
      glow: "group-hover:bg-cyan-100",
    },
  };

  const colors = colorStyles[color] || colorStyles.blue;

  return (
    <div
      className={`
        group
        relative
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
        ${colors.border}
      `}
    >
      {/* Decorative Background */}
      <div
        className={`
          absolute
          -right-8
          -top-8
          h-24
          w-24
          rounded-full
          opacity-40
          blur-2xl
          transition-all
          duration-500
          group-hover:scale-150
          ${colors.bg}
        `}
      />

      <div className="relative flex items-start justify-between">
        {/* Content */}
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>

          <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
            {value}
          </p>

          {description && (
            <p className="mt-2 max-w-[220px] text-sm leading-5 text-gray-500">
              {description}
            </p>
          )}
        </div>

        {/* Icon */}
        {Icon && (
          <div
            className={`
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:rotate-3
              ${colors.bg}
            `}
          >
            <Icon
              size={30}
              weight="duotone"
              className={`
                transition-all
                duration-300
                group-hover:scale-110
                ${colors.icon}
              `}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatisticCard;
