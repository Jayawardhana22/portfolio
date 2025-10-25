import React from 'react';
import { portfolioConfig } from '../data/config';

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary-custom">Work Experience</h2>
            <div className="underline mx-auto bg-accent" style={{ width: '80px', height: '4px' }}></div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {portfolioConfig.workExperience.map((exp, index) => (
              <div key={exp.id} className="card border-0 shadow-sm card-hover mb-4 stagger-item">
                <div className="card-body p-4">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                    <h5 className="card-title fw-bold text-primary-custom mb-2 mb-md-0">
                      {exp.position}
                    </h5>
                    <span className="badge bg-primary-custom px-3 py-2">{exp.duration}</span>
                  </div>
                  
                  <h6 className="card-subtitle mb-3 text-muted fw-bold">
                    {exp.company}
                  </h6>
                  
                  <ul className="list-unstyled mb-0">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;