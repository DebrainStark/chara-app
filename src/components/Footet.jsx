import React from 'react';
import { motion } from 'framer-motion';
import './styles/Footer.css'; // You'll need to create this CSS file

const Footer = () => {
  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <footer className="site-footer text-white position-relative">
        {/* Client criteria section */}
      <div className="client-criteria py-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
        <div className="container">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h3 className="h4 fw-bold">Ideal Client Criteria</h3>
              <p className="text-light-muted">We may be a perfect match if:</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="criteria-item text-center p-4">
                <div className="criteria-icon mb-3">
                  <i className="fas fa-check-circle text-danger fa-2x"></i>
                </div>
                <p>You're seeking to work with proven industry experts</p>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="criteria-item text-center p-4">
                <div className="criteria-icon mb-3">
                  <i className="fas fa-check-circle text-danger fa-2x"></i>
                </div>
                <p>You want a marketing team that will maximize your online presence</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="criteria-item text-center p-4">
                <div className="criteria-icon mb-3">
                  <i className="fas fa-check-circle text-danger fa-2x"></i>
                </div>
                <p>You have a minimum marketing budget of ₦500,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top section with main content */}
      <div className="footer-main py-5">
        <div className="container">
          <div className="row">
            {/* Logo and about section */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h3 className="footer-logo mb-4">Chara</h3>
              <p className="text-light-muted mb-4">
                Helping businesses achieve exceptional growth through data-driven digital 
                marketing strategies, compelling content, and conversion-focused campaigns.
              </p>
              <div className="footer-social">
                <div className="d-flex gap-3">
                  <a href="https://www.linkedin.com/in/charamide22/" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://x.com/Haywhizz" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick links */}
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0">
              <h5 className="footer-heading mb-4">Quick Links</h5>
              <ul className="footer-links list-unstyled">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0">
              <h5 className="footer-heading mb-4">Services</h5>
              <ul className="footer-links list-unstyled">
                <li><a href="#digital-marketing">Digital Marketing</a></li>
                <li><a href="#content">Content Strategy</a></li>
                <li><a href="#branding">Brand Consulting</a></li>
              </ul>
            </div>
            
            {/* Contact and booking */}
            <div className="col-md-4 col-lg-4">
              <h5 className="footer-heading mb-4">Book a Call</h5>
              <p className="text-light-muted mb-4">
                Ready to transform your digital marketing? Schedule a strategy call today.
              </p>
              <a 
                href="https://calendly.com/chara-digital-agency/discoverycall" 
                className="btn btn-danger mb-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Strategy Call
              </a>
              <div className="contact-info">
                <div className="d-flex align-items-center mb-3">
                  <div className="contact-icon me-3">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <a href="mailto:contact@benarthur.com" className="text-light-muted">
                  ayomide.lawal4@gmail.com
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <div className="contact-icon me-3">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <a href="tel:+2347012345678" className="text-light-muted">
                  +2347030405074
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
      {/* Bottom copyright bar */}
      <div className="footer-bottom py-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-light-muted">
                © {new Date().getFullYear()} Chara. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="#privacy" className="text-light-muted small">Privacy Policy</a>
                </li>
                <li className="list-inline-item ms-3">
                  <a href="#terms" className="text-light-muted small">Terms of Service</a>
                </li>
                <li className="list-inline-item ms-3">
                  <a href="#cookies" className="text-light-muted small">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="footer-background">
        <div className="shape footer-shape-1"></div>
        <div className="shape footer-shape-2"></div>
      </div>
    </footer>
  );
};

export default Footer;