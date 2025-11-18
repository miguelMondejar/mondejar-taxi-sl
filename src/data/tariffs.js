import {
  faCity,
  faPlane,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";

export const TARIFFS_DATA = [
  { 
    icon: faCity, 
    name: "Trayecto urbano", 
    price: "Desde 5 €" 
    },
  {
    icon: faRoute,
    name: "Socuéllamos – Tomelloso",
    price: "30 € ida y vuelta / 20 € solo ida",
  },
  {
    icon: faRoute,
    name: "Socuéllamos – Alcázar de San Juan",
    price: "40 € ida y vuelta / 30 € solo ida",
  },
  {
    icon: faPlane,
    name: "Aeropuertos Madrid / Albacete",
    price: "Consultar tarifas según destino",
  },
];
