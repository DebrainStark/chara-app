import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ badge, title, description, isVisible, textColor }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.7 }}
    className="row justify-content-center text-center mb-5"
  >
    <div className="col-lg-8">
      <span className="badge bg-danger px-3 py-2 rounded-pill mb-3">{badge}</span>
      <h2 className="display-4 fw-bold mb-4 text-danger">{title}</h2>
      <p className={`lead ${textColor ? textColor : ''}`}>{description}</p>
    </div>
  </motion.div>
);

export default SectionHeader;