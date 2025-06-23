
import { Bed, Users, Wifi, Car } from "lucide-react";

const Accommodations = () => {
  const rooms = [
    {
      title: "Shared Dormitory",
      price: "60 BOB",
      description: "Budget-friendly shared accommodation with lockers and shared bathrooms",
      features: ["4-8 beds per room", "Individual lockers", "Shared bathroom", "Common area access"],
      image: "/lovable-uploads/771c34e8-4fe6-4b42-9ac4-de4059e39ad7.png"
    },
    {
      title: "Private Room",
      price: "150 BOB", 
      description: "Comfortable private room perfect for couples or solo travelers seeking privacy",
      features: ["Double or twin beds", "Private bathroom", "City views", "24/7 hot water"],
      image: "/lovable-uploads/3e287e67-8ac8-4817-a86b-399c6bd9d32d.png"
    },
    {
      title: "Family Room",
      price: "250 BOB",
      description: "Spacious room ideal for families or groups traveling together",
      features: ["3-4 beds", "Private bathroom", "Extra space", "Mountain views"],
      image: "/lovable-uploads/8e0f4c83-b3b1-4983-999c-45bab113109c.png"
    }
  ];

  return (
    <section id="accommodations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Accommodations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our variety of comfortable rooms, all featuring stunning views of La Paz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full font-semibold">
                  {room.price}/night
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{room.description}</p>
                
                <div className="space-y-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Hostel Amenities</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="text-blue-600" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Comfortable Beds</h4>
              <p className="text-sm text-gray-600">Quality mattresses and linens</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="text-green-600" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Free WiFi</h4>
              <p className="text-sm text-gray-600">High-speed internet access</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Common Areas</h4>
              <p className="text-sm text-gray-600">Social spaces to meet travelers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="text-yellow-600" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Tour Assistance</h4>
              <p className="text-sm text-gray-600">Help planning your adventure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
