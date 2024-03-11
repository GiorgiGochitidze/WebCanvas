import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Components/Home'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './Components/Footer'


function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.refresh();
  },[])

  useEffect(() => {
    AOS.init({ duration: 1500, offset: 150 });
  });

  return (
    <>
      <Router>
          <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
