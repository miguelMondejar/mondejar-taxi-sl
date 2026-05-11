// Configuración de OpenGraph y Meta tags para SEO
export const SEO_CONFIG = {
  siteName: "Mondéjar Taxi - Taxis en Socuéllamos",
  siteUrl: "https://mondejartaxisocuellamos.es",
  twitterHandle: "@mondejar_taxi",
  locale: "es_ES",
  language: "es",
  
  pages: {
    home: {
      title: "Taxis en Socuéllamos - Mondéjar Taxi Profesional 24h",
      description: "🚕 Servicio de taxis profesional en Socuéllamos, Ciudad Real. Traslados urbanos, interurbanos, aeropuertos y servicios especiales. Disponible 24 horas. Rápido, seguro y confiable. ¡Reserva tu taxi ahora!",
      keywords: "taxis Socuéllamos, taxi Socuéllamos, taxi Ciudad Real, transporte Socuéllamos, taxi 24 horas, traslados urbanos, traslados aeropuerto, servicio taxi profesional",
      canonical: "https://mondejartaxisocuellamos.es/",
      ogImage: "https://mondejartaxisocuellamos.es/logo_mondejar_taxi.png",
      ogImageAlt: "Logo de Mondéjar Taxi - Servicio de taxis en Socuéllamos",
      ogImageWidth: "1200",
      ogImageHeight: "630",
    }
  },

  organization: {
    name: "Mondéjar Taxi S.L.",
    legalName: "Mondéjar Taxi S.L.",
    logo: "https://mondejartaxisocuellamos.es/logo_mondejar_taxi.png",
    phone: "+34-690-871-080",
    email: "mondejartaxisl@gmail.com",
    foundingDate: "2023",
    address: {
      streetAddress: "Socuéllamos",
      addressLocality: "Socuéllamos",
      addressRegion: "Ciudad Real",
      postalCode: "13640",
      addressCountry: "ES"
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61574288680782",
      "https://www.instagram.com/socuellamosmondejartaxisl",
      "https://www.tiktok.com/@mondejar.taxi"
    ]
  },

  localBusiness: {
    priceRange: "€€",
    serviceAreas: [
      "Socuéllamos",
      "Tomelloso",
      "Alcázar de San Juan",
      "Ciudad Real",
      "Castilla-La Mancha",
      "Puertollano",
      "Manzanares"
    ],
    openingHours: "24/7",
    operatingDays: {
      monday: "00:00-23:59",
      tuesday: "00:00-23:59",
      wednesday: "00:00-23:59",
      thursday: "00:00-23:59",
      friday: "00:00-23:59",
      saturday: "00:00-23:59",
      sunday: "00:00-23:59"
    },
    geo: {
      latitude: "39.2947",
      longitude: "-2.7933"
    }
  }
};
