import React, { useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Home.css';
import Header from './Header';
import Footer from './Footer';
import welcomeImage from '../images/welcome.jpg';
import servicesImage from '../images/services.png';
import byopImage from '../images/byop1.png';
import trailerImage from '../images/trailer1.png';
import smmImage from '../images/smm1.png';

const Home = () => {
  const welcomeRef = useRef(null);
  const servicesRef = useRef(null);
  const heroSectionRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate
  
  // Handle navigation to contact page
  const handleContactClick = () => {
    navigate('/contact');
  };
  
  // Handle navigation to about page
  const handleAboutClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigate('/about'); // Navigate to about page
  };
  
  // Handle navigation to services page
  const handleServicesClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigate('/services'); // Navigate to services page
  };
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Add hero animation
    setTimeout(() => {
      if (heroSectionRef.current) {
        heroSectionRef.current.classList.add('animate');
      }
    }, 200);
    
    // Create an Intersection Observer to detect when elements enter viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If the section is in view
        if (entry.isIntersecting) {
          // Determine which section is being observed
          const isWelcomeSection = entry.target.classList.contains('welcome');
          const isServicesSection = entry.target.classList.contains('services');
          
          if (isWelcomeSection) {
            // Add animation classes to welcome section elements
            const image = entry.target.querySelector('.welcome-image');
            const text = entry.target.querySelector('.welcome-text');
            const title = entry.target.querySelector('.section-title');
            const paragraph = entry.target.querySelector('.welcome-text p');
            const button = entry.target.querySelector('.welcome-button');
            
            // Add animations with slight delays
            if (image) image.classList.add('animate-slide-right');
            if (text) text.classList.add('animate-fade-in');
            if (title) title.classList.add('animate-fade-in');
            if (paragraph) paragraph.classList.add('animate-fade-in');
            if (button) button.classList.add('animate-fade-in');
          } 
          
          if (isServicesSection) {
            // Add animation classes to services section elements
            const text = entry.target.querySelector('.services-text');
            const title = entry.target.querySelector('.services-text .section-title');
            const paragraph = entry.target.querySelector('.services-text p');
            const button = entry.target.querySelector('.services-button');
            const image = entry.target.querySelector('.services-image');
            
            // Add animations for main services content
            if (text) text.classList.add('animate-slide-left');
            if (title) title.classList.add('animate-fade-in');
            if (paragraph) paragraph.classList.add('animate-fade-in');
            if (button) button.classList.add('animate-fade-in');
            if (image) image.classList.add('animate-slide-right');
            
            // Animate service cards with a staggered effect
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-card-up');
              }, 300 * index); // Stagger effect - each card animates 300ms after the previous one
            });
          }
          
          // Stop observing once animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15,  // Trigger when 15% of the element is visible
      rootMargin: '0px 0px -50px 0px'  // Trigger slightly before element comes into view
    });
    
    // Start observing sections
    if (welcomeRef.current) {
      observer.observe(welcomeRef.current);
    }
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    // Clean up the observer when component unmounts
    return () => {
      if (welcomeRef.current) {
        observer.unobserve(welcomeRef.current);
      }
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <div className="home-page">
      {/* Add Header component here */}
      <Header />
      
      {/* Hero Section */}
      <div className="home-hero" ref={heroSectionRef}>
        <div className="home-hero-container">
          <h1 className="hero-title">
            Empowering Authors and Publishers<br />
            <span>With Professional Publishing Solutions</span>
          </h1>
          <div className="button-container">
            <button className="cta-button" onClick={handleContactClick}>
              Get Started
              <div className="particles-field">
                {/* Generate 15 particles */}
                {Array.from({ length: 15 }).map((_, i) => (
                  <span 
                    key={i} 
                    className="particle"
                    style={{
                      '--x': `${Math.random() * 200 - 100}px`,
                      '--y': `${Math.random() * 200 - 100}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `particleFloat ${1 + Math.random() * 2}s linear infinite`
                    }}
                  ></span>
                ))}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Welcome Section with Animation - Updated for text visibility */}
      <section className="welcome" ref={welcomeRef}>
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-image">
              <img src={welcomeImage} alt="Sea Amos building" />
            </div>
            <div className="welcome-text">
              <h2 className="section-title">Sea Amos Business Center</h2>
              <p style={{display: 'block', marginBottom: '1.5rem', color: '#444'}}>
                Learn about our passionate team, our mission-driven approach, 
                and our unwavering dedication to helping you achieve your goals.
              </p>
              <a href="/about" className="welcome-button" onClick={handleAboutClick}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Animation */}
      <section className="services" ref={servicesRef}>
        <div className="container">
          <div className="services-content">
            <div className="services-text">
              <h2 className="section-title">What We Offer</h2>
              <p>
                Explore our comprehensive range of services tailored to meet your unique needs.
              </p>
              <a href="/services" className="welcome-button services-button" onClick={handleServicesClick}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                More Services
              </a>
            </div>
            <div className="services-image">
              <img src={servicesImage} alt="Our Services" />
            </div>
          </div>
          
          {/* Services Section with Animation - Updated Cards */}
          <div className="services-cards-container">
            <div className="services-grid">
              <div className="service-card">
                <div className="service-image">
                  <img src={byopImage} alt="BYOP Program" />
                </div>
                <div className="service-content">
                  <h3>BYOP Program</h3>
                  <button className="service-button" onClick={() => navigate('/services')}>View Details →</button>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-image">
                  <img src={trailerImage} alt="Book Trailer" />
                </div>
                <div className="service-content">
                  <h3>Book Trailer</h3>
                  <button className="service-button" onClick={() => navigate('/services')}>View Details →</button>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-image">
                  <img src={smmImage} alt="Social Media Manager" />
                </div>
                <div className="service-content">
                  <h3>Social Media Manager</h3>
                  <button className="service-button" onClick={() => navigate('/services')}>View Details →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;