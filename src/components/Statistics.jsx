import { Package, Wallet, Activity, CheckCircle } from "lucide-react";

import StatisticCard from "./StatisticCard";

const Statistics = () => {
  return (
    <section id="statistik" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
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

        {/* Statistic Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatisticCard
            title="Total Paket"
            value="1.245"
            description="Total paket pengadaan"
            icon={Package}
          />

          <StatisticCard
            title="Total Nilai"
            value="Rp 2,4 T"
            description="Total nilai pengadaan"
            icon={Wallet}
          />

          <StatisticCard
            title="Paket Berjalan"
            value="325"
            description="Sedang dalam proses"
            icon={Activity}
          />

          <StatisticCard
            title="Paket Selesai"
            value="920"
            description="Pengadaan selesai"
            icon={CheckCircle}
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
