import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faPlaneDeparture, faCalendarCheck, faCarSide, faHeartPulse, faPaw, faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const services = [
    {
      icon: faRoute,
      title: "Traslados locales",
      desc: "Servicio urbano y trayectos entre poblaciones cercanas.",
      details: [
        "Socuéllamos–Tomelloso, Socuéllamos–Alcázar de San Juan, etc."
      ],
    },
    {
      icon: faPlaneDeparture,
      title: "Aeropuertos",
      desc: "Traslados a aeropuertos de Madrid, Albacete, Ciudad Real y más.",
      details: ["Se realizan servicios de ida y vuelta o solo ida según necesidad."],
    },
    {
      icon: faCalendarCheck,
      title: "Reservas concertadas",
      desc: "Viajes planificados a tu medida.",
      details: ["Organizamos tu traslado con antelación para tu comodidad."],
    },
    {
      icon: faCarSide,
      title: "Servicios especiales",
      desc: "Eventos, bodas y otros servicios personalizados.",
      details: ["Consúltanos para más información y organización."],
    },
    {
      icon: faHeartPulse,
      title: "Hospitales y mutuas",
      desc: "Traslados con acompañamiento a centros sanitarios."
    },
  ];

  return (
    <section className="py-20 px-6 bg-white-50" id="servicios">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1E1E1E]">Servicios</h2>
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

        <div className="w-24 h-[3px] bg-yellow-500 mx-auto mb-10"></div>

        <div className="mt-10">
          <p className="text-gray-600 text-lg font-semibold mb-6">
            Nuestro compromiso adicional:
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-green-100 px-6 py-3 rounded-full border-2 border-green-300 shadow-md">
              <FontAwesomeIcon
                icon={faLeaf}
                className="text-2xl text-green-600"
              />
              <span className="text-gray-700 font-semibold">Etiqueta ambiental ECO</span>
            </div>

            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-3 rounded-full border-2 border-orange-300 shadow-md">
              <FontAwesomeIcon
                icon={faPaw}
                className="text-2xl text-orange-600"
              />
              <span className="text-gray-700 font-semibold">Se aceptan mascotas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
