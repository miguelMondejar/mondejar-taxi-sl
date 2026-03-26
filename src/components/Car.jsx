import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { CAR_MODEL, AUTOPLAY_INTERVAL } from "../data/constants";
import { CAR_FEATURES } from "../data/car";

export default function Car() {
  const features = CAR_FEATURES;

  // galería de imágenes
  const imageModules = import.meta.glob("../assets/seat-leon*.{jpg,jpeg,webp}", { eager: true });
  const images = Object.values(imageModules).map((m) => m.default);
  const [index, setIndex] = useState(0);

  // autoplay + pausa on hover
  const autoplayRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    // autoplay: cambia imagen cada autoplayInterval si no está en pausa
    autoplayRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setIndex((i) => (i + 1) % images.length);
      }
    }, AUTOPLAY_INTERVAL);

    // teclado: izquierda/derecha para navegar
    const onKey = (e) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearInterval(autoplayRef.current);
      window.removeEventListener("keydown", onKey);
    };
  }, []); // eslint-disable-line

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const goTo = (i) => setIndex(i);

  return (
    <section className="py-20 px-6 bg-white-50" id="vehiculo" aria-labelledby="vehiculo-title">
      <div className="max-w-6xl mx-auto text-center">
        <h2 id="vehiculo-title" className="text-3xl md:text-4xl font-bold mb-12 text-[#1E1E1E]">
          Vehículo
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2">
            {/* Galería principal */}
            <div
              className="relative rounded-2xl shadow-lg overflow-hidden"
              onMouseEnter={() => (isPausedRef.current = true)}
              onMouseLeave={() => (isPausedRef.current = false)}
              role="region"
              aria-roledescription="Galería de imágenes del vehículo"
              aria-label={`Imagen ${index + 1} de ${images.length}`}
            >
              <img
                src={images[index]}
                alt={`SEAT León FR - vista ${index + 1} de ${images.length}`}
                className="object-cover w-full h-[350px] lg:h-[500px] transition-all duration-300"
              />

              {/* Controles Prev/Next */}
              <button
                type="button"
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            {/* Miniaturas */}
            <div className="mt-4 flex gap-1 justify-center" role="tablist" aria-label="Miniaturas del vehículo">
              {images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Ver imagen ${i + 1}`}
                  aria-selected={i === index}
                  role="tab"
                  className={`w-20 h-12 overflow-hidden rounded-md border-2 focus:outline-none transition-all hover:scale-110 ${
                    i === index ? "border-yellow-500 scale-110" : "border-gray-300 hover:border-yellow-300"
                  }`}
                >
                  <img src={src} alt={`Miniatura del vehículo ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-6 text-[#1E1E1E]">
              {CAR_MODEL} — Comodidad, estilo y seguridad
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Disfruta de un viaje confortable y seguro a bordo de nuestro {CAR_MODEL}.
              Un vehículo moderno, amplio y con excelentes
              prestaciones para trayectos urbanos o interurbanos.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <FontAwesomeIcon
                    icon={f.icon}
                    className="text-yellow-500 text-2xl"
                  />
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Asientos para bebés y niños */}
        <div className="mt-16 pt-12 border-t-2 border-gray-200">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2 text-left">
              <h3 className="text-2xl font-semibold mb-6 text-[#1E1E1E]">
                👶 Asientos para bebés y niños
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Contamos con asientos de seguridad para bebés y niños disponibles bajo <strong>previo aviso</strong>.
                Si necesitas este servicio, por favor avísanos con anticipación al reservar tu viaje y nos aseguraremos de tener el equipo adecuado según la edad de tu hijo.
              </p>
              <div className="bg-blue-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                <p className="text-gray-700 font-semibold mb-2">Disponibles:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Asiento infantil grande:</strong> Para bebés (hasta 75 cm)</li>
                  <li><strong>Asiento infantil pequeño:</strong> Para niños mayores (75-150 cm)</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  📞 Contacta con nosotros para confirmar disponibilidad
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <img
                    src={new URL("../assets/asiento-infantil-pequeño.png", import.meta.url).href}
                    alt="Asiento infantil pequeño para bebés"
                    className="w-full h-96 object-cover rounded-lg shadow-lg mb-3"
                    loading="lazy"
                  />
                  <h4 className="font-semibold text-gray-800">Asiento Pequeño</h4>
                  <p className="text-sm text-gray-600">hasta 75 cm</p>
                </div>
                <div className="text-center">
                  <img
                    src={new URL("../assets/asiento-infantil-grande.png", import.meta.url).href}
                    alt="Asiento infantil grande para niños"
                    className="w-full h-96 object-cover rounded-lg shadow-lg mb-3"
                    loading="lazy"
                  />
                  <h4 className="font-semibold text-gray-800">Asiento Grande</h4>
                  <p className="text-sm text-gray-600">75-150 cm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
