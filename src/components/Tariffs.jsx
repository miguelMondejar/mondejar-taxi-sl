import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMoneyBillWave,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { SERVICE_TYPES } from "../data/tariffs";

export default function Tariffs() {
  return (
    <section className="py-20 px-6 bg-gray-50" id="tarifas" aria-labelledby="tarifas-title">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2
          id="tarifas-title"
          className="text-3xl md:text-4xl font-bold mb-6 text-[#1E1E1E]"
        >
          Tarifas personalizadas
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Cada viaje es diferente. Calculamos la tarifa según distancia, horario y necesidades del cliente.
          Siempre con transparencia y sin sorpresas.
        </p>

        {/* TARJETAS DE SERVICIOS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {SERVICE_TYPES.map((s, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center"
            >
              <FontAwesomeIcon
                icon={s.icon}
                className="text-4xl text-yellow-500 mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{s.name}</h3>
              <p className="text-gray-600 mb-5">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* SEPARADOR */}
        <div className="w-24 h-[3px] bg-yellow-500 mx-auto mt-16 mb-10"></div>

        {/* MÉTODOS DE PAGO */}
        <h3 className="text-xl text-[#1E1E1E] font-semibold mb-8">
          Métodos de pago aceptados
        </h3>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-3 bg-green-100 px-6 py-3 rounded-full border border-green-300 shadow-sm">
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl text-green-600" />
            <span className="text-gray-700 font-medium">Efectivo</span>
          </div>

          <div className="flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-full border border-blue-300 shadow-sm">
            <FontAwesomeIcon icon={faCreditCard} className="text-2xl text-blue-600" />
            <span className="text-gray-700 font-medium">Tarjeta</span>
          </div>

          <div className="flex items-center gap-3 bg-purple-100 px-6 py-3 rounded-full border border-purple-300 shadow-sm">
            <FontAwesomeIcon icon={faMobileAlt} className="text-2xl text-purple-600" />
            <span className="text-gray-700 font-medium">Bizum</span>
          </div>
        </div>
      </div>
    </section>
  );
}
