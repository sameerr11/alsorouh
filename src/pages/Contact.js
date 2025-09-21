import React, { useState, useEffect } from 'react';
import '../assets/css/Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBuilding, FaUser } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';

function Contact() {
  // Jeddah coordinates (approximated)
  const position = [21.5433, 39.1728]; // Latitude, Longitude for Jeddah
  const [mapReady, setMapReady] = useState(false);
  
  useEffect(() => {
    // Dynamic import of Leaflet components to avoid SSR issues
    setMapReady(true);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  // Map Component to be loaded client-side only
  const MapComponent = () => {
    if (typeof window === 'undefined') return null;
    
    const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');
    const L = require('leaflet');
    
    // Custom marker icon
    const customIcon = new L.Icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    });
    
    return (
      <MapContainer 
        center={position} 
        zoom={13} 
        scrollWheelZoom={false} 
        style={{ height: '400px', width: '100%', borderRadius: '8px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="map-popup">
              <strong>AL SOROUH GROUP</strong><br />
              Jeddah, Kingdom of Saudi Arabia
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    );
  };

  return (
    <div className="contact-container">
      {/* Header Section */}
      <section className="contact-header">
        <div className="overlay"></div>
        <div className="header-content">
          <h1>Contact Us</h1>
          <p>Get in Touch with AL SOROUH GROUP</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="info-content">
                <h2>We're Here to Help</h2>
                <p>Whether you have a question about our services, need a quote, or want to discuss a project, our team is ready to assist you.</p>
                
                <div className="info-items">
                  <div className="info-item">
                    <FaUser className="info-icon" />
                    <div className="info-text">
                      <h3>Owner / Contact Person</h3>
                      <p>Mohammed Suleiman Ali Zraki</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <FaMapMarkerAlt className="info-icon" />
                    <div className="info-text">
                      <h3>Visit Us</h3>
                      <p>Jeddah, Kingdom of Saudi Arabia</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <FaPhone className="info-icon" />
                    <div className="info-text">
                      <h3>Call Us</h3>
                      <p>+966 56 890 4704</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <FaEnvelope className="info-icon" />
                    <div className="info-text">
                      <h3>Email Us</h3>
                      <p>info@alsorouhgroup.net</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <FaClock className="info-icon" />
                    <div className="info-text">
                      <h3>Business Hours</h3>
                      <p>Sunday - Thursday: 8:00 AM - 6:00 PM<br />Friday - Saturday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="contact-form-container">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Message Subject"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title find-us-title">Find Us</h2>
          <div className="find-us-divider"></div>
          <div className="map-container">
            {mapReady && <MapComponent />}
            <div className="map-disclaimer">
              Hold Ctrl+Scroll to zoom the map
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="office-locations">
        <div className="container">
          <div className="offices-title-wrapper">
            <h2 className="section-title">Our Office</h2>
            <div className="offices-divider"></div>
            <p className="office-subtitle">Visit us at our office or contact us directly through phone or email. We're always ready to assist you.</p>
          </div>
          <div className="offices-grid">
            <div className="office-card">
              <h3>Jeddah Office</h3>
              <p><FaMapMarkerAlt /> Jeddah, Kingdom of Saudi Arabia</p>
              <p><FaPhone /> +966 56 890 4704</p>
              <p><FaEnvelope /> info@alsorouhgroup.net</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="careers-section">
        <div className="container">
          <div className="careers-content">
            <h2>Join Our Team</h2>
            <p>Interested in working with AL SOROUH GROUP? We're always looking for talented professionals to join our team.</p>
            <button className="careers-btn">View Open Positions</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact; 