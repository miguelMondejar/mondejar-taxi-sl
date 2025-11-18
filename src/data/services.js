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
    title: "Traslados locales",
    desc: "Servicio urbano y trayectos entre poblaciones cercanas.",
    details: [
      "Socuéllamos–Tomelloso, Socuéllamos–Alcázar de San Juan, etc."
    ],
  },
  {
    icon: faPlaneDeparture,
    title: "Aeropuertos",
    desc: "Traslados a aeropuertos de Madrid, Albacete, Ciudad Real y más.",
    details: ["Se realizan servicios de ida y vuelta o solo ida según necesidad."],
  },
  {
    icon: faCalendarCheck,
    title: "Reservas concertadas",
    desc: "Viajes planificados a tu medida.",
    details: ["Organizamos tu traslado con antelación para tu comodidad."],
  },
  {
    icon: faCarSide,
    title: "Servicios especiales",
    desc: "Eventos, bodas y otros servicios personalizados.",
    details: ["Consúltanos para más información y organización."],
  },
  {
    icon: faHeartPulse,
    title: "Hospitales y mutuas",
    desc: "Traslados con acompañamiento a centros sanitarios."
  },
];
