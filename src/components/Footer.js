import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaClock, FaUser } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>AL SOROUH GROUP</h3>
            <p>
              We are a leading construction and engineering company dedicated to delivering high-quality projects with innovation and excellence.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <FaUser />
                <span>Mohammed Suleiman Ali Zraki</span>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Jeddah, Kingdom of Saudi Arabia</span>
              </li>
              <li>
                <FaPhone />
                <span>+966 56 890 4704</span>
              </li>
              <li>
                <FaEnvelope />
                <span>zreaqy@gmail.com</span>
              </li>
              <li>
                <FaClock />
                <span>Sun-Thu: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-column footer-newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter to receive updates and news.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Your Email" 
                required 
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <span>AL SOROUH GROUP</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 