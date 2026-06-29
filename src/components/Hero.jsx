import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { PHONE_LINK, HERO_TITLE, HERO_SUBTITLE, LICENSE, WHATSAPP_URL } from "../data/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-[90vh] text-white text-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(/socuellamos.avif)` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-4 py-12">

        <img
          src="/logo_mondejar_taxi.png"
          alt="Mondéjar Taxi - Taxis profesionales en Socuéllamos"
          className="w-32 sm:w-40 md:w-56 mb-2 md:mb-3 drop-shadow-lg"
        />

        <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-3 md:mb-6">
          {LICENSE}
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4 leading-tight">
          {HERO_TITLE}
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-5 md:mb-10 text-gray-200">
          {HERO_SUBTITLE}
        </p>

        <p className="text-sm md:text-lg mb-5 md:mb-8 text-yellow-300 font-semibold">
          ✓ Servicio 24 horas • Pago con tarjeta, efectivo y Bizum
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={PHONE_LINK}
            className="bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transition flex items-center gap-3 text-lg shadow-lg"
          >
            <FontAwesomeIcon icon={faPhoneAlt} /> Llamar
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition flex items-center gap-3 text-lg shadow-lg"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
