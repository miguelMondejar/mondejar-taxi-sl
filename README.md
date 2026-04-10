# 🚕 Mondéjar Taxi S.L.

**Sitio web oficial de Mondéjar Taxi S.L.** - El servicio de taxi de confianza en **Socuéllamos (Ciudad Real)**.

Sitio web diseñado y desarrollado por **Miguel Mondéjar González** para ofrecer a los clientes toda la información necesaria sobre tarifas, contacto, servicios y formas de pago, con un diseño moderno, responsive y optimizado para dispositivos móviles.

**Licencia municipal nº 2** | Disponible 24/7 | CIF: B24955114

## 🌟 Características Principales

### Para Clientes
- 📞 **Llamada Directa**: Botón de llamada prominente en hero y navbar
- 💬 **WhatsApp**: Contacto rápido por WhatsApp directamente
- 🗺️ **Ubicación**: Socuéllamos, Ciudad Real
- 💳 **Métodos de Pago**: Efectivo, Tarjeta, Bizum
- ♿ **Accesibilidad**: WCAG compliant, aria-labels, semántica HTML

### Secciones del Sitio
- **Hero Section**: Imagen de fondo, CTA prominente
- **Servicios**: Trayectos urbanos, interurbanos, aeropuertos
- **Tarifas**: Información de precios orientativos
- **Vehículo**: Galería carrusel del SEAT León con especificaciones
- **Asientos Infantiles**: Disponibles bajo previo aviso
- **Contacto**: Teléfono, WhatsApp, redes sociales
- **Footer**: Links, información legal, redes sociales

