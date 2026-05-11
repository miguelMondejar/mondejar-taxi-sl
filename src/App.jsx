import { useSEO } from "./hooks/useSEO";
import { SEO_CONFIG } from "./data/seoConfig";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tariffs from "./components/Tariffs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Car from "./components/Car";

function App() {
  // Implementar SEO
  useSEO({
    title: SEO_CONFIG.pages.home.title,
    description: SEO_CONFIG.pages.home.description,
    keywords: SEO_CONFIG.pages.home.keywords,
    url: SEO_CONFIG.pages.home.canonical,
    imageUrl: SEO_CONFIG.pages.home.ogImage,
    type: "business.business",
  });

  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Tariffs />
      <Car />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
