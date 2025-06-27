import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-teal-100 to-transparent rounded-full transform -translate-x-40 -translate-y-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
              {t('contact.title')}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden border border-gray-100">
            {/* Card decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-50 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-50 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center relative">
              {t('contact.getInTouch')}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></div>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-3 rounded-full group-hover:shadow-lg transition-all duration-300">
                  <Phone className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.phone')}</h4>
                  <p className="text-gray-600">+591 2 2451234</p>
                </div>
              </div>
              
              <div className="group flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-full group-hover:shadow-lg transition-all duration-300">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.whatsapp')}</h4>
                  <p className="text-gray-600">+591 78763629</p>
                </div>
              </div>
              
              <div className="group flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-full group-hover:shadow-lg transition-all duration-300">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.email')}</h4>
                  <p className="text-gray-600">info@canoahostal.com</p>
                </div>
              </div>
              
              <div className="group flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-full group-hover:shadow-lg transition-all duration-300">
                  <MapPin className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.address')}</h4>
                  <p className="text-gray-600">Hostal canoa, Av. Illampu esquina, La Paz</p>
                </div>
              </div>
              
              <div className="group flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-3 rounded-full group-hover:shadow-lg transition-all duration-300">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.hours')}</h4>
                  <p className="text-gray-600">{t('contact.hours.desc')}</p>
                </div>
              </div>

              <div className="group flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-3 rounded-full group-hover:shadow-lg transition-all duration-300">
                  <MessageCircle className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.social')}</h4>
                  <p className="text-gray-600">@canoahostal</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl p-6 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-teal-200/30 rounded-full transform translate-x-10 -translate-y-10"></div>
              <h4 className="font-semibold text-gray-900 mb-3">{t('contact.guarantee')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('contact.guarantee.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
