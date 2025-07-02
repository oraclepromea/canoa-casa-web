import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Location = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('location.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('location.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-start">
          {/* Location Info */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('location.details')}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <MapPin className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('location.address')}</h4>
                    <a 
                      href="https://www.google.com/maps/place/Hostel+Canoa/@-16.4965609,-68.1395597,17z/data=!3m1!4b1!4m9!3m8!1s0x915f207431abb671:0x82632d8828906ca0!5m2!4m1!1i2!8m2!3d-16.4965609!4d-68.1395597!16s%2Fg%2F11f15dvjpk?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-teal-600 transition-colors cursor-pointer block"
                    >
                      Hostal canoa, Av. Illampu esquina, La Paz
                    </a>
                    <p className="text-gray-600">Near Plaza San Francisco</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Navigation className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('location.getting')}</h4>
                    <p className="text-gray-600">{t('location.getting.desc1')}</p>
                    <p className="text-gray-600">{t('location.getting.desc2')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Clock className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('location.reception')}</h4>
                    <p className="text-gray-600">{t('location.reception.desc1')}</p>
                    <p className="text-gray-600">{t('location.reception.desc2')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Phone className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('location.contact')}</h4>
                    <p className="text-gray-600">Phone: +591 2 2451234</p>
                    <p className="text-gray-600">WhatsApp: +591 78763629</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('location.attractions')}</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-teal-200 last:border-b-0">
                  <span className="text-gray-700 font-medium">Plaza San Francisco</span>
                  <span className="text-teal-600 font-semibold bg-teal-100 px-3 py-1 rounded-full text-sm">2 {t('common.minWalk')}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-teal-200 last:border-b-0">
                  <span className="text-gray-700 font-medium">Witches Market</span>
                  <span className="text-teal-600 font-semibold bg-teal-100 px-3 py-1 rounded-full text-sm">5 {t('common.minWalk')}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-teal-200 last:border-b-0">
                  <span className="text-gray-700 font-medium">Teleférico (Cable Car)</span>
                  <span className="text-teal-600 font-semibold bg-teal-100 px-3 py-1 rounded-full text-sm">10 {t('common.minWalk')}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-teal-200 last:border-b-0">
                  <span className="text-gray-700 font-medium">Plaza Murillo</span>
                  <span className="text-teal-600 font-semibold bg-teal-100 px-3 py-1 rounded-full text-sm">15 {t('common.minWalk')}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 font-medium">Valle de la Luna</span>
                  <span className="text-teal-600 font-semibold bg-teal-100 px-3 py-1 rounded-full text-sm">30 {t('common.minBus')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('location.transport')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🚗</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('location.taxi')}</h4>
              <p className="text-gray-600 text-sm">{t('location.taxi.desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🚌</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('location.public')}</h4>
              <p className="text-gray-600 text-sm">{t('location.public.desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🚡</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('location.cable')}</h4>
              <p className="text-gray-600 text-sm">{t('location.cable.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
