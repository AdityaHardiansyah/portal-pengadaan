import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

/* =====================================================
   COLORS
===================================================== */

const STATUS_COLORS = [
  "#2563eb", // Berhasil
  "#f59e0b", // Dalam Proses
  "#ef4444", // Gagal
  "#94a3b8", // Batal
];

const JENIS_COLORS = ["#2563eb", "#6366f1", "#8b5cf6", "#14b8a6"];

const DETAIL_COLORS = [
  "#0ea5e9",
  "#2563eb",
  "#6366f1",
  "#8b5cf6",
  "#ec4899",
  "#f97316",
];

const METODE_COLORS = ["#2563eb", "#14b8a6", "#f59e0b", "#8b5cf6", "#ec4899"];

/* =====================================================
   FORMAT NUMBER
===================================================== */

const formatNumber = (value) => {
  return Number(value || 0).toLocaleString("id-ID");
};

/* =====================================================
   CUSTOM TOOLTIP
===================================================== */

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg">
      <p className="text-sm font-semibold text-gray-900">{payload[0].name}</p>

      <p className="mt-1 text-sm text-gray-500">
        {formatNumber(payload[0].value)} paket
      </p>
    </div>
  );
};

/* =====================================================
   LEGEND
===================================================== */

const ChartLegend = ({ data, colors }) => {
  return (
    <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
      {data.map((item, index) => (
        <div
          key={item.name}
          className="flex items-center gap-2 text-xs text-gray-600"
        >
          <span
            className="h-2.5 w-2.5 shrink-0 rounded-full"
            style={{
              backgroundColor: colors[index % colors.length],
            }}
          />

          <span className="truncate">{item.name}</span>

          <strong className="ml-auto text-gray-900">
            {formatNumber(item.value)}
          </strong>
        </div>
      ))}
    </div>
  );
};

/* =====================================================
   STATISTICS CHART
===================================================== */

const StatisticsChart = ({ data }) => {
  return (
    <div className="mt-10">
      {/* =================================================
          4 CARDS
      ================================================= */}

      <div
        className="
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {/* =================================================
            CARD 1
            JUMLAH PAKET
        ================================================= */}

        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Jumlah Paket Pengadaan
            </p>

            <p className="mt-1 text-xs text-gray-500">Status paket pengadaan</p>
          </div>

          {/* Total */}

          <div className="mt-5">
            <p className="text-xs text-gray-500">Total Paket</p>

            <p className="mt-1 text-3xl font-bold text-gray-900">
              {formatNumber(data.summary.totalPaket)}
            </p>
          </div>

          {/* Donut */}

          <div className="mt-3 h-[190px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.status}
                  cx="50%"
                  cy="50%"
                  innerRadius={52}
                  outerRadius={78}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {data.status.map((entry, index) => (
                    <Cell
                      key={`status-${index}`}
                      fill={STATUS_COLORS[index % STATUS_COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}

          <ChartLegend data={data.status} colors={STATUS_COLORS} />
        </div>

        {/* =================================================
            CARD 2
            JENIS PENGADAAN
        ================================================= */}

        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Jenis Pengadaan
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Distribusi berdasarkan jenis
            </p>
          </div>

          <div className="mt-5 h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.jenisPengadaan}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={82}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {data.jenisPengadaan.map((entry, index) => (
                    <Cell
                      key={`jenis-${index}`}
                      fill={JENIS_COLORS[index % JENIS_COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <ChartLegend data={data.jenisPengadaan} colors={JENIS_COLORS} />
        </div>

        {/* =================================================
            CARD 3
            DETAIL JENIS
        ================================================= */}

        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Detail Jenis Pengadaan
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Rincian paket pengadaan
            </p>
          </div>

          <div className="mt-5 h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data.detailJenisPengadaan}
                layout="vertical"
                margin={{
                  top: 5,
                  right: 10,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />

                <XAxis type="number" tick={{ fontSize: 11 }} />

                <YAxis
                  type="category"
                  dataKey="name"
                  width={80}
                  tick={{ fontSize: 10 }}
                />

                <Tooltip content={<CustomTooltip />} />

                <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                  {data.detailJenisPengadaan.map((entry, index) => (
                    <Cell
                      key={`detail-${index}`}
                      fill={DETAIL_COLORS[index % DETAIL_COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* =================================================
            CARD 4
            METODE PEMILIHAN
        ================================================= */}

        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Metode Pemilihan
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Distribusi berdasarkan metode
            </p>
          </div>

          <div className="mt-5 h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data.metodePemilihan}
                margin={{
                  top: 10,
                  right: 5,
                  left: -20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                  dataKey="name"
                  tick={{
                    fontSize: 10,
                  }}
                  interval={0}
                  angle={-20}
                  textAnchor="end"
                  height={55}
                />

                <YAxis
                  tick={{
                    fontSize: 10,
                  }}
                />

                <Tooltip content={<CustomTooltip />} />

                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {data.metodePemilihan.map((entry, index) => (
                    <Cell
                      key={`metode-${index}`}
                      fill={METODE_COLORS[index % METODE_COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;
