
import Hero from "@/components/Hero";
import About from "@/components/About";
import Accommodations from "@/components/Accommodations";
import Restaurant from "@/components/Restaurant";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Accommodations />
      <Restaurant />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
