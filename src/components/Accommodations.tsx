import { Bed, Users, Wifi, Car } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Accommodations = () => {
  const { t } = useLanguage();
  
  const rooms = [
    {
      titleKey: "accommodations.shared.title",
      price: "60 BOB",
      descKey: "accommodations.shared.desc",
      features: ["4-8 beds per room", "Individual lockers", "Shared bathroom", "Common area access"],
      image: "/lovable-uploads/8e0f4c83-b3b1-4983-999c-45bab113109c.png"
    },
    {
      titleKey: "accommodations.private.title",
      price: "150 BOB", 
      descKey: "accommodations.private.desc",
      features: ["Double or twin beds", "Private bathroom", "City views", "24/7 hot water"],
      image: "/lovable-uploads/3e287e67-8ac8-4817-a86b-399c6bd9d32d.png"
    },
    {
      titleKey: "accommodations.family.title",
      price: "250 BOB",
      descKey: "accommodations.family.desc",
      features: ["3-4 beds", "Private bathroom", "Extra space", "Mountain views"],
      image: "/lovable-uploads/771c34e8-4fe6-4b42-9ac4-de4059e39ad7.png"
    }
  ];

  return (
    <section id="accommodations" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-100 to-transparent rounded-full transform translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
              {t('accommodations.title')}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('accommodations.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rooms.map((room, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={t(room.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-2 rounded-full font-bold shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  {room.price}{t('common.night')}
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="absolute top-0 left-6 w-12 h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform -translate-y-3 rounded-full"></div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">{t(room.titleKey)}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{t(room.descKey)}</p>
                
                <div className="space-y-3 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <a 
                  href="https://hostal-canoa.lapazhotelsweb.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 block text-center transform hover:scale-105 hover:shadow-xl group-hover:-translate-y-1"
                >
                  <span className="inline-block group-hover:scale-105 transition-transform duration-300">{t('hero.bookNow')}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Amenities */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-teal-100/50 to-transparent rounded-full transform -translate-x-20 -translate-y-20"></div>
          
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 relative">
            {t('accommodations.amenities')}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></div>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                <Bed className="text-blue-600" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('accommodations.beds')}</h4>
              <p className="text-sm text-gray-600">{t('accommodations.beds.desc')}</p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                <Wifi className="text-green-600" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('accommodations.wifi')}</h4>
              <p className="text-sm text-gray-600">{t('accommodations.wifi.desc')}</p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                <Users className="text-purple-600" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('accommodations.common')}</h4>
              <p className="text-sm text-gray-600">{t('accommodations.common.desc')}</p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                <Car className="text-yellow-600" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('accommodations.tours')}</h4>
              <p className="text-sm text-gray-600">{t('accommodations.tours.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
