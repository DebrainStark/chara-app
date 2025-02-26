// AnimationWrapper.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Add the missing itemVariants export
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Container variants for staggered animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// A wrapper component for animations
const AnimationWrapper = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={className}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;