import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Hero.css';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeRole, setActiveRole] = useState(0);
  
  // Professional roles to display in the rotating text
  const roles = [
    "Digital marketing expert",
    "Content strategist",
    "Brand consultant"
  ];
  
  useEffect(() => {
    // Animate elements on page load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Role rotation timer
    const roleInterval = setInterval(() => {
      setActiveRole(prev => (prev + 1) % roles.length);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(roleInterval);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  };
  
  const roleVariants = {
    enter: { y: 20, opacity: 0 },
    center: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  return (
    <section 
      ref={heroRef} 
      className={`hero-section bg-dark text-white position-relative overflow-hidden ${isLoaded ? 'loaded' : ''}`}
    >
      <div className="container position-relative" style={{ zIndex: 10 }}>
        <div className="row min-vh-100 align-items-center">
          <motion.div
            className="col-lg-7 hero-content text-center text-lg-start"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <span className="text-danger fs-4 fw-medium d-inline-block mb-3 greeting-text">
                Hello, world.
              </span>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h1 className="display-2 fw-bold mb-2 name-text">
                I'm <span className="text-nowrap text-danger">Ayomide (Chara).</span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants} className="position-relative mb-4 profession-container">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={activeRole}
                  className="display-4 fw-bold profession-text"
                  variants={roleVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <span className="text-gradient">
                    {roles[activeRole]}.
                  </span>
                </motion.h2>
              </AnimatePresence>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="mb-5 lead text-light-muted" style={{ maxWidth: "600px" }}>
                Helping businesses achieve exceptional growth through data-driven digital 
                marketing strategies, compelling content, and conversion-focused campaigns.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="d-flex flex-column flex-sm-row gap-3">
              <a href="https://calendly.com/chara-digital-agency/discoverycall" className="btn btn-outline-light btn-lg">Book a Strategy call</a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-5 social-icons">
              <div className="d-flex gap-4">
                <a href="#linkedin" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#twitter" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#instagram" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="col-lg-5 d-none d-lg-block position-relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <img src="Chara.JPG" alt="Ben Arthur" className="hero-image" />
                <div className="hero-image-overlay"></div>
              </div>
              <div className="hero-image-accent"></div>
            </div>
          </motion.div>
        </div>
      </div>

      
      {/* Stats Cards */}
      <motion.div 
        className="hero-stats-container d-none d-lg-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">300%</div>
            <div className="stat-label">Average ROI</div>
          </div>
        </div>
      </motion.div>
      
      {/* Background Elements */}
      <div className="hero-background">
        {/* Gradient Overlay */}
        <div className="gradient-overlay"></div>
        
        {/* Decorative Elements */}
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text">Scroll Down</div>
      </motion.div>
    </section>
  );
};

export default Hero;