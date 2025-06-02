import React from 'react';
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
              <li><a href="#">General Virtual Assistant</a></li>
              <li><a href="#">BYOP Program</a></li>
              <li><a href="#">Social Media Marketing</a></li>
              <li><a href="#">Book Trailer</a></li>
              <li><a href="#">More Services</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>NAVIGATION</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>CONTACT US</h4>
            <ul className="footer-links">
              <li><a href="#">Call Us</a></li>
              <li><a href="#">Email Us</a></li>
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