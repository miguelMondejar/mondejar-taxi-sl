import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center" id="contacto" aria-labelledby="contacto-title">
      <h2 id="contacto-title" className="text-3xl md:text-4xl font-bold mb-8">Contacto</h2>
      <p className="mb-12 text-gray-600 text-lg md:text-xl">
        Reserva tu viaje o pide información sin compromiso.
      </p>

      <div className="flex flex-col items-center gap-6">
        {/* Phone */}
        <a
          href="tel:+34690871080"
          className="flex items-center gap-3 text-yellow-500 text-lg md:text-xl font-semibold hover:text-yellow-600 transition"
          aria-label="Llamar a Mondéjar Taxi al 690 87 10 80"
        >
          <FontAwesomeIcon icon={faPhoneAlt} /> +34 690 87 10 80
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/34690871080"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-green-500 text-lg md:text-xl font-semibold hover:text-green-600 transition"
          aria-label="Abrir conversación de WhatsApp con Mondéjar Taxi"
        >
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </a>

        {/* RRSS */}
        <div className="flex gap-6 mt-4 text-3xl md:text-4xl justify-center">
          <a
            href="https://www.facebook.com/mondejartaxisl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
            aria-label="Mondéjar Taxi en Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/mondejartaxisl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition"
            aria-label="Mondéjar Taxi en Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.tiktok.com/@mondejartaxisl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-800 transition"
            aria-label="Mondéjar Taxi en TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>
    </section>
  );
}
