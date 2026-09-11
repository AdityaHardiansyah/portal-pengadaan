import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

const ServiceGrid = () => {
  const normalServices = services.filter(
    (service) => service && !service.featured,
  );

  const featuredServices = services.filter(
    (service) => service && service.featured,
  );

  return (
    <section id="layanan" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
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

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {normalServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {featuredServices.map((service) => (
          <div key={service.id} className="mt-6">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
