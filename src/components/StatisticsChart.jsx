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

const METODE_COLORS = ["#2563eb", "#14b8a6", "#f59e0b", "#8b5cf6", "#ec4899"];

/* =====================================================
   FORMAT NUMBER
===================================================== */

const formatNumber = (value) => {
  return Number(value || 0).toLocaleString("id-ID");
};

/* =====================================================
   CUSTOM TOOLTIP
   Untuk:
   - Jumlah Paket
   - Metode Pemilihan
===================================================== */

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const item = payload[0]?.payload;

  if (!item) {
    return null;
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg">
      <p className="max-w-[280px] text-sm font-semibold leading-5 text-gray-900">
        {item.name || item.shortName || "Data"}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        {formatNumber(item.value)} paket
      </p>
    </div>
  );
};

/* =====================================================
   DETAIL STATUS TOOLTIP
===================================================== */

const DetailStatusTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const item = payload[0]?.payload;

  if (!item) {
    return null;
  }

  const statuses = [
    {
      key: "berhasil",
      label: "Berhasil",
      color: "#2563eb",
    },
    {
      key: "dalamProses",
      label: "Dalam Proses",
      color: "#f59e0b",
    },
    {
      key: "gagal",
      label: "Gagal",
      color: "#ef4444",
    },
    {
      key: "batal",
      label: "Batal",
      color: "#94a3b8",
    },
  ];

  const totalStatus = statuses.reduce(
    (sum, status) => sum + Number(item?.[status.key] || 0),
    0,
  );

  const total = Number(item?.total) || totalStatus;

  return (
    <div className="min-w-[240px] rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg">
      {/* Nama Jenis */}

      <p className="max-w-[280px] text-sm font-semibold leading-5 text-gray-900">
        {label || item.name}
      </p>

      {/* Status */}

      <div className="mt-3 space-y-2">
        {statuses.map((status) => (
          <div key={status.key} className="flex items-center gap-2 text-xs">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{
                backgroundColor: status.color,
              }}
            />

            <span className="flex-1 text-gray-600">{status.label}</span>

            <strong className="text-gray-900">
              {formatNumber(item?.[status.key] || 0)}
            </strong>

            <span className="text-gray-400">paket</span>
          </div>
        ))}
      </div>

      {/* Total */}

      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="text-xs font-semibold text-gray-500">Total</span>

        <span className="text-xs font-bold text-gray-900">
          {formatNumber(total)} paket
        </span>
      </div>
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

          <span className="min-w-0 flex-1 truncate">{item.name}</span>

          <strong className="ml-auto text-gray-900">
            {formatNumber(item.value)}
          </strong>
        </div>
      ))}
    </div>
  );
};

/* =====================================================
   DETAIL STATUS LEGEND
===================================================== */

const DetailStatusLegend = () => {
  const statuses = [
    {
      label: "Berhasil",
      color: "#2563eb",
    },
    {
      label: "Dalam Proses",
      color: "#f59e0b",
    },
    {
      label: "Gagal",
      color: "#ef4444",
    },
    {
      label: "Batal",
      color: "#94a3b8",
    },
  ];

  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-gray-100 pt-4">
      {statuses.map((status) => (
        <div
          key={status.label}
          className="flex items-center gap-2 text-xs text-gray-600"
        >
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: status.color,
            }}
          />

          <span>{status.label}</span>
        </div>
      ))}
    </div>
  );
};

/* =====================================================
   STATISTICS CHART
===================================================== */

