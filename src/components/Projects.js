import React from 'react';
import { portfolioConfig } from '../data/config';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary-custom">My Projects</h2>
            <div className="underline mx-auto bg-accent" style={{ width: '80px', height: '4px' }}></div>
            <p className="lead mt-3">Here are some of my recent projects</p>
          </div>
        </div>
        
        <div className="row">
          {portfolioConfig.projects.map((project, index) => (
            <div key={project.id} className="col-lg-6 mb-4 stagger-item">
              <div className="card border-0 shadow-lg card-hover h-100">
                <div 
                  className="card-img-top position-relative overflow-hidden"
                  style={{ height: '200px', background: `url(${project.image}) center/cover` }}
                >
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-primary-custom">{project.technologies[0]}</span>
                  </div>
                </div>
                
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-primary-custom">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  
                  <div className="mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="badge bg-light text-dark me-1 mb-1">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="d-flex justify-content-between mt-auto">
                    <a 
                      href={project.githubUrl} 
                      className="btn btn-sm btn-outline-custom"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github me-1"></i> Code
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="btn btn-sm btn-custom"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt me-1"></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;