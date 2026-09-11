import { useState } from "react";

import {
  Package,
  CheckCircle,
  Clock,
  XCircle,
  Prohibit,
} from "@phosphor-icons/react";

import StatisticsChart from "./StatisticsChart";
import { statisticsData } from "../data/statistics";

const Statistics = () => {
  const [selectedYear, setSelectedYear] = useState("2026");

  const data = statisticsData[selectedYear];

  const hasData = data && data.summary && data.summary.totalPaket > 0;

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
            DATA BELUM TERSEDIA
        ============================ */}
        {!hasData ? (
          <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">
              <Package size={32} weight="duotone" className="text-gray-400" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Data Belum Tersedia
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              Data statistik pengadaan untuk tahun {selectedYear} belum tersedia
              pada sistem.
            </p>
          </div>
        ) : (
          <>
            {/* ============================
                SUMMARY STATUS
            ============================ */}
            <div className="mt-10">
              <div className="mb-5">
                <h3 className="text-xl font-bold text-gray-900">
                  Jumlah Paket Pengadaan
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Ringkasan status paket pengadaan tahun {selectedYear}.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {/* TOTAL */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                      <Package
                        size={25}
                        weight="duotone"
                        className="text-blue-600"
                      />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Total
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className="text-3xl font-bold text-gray-900">
                      {(data.summary.totalPaket ?? 0).toLocaleString("id-ID")}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">Total paket</p>
                  </div>
                </div>

                {/* BERHASIL */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                    <CheckCircle
                      size={25}
                      weight="duotone"
                      className="text-emerald-600"
                    />
                  </div>

                  <div className="mt-5">
                    <p className="text-3xl font-bold text-gray-900">
                      {(
                        data.status?.find((item) => item.name === "Berhasil")
                          ?.value ?? 0
                      ).toLocaleString("id-ID")}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">Berhasil</p>
                  </div>
                </div>

                {/* DALAM PROSES */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                    <Clock
                      size={25}
                      weight="duotone"
                      className="text-amber-600"
                    />
                  </div>

                  <div className="mt-5">
                    <p className="text-3xl font-bold text-gray-900">
                      {(
                        data.status?.find(
                          (item) => item.name === "Dalam Proses",
                        )?.value ?? 0
                      ).toLocaleString("id-ID")}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">Dalam proses</p>
                  </div>
                </div>

                {/* GAGAL */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50">
                    <XCircle
                      size={25}
                      weight="duotone"
                      className="text-rose-600"
                    />
                  </div>

                  <div className="mt-5">
                    <p className="text-3xl font-bold text-gray-900">
                      {(
                        data.status?.find((item) => item.name === "Gagal")
                          ?.value ?? 0
                      ).toLocaleString("id-ID")}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">Gagal</p>
                  </div>
                </div>

                {/* BATAL */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                    <Prohibit
                      size={25}
                      weight="duotone"
                      className="text-slate-600"
                    />
                  </div>

                  <div className="mt-5">
                    <p className="text-3xl font-bold text-gray-900">
                      {(
                        data.status?.find((item) => item.name === "Batal")
                          ?.value ?? 0
                      ).toLocaleString("id-ID")}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">Batal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ============================
                CHART STATISTIK
            ============================ */}
            <div className="mt-10">
              <StatisticsChart data={data} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Statistics;
