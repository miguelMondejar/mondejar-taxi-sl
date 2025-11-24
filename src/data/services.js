import {
  faRoute,
  faPlaneDeparture,
  faCalendarCheck,
  faCarSide,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";

export const SERVICES_DATA = [
  {
    icon: faRoute,
    title: "Traslados nacionales",
    desc: "Servicio urbano e interurbano en territorio nacional.",
    details: [
      "Desplazamientos locales dentro de Socuéllamos.",
      "Desplazamientos a ciudades y otras localidades.",
      "Ejemplos frecuentes: Tomelloso, Alcázar de San Juan, Madrid, Valencia, Alicante..."
    ],
  },
  {
    icon: faPlaneDeparture,
    title: "Traslados a aeropuertos",
    desc: "Servicio de taxi a los principales aeropuertos de España.",
    details: [
      "Aeropuerto Adolfo Suárez Madrid-Barajas",
      "Aeropuerto de Valencia",
      "Aeropuerto de Alicante-Elche",
      "Aeropuerto de Sevilla",
      "Aeropuerto de Málaga y otros"
    ],
  },
  {
    icon: faCalendarCheck,
    title: "Reservas concertadas",
    desc: "Organiza tu viaje con antelación de forma cómoda y segura.",
    details: [
      "Ideal para viajes de trabajo, citas médicas, trámites y eventos.",
      "Confirmación inmediata y puntualidad garantizada."
    ],
  },
  {
    icon: faCarSide,
    title: "Servicios especiales",
    desc: "Traslados personalizados adaptados a tus necesidades.",
    details: [
      "Eventos, bodas, celebraciones y transporte de invitados.",
      "Servicios para empresas y desplazamientos continuados."
    ],
  },
  {
    icon: faHeartPulse,
    title: "Centros médicos",
    desc: "Traslados a centros médicos en territorio nacional.",
    details: [
      "Hospitales, clínicas, mutuas, centros de rehabilitación, etc",
    ],
  }
];
