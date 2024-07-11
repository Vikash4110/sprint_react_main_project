import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Nav from './Nav';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Articles from './Articles';
import SavingCalculator from './SavingCalculator';
import Contact from './Contact';
import Home from './HomePage';

const App = () => {
 

  return (
    <>
      <Nav />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/savingcalculator" element={<SavingCalculator />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      
      
    </>
  );
};

export default App;
