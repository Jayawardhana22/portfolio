import React from 'react';
import { portfolioConfig } from '../data/config';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary-custom">About Me</h2>
            <div className="underline mx-auto bg-accent" style={{ width: '80px', height: '4px' }}></div>
          </div>
        </div>
        
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card border-0 shadow-lg card-hover">
              <div className="card-body p-4">
                <p className="card-text fs-5">
                  {portfolioConfig.profileSummary}
                </p>
                
                <div className="mt-4">
                  <h5 className="fw-bold mb-3 text-primary-custom">What I Do</h5>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary-custom rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: '50px', height: '50px' }}
                        >
                          <i className="fas fa-laptop-code text-white"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0">Full Stack Development</h6>
                          <small className="text-muted">.NET Core + React</small>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: '50px', height: '50px' }}
                        >
                          <i className="fas fa-network-wired text-white"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0">Networking</h6>
                          <small className="text-muted">CCNA Certified</small>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: '50px', height: '50px' }}
                        >
                          <i className="fas fa-robot text-white"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0">AI Tools</h6>
                          <small className="text-muted">AI-driven Solutions</small>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-info rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: '50px', height: '50px' }}
                        >
                          <i className="fas fa-shield-alt text-white"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0">Cybersecurity</h6>
                          <small className="text-muted">Security Focused</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="ps-lg-5">
              <h4 className="fw-bold mb-4 text-primary-custom">Personal Information</h4>
              
              <div className="row mb-4">
                <div className="col-sm-6 mb-3">
                  <p className="mb-1">
                    <strong>Name:</strong> {portfolioConfig.personalInfo.name}
                  </p>
                </div>
                <div className="col-sm-6 mb-3">
                  <p className="mb-1">
                    <strong>Email:</strong> {portfolioConfig.personalInfo.email}
                  </p>
                </div>
                <div className="col-sm-6 mb-3">
                  <p className="mb-1">
                    <strong>Phone:</strong> {portfolioConfig.personalInfo.phone}
                  </p>
                </div>
                <div className="col-sm-6 mb-3">
                  <p className="mb-1">
                    <strong>Location:</strong> Sri Lanka
                  </p>
                </div>
              </div>
              
              <div className="mt-4">
                <a href="#contact" className="btn btn-custom me-3">Hire Me</a>
                <a 
                  href={portfolioConfig.personalInfo.resumeUrl} 
                  className="btn btn-outline-custom"
                  download
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;