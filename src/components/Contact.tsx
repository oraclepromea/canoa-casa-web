
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking inquiry submitted:', formData);
    // Here you would typically send the data to a backend
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact & Booking</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to join our family? Get in touch with us to book your stay or ask any questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Phone className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+591 2 2451234</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">+591 75512345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@canoahostal.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <MapPin className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">Calle Linares, La Paz, Bolivia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Reception Hours</h4>
                  <p className="text-gray-600">24/7 Available</p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Quick Response Guarantee</h4>
              <p className="text-gray-600 text-sm">
                We respond to all inquiries within 2 hours during business hours. 
                For urgent matters, please call or WhatsApp us directly.
              </p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Stay</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Questions
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Any special requests, questions, or additional information..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
              >
                Send Booking Inquiry
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              * This is an inquiry form. Final booking confirmation will be sent via email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
