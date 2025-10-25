import React from 'react';
import { portfolioConfig } from '../data/config';

const Education = () => {
  return (
    <section id="education" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary-custom">Education</h2>
            <div className="underline mx-auto bg-accent" style={{ width: '80px', height: '4px' }}></div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {portfolioConfig.education.map((edu, index) => (
              <div key={edu.id} className="card border-0 shadow-sm card-hover mb-4 stagger-item">
                <div className="card-body p-4">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                    <h5 className="card-title fw-bold text-primary-custom mb-2 mb-md-0">
                      {edu.degree}
                    </h5>
                    <span className="badge bg-primary-custom px-3 py-2">{edu.duration}</span>
                  </div>
                  
                  <h6 className="card-subtitle mb-0 text-muted fw-bold">
                    {edu.institution}
                  </h6>
                </div>
              </div>
            ))}
            
            {/* Certifications */}
            <div className="mt-5">
              <h3 className="fw-bold text-primary-custom text-center mb-4">Certifications</h3>
              
              <div className="row">
                {portfolioConfig.certifications.map((cert, index) => (
                  <div key={cert.id} className="col-md-6 mb-3 stagger-item">
                    <div className="card border-0 shadow-sm card-hover h-100">
                      <div className="card-body text-center p-4">
                        <div className="mb-3">
                          <i className="fas fa-certificate text-warning fs-1"></i>
                        </div>
                        <h5 className="card-title fw-bold text-primary-custom">{cert.name}</h5>
                        <p className="card-text">{cert.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;