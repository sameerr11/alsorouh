import React from 'react';
import '../assets/css/About.css';
import { FaHistory, FaUsers, FaTrophy, FaEye } from 'react-icons/fa';

function About() {
  return (
    <div className="about-container">
      {/* Header Section */}
      <section className="about-header">
        <div className="overlay"></div>
        <div className="header-content">
          <h1>About AL SOROUH GROUP</h1>
          <p>Building a Legacy of Excellence in Construction</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Our Story</h2>
              <p>
                Established in 2005, AL SOROUH GROUP has grown from a small local contractor to one of the region's most trusted construction companies. With a foundation built on integrity, quality, and client satisfaction, we have successfully completed hundreds of projects across residential, commercial, and industrial sectors.
              </p>
              <p>
                Our journey began with a simple mission: to deliver construction excellence through innovative solutions and unwavering commitment to quality. Today, we continue to uphold these values as we expand our portfolio and enhance our capabilities to meet the evolving needs of our clients.
              </p>
            </div>
            <div className="col-md-6 company-image">
              {/* This will be styled with CSS to show a company image */}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-container">
            <div className="value-card">
              <FaEye className="value-icon" />
              <h3>Vision</h3>
              <p>To be the leading construction company known for innovation, quality, and sustainable building practices.</p>
            </div>
            <div className="value-card">
              <FaTrophy className="value-icon" />
              <h3>Excellence</h3>
              <p>We strive for excellence in every project, from planning to execution, ensuring the highest standards of quality.</p>
            </div>
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>Teamwork</h3>
              <p>We foster collaboration and respect among our diverse team of professionals to achieve common goals.</p>
            </div>
            <div className="value-card">
              <FaHistory className="value-icon" />
              <h3>Integrity</h3>
              <p>We conduct our business with honesty, transparency, and ethical practices in all our relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="leadership-team">
        <div className="container">
          <h2 className="section-title">Our Leadership</h2>
          <div className="team-container">
            <div className="team-member">
              <div className="member-image member-1"></div>
              <h3>Mohammed Al-Sorouh</h3>
              <p className="member-title">Founder & CEO</p>
              <p>With over 25 years of experience in construction, Mohammed has led the company through significant growth while maintaining its core values.</p>
            </div>
            <div className="team-member">
              <div className="member-image member-2"></div>
              <h3>Sara Al-Hassan</h3>
              <p className="member-title">Chief Operations Officer</p>
              <p>Sara oversees all operational aspects, ensuring projects are delivered on time, within budget, and to the highest quality standards.</p>
            </div>
            <div className="team-member">
              <div className="member-image member-3"></div>
              <h3>Ahmed Al-Mansouri</h3>
              <p className="member-title">Technical Director</p>
              <p>Ahmed brings innovative engineering solutions to complex construction challenges, leading our technical excellence initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="milestones">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2005</h3>
                <p>AL SOROUH GROUP was founded with a focus on residential construction.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2010</h3>
                <p>Expanded into commercial construction and completed our first major office building project.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2015</h3>
                <p>Celebrated 10 years of excellence with over 100 successful projects completed.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2018</h3>
                <p>Received Industry Excellence Award for our commitment to quality and innovation.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2020</h3>
                <p>Launched sustainable construction initiative and completed our first green building project.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Present</h3>
                <p>Continuing to grow and evolve, setting new standards in the construction industry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 