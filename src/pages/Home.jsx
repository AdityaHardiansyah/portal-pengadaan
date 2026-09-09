import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ServiceGrid from "../components/ServiceGrid";
import Statistics from "../components/Statistics";
import ExternalLinks from "../components/ExternalLinks";
import Footer from "../components/Footer";

const Home = () => {
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
    </div>
  );
};

export default Home;
