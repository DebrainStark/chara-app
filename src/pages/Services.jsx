import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    transition: { duration: 0.5 }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Services data
  const servicesData = [
    {
      icon: "fas fa-ad",
      title: "Media Buying & Management",
      description: "Custom advertising campaigns across multiple platforms designed for maximum ROI"
    },
    {
      icon: "fas fa-share-alt",
      title: "Social Media Management & Marketing",
      description: "Strategic content planning, community engagement, and growth tactics"
    },
    {
      icon: "fas fa-chart-line",
      title: "Conversion Rate Optimization",
      description: "Enhancing your digital assets to turn visitors into customers"
    },
    {
      icon: "fas fa-funnel-dollar",
      title: "Marketing Funnel Development",
      description: "Creating seamless customer journeys that generate consistent sales"
    },
    {
      icon: "fas fa-bullseye",
      title: "Brand Strategy & Positioning",
      description: "Defining your unique market position to attract ideal clients"
    },
    {
      icon: "fas fa-photo-video",
      title: "Content Production",
      description: "High-quality graphics, videos, and copy that resonate with your audience"
    }
  ];

  // Set visibility when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="services-section py-5 py-lg-6 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="row mb-5 text-center">
          <div className="col-lg-8 mx-auto">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={headerVariants}
            >
             
              <h2 className="display-5 fw-bold mb-4 mt-2 py-5 ">Services We Offer</h2>
              <p className="lead text-muted">
                Specialized digital marketing solutions tailored to elevate your brand and drive measurable results.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services Cards */}
        <motion.div 
          className="row g-4"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              className="col-md-6 col-lg-4 mb-4"
              variants={itemVariants}
            >
              <div className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#" className="service-link">
                  Learn more <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="lead mb-4">Ready to transform your digital presence?</p>
          <a href="#" className="btn btn-danger btn-lg px-4 py-2">
            Request a Free Consultation <i className="fas fa-long-arrow-alt-right ms-2"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;