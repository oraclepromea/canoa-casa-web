
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-teal-600">Canoa Hostal</h1>
            <span className="ml-2 text-sm text-gray-600 hidden sm:block">Familia del Mundo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('accommodations')} className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Rooms
              </button>
              <button onClick={() => scrollToSection('restaurant')} className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Restaurant
              </button>
              <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Location
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button onClick={() => scrollToSection('hero')} className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('accommodations')} className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Rooms
              </button>
              <button onClick={() => scrollToSection('restaurant')} className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Restaurant
              </button>
              <button onClick={() => scrollToSection('location')} className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Location
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
