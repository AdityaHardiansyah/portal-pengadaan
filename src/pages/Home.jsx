import { useState } from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ServiceGrid from "../components/ServiceGrid";
import Statistics from "../components/Statistics";
import ExternalLinks from "../components/ExternalLinks";
import Footer from "../components/Footer";
import GratifikasiModal from "../components/GratifikasiModal";

const GRATIFIKASI_KEY = "gratifikasi_acknowledged";

const Home = () => {
  const [showGratifikasi, setShowGratifikasi] = useState(() => {
    return localStorage.getItem(GRATIFIKASI_KEY) !== "true";
  });

  const handleContinueGratifikasi = () => {
    localStorage.setItem(GRATIFIKASI_KEY, "true");
    setShowGratifikasi(false);
  };

  const handleCloseGratifikasi = () => {
    setShowGratifikasi(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Banner />

        <ServiceGrid />

        <Statistics />

        <ExternalLinks />
      </main>

      <Footer />

      <GratifikasiModal
        isOpen={showGratifikasi}
        onClose={handleCloseGratifikasi}
        onContinue={handleContinueGratifikasi}
      />
    </div>
  );
};

export default Home;
