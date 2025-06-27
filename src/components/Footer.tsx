import { Facebook, Instagram, Globe, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/canoa-logo.png" 
                alt="Canoa Hostal Logo" 
                className="w-10 h-10 mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">{t('hero.title')}</h3>
                <p className="text-sm text-gray-400">{t('hero.subtitle')}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/canoahostal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Globe size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-teal-400 transition-colors text-left"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-teal-400 transition-colors text-left"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('accommodations')}
                  className="text-gray-300 hover:text-teal-400 transition-colors text-left"
                >
                  {t('nav.rooms')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('restaurant')}
                  className="text-gray-300 hover:text-teal-400 transition-colors text-left"
                >
                  {t('nav.restaurant')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-teal-400 transition-colors text-left"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h4>
            <div className="space-y-2 text-gray-300">
              <p>Hostal canoa, Av. Illampu esquina, La Paz</p>
              <p>+591 2 2451234</p>
              <p>+591 78763629</p>
              <p>info@canoahostal.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>{t('footer.tagline')}</p>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>{t('footer.madeWith')}</span>
              <Heart className="mx-1 h-4 w-4 text-red-500" />
              <span>{t('footer.forTravelers')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
