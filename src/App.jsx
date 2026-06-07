{/**Few Imports**/}

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import Home from "./pages/Home";
import AboutPage from "./pages/Internal Pages/AboutPage";
import ServicesPage from "./pages/Internal Pages/ServicesPage";
import ProductsPage from "./pages/Internal Pages/ProductsPage";
import BlogsPage from "./pages/Internal Pages/BlogsPage";
import CareerPage from "./pages/Internal Pages/CareerPage";
import WorkPage from "./pages/Internal Pages/WorkPage";
import Contact from "./pages/Contact";
import LegalPage from "./pages/LegalPage";
import Hackathon from "./pages/Hackathon";
import Admin from "./pages/Admin";

function SmoothScrollProvider({ children }) {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.scrollTo(0, { immediate: true });

    return () => lenis.destroy();
  }, [location.pathname]); 

  return children;
}

function App() {
  return (
    <Router>
      <SmoothScrollProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/works" element={<WorkPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<LegalPage />} />
          <Route path="/privacy" element={<LegalPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </SmoothScrollProvider>
    </Router>
  );
}


export default App;

