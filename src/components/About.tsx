import { Users, Globe, Heart, Coffee } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const galleryImages = [
    "/lovable-uploads/392e4cb8-d849-4953-a56c-ff857379833b.png",
    "/lovable-uploads/acb15df7-9b07-49d9-8279-7ed505d4c4d9.png", 
    "/lovable-uploads/84ceeffa-fd3d-4c9a-b1a4-8aae4cc4447f.png",
    "/lovable-uploads/b061b9ca-144a-42a6-a82f-11ae89a8ce02.png",
    "/lovable-uploads/d4dd34b5-4bb0-4fa7-b916-a5e4607b87b6.png",
    "/lovable-uploads/57ea44b6-c3ea-4845-ab3f-e4cfc7ca370d.png",
    "/lovable-uploads/6c7f22af-2dba-4803-b4ab-874bb516a986.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-100 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
              {t('about.title')}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-teal-200 group-hover:to-teal-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Users className="text-teal-600" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.community.title')}</h3>
            <p className="text-gray-600">{t('about.community.desc')}</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Globe className="text-orange-600" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.culture.title')}</h3>
            <p className="text-gray-600">{t('about.culture.desc')}</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-pink-200 group-hover:to-pink-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Heart className="text-pink-600" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.hospitality.title')}</h3>
            <p className="text-gray-600">{t('about.hospitality.desc')}</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-amber-200 group-hover:to-amber-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Coffee className="text-amber-600" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.comfort.title')}</h3>
            <p className="text-gray-600">{t('about.comfort.desc')}</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Card Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-50 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('about.homeTitle')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.homeDesc1')}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.homeDesc2')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{t('about.feature1')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{t('about.feature2')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{t('about.feature3')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{t('about.feature4')}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={galleryImages[currentImageIndex]}
                  alt="Hostel Gallery" 
                  className="w-full h-96 md:h-[500px] object-cover transition-opacity duration-500"
                  key={currentImageIndex}
                />
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                  {currentImageIndex + 1} / {galleryImages.length}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-4 rounded-xl shadow-lg">
                <p className="font-semibold">{t('about.reviews')}</p>
                <p className="text-sm opacity-90">{t('about.rating')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
