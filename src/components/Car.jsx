import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowflake,
  faSuitcase,
  faCreditCard,
  faUserFriends,
  faCogs,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import carExterior from "../assets/seat-leon-1.jpg";
import carInterior from "../assets/seat-leon-inside.jpg";

export default function Car() {
  const features = [
    {
      icon: faSnowflake,
      text: "Aire acondicionado"
    },
    {
      icon: faSuitcase,
      text: "Amplio maletero"
    },
    {
      icon: faCreditCard,
      text: "Pago con efectivo, tarjeta o Bizum"
    },
    {
      icon: faUserFriends,
      text: "Hasta 4 pasajeros"
    },
    {
      icon: faCogs,
      text: "Motor eficiente y silencioso"
    },
  ];

  // galería de imágenes
  const images = [carExterior, carInterior];
  const [index, setIndex] = useState(0);

  // autoplay + pausa on hover
  const autoplayInterval = 4000;
  const autoplayRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    // autoplay: cambia imagen cada autoplayInterval si no está en pausa
    autoplayRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setIndex((i) => (i + 1) % images.length);
      }
    }, autoplayInterval);

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
                alt={`Vehículo - imagen ${index + 1}`}
                className="object-cover w-full h-[350px] lg:h-[400px] transition-all duration-300"
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
            <div className="mt-4 flex gap-3 justify-center" role="tablist" aria-label="Miniaturas del vehículo">
              {images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Ver imagen ${i + 1}`}
                  aria-selected={i === index}
                  role="tab"
                  className={`w-20 h-12 overflow-hidden rounded-md border-2 focus:outline-none ${
                    i === index ? "border-yellow-500" : "border-transparent"
                  }`}
                >
                  <img src={src} alt={`miniatura ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-6 text-[#1E1E1E]">
              SEAT León ST 1.5 FR Special Edition — Comodidad, estilo y seguridad
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Disfruta de un viaje confortable y seguro a bordo de nuestro SEAT León ST 1.5 FR.
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
      </div>
    </section>
  );
}
