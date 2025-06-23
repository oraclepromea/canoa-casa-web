import { Users, Globe, Heart, Coffee } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Our Family</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Canoa Hostal, we believe every traveler becomes part of our global family. 
            Experience authentic Bolivian hospitality with stunning panoramic views of La Paz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
              <Users className="text-teal-600" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Spirit</h3>
            <p className="text-gray-600">Join our international family of travelers and make lifelong connections.</p>
          </div>

          <div className="text-center group">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
              <Globe className="text-orange-600" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cultural Exchange</h3>
            <p className="text-gray-600">Experience authentic Bolivian culture while sharing your own stories.</p>
          </div>

          <div className="text-center group">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
              <Heart className="text-pink-600" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Warm Hospitality</h3>
            <p className="text-gray-600">Feel at home with our friendly staff and welcoming atmosphere.</p>
          </div>

          <div className="text-center group">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
              <Coffee className="text-amber-600" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Comfort & Relaxation</h3>
            <p className="text-gray-600">Unwind in our cozy spaces with breathtaking city views.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Your Home Away From Home</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Located in the heart of La Paz, Canoa Hostal offers more than just accommodation. 
                We provide a complete cultural experience with our rooftop terrace offering 360-degree 
                views of the city and surrounding mountains.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our restaurant serves delicious local and international cuisine, while our bar 
                is the perfect place to meet fellow travelers and share stories of your adventures 
                across Bolivia and beyond.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">24/7 Reception & Security</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Free WiFi Throughout</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Panoramic City Views</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Restaurant & Bar On-Site</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={galleryImages[currentImageIndex]}
                  alt="Hostel Gallery" 
                  className="w-full h-80 object-cover transition-opacity duration-500"
                  key={currentImageIndex}
                />
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                  {currentImageIndex + 1} / {galleryImages.length}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-4 rounded-xl shadow-lg">
                <p className="font-semibold">50+ Reviews</p>
                <p className="text-sm opacity-90">Excellent Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
