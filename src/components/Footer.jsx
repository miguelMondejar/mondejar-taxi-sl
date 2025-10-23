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

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Logo */}
        <div className="flex items-center gap-5">
          <img
            src={logo}
            alt="Mondéjar Taxi S.L."
            className="w-28 md:w-32 drop-shadow-lg"
          />
          <div className="text-left">
            <p className="font-bold text-lg text-white">Mondéjar Taxi S.L.</p>
            <p>Socuéllamos (Ciudad Real)</p>
            <a
              href="tel:+34690871080"
              className="flex items-center gap-2 text-yellow-500 hover:text-yellow-600 transition mt-2"
            >
              <FontAwesomeIcon icon={faPhoneAlt} />
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>+34 690 87 10 80</span>
            </a>
          </div>
        </div>

        {/* RRSS */}
        <div className="flex gap-6 text-2xl md:text-3xl">
          <a
            href="https://www.facebook.com/mondejartaxisl"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/mondejartaxisl"
            target="_blank"
            className="text-pink-500 hover:text-pink-700 transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.tiktok.com/mondejartaxisl"
            target="_blank"
            className="text-gray-100 hover:text-gray-300 transition"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="mb-12 text-white-600 text-lg md:text-xl">
          <a
            href="https://g.page/r/XXXXXX/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn"
          >
            <span>Déjanos tu reseña en Google</span>
            <span aria-hidden>⭐⭐⭐⭐⭐</span>
          </a>
        </p>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Mondéjar Taxi, S.L. – Todos los derechos reservados.
      </div>
    </footer>
  );
}
