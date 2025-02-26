import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Services from './Services';
import Testimonials from './Testimonials';
import Strategy from './Strategy';
import Clients from './Clients';
import '../../styles/Service.css';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  return (
    <div ref={sectionRef}>
      <Services isVisible={isInView} />
      <Testimonials isVisible={isInView} />
      <Strategy isVisible={isInView} />
      <Clients isVisible={isInView} />
    </div>
  );
};

export default ServicesSection;