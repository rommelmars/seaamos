import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Function to handle smooth scroll to top
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <img src={logo} alt="Sea Amos Logo" className="footer-logo" />
            <div className="social-links">
              <a 
                href="https://www.facebook.com/shshjnkjs" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a 
                href="https://www.youtube.com/@seaamos" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>SERVICES</h4>
            <ul className="footer-links">
              <li><Link to="/services">General Virtual Assistant</Link></li>
              <li><Link to="/services">BYOP Program</Link></li>
              <li><Link to="/services">Social Media Marketing</Link></li>
              <li><Link to="/services">Book Trailer</Link></li>
              <li><Link to="/service-fulfillment">Service Fulfillment</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>NAVIGATION</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>CONTACT US</h4>
            <ul className="footer-links">
              <li><Link to="/contact">Call Us</Link></li>
              <li><Link to="/contact">Email Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {currentYear} Sea Amos Business Center. All Rights Reserved.</p>
        </div>
        
        <div className="footer-bottom">
          <a href="#" className="back-to-top" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;