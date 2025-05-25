import React from 'react';
import '../assets/css/About.css';
import { FaBuilding, FaUsers, FaHandshake, FaShieldAlt, FaChartLine, FaUserTie, FaTrophy, FaGlobe, FaNetworkWired } from 'react-icons/fa';

function About() {
  return (
    <div className="about-container">
      {/* Header Section */}
      <section className="about-header">
        <div className="overlay"></div>
        <div className="header-content">
          <h1>About AL SOROUH GROUP</h1>
          <p>Building Excellence, Constructing Trust</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>ABOUT COMPANY</h2>
              <p>
                At ALSOROH ALJADIDAH CONTRACTING CO., we believe in building more than structures—we build trust, safety, and excellence. Based in the heart of Jeddah, KSA, we are a fully certified contracting company specializing in MEP (Mechanical, Electrical, and Plumbing) works. From intricate design and build projects to robust fire fighting and fire alarm systems, we deliver solutions that meet the highest standards of quality and compliance.
              </p>
              <p>
                We serve both B2B and B2C markets with a focus on professionalism, safety, and innovation. Whether it's a large commercial development or a tailored residential fit-out, our team of skilled professionals ensures every project is completed on time and to specification.
              </p>
            </div>
            <div className="col-md-6 company-image">
              {/* This will be styled with CSS to show a company image */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="corner-accent top-right"></div>
        <div className="mission-content">
          <h2 className="section-heading">
            <span>OUR</span> <span>MISSION</span>
          </h2>
          <div className="mission-grid">
            <div className="mission-item">
              <div className="mission-number">01</div>
              <div className="mission-item-content">
                <p>To deliver superior-quality contracting and MEP solutions that are technically sound, safety-compliant, and tailored to each client's unique needs. We are committed to completing every project with precision, using the latest technologies and best practices—ensuring timely execution, cost efficiency, and sustainable results for both residential and commercial sectors.</p>
              </div>
            </div>
            <div className="mission-item">
              <div className="mission-number">02</div>
              <div className="mission-item-content">
                <p>To cultivate strong, long-term partnerships with our clients, partners, and community by upholding the highest standards of integrity, transparency, and professionalism. Through our dedicated team and customer-focused approach, we aim to contribute meaningfully to the Kingdom's infrastructure development while positioning ALSOROH ALJADIDAH CONTRACTING CO. as a respected leader in the construction and MEP industry.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="corner-accent bottom-left"></div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-container">
            <div className="value-card">
              <FaBuilding className="value-icon" />
              <h3>Quality Excellence</h3>
              <p>We strive for excellence in every project, delivering superior construction and MEP solutions that exceed expectations.</p>
            </div>
            <div className="value-card">
              <FaShieldAlt className="value-icon" />
              <h3>Safety First</h3>
              <p>We prioritize safety in all our operations, ensuring secure environments for our team, clients, and end-users.</p>
            </div>
            <div className="value-card">
              <FaHandshake className="value-icon" />
              <h3>Integrity</h3>
              <p>We conduct our business with honesty, transparency, and ethical practices in all our relationships.</p>
            </div>
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>Client Partnership</h3>
              <p>We build strong, long-term relationships with our clients based on trust, understanding, and mutual success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="corner-accent top-left"></div>
        <div className="vision-content">
          <h2 className="section-heading">
            <span>OUR</span> <span>VISION</span>
          </h2>
          <div className="vision-text">
            <p>
              At ALSOROH ALJADIDAH CONTRACTING CO., our vision is to become a national leader and trusted name in the construction and MEP industry across the Kingdom of Saudi Arabia. We aim to be recognized not just for the quality of our work, but for the values we uphold, the communities we empower, and the standards we set.
            </p>
            <p>
              We envision a future where our company plays a vital role in shaping modern infrastructure—delivering projects that are safe, sustainable, and technologically advanced. Our dedication to excellence in mechanical, electrical, plumbing, fire fighting, and fire alarm systems reflects our commitment to improving the built environment for both businesses and individuals.
            </p>
          </div>
        </div>
        <div className="corner-accent bottom-right"></div>
      </section>

      {/* Business Goals Section */}
      <section className="business-goals-section">
        <div className="corner-accent top-right"></div>
        <div className="goals-content">
          <h2 className="section-heading">
            <span>BUSINESS</span> <span>GOALS</span>
          </h2>
          <div className="goals-list">
            <div className="goal-item">
              <FaNetworkWired className="goal-icon" />
              <p>Grow a strong and engaged online following</p>
            </div>
            <div className="goal-item">
              <FaUserTie className="goal-icon" />
              <p>Generate qualified leads and long-term clients</p>
            </div>
            <div className="goal-item">
              <FaChartLine className="goal-icon" />
              <p>Establish thought leadership in the contracting industry</p>
            </div>
            <div className="goal-item">
              <FaUsers className="goal-icon" />
              <p>Build a trusted and collaborative community</p>
            </div>
            <div className="goal-item">
              <FaGlobe className="goal-icon" />
              <p>Expand reach across KSA</p>
            </div>
            <div className="goal-item">
              <FaTrophy className="goal-icon" />
              <p>Be known as one of the top MEP and contracting firms in the country</p>
            </div>
          </div>
        </div>
        <div className="corner-accent bottom-left"></div>
      </section>
    </div>
  );
}

export default About; 