
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us in La Paz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perfectly located in the heart of La Paz, we're close to major attractions and transportation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Location Info */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <MapPin className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">Calle Linares, La Paz, Bolivia</p>
                    <p className="text-gray-600">Near Plaza San Francisco</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Navigation className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Getting Here</h4>
                    <p className="text-gray-600">15 minutes from El Alto Airport by taxi</p>
                    <p className="text-gray-600">Walking distance to main attractions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Clock className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Reception Hours</h4>
                    <p className="text-gray-600">24/7 Reception Available</p>
                    <p className="text-gray-600">Check-in: 2:00 PM | Check-out: 11:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Phone className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                    <p className="text-gray-600">Phone: +591 2 2451234</p>
                    <p className="text-gray-600">WhatsApp: +591 75512345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nearby Attractions</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Plaza San Francisco</span>
                  <span className="text-teal-600 font-semibold">2 min walk</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Witches Market</span>
                  <span className="text-teal-600 font-semibold">5 min walk</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Teleférico (Cable Car)</span>
                  <span className="text-teal-600 font-semibold">10 min walk</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Plaza Murillo</span>
                  <span className="text-teal-600 font-semibold">15 min walk</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Valle de la Luna</span>
                  <span className="text-teal-600 font-semibold">30 min bus</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-2xl h-96 lg:h-full flex items-center justify-center relative overflow-hidden">
            <div className="text-center text-gray-600">
              <MapPin size={48} className="mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Interactive Map</h4>
              <p>View our exact location and surrounding area</p>
            </div>
            
            {/* Sample map overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-8 h-8 border-2 border-red-500 rounded-full absolute -top-2 -left-2 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Transportation Options</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Taxi from Airport</h4>
              <p className="text-gray-600 text-sm">Approximately 80-120 BOB from El Alto Airport</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Public Transport</h4>
              <p className="text-gray-600 text-sm">Minibuses and buses connect to all parts of the city</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚡</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Cable Car</h4>
              <p className="text-gray-600 text-sm">Mi Teleférico system connects different zones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
