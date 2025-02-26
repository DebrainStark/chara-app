import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './About.css';

function AboutPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
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
    <div className="about-page-wrapper">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="shape-circle"></div>
        <div className="shape-square"></div>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-content"
              >
                <h1 className="display-4 fw-bold">Our <span className="highlight">Story</span></h1>
                <p className="lead mt-4">
                  We're a team of passionate digital marketers dedicated to helping businesses thrive 
                  in the ever-evolving digital landscape. With data-driven strategies and creative 
                  expertise, we transform digital presence into measurable growth.
                </p>
                <div className="mt-5">
                  <Button variant="primary" size="lg" className="rounded-pill me-3">
                    Our Process
                  </Button>
                  <Button variant="outline-secondary" size="lg" className="rounded-pill">
                    Meet The Team
                  </Button>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-image-container"
              >
                <div className="pattern-background"></div>
                <div className="hero-image">
                  <img src="team-meeting.jpg" alt="Our team collaborating" className="img-fluid" />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Values Section */}
      <section className="mission-section" ref={ref}>
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate={controls}
              >
                <div className="section-label mx-auto">
                  <div className="accent-line"></div>
                  <span>OUR MISSION</span>
                </div>
                <h2 className="section-title">Empowering Brands to <span className="highlight">Succeed Digitally</span></h2>
                <p className="lead-text">
                  We believe that every business deserves a strong digital presence. Our mission is to provide cutting-edge marketing solutions that drive real results and help our clients outperform their competition.
                </p>
              </motion.div>
            </Col>
          </Row>

          <motion.div
            variants={staggerItems}
            initial="hidden"
            animate={controls}
          >
            <Row className="values-row">
              <Col md={4}>
                <motion.div variants={fadeInUp} className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h4>Data-Driven</h4>
                  <p>We make decisions based on analytics and real-world metrics, not assumptions.</p>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div variants={fadeInUp} className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h4>Innovation</h4>
                  <p>We constantly explore new strategies and technologies to keep our clients ahead of trends.</p>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div variants={fadeInUp} className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-hands-helping"></i>
                  </div>
                  <h4>Client Success</h4>
                  <p>Your growth is our success. We're partners invested in your long-term objectives.</p>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Journey/Timeline Section */}
      <section className="journey-section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <div className="section-label mx-auto">
                <div className="accent-line"></div>
                <span>OUR JOURNEY</span>
              </div>
              <h2 className="section-title">From Startup to <span className="highlight">Industry Leader</span></h2>
            </Col>
          </Row>

          <div className="timeline">
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2013</h3>
                <h4>The Beginning</h4>
                <p>Founded with a vision to help small businesses leverage digital marketing effectively.</p>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2016</h3>
                <h4>Team Expansion</h4>
                <p>Grew to a team of 10 specialists, adding expertise in social media, SEO, and content marketing.</p>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2019</h3>
                <h4>Agency Recognition</h4>
                <p>Recognized as a top digital marketing agency, winning our first industry awards.</p>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2022</h3>
                <h4>Global Expansion</h4>
                <p>Expanded our services internationally, helping clients across 15+ countries.</p>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Today</h3>
                <h4>Industry Leaders</h4>
                <p>Now a team of 30+ specialists delivering cutting-edge marketing solutions globally.</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <div className="section-label mx-auto">
                <div className="accent-line"></div>
                <span>OUR EXPERTS</span>
              </div>
              <h2 className="section-title">Meet the <span className="highlight">Talented Team</span></h2>
              <p className="lead-text">
                Our success is driven by a diverse team of passionate experts who combine creativity with technical knowledge to deliver exceptional results.
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={3} md={6} className="mb-4">
              <motion.div 
                className="team-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="team-image">
                  <img src="team-member1.jpg" alt="Team Member" className="img-fluid" />
                  <div className="social-links">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>Jessica Chen</h5>
                  <p>Founder & CEO</p>
                </div>
              </motion.div>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <motion.div 
                className="team-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="team-image">
                  <img src="team-member2.jpg" alt="Team Member" className="img-fluid" />
                  <div className="social-links">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>Michael Torres</h5>
                  <p>Creative Director</p>
                </div>
              </motion.div>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <motion.div 
                className="team-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="team-image">
                  <img src="team-member3.jpg" alt="Team Member" className="img-fluid" />
                  <div className="social-links">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>Sarah Williams</h5>
                  <p>Head of Strategy</p>
                </div>
              </motion.div>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <motion.div 
                className="team-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="team-image">
                  <img src="team-member4.jpg" alt="Team Member" className="img-fluid" />
                  <div className="social-links">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>David Park</h5>
                  <p>Technical Lead</p>
                </div>
              </motion.div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col md={6} className="text-center">
              <Button variant="outline-primary" size="lg" className="rounded-pill">
                View Full Team <i className="fas fa-arrow-right ms-2"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials & Achievements */}
      <section className="testimonials-section bg-light">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="section-label">
                <div className="accent-line"></div>
                <span>TESTIMONIALS</span>
              </div>
              <h2 className="section-title mb-4">What Our <span className="highlight">Clients Say</span></h2>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text">
                  "Working with this team transformed our digital strategy completely. Our leads increased by 200% within just 3 months of implementing their recommendations."
                </p>
                <div className="client-info">
                  <img src="client1.jpg" alt="Client" className="client-image" />
                  <div>
                    <h5>Robert Johnson</h5>
                    <p>CEO, TechSolutions Inc.</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card mt-4">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text">
                  "Their strategic approach to social media marketing helped us reach entirely new audiences. The ROI we've seen has been exceptional."
                </p>
                <div className="client-info">
                  <img src="client2.jpg" alt="Client" className="client-image" />
                  <div>
                    <h5>Amanda Lewis</h5>
                    <p>Marketing Director, StyleHub</p>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="section-label mt-5 mt-lg-0">
                <div className="accent-line"></div>
                <span>ACHIEVEMENTS</span>
              </div>
              <h2 className="section-title mb-4">Our <span className="highlight">Impact</span> By Numbers</h2>
              
              <Row>
                <Col md={6}>
                  <motion.div 
                    className="achievement-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="achievement-number">250+</h3>
                    <p>Clients Worldwide</p>
                  </motion.div>
                </Col>
                <Col md={6}>
                  <motion.div 
                    className="achievement-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <h3 className="achievement-number">$50M+</h3>
                    <p>Revenue Generated</p>
                  </motion.div>
                </Col>
                <Col md={6}>
                  <motion.div 
                    className="achievement-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <h3 className="achievement-number">15+</h3>
                    <p>Industry Awards</p>
                  </motion.div>
                </Col>
                <Col md={6}>
                  <motion.div 
                    className="achievement-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <h3 className="achievement-number">98%</h3>
                    <p>Client Retention</p>
                  </motion.div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="cta-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="cta-box"
              >
                <h2>Ready to Transform Your Digital Marketing?</h2>
                <p className="lead mt-3 mb-4">
                  Let's discuss how our expertise can help your business achieve its goals.
                </p>
                <Button variant="light" size="lg" className="rounded-pill">
                  Schedule a Strategy Call <i className="fas fa-arrow-right ms-2"></i>
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default AboutPage;