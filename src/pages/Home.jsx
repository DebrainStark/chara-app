import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/Aboutme';
import Experience from '../components/Experience';
import Services from '../components/Services';
import Partner from '../components/Partner';

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <AboutMe />
      <Experience />
      <Services />
      <Partner />

    </div>
  );
}

export default Home;