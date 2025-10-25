import React, { useState } from 'react';
import { portfolioConfig } from '../data/config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with EmailJS or Formspree
    alert('Message sent! In a real implementation, this would send an email.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-5 gradient-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Get In Touch</h2>
            <div className="underline mx-auto bg-accent" style={{ width: '80px', height: '4px' }}></div>
            <p className="lead mt-3">I'm always open to discussing new opportunities</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-accent rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: '50px', height: '50px' }}
                >
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-0">Location</h5>
                  <p className="mb-0">Sri Lanka</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-accent rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: '50px', height: '50px' }}
                >
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-0">Email</h5>
                  <p className="mb-0">{portfolioConfig.personalInfo.email}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-accent rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: '50px', height: '50px' }}
                >
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-0">Phone</h5>
                  <p className="mb-0">{portfolioConfig.personalInfo.phone}</p>
                </div>
              </div>
            </div>
            
            <div className="d-flex gap-3 mt-4">
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
          
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label text-dark">Your Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label text-dark">Your Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label text-dark">Subject</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-dark">Message</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-custom">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;