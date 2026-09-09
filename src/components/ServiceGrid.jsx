import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

const ServiceGrid = () => {
  return (
    <section id="layanan" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Informasi & Layanan
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Temukan Informasi yang Anda Butuhkan
          </h2>

          <p className="mt-4 text-gray-500">
            Akses berbagai informasi dan layanan pengadaan secara mudah melalui
            portal ini.
          </p>
        </div>

        {/* Service Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