### Características Técnicas
- ✨ **Diseño Responsivo**: Mobile-first, adaptado a todos los dispositivos
- 🎨 **Paleta Profesional**: Amarillo (#FFD60A) + Negro (#1E1E1E)
- ⚡ **Performance Optimizado**: Imágenes optimizadas, lazy loading
- 🔍 **SEO Optimizado**: Meta tags, Open Graph, JSON-LD Schema
- 🎬 **Transiciones Suaves**: Hover effects, animations
- 📱 **Mobile Friendly**: Diseño táctil, menú adaptativo

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx         # Navegación principal con logo y CTA
│   ├── Hero.jsx           # Sección hero con imagen de fondo
│   ├── Services.jsx       # Tipos de servicios disponibles
│   ├── Tariffs.jsx        # Tarifas y métodos de pago
│   ├── Car.jsx            # Galería del vehículo (carrusel)
│   ├── Contact.jsx        # Información de contacto y RRSS
│   └── Footer.jsx         # Pie de página
├── data/
│   ├── constants.js       # Datos centralizados (teléfono, URLs, etc)
│   ├── services.js        # Información de servicios
│   ├── tariffs.js         # Tarifas y especificaciones
│   └── car.js             # Especificaciones del vehículo
├── assets/
│   ├── seat-leon-*.jpeg   # Imágenes del vehículo
│   ├── asiento-*.png      # Imágenes de asientos infantiles
│   └── socuellamos.avif   # Imagen hero
├── App.jsx                # Componente principal
├── App.css                # Estilos globales
├── index.css              # Tailwind + animaciones
└── main.jsx               # Punto de entrada

public/
├── img/                   # Imágenes optimizadas
└── robots.txt             # SEO

dist/                      # Build de producción
```

## 🚀 Inicio Rápido

### Requisitos
- Node.js >= 16
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/miguelMondejar/taxi-mondejar.git
cd taxi-mondejar

# Instalar dependencias
npm install

# Desarrollo (http://localhost:5173)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Lint
npm run lint
```

## 📦 Dependencias Principales

```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "@fortawesome/react-fontawesome": "^3.1.0",
  "@fortawesome/free-solid-svg-icons": "^7.1.0",
  "@fortawesome/free-brands-svg-icons": "^7.1.0"
}
```

## 🎯 Características Destacadas

### Sistema de Contacto Integrado
- **Teléfono directo**: +34 690 87 10 80
- **WhatsApp**: Link directo de chat
- **Redes sociales**: Facebook, Instagram, TikTok
- **Email**: Disponible en footer

### Galería de Vehículo Interactiva
- Carrusel automático de imágenes
- Navegación con flechas y miniaturas
- Controles con teclado (←/→)
- Pausa al pasar el mouse
- Lazy loading de imágenes

### Información del Vehículo
- **Modelo**: SEAT León ST 1.5 FR Special Edition
- **Potencia**: 150 CV
- **Equipamiento**: Aire acondicionado, asientos de cuero, etc.
- **Asientos infantiles**: Disponibles bajo previo aviso

### SEO Optimizado
- Meta tags descriptivos
- Open Graph para redes sociales
- Twitter Card
- JSON-LD Schema (TaxiService)
- Canonical URL
- Robots.txt configurado

## 🎨 Paleta de Colores

- **Primario**: `#FFD60A` (Amarillo taxi - navbar, CTAs)
- **Secundario**: `#1E1E1E` (Negro profesional - fondo, texto)
- **Acentos**: Gris para textos secundarios
- **Hover**: Transiciones suaves entre estados

## 📈 Información de Contacto

| Canal | Contacto | Disponibilidad |
|-------|----------|----------------|
| **Teléfono** | +34 690 87 10 80 | 24/7 |
| **WhatsApp** | +34 690 87 10 80 | 24/7 |
| **Ubicación** | Socuéllamos, Ciudad Real | Servicio local |
| **Licencia** | Municipal nº 2 | Regulado |

## 🏆 Servicios Ofertados

1. **Trayectos urbanos** - Dentro de Socuéllamos
2. **Trayectos interurbanos** - A otras ciudades (Ciudad Real, Toledo, etc)
3. **Traslados a aeropuertos** - Conexión con aeropuertos cercanos
4. **Servicio 24 horas** - Disponibilidad constante
5. **Asientos infantiles** - Bajo previo aviso

## ♿ Accesibilidad

- ✅ Semántica HTML5 correcta
- ✅ aria-labels en botones
- ✅ Roles ARIA apropiados
- ✅ Contraste de color WCAG compliant
- ✅ Navegación por teclado
- ✅ Focus indicators visibles

## 📝 Changelog

### v1.0.0 (2025-11-18)
- ✨ Sitio web oficial Mondéjar Taxi S.L.
- 📱 Diseño responsive mobile-first
- 🎨 Branding profesional (amarillo + negro)
- 📞 Integración teléfono y WhatsApp
- 💳 Métodos de pago: efectivo, tarjeta, Bizum
- 🚗 Galería de vehículo con carrusel
- 👶 Información asientos infantiles
- 🔍 SEO optimizado
- ♿ WCAG accesibilidad
- ⚡ Performance optimizado

## 📋 Información Legal

- **Empresa**: Mondéjar Taxi S.L.
- **CIF**: B24955114
- **Licencia**: Municipal nº 2, Socuéllamos (Ciudad Real)
- **Teléfono**: +34 690 87 10 80

**Desarrollado por**: Miguel Mondéjar González

## Tecnologías utilizadas

| Tecnología | Descripción | Versión |
|-------------|------------|---------|
| [React](https://react.dev/) | Librería UI para interfaces interactivas | ^19.1.1 |
| [Vite](https://vitejs.dev/) | Bundler ultra-rápido y dev server | ^7.1.7 |
| [Tailwind CSS](https://tailwindcss.com/) | Framework CSS utilitario para diseño | ^3.4.13 |
| [Font Awesome](https://fontawesome.com/) | Librería de iconos vectoriales | ^7.x |
| [PostCSS](https://postcss.org/) | Procesador CSS con plugins | ^8.5.6 |
| [Autoprefixer](https://autoprefixer.github.io/) | Plugin para prefijos CSS automáticos | ^10.4.21 |

## 📞 Contacto y Redes Sociales

- **Teléfono**: +34 690 87 10 80
- **WhatsApp**: [Chat directo](https://wa.me/34690871080)
- **Facebook**: [Mondéjar Taxi S.L.](https://www.facebook.com/mondejartaxisl)
- **Instagram**: [@mondejartaxisl](https://www.instagram.com/mondejartaxisl)
- **TikTok**: [@mondejartaxisl](https://www.tiktok.com/@mondejartaxisl)

## 📄 Licencia

**Sitio web desarrollado para Mondéjar Taxi S.L.** (CIF: B24955114)

El código puede ser reutilizado con fines educativos o personales, pero **no para uso comercial sin permiso explícito de Mondéjar Taxi S.L.**

**Sitio web**: https://mondejartaxisl.com

