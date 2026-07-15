import React from 'react';
import "./index.css";
import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';
import Services from './Component/Services/Services';
import About from './Component/About/About';
import Work from './Component/Work/Work';
import Review from './Component/Review.jsx/Review';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <>
       <Navbar />
      <Hero />
    <Services />
    
    <About />
    <Review />
  <Contact />
    </>
  );
}

export default App;
