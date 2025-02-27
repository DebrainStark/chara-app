import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet'; // For SEO metadata
import NavBar from '../components/Header'; // Assuming you have a navigation component
import Footer from '../components/Footet'; // Assuming you have a footer component
import './About.css';

function AboutPage() {
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
    <>
      <Helmet>
        <title>About Me | Strategic Digital Marketing Expert</title>
        <meta name="description" content="Learn about my 10+ years of experience in strategic digital marketing and how I help premium brands grow through data-driven campaigns." />
      </Helmet>
    
      
      <main>
        {/* Hero Section */}
        <section className="about-hero py-5 ">
          <div className="container text-center py-5">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="display-4 fw-bold mb-3"
            >
              About <span className="text-primary">Me</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lead col-md-8 mx-auto"
            >
              Helping premium brands stand out in the digital landscape through strategic marketing and data-driven campaigns.
            </motion.p>
          </div>
        </section>
        
        {/* Main About Section */}
        <section id="about" className="about-section py-5 bg-light">
          {/* Background Shape */}
          <div className="shape-blob"></div>
          
          <div className="container py-4">
            <div className="row align-items-center">
              {/* Image Column */}
              <motion.div 
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={fadeInUp}
                className="col-lg-5 mb-5 mb-lg-0 position-relative"
              >
                <div className="about-image-wrapper">
                  <div className="image-border"></div>
                  <div className="about-image">
                    <img 
                      src="Chara1.JPG" 
                      alt="Marketing Strategist" 
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
              <div className="col-lg-7">
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
                      className="section-title mb-3"
                    >
                      Strategic <span className="highlight">Digital Marketing</span> For Premium Brands
                    </motion.h2>
                    
                    {/* Introduction */}
                    <motion.p variants={fadeInUp} className="lead-text mb-4">
                      With over <strong>10+ years of experience</strong>, I specialize in creating data-driven campaigns that deliver exceptional returns. I help business owners, coaches, and consultants who offer premium products and services grow through strategic digital marketing.
                    </motion.p>
                    
                    {/* Core Services */}
                    <motion.div variants={staggerItems} className="expertise-section">
                      <motion.h5 variants={fadeInUp} className="expertise-title">
                        Our Expertise
                      </motion.h5>
                      
                      <ul className="expertise-list">
                        <motion.li variants={fadeInUp} className="expertise-item">
                          <div className="icon-wrapper">
                            <i className="fas fa-chart-line"></i>
                          </div>
                          <div className="expertise-content">
                            <h6>Strategic Media Buying</h6>
                            <p>Platform-optimized campaigns that maximize ROI</p>
                          </div>
                        </motion.li>
                        
                        <motion.li variants={fadeInUp} className="expertise-item">
                          <div className="icon-wrapper">
                            <i className="fas fa-pen-fancy"></i>
                          </div>
                          <div className="expertise-content">
                            <h6>Conversion Copywriting</h6>
                            <p>Compelling narratives that drive action</p>
                          </div>
                        </motion.li>
                        
                        <motion.li variants={fadeInUp} className="expertise-item">
                          <div className="icon-wrapper">
                            <i className="fas fa-laptop-code"></i>
                          </div>
                          <div className="expertise-content">
                            <h6>Optimization & Analytics</h6>
                            <p>Data-driven decision making for continuous improvement</p>
                          </div>
                        </motion.li>
                      </ul>
                    </motion.div>
                    
                    {/* CTA */}
                    <motion.div variants={fadeInUp} className="cta-wrapper">
                      <a href="#contact" className="btn btn-primary btn-lg">
                        Work With Me <i className="fas fa-arrow-right ms-2"></i>
                      </a>
                      <a href="#services" className="btn btn-outline-secondary btn-lg ms-3">
                        Services
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Approach Section */}
        <section className="approach-section py-5">
          <div className="container py-4">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="section-label mx-auto d-inline-flex">
                    <div className="accent-line"></div>
                    <span>My Approach</span>
                  </div>
                  <h2 className="section-title">How I Create <span className="highlight">Results</span></h2>
                  <p className="lead-text">My marketing methodology is built on three core principles that ensure your business achieves sustainable growth.</p>
                </motion.div>
              </div>
            </div>
            
            <div className="row g-4">
              {/* Approach Step 1 */}
              <div className="col-md-4">
                <motion.div 
                  className="approach-card h-100 p-4 rounded-3 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="approach-number">01</div>
                  <h4 className="approach-title">Strategic Planning</h4>
                  <p>Every successful campaign begins with a data-informed strategy tailored to your specific business goals and target audience.</p>
                </motion.div>
              </div>
              
              {/* Approach Step 2 */}
              <div className="col-md-4">
                <motion.div 
                  className="approach-card h-100 p-4 rounded-3 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="approach-number">02</div>
                  <h4 className="approach-title">Creative Execution</h4>
                  <p>Combining data insights with compelling creative to produce scroll-stopping content that resonates with your ideal customers.</p>
                </motion.div>
              </div>
              
              {/* Approach Step 3 */}
              <div className="col-md-4">
                <motion.div 
                  className="approach-card h-100 p-4 rounded-3 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="approach-number">03</div>
                  <h4 className="approach-title">Continuous Optimization</h4>
                  <p>Relentless testing and refinement to maximize campaign performance and deliver the highest possible return on investment.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        
        {/* Final CTA Section */}
        <section className="cta-section py-5 text-center">
          <div className="container py-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4">Ready to Transform Your Digital Presence?</h2>
              <p className="lead mb-4 col-lg-8 mx-auto">Let's discuss how my strategic approach to digital marketing can help your business achieve sustainable growth.</p>
              <a href="#contact" className="btn btn-primary btn-lg px-5 py-3">
                Schedule a Strategy Call <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      
    </>
  );
}

export default AboutPage;