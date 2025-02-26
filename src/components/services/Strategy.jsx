import React from 'react';
import { motion } from 'framer-motion';
import StrategyCard from './StrategyCard';
import SectionHeader from './SectionHeader';
import AnimationWrapper, { itemVariants } from '../common/AnimationWrapper';
import { strategyStepsData } from '../../data/serviceData';

const Strategy = ({ isVisible }) => (
  <section className="strategy-section py-5 py-lg-6">
    <div className="container">
      <SectionHeader 
        badge="METHODOLOGY"
        title="The RBG Strategy"
        description="Our proven methodology ensures success through a systematic approach to digital marketing."
        textColor="text-white"
        isVisible={isVisible}
      />

      <AnimationWrapper className="row g-4" isVisible={isVisible}>
        {strategyStepsData.map((step, index) => (
          <motion.div key={index} className="col-md-4" variants={itemVariants}>
            <StrategyCard {...step} />
          </motion.div>
        ))}
      </AnimationWrapper>
      
      <AnimationWrapper 
        className="row mt-5" 
        isVisible={isVisible}
        delay={0.8}
      >
        <div className="col-12 text-center">
          <a href="#contact" className="btn btn-danger btn-lg px-4 py-3 shadow-lg">
            <span className="me-2">Get Started with RBG Strategy</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </AnimationWrapper>
    </div>
  </section>
);

export default Strategy;