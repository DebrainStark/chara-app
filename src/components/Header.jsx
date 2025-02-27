import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles/Header.css';

/**
 * Header Component - Main navigation component for Chara Digital website
 * Features responsive design, scroll-aware styling only on home page, and animated interactions
 */
const Header = () => {
  // State management for scroll position and mobile menu
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Get current location to determine if we're on the home page
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Handle scroll events to update header appearance (only for home page)
  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setScrolled(window.scrollY > 50);
      } else {
        // Always set scrolled to true for non-home pages to keep the black background
        setScrolled(true);
      }
    };
    
    // Set initial scroll state
    handleScroll();
    
    // Add and clean up event listeners
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]); // Added isHomePage as dependency
  
  // Toggle mobile menu state
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Animation variants for navigation items
  const navItemAnimation = {
    hover: { y: -3, transition: { duration: 0.2 } }
  };
  
  // Animation variants for CTA button
  const ctaAnimation = {
    hover: { 
      y: -3, 
      boxShadow: '0 10px 20px rgba(255, 87, 51, 0.3)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${!isHomePage ? 'non-home-page' : ''}`}>
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <div className="logo-container">
            <Link to="/" className="logo-link" aria-label="Chara Digital Home">
              <img 
                src="/logo1.png" 
                alt="Chara Digital" 
                className="logo-image" 
                width="auto"
                height="80"
              />
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          
          {/* Main Navigation */}
          <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={navItemAnimation.hover}
                >
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="nav-link"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            {/* Mobile CTA (visible only in mobile menu) */}
            <div className="mobile-cta">
              <motion.a 
                href="https://calendly.com/chara-digital-agency/discoverycall"
                className="btn btn-header"
                whileHover={ctaAnimation.hover}
                rel="noopener noreferrer"
              >
                Book a Strategy Call
              </motion.a>
            </div>
          </nav>
          
          {/* Desktop CTA */}
          <div className="header-cta">
            <motion.a 
              href="https://calendly.com/chara-digital-agency/discoverycall"
              className="btn btn-header"
              whileHover={ctaAnimation.hover}
              rel="noopener noreferrer"
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