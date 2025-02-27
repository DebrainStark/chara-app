import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Function to close the menu and scroll to the top
  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItemAnimation = {
    hover: { y: -3, transition: { duration: 0.2 } }
  };

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
          <div className="logo-container">
            <Link to="/" className="logo-link" aria-label="Chara Digital Home" onClick={handleLinkClick}>
              <img 
                src="/logo1.png" 
                alt="Chara Digital" 
                className="logo-image" 
                width="auto"
                height="80"
              />
            </Link>
          </div>
          
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
                    onClick={handleLinkClick}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
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