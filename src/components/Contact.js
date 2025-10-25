import React, { useState, useRef } from 'react';
import { portfolioConfig } from '../data/config';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const formRef = useRef();

  // === REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS ===
  const EMAILJS_CONFIG = {
    serviceId: 'service_idrjjdh', // From EmailJS → Email Services
    templateId: 'template_13cxlkg', // From EmailJS → Email Templates  
    publicKey: 'V3t26QeabJDb_gpjl' // From EmailJS → Account → API Keys
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    emailjs.sendForm(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      formRef.current,
      EMAILJS_CONFIG.publicKey
    )
      .then((result) => {
        console.log('Message sent successfully!', result.text);
        setSubmitStatus('success');
        // Clear form
        setFormData({
          from_name: '',
          from_email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        // Clear status after 5 seconds
        setTimeout(() => setSubmitStatus(''), 5000);
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
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <i className="fas fa-check-circle me-2"></i>
                    <strong>Success!</strong> Your message has been sent. I'll get back to you soon!
                    <button type="button" className="btn-close" onClick={() => setSubmitStatus('')}></button>
                  </div>
                )}
                
                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    <strong>Error!</strong> Failed to send message. Please email me directly at {portfolioConfig.personalInfo.email}
                    <button type="button" className="btn-close" onClick={() => setSubmitStatus('')}></button>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="from_name" className="form-label text-dark fw-semibold">Your Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="from_name" 
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="from_email" className="form-label text-dark fw-semibold">Your Email *</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="from_email" 
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label text-dark fw-semibold">Subject *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label text-dark fw-semibold">Message *</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-custom btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </>
                    )}
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