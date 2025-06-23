
import { Facebook, Instagram, Globe, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-teal-400">Canoa Hostal</h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Your family away from home in the heart of La Paz. Experience authentic Bolivian 
              hospitality with breathtaking panoramic views.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#accommodations" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Accommodations
                </a>
              </li>
              <li>
                <a href="#restaurant" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Restaurant & Bar
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Contact & Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Shared & Private Rooms</li>
              <li>• Restaurant & Bar</li>
              <li>• Free WiFi</li>
              <li>• 24/7 Reception</li>
              <li>• Tour Information</li>
              <li>• Luggage Storage</li>
              <li>• Panoramic Views</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white">Address</p>
                <p>Calle Linares</p>
                <p>La Paz, Bolivia</p>
              </div>
              <div>
                <p className="font-medium text-white">Phone</p>
                <p>+591 2 2451234</p>
              </div>
              <div>
                <p className="font-medium text-white">WhatsApp</p>
                <p>+591 75512345</p>
              </div>
              <div>
                <p className="font-medium text-white">Email</p>
                <p>info@canoahostal.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>Made with</span>
              <Heart className="text-red-400" size={16} />
              <span>for travelers around the world</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
              <span>© 2024 Canoa Hostal</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400 italic">
              "Familia del Mundo" - Where every traveler becomes family
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
