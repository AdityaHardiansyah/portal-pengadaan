import { useState } from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ServiceGrid from "../components/ServiceGrid";
import Statistics from "../components/Statistics";
import ExternalLinks from "../components/ExternalLinks";
import Footer from "../components/Footer";
import GratifikasiModal from "../components/GratifikasiModal";

const Home = () => {
  const [showGratifikasi, setShowGratifikasi] = useState(true);

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
        onClose={() => setShowGratifikasi(false)}
        onContinue={() => setShowGratifikasi(false)}
      />
    </div>
  );
};

export default Home;
