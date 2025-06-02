import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import logo from '../images/logo.png';

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Alliance Logo" />
        </div>
        
        {/* Hamburger button for mobile */}
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        {/* Navigation menu */}
        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={closeMenu}>About Us</a></li>
            <li><a href="#services" className="nav-link" onClick={closeMenu}>Services</a></li>
            <li><a href="#testimonials" className="nav-link" onClick={closeMenu}>Testimonials</a></li>
            <li><a href="#events" className="nav-link" onClick={closeMenu}>Events</a></li>
            <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;