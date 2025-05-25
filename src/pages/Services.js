import React from 'react';
import '../assets/css/Services.css';
import { FaTools, FaWrench, FaLightbulb, FaWater, FaHandshake, FaHome, FaBuilding, FaIndustry, FaFireExtinguisher, FaBell, FaClipboardCheck } from 'react-icons/fa';

function Services() {
  return (
    <div className="services-container">
      {/* Header Section */}
      <section className="services-header">
        <div className="overlay"></div>
        <div className="header-content">
          <h1>OUR SERVICE</h1>
          <p>Building Excellence, Constructing Trust</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="service-description">
        <div className="container">
          <div className="description-content">
            <div className="accent-line left"></div>
            <p>At <strong>ALSOROH ALJADIDAH CONTRACTING CO.</strong>, we offer a comprehensive range of <strong>construction and MEP services</strong> designed to meet the diverse needs of residential, commercial, and industrial clients across Saudi Arabia. With <strong>certified expertise</strong> and a commitment to <strong>excellence</strong>, our services include:</p>
            <div className="accent-line right"></div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services">
        <div className="container">
          <h2 className="section-title">MECHANICAL, ELECTRICAL & PLUMBING (MEP) WORKS</h2>
          <div className="services-grid">
            <div className="service-card">
              <FaTools className="service-icon" />
              <h3>Complete MEP Design & Execution</h3>
              <p>Professional design and implementation of all mechanical, electrical, and plumbing systems.</p>
            </div>
            
            <div className="service-card">
              <FaWrench className="service-icon" />
              <h3>HVAC System Installation & Maintenance</h3>
              <p>Installation and ongoing maintenance of heating, ventilation, and air conditioning systems.</p>
            </div>
            
            <div className="service-card">
              <FaLightbulb className="service-icon" />
              <h3>Electrical Power & Lighting Systems</h3>
              <p>Design and installation of electrical power distribution and efficient lighting solutions.</p>
            </div>
            
            <div className="service-card">
              <FaWater className="service-icon" />
              <h3>Plumbing & Drainage Networks</h3>
              <p>Installation of complete plumbing systems and efficient drainage solutions.</p>
            </div>

            <div className="service-card">
              <FaTools className="service-icon" />
              <h3>Low Voltage Systems</h3>
              <p>CCTV, Access Control, BMS and other low voltage system installation and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* General Contracting Services */}
      <section className="additional-services">
        <div className="container">
          <h2 className="section-title">GENERAL CONTRACTING</h2>
          <div className="services-grid">
            <div className="service-card">
              <FaHome className="service-icon" />
              <h3>Residential & Commercial Construction</h3>
              <p>Building high-quality residential homes and commercial spaces that meet client specifications.</p>
            </div>
            
            <div className="service-card">
              <FaBuilding className="service-icon" />
              <h3>Renovation & Fit-Out Works</h3>
              <p>Interior and exterior renovation and custom fit-out solutions for existing structures.</p>
            </div>
            
            <div className="service-card">
              <FaClipboardCheck className="service-icon" />
              <h3>Project Management & Site Supervision</h3>
              <p>Professional management of projects from start to finish with detailed site supervision.</p>
            </div>
            
            <div className="service-card">
              <FaHandshake className="service-icon" />
              <h3>Turnkey Project Execution</h3>
              <p>Complete end-to-end project solutions from concept to handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fire Fighting Services */}
      <section className="fire-services">
        <div className="container">
          <h2 className="section-title">FIRE FIGHTING & FIRE ALARM SYSTEMS</h2>
          <div className="services-grid">
            <div className="service-card">
              <FaClipboardCheck className="service-icon" />
              <h3>Certified Design & Build Services</h3>
              <p>Professional design and installation of fire safety systems meeting all regulations.</p>
            </div>
            
            <div className="service-card">
              <FaFireExtinguisher className="service-icon" />
              <h3>Installation of Fire Suppression Systems</h3>
              <p>Expert installation of sprinklers and other fire suppression technologies.</p>
            </div>
            
            <div className="service-card">
              <FaBell className="service-icon" />
              <h3>Fire Alarm Control Panels & Detectors</h3>
              <p>Installation of advanced fire detection and alarm systems for early warning.</p>
            </div>
            
            <div className="service-card">
              <FaClipboardCheck className="service-icon" />
              <h3>Safety Compliance with Civil Defense Regulations</h3>
              <p>Ensuring all fire systems meet local civil defense requirements and regulations.</p>
            </div>

            <div className="service-card">
              <FaTools className="service-icon" />
              <h3>System Testing, Commissioning & Maintenance</h3>
              <p>Regular testing, professional commissioning, and ongoing maintenance of fire safety systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Professional Construction or MEP Services?</h2>
            <p>Contact us to discuss your project requirements. We offer customized solutions for all your construction and MEP needs.</p>
            <button className="cta-button">Request a Quote</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services; 