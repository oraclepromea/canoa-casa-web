
import { Utensils, Coffee, Wine } from "lucide-react";

const Restaurant = () => {
  return (
    <section id="restaurant" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Restaurant & Bar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Savor delicious local and international cuisine while enjoying panoramic views of La Paz
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&h=400" 
              alt="Restaurant View" 
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Taste of Bolivia & Beyond</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our restaurant combines traditional Bolivian flavors with international favorites, 
              creating a menu that satisfies every palate. Enjoy your meals on our rooftop terrace 
              with breathtaking 360-degree views of the city.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From hearty breakfast to late-night snacks, we're here to fuel your adventures. 
              Our bar serves local beers, cocktails, and the famous Bolivian wines.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Utensils className="text-teal-600 mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-gray-900">Local Cuisine</h4>
                <p className="text-sm text-gray-600">Authentic Bolivian dishes</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Coffee className="text-orange-600 mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-gray-900">Fresh Coffee</h4>
                <p className="text-sm text-gray-600">Bolivian highland coffee</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Wine className="text-purple-600 mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-gray-900">Local Drinks</h4>
                <p className="text-sm text-gray-600">Beers, wines & cocktails</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Highlights */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Menu Highlights</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥘</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Salteñas</h4>
              <p className="text-gray-600 text-sm">Traditional Bolivian pastries filled with meat and vegetables</p>
              <p className="text-teal-600 font-semibold mt-2">15 BOB</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍲</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Llama Steak</h4>
              <p className="text-gray-600 text-sm">Tender llama meat grilled to perfection with local spices</p>
              <p className="text-teal-600 font-semibold mt-2">45 BOB</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍕</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">International</h4>
              <p className="text-gray-600 text-sm">Pizza, pasta, burgers and other international favorites</p>
              <p className="text-teal-600 font-semibold mt-2">25-40 BOB</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥤</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Api & Sopaipilla</h4>
              <p className="text-gray-600 text-sm">Traditional purple corn drink with fried pastries</p>
              <p className="text-teal-600 font-semibold mt-2">8 BOB</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍺</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Local Beer</h4>
              <p className="text-gray-600 text-sm">Paceña, Huari and other Bolivian craft beers</p>
              <p className="text-teal-600 font-semibold mt-2">12 BOB</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☕</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Bolivian Coffee</h4>
              <p className="text-gray-600 text-sm">Fresh highland coffee from Yungas region</p>
              <p className="text-teal-600 font-semibold mt-2">10 BOB</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Open daily from 7:00 AM to 11:00 PM</p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
