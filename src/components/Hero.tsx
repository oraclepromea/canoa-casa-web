import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('/lovable-uploads/hero-canoa-hostal.jpeg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-teal-300/50 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <div className="h-0.5 w-24 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}></div>
          <p className="text-xl md:text-2xl mb-2 animate-fade-in font-light tracking-wide" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
        </div>
        
        <p className="text-lg md:text-xl mb-8 animate-fade-in opacity-90 font-light leading-relaxed" style={{ animationDelay: '0.4s' }}>
          {t('hero.description')}
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://hostal-canoa.lapazhotelsweb.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto block text-center transform hover:-translate-y-1"
          >
            <span className="inline-block group-hover:scale-105 transition-transform">{t('hero.bookNow')}</span>
          </a>
          <button 
            onClick={scrollToAbout}
            className="group border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto backdrop-blur-sm hover:backdrop-blur-md"
          >
            <span className="inline-block group-hover:scale-105 transition-transform">{t('hero.learnMore')}</span>
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout} 
          className="group text-white hover:text-teal-300 transition-all duration-300 flex flex-col items-center"
        >
          <div className="animate-bounce group-hover:animate-pulse">
            <ArrowDown size={32} className="drop-shadow-lg" />
          </div>
          <span className="text-xs mt-2 opacity-75 group-hover:opacity-100 transition-opacity">{t('hero.scrollDown')}</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
