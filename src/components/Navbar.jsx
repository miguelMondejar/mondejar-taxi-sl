import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { PHONE_LINK, COMPANY_NAME, MENU_ITEMS } from "../data/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      MENU_ITEMS.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            current = item.href;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  // Función para scroll manual sin añadir "#" a la URL
  const handleMenuItemClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    const section = document.querySelector(href);
    if (section) {
      const sectionTop = section.offsetTop - 100;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FFD60A] shadow-md z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo / Título */}
        <a
          href="#inicio"
          onClick={scrollToTop}
          className="text-2xl md:text-3xl font-bold text-[#1E1E1E] hover:opacity-80 transition cursor-pointer"
        >
          {COMPANY_NAME}
        </a>

        {/* Menú escritorio */}
        <div className="hidden md:flex flex-1 justify-center gap-8 mx-4">
          {MENU_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleMenuItemClick(e, item.href)}
                className={`relative font-semibold transition-all duration-300 py-1 group ${
                  isActive ? "text-[#1E1E1E]" : "text-[#1E1E1E]/70 hover:text-[#1E1E1E]"
                }`}
              >
                {item.label}
                {/* Línea animada inferior (indicador de sección activa) */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#1E1E1E] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            );
          })}
        </div>

        {/* Botones y hamburguesa (Agrupados para alineación) */}
        <div className="flex items-center gap-4">
          {/* Botón Llamar */}
          <a
            href={PHONE_LINK}
            className="flex items-center gap-2 bg-[#1E1E1E] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            <FontAwesomeIcon icon={faPhoneAlt} /> 
            {/* Ocultamos el texto 'Llamar' en móviles muy pequeños para que no pise el logo */}
            <span className="hidden sm:inline">Llamar</span>
          </a>

          {/* Botón hamburguesa móvil */}
          <button
            className="md:hidden text-2xl text-[#1E1E1E] w-8 h-8 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <FontAwesomeIcon
              icon={menuOpen ? faXmark : faBars}
              className={`transition-transform duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`}
            />
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil con animación suave */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#FFD60A] ${
          menuOpen ? "max-h-[400px] opacity-100 border-t border-[#1E1E1E]/10" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 py-4">
          {MENU_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleMenuItemClick(e, item.href)}
                className={`w-11/12 text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#1E1E1E]/10 text-[#1E1E1E]"
                    : "text-[#1E1E1E]/80 hover:bg-[#1E1E1E]/10 hover:text-[#1E1E1E]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}