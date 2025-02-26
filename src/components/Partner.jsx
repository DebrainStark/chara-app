import React from 'react';
import { motion } from 'framer-motion';
import './styles/Partner.css'; // You'll need to create this CSS file

const PartnerSection = () => {
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

  // Partner benefits data
  const partnerBenefits = [
    {
      icon: "fas fa-star",
      title: "Expertise",
      description: "Benefit from my decade of experience in digital marketing",
      color: "#ff5733"
    },
    {
      icon: "fas fa-chart-line",
      title: "Results-Focused",
      description: "Data-driven strategies that consistently deliver profits",
      color: "#3498db"
    },
    {
      icon: "fas fa-puzzle-piece",
      title: "Holistic Approach",
      description: "Full-service solutions from strategy to implementation",
      color: "#2ecc71"
    },
    {
      icon: "fas fa-handshake",
      title: "Direct Access",
      description: "One-on-one meetings to address your specific needs",
      color: "#f39c12"
    }
  ];

  return (
    <section className="partner-section py-5" id="why-partner">
      <div className="container">
        <motion.div 
          className="row justify-content-center text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="col-lg-8">
            <motion.span variants={itemVariants} className="text-danger fs-4 fw-medium d-inline-block mb-3">
              Work With The Best
            </motion.span>
            <motion.h2 variants={itemVariants} className="display-4 fw-bold mb-4">
              Why Partner With Me
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider mx-auto mb-5"></motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="row g-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {partnerBenefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="col-md-6 col-lg-3"
              variants={itemVariants}
            >
              <div className="benefit-card h-100">
                <div className="card-icon" style={{ backgroundColor: `${benefit.color}20` }}>
                  <i className={benefit.icon} style={{ color: benefit.color }}></i>
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="row mt-5 pt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="col-lg-8 mx-auto text-center">
            <motion.div variants={itemVariants}>
              <h3 className="h4 mb-4">Ready to transform your digital marketing?</h3>
              <p className="mb-4">
                Book a strategy call today and I'll respond promptly to discuss how we can drive exceptional results for your business.
              </p>
              <a 
                href="https://calendly.com/chara-digital-agency/discoverycall" 
                className="btn btn-danger btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Strategy Call
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="partner-background">
        <div className="shape partner-shape-1"></div>
        <div className="shape partner-shape-2"></div>
      </div>
    </section>
  );
};

export default PartnerSection;