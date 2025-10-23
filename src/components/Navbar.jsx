import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FFD60A] shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo / Título */}
        <a
          href="#inicio"
          className="text-2xl md:text-3xl font-bold text-[#1E1E1E] hover:text-gray-700 transition"
        >
          MONDÉJAR TAXI, S.L.
        </a>

        {/* Menú escritorio */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          <a href="#servicios" className="text-[#1E1E1E] hover:text-gray-700 transition font-semibold">
            Servicios
          </a>
          <a href="#tarifas" className="text-[#1E1E1E] hover:text-gray-700 transition font-semibold">
            Tarifas
          </a>
          <a href="#vehiculo" className="text-[#1E1E1E] hover:text-gray-700 transition font-semibold">
            Vehículo
          </a>
          <a href="#contacto" className="text-[#1E1E1E] hover:text-gray-700 transition font-semibold">
            Contacto
          </a>
        </div>

        {/* Botón Llamar */}
        <a
          href="tel:+34690871080"
          className="flex items-center gap-2 bg-[#1E1E1E] text-white px-4 py-2 rounded-lg hover:opacity-80 transition font-semibold"
        >
          <FontAwesomeIcon icon={faPhoneAlt} /> Llamar
        </a>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden ml-4 text-2xl text-[#1E1E1E]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#FFD60A] flex flex-col items-center gap-4 py-4">
          <a href="#servicios" onClick={() => setMenuOpen(false)} className="text-[#1E1E1E] font-semibold hover:text-gray-700 transition">
            Servicios
          </a>
          <a href="#tarifas" onClick={() => setMenuOpen(false)} className="text-[#1E1E1E] font-semibold hover:text-gray-700 transition">
            Tarifas
          </a>
          <a href="#vehiculo" onClick={() => setMenuOpen(false)} className="text-[#1E1E1E] font-semibold hover:text-gray-700 transition">
            Vehículo
          </a>
          <a href="#contacto" onClick={() => setMenuOpen(false)} className="text-[#1E1E1E] font-semibold hover:text-gray-700 transition">
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
