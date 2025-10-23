import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tariffs from "./components/Tariffs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Car from "./components/Car";

function App() {
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
