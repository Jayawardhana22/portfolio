import React from 'react';
import { portfolioConfig } from '../data/config';

const Hero = () => {
  return (
    <section id="home" className="gradient-dark text-white py-5" style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 fade-in">
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-accent">{portfolioConfig.personalInfo.name}</span>
            </h1>
            <h2 className="h3 mb-4">{portfolioConfig.personalInfo.title}</h2>
            <p className="lead mb-4">
              {portfolioConfig.profileSummary.substring(0, 150)}...
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-custom">
                View My Work
              </a>
              <a 
                href={portfolioConfig.personalInfo.resumeUrl} 
                className="btn btn-outline-custom border-white text-white"
                download
              >
                Download Resume
              </a>
            </div>
            <div className="mt-4 d-flex gap-3">
              <a 
                href={`https://${portfolioConfig.personalInfo.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href={`https://${portfolioConfig.personalInfo.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href={`mailto:${portfolioConfig.personalInfo.email}`} 
                className="text-white fs-4"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center fade-in">
            <div className="position-relative d-inline-block">
              <div 
                className="rounded-circle overflow-hidden border-5 border-white shadow-lg mx-auto"
                style={{ width: '350px', height: '350px' }}
              >
                {/* Profile image with fallback to initials */}
                <img 
                  src={portfolioConfig.personalInfo.profilePhoto} 
                  alt={portfolioConfig.personalInfo.name}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    // If image fails to load, show the initials fallback
                    e.target.style.display = 'none';
                    const fallback = e.target.nextElementSibling;
                    fallback.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-100 h-100 d-flex align-items-center justify-content-center gradient-primary"
                  style={{ display: 'none' }}
                >
                  <span className="display-1 text-white">
                    {portfolioConfig.personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="position-absolute top-0 start-100 translate-middle pulse">
                <div className="bg-accent rounded-circle d-flex align-items-center justify-content-center shadow"
                  style={{ width: '60px', height: '60px' }}
                >
                  <i className="fas fa-code text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;