
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/0fba61a6-f44c-4cbe-ba55-c64eb79c26ac.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Canoa Hostal
        </h1>
        <p className="text-xl md:text-2xl mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Familia del Mundo
        </p>
        <p className="text-lg md:text-xl mb-8 animate-fade-in opacity-90" style={{ animationDelay: '0.4s' }}>
          Backpackers Hostel & Restaurant in La Paz, Bolivia
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto">
            Book Now
          </button>
          <button 
            onClick={scrollToAbout}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-white hover:text-teal-300 transition-colors">
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
