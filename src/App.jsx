import React, { useEffect } from 'react'; // Correct React import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import Nav from './components/Navigation/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
