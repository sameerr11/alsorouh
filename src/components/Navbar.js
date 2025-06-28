import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/Navbar.css';
import { FaBars, FaTimes, FaArrowLeft } from 'react-icons/fa';
import logo from '../assets/images/logo.png'; // Make sure to add a logo image to your assets

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
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

  // Check for hide-navbar-content class on body
  useEffect(() => {
    const checkBodyClass = () => {
      setShowBackButton(document.body.classList.contains('hide-navbar-content'));
    };

    // Initial check
    checkBodyClass();

    // Set up mutation observer to watch for body class changes
    const observer = new MutationObserver(checkBodyClass);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
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

  const handleBackToProjects = () => {
    // Remove the class and trigger a custom event
    document.body.classList.remove('hide-navbar-content');
    window.dispatchEvent(new CustomEvent('backToProjects'));
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Main Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            {/* Logo on the left */}
            <Link to="/" className="logo">
              <img src={logo} alt="Al Sorouh Group" height="50" />
            </Link>
            
            {/* Back to Projects button - shown when in project detail mode */}
            {showBackButton && (
              <div className="navbar-back-button">
                <button className="back-to-projects-btn" onClick={handleBackToProjects}>
                  <FaArrowLeft /> Back to Projects
                </button>
              </div>
            )}
            
            {/* Right side navigation container */}
            <div className="navbar-right">
              {/* Desktop navigation links */}
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
                    to="/projects" 
                    className={location.pathname === '/projects' ? 'active' : ''}
                  >
                    Projects
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
                {/* CTA button inside mobile menu */}
                <li className="mobile-cta">
                  <Link to="/contact" className="cta-button">Get a Quote</Link>
                </li>
              </ul>
              
              {/* Desktop CTA button */}
              <div className="nav-cta desktop-cta">
                <Link to="/contact" className="cta-button">Get a Quote</Link>
              </div>
              
              {/* Mobile hamburger menu - now on the right */}
              <div className="mobile-toggle" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </div>
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