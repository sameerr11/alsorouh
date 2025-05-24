import React, { useState } from 'react';
import '../assets/css/Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBuilding } from 'react-icons/fa';

function Contact() {
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
                    <FaMapMarkerAlt className="info-icon" />
                    <div className="info-text">
                      <h3>Visit Us</h3>
                      <p>123 Construction Avenue, Business District<br />Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <FaPhone className="info-icon" />
                    <div className="info-text">
                      <h3>Call Us</h3>
                      <p>+971 4 123 4567<br />+971 50 987 6543</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <FaEnvelope className="info-icon" />
                    <div className="info-text">
                      <h3>Email Us</h3>
                      <p>info@alsorouhgroup.com<br />projects@alsorouhgroup.com</p>
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

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Our Location</h2>
          <div className="map-container">
            {/* In a real application, you would embed a Google Map or similar here */}
            <div className="map-placeholder">
              <FaBuilding className="map-icon" />
              <p>Interactive Map Would Be Embedded Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="office-locations">
        <div className="container">
          <h2 className="section-title">Our Offices</h2>
          <div className="offices-grid">
            <div className="office-card">
              <h3>Dubai Headquarters</h3>
              <p><FaMapMarkerAlt /> 123 Construction Avenue, Business District</p>
              <p><FaPhone /> +971 4 123 4567</p>
              <p><FaEnvelope /> dubai@alsorouhgroup.com</p>
            </div>
            
            <div className="office-card">
              <h3>Abu Dhabi Office</h3>
              <p><FaMapMarkerAlt /> 456 Development Street, Central Area</p>
              <p><FaPhone /> +971 2 765 4321</p>
              <p><FaEnvelope /> abudhabi@alsorouhgroup.com</p>
            </div>
            
            <div className="office-card">
              <h3>Sharjah Office</h3>
              <p><FaMapMarkerAlt /> 789 Building Road, Industrial Zone</p>
              <p><FaPhone /> +971 6 987 6543</p>
              <p><FaEnvelope /> sharjah@alsorouhgroup.com</p>
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