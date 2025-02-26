import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import AnimationWrapper, { itemVariants } from '../common/AnimationWrapper';
import { clientsData } from '../../data/serviceData';

const Clients = ({ isVisible }) => (
  <section className="clients-section py-5 py-lg-6 bg-light">
    <div className="container">
      <SectionHeader 
        badge="TRUSTED BY"
        title="Clients Portfolio"
        description="My strategies have delivered remarkable results for a diverse range of clients across industries."
        isVisible={isVisible}
      />

      <AnimationWrapper className="row g-4 align-items-center" isVisible={isVisible}>
        {clientsData.map((client, index) => (
          <motion.div 
            key={index} 
            className="col-6 col-md-4 col-lg-2 text-center"
            variants={itemVariants}
          >
            <div className="client-logo">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="img-fluid" 
              />
            </div>
          </motion.div>
        ))}
      </AnimationWrapper>
    </div>
  </section>
);

export default Clients;