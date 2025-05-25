import React, { useEffect } from 'react';
import '../assets/css/Home.css';
import { FaBuilding, FaTools, FaHandshake, FaAward } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100
    });
    AOS.refresh();
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>AL SOROUH GROUP</h1>
          <h2>Building Excellence, Constructing Trust</h2>
          <p>Premier Construction Services for Residential and Commercial Projects</p>
          <Link to="/services" className="cta-button">Our Services</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title" data-aos="fade-up">Why Choose Us</h2>
        <div className="features-container">
          <div className="feature-box" data-aos="fade-up" data-aos-delay="100">
            <FaBuilding className="feature-icon" />
            <h3>Quality Construction</h3>
            <p>We deliver exceptional quality in every project, ensuring durability and client satisfaction.</p>
          </div>
          <div className="feature-box" data-aos="fade-up" data-aos-delay="200">
            <FaTools className="feature-icon" />
            <h3>Expert Craftsmanship</h3>
            <p>Our team of skilled professionals brings expertise and precision to every construction detail.</p>
          </div>
          <div className="feature-box" data-aos="fade-up" data-aos-delay="300">
            <FaHandshake className="feature-icon" />
            <h3>Reliable Service</h3>
            <p>Count on us for dependable service, transparent communication, and on-time project delivery.</p>
          </div>
          <div className="feature-box" data-aos="fade-up" data-aos-delay="400">
            <FaAward className="feature-icon" />
            <h3>Award-Winning Projects</h3>
            <p>Our commitment to excellence has earned us recognition in the construction industry.</p>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="projects-section">
        <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card" data-aos="fade-up" data-aos-delay="100">
            <div className="project-image project-1"></div>
            <h3>Luxury Residential Complex</h3>
            <p>A modern residential complex with premium amenities and elegant design.</p>
          </div>
          <div className="project-card" data-aos="fade-up" data-aos-delay="200">
            <div className="project-image project-2"></div>
            <h3>Corporate Headquarters</h3>
            <p>State-of-the-art office building with sustainable features and innovative workspace.</p>
          </div>
          <div className="project-card" data-aos="fade-up" data-aos-delay="300">
            <div className="project-image project-3"></div>
            <h3>Shopping Mall Development</h3>
            <p>Contemporary shopping center with diverse retail spaces and entertainment zones.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title" data-aos="fade-up">What Our Clients Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card" data-aos="fade-up" data-aos-delay="100">
            <p>"AL SOROUH GROUP delivered our project on time and exceeded our expectations in quality and service."</p>
            <h4>- Ahmed Al-Farsi, Property Developer</h4>
          </div>
          <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
            <p>"Working with this team was a pleasure. Their attention to detail and professional approach made all the difference."</p>
            <h4>- Sarah Johnson, Business Owner</h4>
          </div>
          <div className="testimonial-card" data-aos="fade-up" data-aos-delay="300">
            <p>"Exceptional craftsmanship and reliability. I would recommend AL SOROUH GROUP for any construction project."</p>
            <h4>- Mohammed Al-Qasimi, Real Estate Investor</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content" data-aos="zoom-in">
          <h2>Ready to Start Your Construction Project?</h2>
          <p>Contact us today for a free consultation and quote.</p>
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}

export default Home; 