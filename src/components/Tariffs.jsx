import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faPlane,
  faRoute,
  faCreditCard,
  faMoneyBillWave,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Tariffs() {
  const tariffs = [
    { icon: faCity, name: "Trayecto urbano", price: "Desde 5 €" },
    {
      icon: faRoute,
      name: "Socuéllamos – Tomelloso",
      price: "30 € ida y vuelta / 20 € solo ida",
    },
    {
      icon: faRoute,
      name: "Socuéllamos – Alcázar de San Juan",
      price: "40 € ida y vuelta / 30 € solo ida",
    },
    {
      icon: faPlane,
      name: "Aeropuertos Madrid / Albacete",
      price: "Consultar tarifas según destino",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50" id="tarifas" aria-labelledby="tarifas-title">
      <div className="max-w-6xl mx-auto text-center">
        <h2 id="tarifas-title" className="text-3xl md:text-4xl font-bold mb-12 text-[#1E1E1E]">
          Tarifas orientativas
        </h2>

        <p className="text-gray-500 text-sm mb-10">
          Todos los precios son orientativos y pueden variar según el
          servicio.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mb-10" role="list" aria-label="Listado de tarifas orientativas">
          {tariffs.map((t, i) => (
            <div
              key={i}
              role="listitem"
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center"
            >
              <FontAwesomeIcon
                icon={t.icon}
                className="text-4xl md:text-5xl text-yellow-500 mb-4"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {t.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{t.price}</p>
            </div>
          ))}
        </div>

        <div className="w-24 h-[3px] bg-yellow-500 mx-auto mb-10"></div>

        <div className="mt-10">
          <p className="text-gray-600 text-lg font-semibold mb-6">
            Métodos de pago aceptados
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-green-100 px-6 py-3 rounded-full border-2 border-green-300 shadow-md">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="text-2xl text-green-600"
              />
              <span className="text-gray-700 font-semibold">Efectivo</span>
            </div>

            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-3 rounded-full border-2 border-blue-300 shadow-md">
              <FontAwesomeIcon
                icon={faCreditCard}
                className="text-2xl text-blue-600"
              />
              <span className="text-gray-700 font-semibold">Tarjeta</span>
            </div>

            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-purple-100 px-6 py-3 rounded-full border-2 border-purple-300 shadow-md">
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="text-2xl text-purple-600"
              />
              <span className="text-gray-700 font-semibold">Bizum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
