import {
  faSnowflake,
  faSuitcase,
  faCreditCard,
  faUserFriends,
  faCogs,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { CAR_MOTOR_POWER } from "./constants";

export const CAR_FEATURES = [
  {
    icon: faSnowflake,
    text: "Aire acondicionado — Máxima comodidad"
  },
  {
    icon: faSuitcase,
    text: "Amplio maletero — Espacio para tu equipaje"
  },
  {
    icon: faCreditCard,
    text: "Pago con efectivo, tarjeta o Bizum"
  },
  {
    icon: faUserFriends,
    text: "Hasta 4 pasajeros — Viaja con quien quieras"
  },
  {
    icon: faCogs,
    text: `Motor eficiente — ${CAR_MOTOR_POWER}, silencioso y potente`
  },
  {
    icon: faLeaf,
    text: "Etiqueta ambiental ECO — Cuidamos el planeta"
  },
];
