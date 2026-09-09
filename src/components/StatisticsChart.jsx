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

const COLORS = ["#2563eb", "#93c5fd"];

const StatisticsChart = ({ data }) => {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {/* Status Paket */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Status Pengadaan
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Distribusi paket pengadaan berdasarkan status
          </p>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.status}
                cx="50%"
                cy="50%"
                innerRadius={75}
                outerRadius={105}
                paddingAngle={4}
                dataKey="value"
              >
                {data.status.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8">
          {data.status.map((item, index) => (
            <div
              key={item.name}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              <span>
                {item.name}:{" "}
                <strong className="text-gray-900">
                  {item.value.toLocaleString("id-ID")}
                </strong>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Nilai Pengadaan */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Nilai Pengadaan
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Nilai pengadaan berdasarkan bulan
          </p>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.nilaiBulanan}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="bulan" />

              <YAxis />

              <Tooltip
                formatter={(value) => [`Rp ${value} M`, "Nilai Pengadaan"]}
              />

              <Bar dataKey="nilai" fill="#2563eb" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;
