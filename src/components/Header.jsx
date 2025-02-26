import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <img src="/logo1.png" alt="Chara Digital" className="logo-image" />
            </Link>
          </div>
          
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <motion.li 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/" className="nav-link">Home</Link>
              </motion.li>
              <motion.li 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/about" className="nav-link">About</Link>
              </motion.li>
              <motion.li 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/services" className="nav-link">Services</Link>
              </motion.li>
              <motion.li 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/contact" className="nav-link">Contact</Link>
              </motion.li>
            </ul>
          </nav>
          
          <div className="header-cta">
            <motion.a 
              href="https://calendly.com/chara-digital-agency/discoverycall"
              className="btn btn-header"
              whileHover={{ y: -3, boxShadow: '0 10px 20px rgba(255, 87, 51, 0.3)' }}
              transition={{ duration: 0.2 }}
            >
              Book a Strategy Call
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;