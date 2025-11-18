import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo_mondejar_taxi.png";
import { COMPANY_NAME, LOCATION, PHONE_LINK, PHONE_FORMATTED, SOCIAL_LINKS } from "../data/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Logo */}
        <div className="flex items-center gap-5">
          <img
            src={logo}
            alt={COMPANY_NAME}
            className="w-28 md:w-32 drop-shadow-lg"
          />
          <div className="text-left">
            <p className="font-bold text-lg text-white">{COMPANY_NAME}</p>
            <p>{LOCATION}</p>
            <a
              href={PHONE_LINK}
              className="flex items-center gap-2 text-yellow-500 hover:text-yellow-600 transition mt-2"
            >
              <FontAwesomeIcon icon={faPhoneAlt} />
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>{PHONE_FORMATTED}</span>
            </a>
          </div>
        </div>

        {/* RRSS */}
        <div className="flex gap-6 text-2xl md:text-3xl">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-gray-300 transition"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="mb-12 text-white-600 text-lg md:text-xl">
          <a
            href={SOCIAL_LINKS.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 hover:text-yellow-400 transition"
          >
            <span>Déjanos tu reseña en Google</span>
            <span aria-hidden>⭐⭐⭐⭐⭐</span>
          </a>
        </p>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} {COMPANY_NAME} – Todos los derechos reservados.
      </div>
    </footer>
  );
}
