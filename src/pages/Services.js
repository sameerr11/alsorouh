import React from 'react';
import '../assets/css/Services.css';
import { FaHome, FaBuilding, FaIndustry, FaRoad, FaPencilRuler, FaTools, FaHardHat, FaClipboardCheck } from 'react-icons/fa';

function Services() {
  return (
    <div className="services-container">
      {/* Header Section */}
      <section className="services-header">
        <div className="overlay"></div>
        <div className="header-content">
          <h1>Our Services</h1>
          <p>Comprehensive Construction Solutions for Every Need</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services">
        <div className="container">
          <h2 className="section-title">Construction Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <FaHome className="service-icon" />
              <h3>Residential Construction</h3>
              <p>Building beautiful, functional homes from luxury villas to multi-family residences.</p>
              <ul className="service-details">
                <li>Custom Home Building</li>
                <li>Luxury Villa Construction</li>
                <li>Apartment Complexes</li>
                <li>Residential Renovations</li>
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
            
            <div className="service-card">
              <FaBuilding className="service-icon" />
              <h3>Commercial Construction</h3>
              <p>Creating innovative spaces for businesses, from offices to retail establishments.</p>
              <ul className="service-details">
                <li>Office Buildings</li>
                <li>Retail Centers</li>
                <li>Hotels and Hospitality</li>
                <li>Restaurants and Entertainment Venues</li>
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
            
            <div className="service-card">
              <FaIndustry className="service-icon" />
              <h3>Industrial Construction</h3>
              <p>Developing functional industrial facilities optimized for efficiency and safety.</p>
              <ul className="service-details">
                <li>Manufacturing Plants</li>
                <li>Warehouses</li>
                <li>Distribution Centers</li>
                <li>Industrial Renovations</li>
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
            
            <div className="service-card">
              <FaRoad className="service-icon" />
              <h3>Infrastructure Development</h3>
              <p>Building essential infrastructure to support communities and businesses.</p>
              <ul className="service-details">
                <li>Roads and Highways</li>
                <li>Bridges and Tunnels</li>
                <li>Water and Sewage Systems</li>
                <li>Public Facilities</li>
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services">
        <div className="container">
          <h2 className="section-title">Specialized Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <FaPencilRuler className="service-icon" />
              <h3>Design & Planning</h3>
              <p>Comprehensive architectural and engineering design services for construction projects.</p>
              <ul className="service-details">
                <li>Architectural Design</li>
                <li>Structural Engineering</li>
                <li>Interior Design</li>
                <li>3D Modeling and Visualization</li>
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
            
            <div className="service-card">
              <FaTools className="service-icon" />
              <h3>Renovation & Remodeling</h3>
              <p>Transforming existing spaces to meet new needs and modern standards.</p>
              <ul className="service-details">
                <li>Commercial Renovations</li>
                <li>Home Remodeling</li>
                <li>Historic Building Restoration</li>
                <li>Facility Upgrades</li>
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
            
            <div className="service-card">
              <FaHardHat className="service-icon" />
              <h3>Construction Management</h3>
              <p>Expert oversight of construction projects from inception to completion.</p>
              <ul className="service-details">
                <li>Project Planning</li>
                <li>Budget Management</li>
                <li>Quality Control</li>
                <li>Timeline Optimization</li>
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
            
            <div className="service-card">
              <FaClipboardCheck className="service-icon" />
              <h3>Consultation Services</h3>
              <p>Professional advice and guidance for construction and development projects.</p>
              <ul className="service-details">
                <li>Feasibility Studies</li>
                <li>Site Selection</li>
                <li>Regulatory Compliance</li>
                <li>Sustainability Consultation</li>
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Construction Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We begin with a thorough consultation to understand your vision, requirements, and budget.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning & Design</h3>
              <p>Our experts develop detailed plans and designs tailored to your specific needs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Pre-Construction</h3>
              <p>We handle permits, regulations, and prepare everything needed before construction begins.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Construction</h3>
              <p>Our skilled team executes the construction with precision, quality, and attention to detail.</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality checks ensure everything meets our high standards and your expectations.</p>
            </div>
            <div className="process-step">
              <div className="step-number">6</div>
              <h3>Project Completion</h3>
              <p>We finalize all details and ensure you're completely satisfied with the finished project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need a Custom Solution?</h2>
            <p>Contact us to discuss your specific construction needs. We offer tailored services to meet your requirements.</p>
            <button className="cta-button">Request a Quote</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services; 