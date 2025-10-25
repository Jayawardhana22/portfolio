import React from 'react';
import { portfolioConfig } from '../data/config';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: portfolioConfig.technicalSkills.languages,
      icon: "fas fa-code"
    },
    {
      title: "Backend",
      skills: portfolioConfig.technicalSkills.backend,
      icon: "fas fa-server"
    },
    {
      title: "Frontend",
      skills: portfolioConfig.technicalSkills.frontend,
      icon: "fas fa-palette"
    },
    {
      title: "Databases",
      skills: portfolioConfig.technicalSkills.databases,
      icon: "fas fa-database"
    },
    {
      title: "Tools",
      skills: portfolioConfig.technicalSkills.tools,
      icon: "fas fa-tools"
    },
    {
      title: "Networking",
      skills: portfolioConfig.technicalSkills.networking,
      icon: "fas fa-network-wired"
    }
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary-custom">Technical Skills</h2>
            <div className="underline mx-auto bg-accent" style={{ width: '80px', height: '4px' }}></div>
          </div>
        </div>
        
        <div className="row">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4 stagger-item">
              <div className="card border-0 shadow-sm card-hover h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <div className="bg-primary-custom rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{ width: '70px', height: '70px' }}
                    >
                      <i className={`${category.icon} text-white fs-4`}></i>
                    </div>
                  </div>
                  
                  <h5 className="card-title fw-bold text-primary-custom mb-3">{category.title}</h5>
                  
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="badge bg-secondary-custom text-white">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Soft Skills */}
        <div className="row mt-5">
          <div className="col-12 text-center mb-4">
            <h3 className="fw-bold text-primary-custom">Soft Skills</h3>
          </div>
          
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {portfolioConfig.softSkills.map((skill, index) => (
                <div key={index} className="bg-white rounded-pill shadow-sm px-4 py-2 d-flex align-items-center">
                  <i className="fas fa-check text-success me-2"></i>
                  <span className="fw-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;