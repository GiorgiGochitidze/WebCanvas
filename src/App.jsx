import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Components/Home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer";
import TechWorks from "./Components/TechWorks";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init({  once: false});
    AOS.refresh(); // Refresh AOS after initialization
    console.log(AOS)
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TechWorks" element={<TechWorks />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
