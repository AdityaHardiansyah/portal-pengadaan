import { useState } from "react";

import { Package, Wallet, Activity, CheckCircle } from "lucide-react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import StatisticCard from "./StatisticCard";
import { statisticsData } from "../data/statistics";

const COLORS = ["#2563EB", "#F59E0B"];

const Statistics = () => {
  const [selectedYear, setSelectedYear] = useState("2026");

  const data = statisticsData[selectedYear];

  return (
    <section id="statistik" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* ============================
            HEADER
        ============================ */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Statistik
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Data Pengadaan
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Informasi statistik pengadaan berdasarkan data yang tersedia pada
            sistem.
          </p>
        </div>

        {/* ============================
            FILTER TAHUN
        ============================ */}
        <div className="mx-auto mt-8 max-w-xs">
          <label
            htmlFor="tahun"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Tahun Pengadaan
          </label>

          <select
            id="tahun"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-sm
              font-medium
              text-gray-700
              shadow-sm
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          >
            <option value="2026">2026</option>

            <option value="2025">2025</option>

            <option value="2024">2024</option>
          </select>
        </div>

        {/* ============================
            SUMMARY
        ============================ */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatisticCard
            title="Total Paket"
            value={data.summary.totalPaket.toLocaleString("id-ID")}
            description={`Total paket pengadaan tahun ${selectedYear}`}
            icon={Package}
          />

          <StatisticCard
            title="Total Nilai"
            value={data.summary.totalNilai}
            description={`Total nilai pengadaan tahun ${selectedYear}`}
            icon={Wallet}
          />

          <StatisticCard
            title="Paket Berjalan"
            value={data.summary.paketBerjalan.toLocaleString("id-ID")}
            description="Sedang dalam proses"
            icon={Activity}
          />

          <StatisticCard
            title="Paket Selesai"
            value={data.summary.paketSelesai.toLocaleString("id-ID")}
            description="Pengadaan selesai"
            icon={CheckCircle}
          />
        </div>

        {/* ============================
            CHART
        ============================ */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* ============================
              STATUS PAKET
          ============================ */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Status Pengadaan
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Distribusi status paket tahun {selectedYear}
            </p>

            <div className="mt-6 h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.status}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={105}
                    paddingAngle={3}
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {data.status.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />

                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ============================
              NILAI BULANAN
          ============================ */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Nilai Pengadaan
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Nilai pengadaan per bulan tahun {selectedYear}
            </p>

            <div className="mt-6 h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.nilaiBulanan}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="bulan" />

                  <YAxis />

                  <Tooltip
                    formatter={(value) => [`Rp ${value} Juta`, "Nilai"]}
                  />

                  <Legend />

                  <Bar
                    dataKey="nilai"
                    name="Nilai Pengadaan"
                    fill="#2563EB"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
