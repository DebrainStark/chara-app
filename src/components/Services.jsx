import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Service.css';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
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

  // Intersection observer to trigger animations when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Services data
  const services = [
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

  // Testimonials data
  const testimonials = [
    {
      quote: "We have worked closely with Ayomide for about 3 years now, and he has always delivered. His excellent Facebook ads expertise has helped us as a company hit our monthly and yearly goals in sales seamlessly",
      client: "Fashina Gbenga",
      company: "Lifestyle Essentials",
      image: "/api/placeholder/60/60"
    },
    {
      quote: "Work Delivered on time and it was perfect, Great Job Nice Timing",
      client: " - David - Berry Vibes",
      company: "Tech Solutions Inc.",
      image: "/api/placeholder/60/60"
    },
    {
      quote: "Ayomide's strategies have transformed how we approach digital marketing.",
      client: "Otoibhi Anthony",
      company: "Global Retail Group",
      image: "/api/placeholder/60/60"
    }
  ];

  // Client logos
  const clients = [
    { name: "Client 1", logo: "UTR.png" },
    { name: "Client 2", logo: "Somsoms.png" },
    { name: "Client 3", logo: "school.png" },
    { name: "Client 4", logo: "UTR.png" },
    { name: "Client 5", logo: "Somsoms.png" },
    { name: "Client 6", logo: "school.png" }
  ];

  // Strategy steps
  const strategySteps = [
    {
      number: "01",
      title: "Research",
      description: "Comprehensive market and audience analysis",
      icon: "fas fa-search"
    },
    {
      number: "02",
      title: "Blueprint",
      description: "Custom advertising strategy aligned with your business goals",
      icon: "fas fa-drafting-compass"
    },
    {
      number: "03",
      title: "Growth",
      description: "Measurable improvements in conversions, traffic quality, and ROI",
      icon: "fas fa-chart-bar"
    }
  ];

  return (
    <div ref={sectionRef}>
      {/* Services Section */}
      <section className="services-section py-5 py-lg-6 bg-light">
        <div className="container">
          <motion.div
            className="row justify-content-center text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="col-lg-8">
              <span className="badge bg-danger px-3 py-2 rounded-pill mb-3">WHAT WE DO</span>
              <h2 className="display-4 fw-bold mb-4">Services We Offer</h2>
              <p className="lead text-muted">
                Specialized digital marketing solutions tailored to elevate your brand and drive measurable results.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="row g-4"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div key={index} className="col-md-6 col-lg-4" variants={itemVariants}>
                <div className="service-card h-100">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <a href="#" className="service-link">
                    Learn more
                    <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="testimonials-section py-5 py-lg-6">
        <div className="container">
          <motion.div
            className="row justify-content-center text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="col-lg-8">
              <span className="badge bg-danger px-3 py-2 rounded-pill mb-3">SUCCESS STORIES</span>
              <h2 className="display-4 fw-bold mb-4">Client Success Stories</h2>
              <p className="lead text-muted">
                Don't just take my word for it — see what clients have to say about our work together.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="row g-4 align-items-stretch"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} className="col-md-4" variants={itemVariants}>
                <div className="testimonial-card h-100">
                  <div className="testimonial-content">
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <p className="testimonial-text">{testimonial.quote}</p>
                    <div className="testimonial-author">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.client} 
                        className="testimonial-avatar"
                      />
                      <div>
                        <h5 className="author-name">{testimonial.client}</h5>
                        <p className="author-title">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="row mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="col-12 text-center">
              <div className="results-highlight p-4">
                <h4 className="mb-3 coll">Proven Results</h4>
                <p className="lead coll mb-0">
                  On average, my clients achieve a Return on Ad Spend (ROAS) of <span className="text-danger fw-bold">2X to 5X</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The RGB Strategy */}
      <section className="strategy-section py-5 py-lg-6">
        <div className="container">
          <motion.div
            className="row justify-content-center text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="col-lg-8">
              <span className="badge bg-danger px-3 py-2 rounded-pill mb-3">METHODOLOGY</span>
              <h2 className="display-4 fw-bold mb-4">The RBG Strategy</h2>
              <p className="lead text-muted">
                Our proven methodology ensures success through a systematic approach to digital marketing.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="row g-4"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {strategySteps.map((step, index) => (
              <motion.div key={index} className="col-md-4" variants={itemVariants}>
                <div className="strategy-card">
                  <div className="strategy-number">{step.number}</div>
                  <div className="strategy-icon">
                    <i className={step.icon}></i>
                  </div>
                  <h3 className="strategy-title">{step.title}</h3>
                  <p className="strategy-description">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="row mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="col-12 text-center">
              <a href="#contact" className="btn btn-danger btn-lg px-4 py-3 shadow-lg">
                <span className="me-2">Get Started with RBG Strategy</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients Portfolio */}
      <section className="clients-section py-5 py-lg-6 bg-light">
        <div className="container">
          <motion.div
            className="row justify-content-center text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="col-lg-8">
              <span className="badge bg-danger px-3 py-2 rounded-pill mb-3">TRUSTED BY</span>
              <h2 className="display-4 fw-bold mb-4">Clients Portfolio</h2>
              <p className="lead text-muted">
                My strategies have delivered remarkable results for a diverse range of clients across industries.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="row g-4 align-items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {clients.map((client, index) => (
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
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default ServicesSection;