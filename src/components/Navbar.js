import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo.png'; // Make sure to add a logo image to your assets

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Main Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <Link to="/" className="logo">
              {/* If you have a logo, uncomment below and comment out the text version */}
              {/* <img src={logo} alt="Al Sorouh Group" height="40" /> */}
              <span className="logo-text">AL SOROUH GROUP</span>
            </Link>
            
            <div className="mobile-toggle" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            
            <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              <li>
                <Link 
                  to="/" 
                  className={location.pathname === '/' ? 'active' : ''}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={location.pathname === '/about' ? 'active' : ''}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={location.pathname === '/services' ? 'active' : ''}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={location.pathname === '/contact' ? 'active' : ''}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            
            <div className="nav-cta">
              <Link to="/contact" className="cta-button">Get a Quote</Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className={`menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        />
      )}
    </header>
  );
}

export default Navbar; 