const StatisticsChart = ({ data }) => {
  /*
   * Cek apakah detail sudah memiliki
   * data status.
   */
  const detailData = data?.detailJenisPengadaan || [];

  const hasDetailStatusData = detailData.some(
    (item) =>
      Number(item?.berhasil || 0) > 0 ||
      Number(item?.dalamProses || 0) > 0 ||
      Number(item?.gagal || 0) > 0 ||
      Number(item?.batal || 0) > 0,
  );

  return (
    <div className="mt-10">
      {/* =================================================
          GRID
      ================================================= */}

      <div
        className="
          grid
          grid-cols-1
          gap-6
          lg:grid-cols-2
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
              {formatNumber(data?.summary?.totalPaket)}
            </p>
          </div>

          {/* Donut */}

          <div className="mt-3 h-[190px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data?.status || []}
                  cx="50%"
                  cy="50%"
                  innerRadius={52}
                  outerRadius={78}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {(data?.status || []).map((entry, index) => (
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

          <ChartLegend data={data?.status || []} colors={STATUS_COLORS} />
        </div>

        {/* =================================================
            CARD 2
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

          {/* Chart */}

          <div className="mt-5 h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data?.metodePemilihan || []}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                  dataKey="shortName"
                  tick={{
                    fontSize: 10,
                  }}
                  interval={0}
                  angle={-20}
                  textAnchor="end"
                  height={70}
                />

                <YAxis
                  tick={{
                    fontSize: 10,
                  }}
                />

                <Tooltip cursor={false} content={<CustomTooltip />} />

                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {(data?.metodePemilihan || []).map((entry, index) => (
                    <Cell
                      key={`metode-${index}`}
                      fill={METODE_COLORS[index % METODE_COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Jumlah Paket */}

          <div className="mt-5 border-t border-gray-100 pt-4">
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {(data?.metodePemilihan || []).map((item, index) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor:
                        METODE_COLORS[index % METODE_COLORS.length],
                    }}
                  />

                  <span className="min-w-0 flex-1 truncate text-xs text-gray-600">
                    {item.shortName || item.name}
                  </span>

                  <span className="shrink-0 text-xs font-semibold text-gray-900">
                    {formatNumber(item.value)}
                  </span>

                  <span className="shrink-0 text-[11px] text-gray-400">
                    paket
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            CARD 3
            DETAIL JENIS PENGADAAN
            FULL WIDTH
        ================================================= */}

        <div
          className="
            lg:col-span-2
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
              Rincian paket berdasarkan status
            </p>
          </div>

          {/* =================================================
              CHART
          ================================================= */}

          <div className="mt-5 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={detailData}
                layout="vertical"
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />

                <XAxis
                  type="number"
                  tick={{
                    fontSize: 11,
                  }}
                />

                <YAxis
                  type="category"
                  dataKey="name"
                  width={130}
                  tick={{
                    fontSize: 11,
                  }}
                />

                {/* Tooltip */}

                <Tooltip cursor={false} content={<DetailStatusTooltip />} />

                {/* =================================================
                    JIKA DATA STATUS SUDAH TERSEDIA
                ================================================= */}

                {hasDetailStatusData ? (
                  <>
                    <Bar
                      dataKey="berhasil"
                      name="Berhasil"
                      stackId="status"
                      fill="#2563eb"
                      barSize={32}
                    />

                    <Bar
                      dataKey="dalamProses"
                      name="Dalam Proses"
                      stackId="status"
                      fill="#f59e0b"
                      barSize={32}
                    />

                    <Bar
                      dataKey="gagal"
                      name="Gagal"
                      stackId="status"
                      fill="#ef4444"
                      barSize={32}
                    />

                    <Bar
                      dataKey="batal"
                      name="Batal"
                      stackId="status"
                      fill="#94a3b8"
                      radius={[0, 6, 6, 0]}
                      barSize={32}
                    />
                  </>
                ) : (
                  /* =================================================
                     JIKA DATA STATUS BELUM TERSEDIA

                     Tampilkan TOTAL sebagai bar netral.
                  ================================================= */

                  <Bar
                    dataKey="total"
                    name="Total"
                    fill="#cbd5e1"
                    radius={[0, 6, 6, 0]}
                    barSize={32}
                  />
                )}
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* =================================================
              LEGEND
          ================================================= */}

          {hasDetailStatusData ? (
            <DetailStatusLegend />
          ) : (
            <div className="mt-5 flex items-center gap-2 border-t border-gray-100 pt-4 text-xs text-gray-500">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

              <span>Data status per jenis pengadaan belum tersedia</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;
