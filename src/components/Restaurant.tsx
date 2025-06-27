import { Utensils, Coffee, Wine, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Restaurant = () => {
  const { t } = useLanguage();
  
  const barGalleryImages = [
    "/lovable-uploads/bar-image-1.jpeg",
    "/lovable-uploads/bar-image-2.jpeg", 
    "/lovable-uploads/bar-image-3.jpeg",
    "/lovable-uploads/bar-image-4.jpeg",
    "/lovable-uploads/bar-image-5.jpeg",
    "/lovable-uploads/bar-image-6.jpeg",
    "/lovable-uploads/bar-image-7.jpeg",
    "/lovable-uploads/bar-image-8.jpeg",
    "/lovable-uploads/bar-image-9.jpeg",
    "/lovable-uploads/bar-image-10.jpeg",
    "/lovable-uploads/bar-image-11.jpeg",
    "/lovable-uploads/bar-image-12.jpeg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === barGalleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [barGalleryImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === barGalleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? barGalleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="restaurant" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('restaurant.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('restaurant.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src={barGalleryImages[currentImageIndex]}
                alt="Restaurant & Bar Gallery" 
                className="w-full h-96 md:h-[450px] object-cover transition-opacity duration-500"
                key={currentImageIndex}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                {currentImageIndex + 1} / {barGalleryImages.length}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('restaurant.tasteTitle')}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('restaurant.tasteDesc1')}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('restaurant.tasteDesc2')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Utensils className="text-teal-600 mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-gray-900">{t('restaurant.local')}</h4>
                <p className="text-sm text-gray-600">{t('restaurant.local.desc')}</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Coffee className="text-orange-600 mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-gray-900">{t('restaurant.coffee')}</h4>
                <p className="text-sm text-gray-600">{t('restaurant.coffee.desc')}</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Wine className="text-purple-600 mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-gray-900">{t('restaurant.drinks')}</h4>
                <p className="text-sm text-gray-600">{t('restaurant.drinks.desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Highlights */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">{t('restaurant.menuTitle')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="text-teal-600" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Breakfast</h4>
              <p className="text-sm text-gray-600">Traditional & Continental</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="text-orange-600" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Lunch & Dinner</h4>
              <p className="text-sm text-gray-600">Local & International</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="text-purple-600" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Drinks & Bar</h4>
              <p className="text-sm text-gray-600">Local beers & cocktails</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">{t('restaurant.hours')}</p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              {t('restaurant.viewMenu')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
