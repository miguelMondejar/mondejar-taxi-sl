// Configuración de OpenGraph y Meta tags para SEO
export const SEO_CONFIG = {
  siteName: "Mondéjar Taxi - Taxis en Socuéllamos",
  siteUrl: "https://mondejartaxisocuellamos.es",
  twitterHandle: "@mondejar_taxi",
  locale: "es_ES",
  
  pages: {
    home: {
      title: "Taxis en Socuéllamos - Mondéjar Taxi Profesional 24h",
      description: "Servicio de taxis profesional en Socuéllamos, Ciudad Real. Traslados urbanos, interurbanos y a aeropuertos. Disponible 24 horas. ¡Reserva tu taxi ahora!",
      keywords: "taxis Socuéllamos, taxi Socuéllamos, taxi Ciudad Real, transporte Socuéllamos, taxi 24 horas",
      canonical: "https://mondejartaxisocuellamos.es/",
      ogImage: "https://mondejartaxisocuellamos.es/logo_mondejar_taxi.png",
    }
  },

  organization: {
    name: "Mondéjar Taxi S.L.",
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
      "Castilla-La Mancha"
    ],
    openingHours: "24/7",
    geo: {
      latitude: "39.2947",
      longitude: "-2.7933"
    }
  }
};
