import React from 'react';
import { portfolioConfig } from '../data/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              &copy; {currentYear} {portfolioConfig.personalInfo.name}. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a 
                href={`https://${portfolioConfig.personalInfo.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="fab fa-github fs-5"></i>
              </a>
              <a 
                href={`https://${portfolioConfig.personalInfo.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="fab fa-linkedin fs-5"></i>
              </a>
              <a 
                href={`mailto:${portfolioConfig.personalInfo.email}`} 
                className="text-white"
              >
                <i className="fas fa-envelope fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;