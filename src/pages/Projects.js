import React, { useEffect, useState } from 'react';
import '../assets/css/Projects.css';
import { FaArrowRight, FaMapMarkerAlt, FaCalendarAlt, FaBuilding, FaTools, FaArrowLeft } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100
    });
    AOS.refresh();
  }, []);

  const projects = [
    {
      id: 1,
      name: "SACC (SAUDI CARGO)",
      category: "Commercial",
      location: "Riyadh, Saudi Arabia",
      year: "2023",
      description: "State-of-the-art cargo and logistics facility designed for maximum efficiency and operational excellence. This project encompasses comprehensive MEP works including advanced HVAC systems, electrical infrastructure, and smart building technologies.",
      services: ["Complete MEP Design", "HVAC Systems", "Electrical Infrastructure", "Fire Safety Systems", "Building Management Systems"],
      area: "50,000 sqm",
      value: "SAR 120 Million",
      duration: "18 months",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 2,
      name: "CVH REDASEA",
      category: "Healthcare",
      location: "Red Sea, Saudi Arabia",
      year: "2023",
      description: "Modern healthcare facility providing world-class medical services with cutting-edge technology and patient-centered design. Complete turnkey project including specialized medical MEP systems and safety installations.",
      services: ["Medical MEP Systems", "Specialized HVAC", "Medical Gas Systems", "Emergency Power", "Fire Suppression"],
      area: "25,000 sqm",
      value: "SAR 85 Million",
      duration: "24 months",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 3,
      name: "KNIGHT FRANK FITOUT",
      category: "Commercial Fitout",
      location: "Jeddah, Saudi Arabia",
      year: "2022",
      description: "Premium office fitout project featuring modern design elements, smart technologies, and energy-efficient systems. Custom interior solutions with high-end finishes and integrated building systems.",
      services: ["Interior Fitout", "MEP Installation", "Smart Office Systems", "Lighting Design", "HVAC Optimization"],
      area: "5,000 sqm",
      value: "SAR 15 Million",
      duration: "8 months",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 4,
      name: "BATTERJEE PHARMACEUTICAL FACTORY",
      category: "Industrial",
      location: "Dammam, Saudi Arabia",
      year: "2023",
      description: "Advanced pharmaceutical manufacturing facility with cleanroom environments, specialized ventilation systems, and compliance with international pharmaceutical standards. Complete MEP infrastructure for pharmaceutical production.",
      services: ["Cleanroom MEP", "Specialized HVAC", "Process Utilities", "Electrical Systems", "Validation Support"],
      area: "35,000 sqm",
      value: "SAR 200 Million",
      duration: "30 months",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 5,
      name: "MIDYECI AHMET RESTAURANT - RED SEA MALL",
      category: "Restaurant Fitout",
      location: "Red Sea Mall, Jeddah",
      year: "2022",
      description: "Elegant restaurant fitout combining traditional and modern design elements. Complete MEP works including kitchen ventilation, dining area comfort systems, and specialized restaurant equipment installations.",
      services: ["Restaurant MEP", "Kitchen Ventilation", "Dining HVAC", "Electrical Systems", "Fire Safety"],
      area: "1,200 sqm",
      value: "SAR 8 Million",
      duration: "6 months",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 6,
      name: "MATTEX CARPET MANUFACTURER FITOUT PROJECT",
      category: "Industrial Fitout",
      location: "Riyadh, Saudi Arabia",
      year: "2023",
      description: "Comprehensive fitout of carpet manufacturing facility with specialized production area MEP systems, quality control environments, and efficient workflow design. Complete industrial MEP installation.",
      services: ["Industrial MEP", "Production HVAC", "Power Distribution", "Compressed Air Systems", "Fire Protection"],
      area: "15,000 sqm",
      value: "SAR 35 Million",
      duration: "12 months",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  // Add/remove body class based on selected project
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('hide-navbar-content');
    } else {
      document.body.classList.remove('hide-navbar-content');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('hide-navbar-content');
    };
  }, [selectedProject]);

  // Listen for back button clicks from navbar
  useEffect(() => {
    const handleBackToProjects = () => {
      setSelectedProject(null);
      window.scrollTo(0, 0);
    };

    window.addEventListener('backToProjects', handleBackToProjects);
    
    return () => {
      window.removeEventListener('backToProjects', handleBackToProjects);
    };
  }, []);

  // If a project is selected, show the project detail page
  if (selectedProject) {
    return (
      <div className="project-detail-container">
        {/* Header Section */}
        <section className="project-detail-header" style={{backgroundImage: `url(${selectedProject.image})`}}>
          <div className="overlay"></div>
          <div className="header-content">
            <h1>{selectedProject.name}</h1>
            <p>{selectedProject.category} • {selectedProject.location}</p>
          </div>
        </section>

        {/* Project Details */}
        <section className="project-detail-content">
          <div className="container">
            <div className="project-info-grid">
              <div className="project-description" data-aos="fade-up">
                <h2>Project Overview</h2>
                <p>{selectedProject.description}</p>
                
                <h3>Services Provided</h3>
                <ul className="services-list">
                  {selectedProject.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-stats" data-aos="fade-up" data-aos-delay="200">
                <h3>Project Details</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <FaMapMarkerAlt className="stat-icon" />
                    <div>
                      <span className="stat-label">Location</span>
                      <span className="stat-value">{selectedProject.location}</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaCalendarAlt className="stat-icon" />
                    <div>
                      <span className="stat-label">Year</span>
                      <span className="stat-value">{selectedProject.year}</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaBuilding className="stat-icon" />
                    <div>
                      <span className="stat-label">Area</span>
                      <span className="stat-value">{selectedProject.area}</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaTools className="stat-icon" />
                    <div>
                      <span className="stat-label">Value</span>
                      <span className="stat-value">{selectedProject.value}</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaCalendarAlt className="stat-icon" />
                    <div>
                      <span className="stat-label">Duration</span>
                      <span className="stat-value">{selectedProject.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Main projects page with hero section and animated tabs
  return (
    <div className="projects-container">
      {/* Creative Hero Section */}
      <section className="projects-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-up">
            <h1>OUR PROJECTS</h1>
            <p>Excellence in Every Construction, Innovation in Every Solution</p>
            <div className="hero-accent-line"></div>
          </div>
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="300">
            <div className="hero-stat">
              <span className="stat-number">150+</span>
              <span className="stat-text">Completed Projects</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">98%</span>
              <span className="stat-text">Client Satisfaction</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">10+</span>
              <span className="stat-text">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Tabs Section */}
      <section className="projects-tabs">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">FEATURED PROJECTS</h2>
          <div className="tabs-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`project-tab tab-${index + 1}`}
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                onClick={() => handleProjectClick(project)}
              >
                <div className="tab-background" style={{backgroundImage: `url(${project.image})`}}></div>
                <div className="tab-overlay"></div>
                <div className="tab-content">
                  <div className="tab-category">{project.category}</div>
                  <h3 className="tab-title">{project.name}</h3>
                  <div className="tab-details">
                    <span className="tab-location">
                      <FaMapMarkerAlt /> {project.location}
                    </span>
                    <span className="tab-year">
                      <FaCalendarAlt /> {project.year}
                    </span>
                  </div>
                  <div className="tab-arrow">
                    <FaArrowRight />
                  </div>
                </div>
                <div className="tab-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;