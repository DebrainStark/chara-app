import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServicesCard';
import SectionHeader from './SectionHeader';
import AnimationWrapper, { itemVariants } from '../common/AnimationWrapper';
import { servicesData } from '../../data/serviceData';

const Services = ({ isVisible }) => (
  <section className="services-section py-5 py-lg-6 bg-light">
    <div className="container">
      <SectionHeader 
        badge="WHAT WE DO"
        title="Services We Offer"
        description="Specialized digital marketing solutions tailored to elevate your brand and drive measurable results."
        isVisible={isVisible}
      />

      <AnimationWrapper className="row g-4" isVisible={isVisible}>
        {servicesData.map((service, index) => (
          <motion.div key={index} className="col-md-6 col-lg-4" variants={itemVariants}>
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </AnimationWrapper>
    </div>
  </section>
);

export default Services;