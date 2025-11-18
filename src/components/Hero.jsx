import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../assets/socuellamos.avif";
import logo from "../assets/logo_mondejar_taxi.png";
import { PHONE_LINK, HERO_TITLE, HERO_SUBTITLE } from "../data/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="h-[90vh] text-white text-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">

        <img
          src={logo}
          alt="Taxi Mondéjar S.L."
          className="w-40 md:w-56 mb-6 drop-shadow-lg"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {HERO_TITLE}
        </h1>

        <p className="text-lg md:text-xl mb-8">
          {HERO_SUBTITLE}
        </p>

        <a
          href={PHONE_LINK}
          className="bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transition flex items-center gap-3 text-lg shadow-lg"
        >
          <FontAwesomeIcon icon={faPhoneAlt} /> Llamar
        </a>
      </div>
    </section>
  );
}