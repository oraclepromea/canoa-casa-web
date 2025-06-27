import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  // Flag components as SVGs
  const USFlag = () => (
    <svg className="w-5 h-4 rounded-sm" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" fill="#B22234"/>
      <rect y="2" width="60" height="2" fill="white"/>
      <rect y="6" width="60" height="2" fill="white"/>
      <rect y="10" width="60" height="2" fill="white"/>
      <rect y="14" width="60" height="2" fill="white"/>
      <rect y="18" width="60" height="2" fill="white"/>
      <rect y="22" width="60" height="2" fill="white"/>
      <rect y="26" width="60" height="2" fill="white"/>
      <rect width="24" height="16" fill="#3C3B6E"/>
    </svg>
  );

  const SpainFlag = () => (
    <svg className="w-5 h-4 rounded-sm" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" fill="#AA151B"/>
      <rect y="7.5" width="60" height="15" fill="#F1BF00"/>
    </svg>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/canoa-logo.png" 
              alt="Canoa Hostal Logo" 
              className={`mr-3 transition-all duration-300 ${
                scrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}
            />
            <div className="flex flex-col items-center text-center">
              <h1 className={`font-bold text-teal-600 transition-all duration-300 font-serif tracking-wide ${
                scrolled ? 'text-2xl' : 'text-3xl'
              }`}>
                {t('hero.title')}
              </h1>
              <span className={`text-gray-600 font-light italic tracking-wider transition-all duration-300 ${
                scrolled ? 'text-xs' : 'text-sm'
              } hidden sm:block`}>
                {t('hero.subtitle')}
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-6">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105 font-sans tracking-wide">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105 font-sans tracking-wide">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('accommodations')} className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105 font-sans tracking-wide">
                {t('nav.rooms')}
              </button>
              <button onClick={() => scrollToSection('restaurant')} className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105 font-sans tracking-wide">
                {t('nav.restaurant')}
              </button>
              <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105 font-sans tracking-wide">
                {t('nav.location')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105 font-sans tracking-wide">
                {t('nav.contact')}
              </button>
            </div>
            
            {/* Language Switcher with Flags */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-700 hover:text-teal-600 px-4 py-2 rounded-lg text-lg font-medium transition-all duration-300 border-2 border-gray-300 hover:border-teal-300 hover:scale-105 font-sans tracking-wide"
              title={language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
            >
              {language === 'en' ? <SpainFlag /> : <USFlag />}
              <span className="font-semibold">{language === 'en' ? 'ES' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 px-3 py-2 rounded-lg text-base font-medium border border-gray-300 hover:border-teal-300 transition-colors"
              title={language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
            >
              {language === 'en' ? <SpainFlag /> : <USFlag />}
              <span className="font-semibold text-sm">{language === 'en' ? 'ES' : 'EN'}</span>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 p-2 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-lg shadow-lg">
              <button onClick={() => scrollToSection('hero')} className="block text-gray-700 hover:text-teal-600 px-4 py-3 rounded-md text-lg font-medium w-full text-left transition-all duration-300 hover:bg-teal-50 font-sans tracking-wide">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-teal-600 px-4 py-3 rounded-md text-lg font-medium w-full text-left transition-all duration-300 hover:bg-teal-50 font-sans tracking-wide">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('accommodations')} className="block text-gray-700 hover:text-teal-600 px-4 py-3 rounded-md text-lg font-medium w-full text-left transition-all duration-300 hover:bg-teal-50 font-sans tracking-wide">
                {t('nav.rooms')}
              </button>
              <button onClick={() => scrollToSection('restaurant')} className="block text-gray-700 hover:text-teal-600 px-4 py-3 rounded-md text-lg font-medium w-full text-left transition-all duration-300 hover:bg-teal-50 font-sans tracking-wide">
                {t('nav.restaurant')}
              </button>
              <button onClick={() => scrollToSection('location')} className="block text-gray-700 hover:text-teal-600 px-4 py-3 rounded-md text-lg font-medium w-full text-left transition-all duration-300 hover:bg-teal-50 font-sans tracking-wide">
                {t('nav.location')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-teal-600 px-4 py-3 rounded-md text-lg font-medium w-full text-left transition-all duration-300 hover:bg-teal-50 font-sans tracking-wide">
                {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
