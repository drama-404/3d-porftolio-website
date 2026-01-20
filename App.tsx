import React from 'react';
import Hero from './components/Hero';
import { Navigation } from './components/ui/Navigation';
import { Services, AILab, Portfolio, Contact, Footer } from './components/sections';

function App() {
  return (
    <div className="antialiased bg-base-darker">
      <Navigation />
      <Hero />
      <Services />
      <AILab />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
