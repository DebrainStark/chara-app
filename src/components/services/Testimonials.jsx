import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import SectionHeader from './SectionHeader';
import AnimationWrapper, { itemVariants } from '../common/AnimationWrapper';
import { testimonialsData } from '../../data/serviceData';

const Testimonials = ({ isVisible }) => (
  <section className="testimonials-section ">
    <div className="container ">
      <SectionHeader 
        badge="SUCCESS STORIES"
        title="Client Success Stories"
        description="Don't just take my word for it — see what clients have to say about our work together."
        textColor="text-white"
        isVisible={isVisible}
      />

      <AnimationWrapper className="row g-4 align-items-stretch" isVisible={isVisible}>
        {testimonialsData.map((testimonial, index) => (
          <motion.div key={index} className="col-md-4" variants={itemVariants}>
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </AnimationWrapper>
      
      <AnimationWrapper 
        className="row mt-5" 
        isVisible={isVisible}
        delay={0.5}
      >
        <div className="col-12 text-center">
          <div className="results-highlight p-4">
            <h4 className="mb-3 text-light">Proven Results</h4>
            <p className="lead mb-0 text-light">
              On average, my clients achieve a Return on Ad Spend (ROAS) of <span className="text-danger fw-bold">2X to 5X</span>
            </p>
          </div>
        </div>
      </AnimationWrapper>
    </div>
  </section>
);

export default Testimonials;