import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { PHONE_LINK, COMPANY_NAME, MENU_ITEMS } from "../data/constants";

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
          {COMPANY_NAME}
        </a>

        {/* Menú escritorio */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {MENU_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="text-[#1E1E1E] hover:text-gray-700 transition font-semibold">
              {item.label}
            </a>
          ))}
        </div>

        {/* Botón Llamar */}
        <a
          href={PHONE_LINK}
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
          {MENU_ITEMS.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              onClick={() => setMenuOpen(false)} 
              className="text-[#1E1E1E] font-semibold hover:text-gray-700 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
