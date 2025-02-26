import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/AboutMe.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AboutMe() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="about-section py-5 bg-light position-relative">
      {/* Background Shape */}
      <div className="shape-blob"></div>
      
      <div className="container py-lg-5">
        <div className="row align-items-center">
          {/* Image Column */}
          <motion.div 
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={fadeInUp}
            className="col-lg-6 mb-5 mb-lg-0 position-relative"
          >
            <div className="about-image-wrapper">
              <div className="image-border"></div>
              <div className="about-image">
                <img 
                  src="Chara1.JPG" 
                  alt="Professional Marketing Expert" 
                  className="img-fluid rounded-3 shadow"
                />
              </div>
              <div className="experience-badge">
                <span className="years">10+</span>
                <span className="text">Years Experience</span>
              </div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <div className="col-lg-6">
            <div className="about-content ps-lg-5">
              <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={staggerItems}
                className="content-wrapper"
              >
                {/* Section Label */}
                <motion.div variants={fadeInUp} className="section-label">
                  <div className="accent-line"></div>
                  <span>About Me</span>
                </motion.div>
                
                {/* Heading */}
                <motion.h2 
                  variants={fadeInUp} 
                  className="section-title mb-4 text-dark"
                >
                  Driving Growth Through <span className="highlight">Strategic Digital Marketing</span>
                </motion.h2>
                
                {/* Introduction */}
                <motion.p variants={fadeInUp} className="lead-text mb-4">
                  With over <strong>10+ years of experience</strong> in digital marketing, I've established myself as an authority in media buying and business growth strategies. My expertise lies in creating <strong>data-driven campaigns</strong> that consistently deliver exceptional returns for business owners, coaches, and consultants who offer premium products and services.
                </motion.p>
                
                {/* Team Expertise */}
                <motion.div variants={staggerItems} className="expertise-section">
                  <motion.h5 variants={fadeInUp} className="expertise-title">
                    My Expert Team
                  </motion.h5>
                  
                  <ul className="expertise-list">
                    <motion.li variants={fadeInUp} className="expertise-item">
                      <div className="icon-wrapper">
                        <i className="fas fa-laptop-code"></i>
                      </div>
                      <div className="expertise-content">
                        <h6>Development Team</h6>
                        <p>Web developers who create conversion-optimized online experiences</p>
                      </div>
                    </motion.li>
                    
                    <motion.li variants={fadeInUp} className="expertise-item">
                      <div className="icon-wrapper">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <div className="expertise-content">
                        <h6>Social Media Strategists</h6>
                        <p>Experts who master platform algorithms and drive engagement</p>
                      </div>
                    </motion.li>
                    
                    <motion.li variants={fadeInUp} className="expertise-item">
                      <div className="icon-wrapper">
                        <i className="fas fa-pen-fancy"></i>
                      </div>
                      <div className="expertise-content">
                        <h6>Brand Strategists</h6>
                        <p>Copywriters who craft compelling narratives that convert</p>
                      </div>
                    </motion.li>
                    
                    <motion.li variants={fadeInUp} className="expertise-item">
                      <div className="icon-wrapper">
                        <i className="fas fa-photo-video"></i>
                      </div>
                      <div className="expertise-content">
                        <h6>Creative Professionals</h6>
                        <p>Designers and video editors who produce scroll-stopping content</p>
                      </div>
                    </motion.li>
                  </ul>
                </motion.div>
                
                {/* CTA */}
                <motion.div variants={fadeInUp} className="cta-wrapper">
                  <a href="#contact" className="btn btn-primary btn-lg">
                    Work With Us <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                  <a href="#services" className="btn btn-outline-secondary btn-lg ms-3">
                    Our Services
                  </a>
                </motion.div>
                
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;