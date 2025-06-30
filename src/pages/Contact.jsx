import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faCheckCircle,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // Validation state
  const [errors, setErrors] = useState({});
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  
  // Refs for animation
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);
  
  // Handle loading animation
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 500);
    
    // Add animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe elements
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);
    if (mapRef.current) observer.observe(mapRef.current);
    
    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
      if (mapRef.current) observer.unobserve(mapRef.current);
    };
  }, []);
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (formData.phone && !/^\+?[0-9\s\-()]+$/.test(formData.phone)) {
      tempErrors.phone = 'Phone number is invalid';
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      tempErrors.message = 'Message is too short';
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus('success');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className={`contact-page ${loading ? 'loading' : ''}`}>
      <Header />
      
      {/* Loading indicator */}
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're here to answer any questions you may have about our services
          </motion.p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Form */}
          <div className="form-container" ref={formRef}>
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="name">Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <div className="error-message">{errors.name}</div>}
                </div>
                
                <div className="input-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <div className="error-message">{errors.phone}</div>}
                </div>
                
                <div className="input-group">
                  <label htmlFor="subject">Subject <span className="required">*</span></label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && <div className="error-message">{errors.subject}</div>}
                </div>
              </div>
              
              <div className="form-group full-width">
                <div className="input-group">
                  <label htmlFor="message">Your Message <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <div className="error-message">{errors.message}</div>}
                </div>
              </div>
              
              <div className="form-footer">
                <p><span className="required">*</span> Required fields</p>
                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      <span>Sending...</span>
                    </>
                  ) : 'Send Message'}
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <p>Your message has been sent successfully!</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-alert">
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <p>There was an error sending your message. Please try again.</p>
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="info-container" ref={infoRef}>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>Reach out to us using any of the following methods:</p>
              
              {/* Contact Information - Updated for better alignment */}
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="info-text">
                    <h4>Our Location</h4>
                    <p className="location-text">164 Nangutta St, Towamba NSW 2550, Australia</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="info-text">
                    <h4>Phone Numbers</h4>
                    <p>
                      <a href="tel:+14102464277">+1 410 246 4277</a><br />
                      <a href="tel:+14107799561">+1 410 779 9561</a>
                    </p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="info-text">
                    <h4>Email Address</h4>
                    <p><a href="mailto:admin@seaamos.com">admin@seaamos.com</a></p>
                  </div>
                </div>
              </div>
              
              <div className="social-media">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="https://www.facebook.com/shshjnkjs" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="https://www.youtube.com/@seaamos" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="map-section" ref={mapRef}>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.762728299248!2d149.54503517613762!3d-37.04106134489876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b3c55a88598061d%3A0x5c7a76279572b23e!2s164%20Nangutta%20St%2C%20Towamba%20NSW%202550%2C%20Australia!5e0!3m2!1sen!2sus!4v1655893293696!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Sea Amos Location - Towamba NSW"
          ></iframe>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does it take to publish a book?</h3>
              <p>The publishing timeline depends on various factors including manuscript length, complexity, and required services. Typically, our process takes 2-4 months from manuscript submission to publication.</p>
            </div>
            
            <div className="faq-item">
              <h3>What publishing services do you offer?</h3>
              <p>We offer comprehensive publishing services including editing, proofr eading, cover design, interior formatting, ISBN registration, and distribution to major online retailers.</p>
            </div>
            
            <div className="faq-item">
              <h3>How much do your services cost?</h3>
              <p>Our pricing depends on the specific services required. We offer customized packages tailored to each author's needs. Contact us for a personalized quote.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer marketing services for authors?</h3>
              <p>Yes, we offer various marketing services including social media promotion, press releases, book trailers, and author website development to help maximize your book's visibility.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;