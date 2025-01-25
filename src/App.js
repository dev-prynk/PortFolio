import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Works from './components/Works/Works';
import Service from './components/Service/Service';
import Plans from './components/Plans/Plans';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="centered-container">      
      <Header />
      <HeroSection />
      <hr/>
      <Works />
      <hr/>
      <Service />
      {/* <hr/>
      <Plans /> */}
      <hr/>
      <Contact />
      <hr/>
      <Footer />
    </div>
  );
};

export default App;
