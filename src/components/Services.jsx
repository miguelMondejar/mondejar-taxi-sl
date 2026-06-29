import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { SERVICES_DATA } from "../data/services";

export default function Services() {
  const services = SERVICES_DATA;

  return (
    <section className="py-20 px-6 bg-gray-50" id="servicios">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E1E1E]">
            Servicios de Taxi en Socuéllamos
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ofrecemos servicios de transporte profesional y seguro en Socuéllamos, Ciudad Real. 
            Desde traslados locales hasta viajes a aeropuertos nacionales. ¡Elige el servicio que necesitas!
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center"
            >
              <FontAwesomeIcon icon={s.icon} className="text-5xl text-yellow-500 mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              {s.details && (
                <ul className="text-gray-500 text-sm md:text-base list-disc list-inside">
                  {s.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-gray-600 text-center text-lg font-semibold mb-8">
            Compromiso de calidad en todos nuestros servicios
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-green-100 px-6 py-3 rounded-full border-2 border-green-300 shadow-md">
              <FontAwesomeIcon
                icon={faLeaf}
                className="text-2xl text-green-600"
              />
              <span className="text-gray-700 font-semibold">Etiqueta ambiental ECO</span>
            </div>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-3 rounded-full border-2 border-blue-300 shadow-md">
              <span className="text-2xl">✓</span>
              <span className="text-gray-700 font-semibold">Servicio 24 horas</span>
            </div>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-purple-100 px-6 py-3 rounded-full border-2 border-purple-300 shadow-md">
              <span className="text-2xl">🔒</span>
              <span className="text-gray-700 font-semibold">Reservas seguras</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
