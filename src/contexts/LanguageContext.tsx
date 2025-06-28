import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
  t: (key: string) => string;
}

interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', es: 'Inicio' },
  'nav.about': { en: 'About', es: 'Nosotros' },
  'nav.rooms': { en: 'Rooms', es: 'Habitaciones' },
  'nav.restaurant': { en: 'Restaurant', es: 'Restaurante' },
  'nav.location': { en: 'Location', es: 'Ubicación' },
  'nav.contact': { en: 'Contact', es: 'Contacto' },

  // Hero Section
  'hero.title': { en: 'Canoa Hostal', es: 'Canoa Hostal' },
  'hero.subtitle': { en: 'Familia del Mundo', es: 'Familia del Mundo' },
  'hero.description': { en: 'Backpackers Hostel & Restaurant in La Paz, Bolivia', es: 'Hostel & Restaurante para Mochileros en La Paz, Bolivia' },
  'hero.bookNow': { en: 'Book Now', es: 'Reservar Ahora' },
  'hero.learnMore': { en: 'Learn More', es: 'Conocer Más' },
  'hero.scrollDown': { en: 'Scroll Down', es: 'Desplazar Abajo' },

  // About Section
  'about.title': { en: 'Welcome to Our Family', es: 'Bienvenidos a Nuestra Familia' },
  'about.description': { en: 'At Canoa Hostal, we believe every traveler becomes part of our global family. Experience authentic Bolivian hospitality with stunning panoramic views of La Paz.', es: 'En Canoa Hostal, creemos que cada viajero se convierte en parte de nuestra familia global. Experimenta la auténtica hospitalidad boliviana con impresionantes vistas panorámicas de La Paz.' },
  'about.community.title': { en: 'Community Spirit', es: 'Espíritu Comunitario' },
  'about.community.desc': { en: 'Join our international family of travelers and make lifelong connections.', es: 'Únete a nuestra familia internacional de viajeros y haz conexiones para toda la vida.' },
  'about.culture.title': { en: 'Cultural Exchange', es: 'Intercambio Cultural' },
  'about.culture.desc': { en: 'Experience authentic Bolivian culture while sharing your own stories.', es: 'Experimenta la auténtica cultura boliviana mientras compartes tus propias historias.' },
  'about.hospitality.title': { en: 'Warm Hospitality', es: 'Hospitalidad Cálida' },
  'about.hospitality.desc': { en: 'Feel at home with our friendly staff and welcoming atmosphere.', es: 'Siéntete como en casa con nuestro personal amable y ambiente acogedor.' },
  'about.comfort.title': { en: 'Comfort & Relaxation', es: 'Comodidad y Relajación' },
  'about.comfort.desc': { en: 'Unwind in our cozy spaces with breathtaking city views.', es: 'Relájate en nuestros espacios acogedores con vistas impresionantes de la ciudad.' },
  'about.homeTitle': { en: 'Your Home Away From Home', es: 'Tu Hogar Lejos de Casa' },
  'about.homeDesc1': { en: 'Located in the heart of La Paz, Canoa Hostal offers more than just accommodation. We provide a complete cultural experience with our rooftop terrace offering 360-degree views of the city and surrounding mountains.', es: 'Ubicado en el corazón de La Paz, Canoa Hostal ofrece más que solo alojamiento. Brindamos una experiencia cultural completa con nuestra terraza en la azotea que ofrece vistas de 360 grados de la ciudad y las montañas circundantes.' },
  'about.homeDesc2': { en: 'Our restaurant serves delicious local and international cuisine, while our bar is the perfect place to meet fellow travelers and share stories of your adventures across Bolivia and beyond.', es: 'Nuestro restaurante sirve deliciosa cocina local e internacional, mientras que nuestro bar es el lugar perfecto para conocer a otros viajeros y compartir historias de tus aventuras por Bolivia y más allá.' },
  'about.feature1': { en: '24/7 Reception & Security', es: 'Recepción y Seguridad 24/7' },
  'about.feature2': { en: 'Free WiFi Throughout', es: 'WiFi Gratuito en Todo el Lugar' },
  'about.feature3': { en: 'Panoramic City Views', es: 'Vistas Panorámicas de la Ciudad' },
  'about.feature4': { en: 'Restaurant & Bar On-Site', es: 'Restaurante y Bar en el Lugar' },
  'about.reviews': { en: '50+ Reviews', es: '50+ Reseñas' },
  'about.rating': { en: 'Excellent Rating', es: 'Excelente Calificación' },

  // Accommodations Section
  'accommodations.title': { en: 'Our Accommodations', es: 'Nuestras Habitaciones' },
  'accommodations.description': { en: 'Choose from our variety of comfortable rooms, all featuring stunning views of La Paz', es: 'Elige entre nuestra variedad de habitaciones cómodas, todas con vistas impresionantes de La Paz' },
  'accommodations.shared.title': { en: 'Shared Dormitory', es: 'Dormitorio Compartido' },
  'accommodations.shared.desc': { en: 'Budget-friendly shared accommodation with lockers and shared bathrooms', es: 'Alojamiento compartido económico con casilleros y baños compartidos' },
  'accommodations.private.title': { en: 'Private Room', es: 'Habitación Privada' },
  'accommodations.private.desc': { en: 'Comfortable private room perfect for couples or solo travelers seeking privacy', es: 'Habitación privada cómoda perfecta para parejas o viajeros solos que buscan privacidad' },
  'accommodations.family.title': { en: 'Family Room', es: 'Habitación Familiar' },
  'accommodations.family.desc': { en: 'Spacious room ideal for families or groups traveling together', es: 'Habitación espaciosa ideal para familias o grupos que viajan juntos' },
  'accommodations.amenities': { en: 'Hostel Amenities', es: 'Comodidades del Hostel' },
  'accommodations.beds': { en: 'Comfortable Beds', es: 'Camas Cómodas' },
  'accommodations.beds.desc': { en: 'Quality mattresses and linens', es: 'Colchones y ropa de cama de calidad' },
  'accommodations.wifi': { en: 'Free WiFi', es: 'WiFi Gratuito' },
  'accommodations.wifi.desc': { en: 'High-speed internet access', es: 'Acceso a internet de alta velocidad' },
  'accommodations.common': { en: 'Common Areas', es: 'Áreas Comunes' },
  'accommodations.common.desc': { en: 'Social spaces to meet travelers', es: 'Espacios sociales para conocer viajeros' },
  'accommodations.tours': { en: 'Tour Assistance', es: 'Asistencia de Tours' },
  'accommodations.tours.desc': { en: 'Help planning your adventure', es: 'Ayuda planificando tu aventura' },

  // Restaurant Section
  'restaurant.title': { en: 'Restaurant & Bar', es: 'Restaurante y Bar' },
  'restaurant.description': { en: 'Savor delicious local and international cuisine while enjoying panoramic views of La Paz', es: 'Saborea deliciosa cocina local e internacional mientras disfrutas vistas panorámicas de La Paz' },
  'restaurant.tasteTitle': { en: 'Taste of Bolivia & Beyond', es: 'Sabor de Bolivia y Más Allá' },
  'restaurant.tasteDesc1': { en: 'Our restaurant combines traditional Bolivian flavors with international favorites, creating a menu that satisfies every palate. Enjoy your meals on our rooftop terrace with breathtaking 360-degree views of the city.', es: 'Nuestro restaurante combina sabores tradicionales bolivianos con favoritos internacionales, creando un menú que satisface todos los paladares. Disfruta tus comidas en nuestra terraza con vistas impresionantes de 360 grados de la ciudad.' },
  'restaurant.tasteDesc2': { en: 'From hearty breakfast to late-night snacks, we\'re here to fuel your adventures. Our bar serves local beers, cocktails, and the famous Bolivian wines. Challenge fellow travelers to a game of pool while enjoying drinks and sharing stories!', es: 'Desde desayunos abundantes hasta aperitivos nocturnos, estamos aquí para alimentar tus aventuras. Nuestro bar sirve cervezas locales, cócteles y los famosos vinos bolivianos. ¡Desafía a otros viajeros a un juego de billar mientras disfrutas bebidas y compartes historias!' },
  'restaurant.local': { en: 'Local Cuisine', es: 'Cocina Local' },
  'restaurant.local.desc': { en: 'Authentic Bolivian dishes', es: 'Platos bolivianos auténticos' },
  'restaurant.coffee': { en: 'Fresh Coffee', es: 'Café Fresco' },
  'restaurant.coffee.desc': { en: 'Bolivian highland coffee', es: 'Café de las tierras altas bolivianas' },
  'restaurant.drinks': { en: 'Local Drinks', es: 'Bebidas Locales' },
  'restaurant.drinks.desc': { en: 'Beers, wines & cocktails', es: 'Cervezas, vinos y cócteles' },
  'restaurant.menuTitle': { en: 'Menu Highlights', es: 'Destacados del Menú' },
  'restaurant.hours': { en: 'Open daily from 7:00 AM to 11:00 PM', es: 'Abierto diariamente de 7:00 AM a 11:00 PM' },
  'restaurant.viewMenu': { en: 'View Full Menu', es: 'Ver Menú Completo' },

  // Location Section
  'location.title': { en: 'Find Us in La Paz', es: 'Encuéntranos en La Paz' },
  'location.description': { en: 'Perfectly located in the heart of La Paz, we\'re close to major attractions and transportation', es: 'Perfectamente ubicado en el corazón de La Paz, estamos cerca de las principales atracciones y transporte' },
  'location.details': { en: 'Location Details', es: 'Detalles de Ubicación' },
  'location.address': { en: 'Address', es: 'Dirección' },
  'location.getting': { en: 'Getting Here', es: 'Cómo Llegar' },
  'location.getting.desc1': { en: '15 minutes from El Alto Airport by taxi', es: '15 minutos del Aeropuerto El Alto en taxi' },
  'location.getting.desc2': { en: 'Walking distance to main attractions', es: 'A distancia caminable de las principales atracciones' },
  'location.reception': { en: 'Reception Hours', es: 'Horarios de Recepción' },
  'location.reception.desc1': { en: '24/7 Reception Available', es: 'Recepción Disponible 24/7' },
  'location.reception.desc2': { en: 'Check-in: 12:00 PM | Check-out: 11:00 AM', es: 'Check-in: 12:00 PM | Check-out: 11:00 AM' },
  'location.contact': { en: 'Contact', es: 'Contacto' },
  'location.attractions': { en: 'Nearby Attractions', es: 'Atracciones Cercanas' },
  'location.transport': { en: 'Transportation Options', es: 'Opciones de Transporte' },
  'location.taxi': { en: 'Taxi from Airport', es: 'Taxi desde el Aeropuerto' },
  'location.taxi.desc': { en: 'Approximately 80-120 BOB from El Alto Airport', es: 'Aproximadamente 80-120 BOB desde el Aeropuerto El Alto' },
  'location.public': { en: 'Public Transport', es: 'Transporte Público' },
  'location.public.desc': { en: 'Minibuses and buses connect to all parts of the city', es: 'Minibuses y autobuses conectan con todas las partes de la ciudad' },
  'location.cable': { en: 'Cable Car', es: 'Teleférico' },
  'location.cable.desc': { en: 'Mi Teleférico system connects different zones', es: 'El sistema Mi Teleférico conecta diferentes zonas' },

  // Contact Section
  'contact.title': { en: 'Contact Us', es: 'Contáctanos' },
  'contact.description': { en: 'Ready to join our family? Get in touch with us for any questions or to make a reservation', es: '¿Listo para unirte a nuestra familia? Ponte en contacto con nosotros para cualquier pregunta o para hacer una reserva' },
  'contact.getInTouch': { en: 'Get In Touch', es: 'Ponte en Contacto' },
  'contact.phone': { en: 'Phone', es: 'Teléfono' },
  'contact.whatsapp': { en: 'WhatsApp', es: 'WhatsApp' },
  'contact.email': { en: 'Email', es: 'Correo' },
  'contact.address': { en: 'Address', es: 'Dirección' },
  'contact.hours': { en: 'Reception Hours', es: 'Horarios de Recepción' },
  'contact.hours.desc': { en: '24/7 Available', es: 'Disponible 24/7' },
  'contact.social': { en: 'Social Media', es: 'Redes Sociales' },
  'contact.guarantee': { en: 'Quick Response Guarantee', es: 'Garantía de Respuesta Rápida' },
  'contact.guarantee.desc': { en: 'We respond to all inquiries within 2 hours during business hours. For urgent matters, please call or WhatsApp us directly.', es: 'Respondemos a todas las consultas dentro de 2 horas durante el horario comercial. Para asuntos urgentes, llámanos o escríbenos por WhatsApp directamente.' },

  // Footer Section
  'footer.description': { en: 'Your family away from home in the heart of La Paz. Experience authentic Bolivian hospitality with breathtaking panoramic views.', es: 'Tu familia lejos de casa en el corazón de La Paz. Experimenta la auténtica hospitalidad boliviana con vistas panorámicas impresionantes.' },
  'footer.quickLinks': { en: 'Quick Links', es: 'Enlaces Rápidos' },
  'footer.services': { en: 'Our Services', es: 'Nuestros Servicios' },
  'footer.contactInfo': { en: 'Contact Info', es: 'Información de Contacto' },
  'footer.madeWith': { en: 'Made with', es: 'Hecho con' },
  'footer.forTravelers': { en: 'for travelers around the world', es: 'para viajeros de todo el mundo' },
  'footer.privacy': { en: 'Privacy Policy', es: 'Política de Privacidad' },
  'footer.terms': { en: 'Terms of Service', es: 'Términos de Servicio' },
  'footer.tagline': { en: '"Familia del Mundo" - Where every traveler becomes family', es: '"Familia del Mundo" - Donde cada viajero se convierte en familia' },

  // Common
  'common.night': { en: '/night', es: '/noche' },
  'common.minWalk': { en: 'min walk', es: 'min caminando' },
  'common.minBus': { en: 'min bus', es: 'min en bus' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};