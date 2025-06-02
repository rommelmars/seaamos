import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';
import Footer from './Footer';
import welcomeImage from '../images/welcome.jpg';
import servicesImage from '../images/services.png';
import byopImage from '../images/byop.png';
import trailerImage from '../images/trailer.png';
import smmImage from '../images/smm.png';

const Home = () => {
  const welcomeRef = useRef(null);
  const servicesRef = useRef(null);
  const heroRef = useRef(null);
  
  useEffect(() => {
    // Add zoom-out animation class to hero section when component mounts
    if (heroRef.current) {
      setTimeout(() => {
        heroRef.current.classList.add('hero-animated');
      }, 100); // Short delay to ensure animation triggers after page load
    }
    
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
    <div className="home">
      {/* Hero Section with Zoom Animation */}
      <section className="hero" ref={heroRef}>
        <div className="hero-background"></div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title masked-text">
              Creating and empowering your brand with our marketing magic.<br />
              Where every story has a voice.
            </h1>
            <button className="cta-button">
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
      </section>

      {/* Welcome Section with Animation */}
      <section className="welcome" ref={welcomeRef}>
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-image">
              <img src={welcomeImage} alt="Sea Amos building" />
            </div>
            <div className="welcome-text">
              <h2 className="section-title">Sea Amos Business Center</h2>
              <p>
                Learn about our passionate team, our mission-driven approach, 
                and our unwavering dedication to helping you achieve your goals.
              </p>
              <a href="#about" className="welcome-button">
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
              <a href="#services" className="welcome-button services-button">
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
          
          <div className="services-cards-container">
            <div className="services-grid">
              <div className="service-card">
                <div className="service-image">
                  <img src={byopImage} alt="BYOP Program" />
                </div>
                <h3>BYOP Program</h3>
                <button className="service-button">View Details →</button>
              </div>
              
              <div className="service-card">
                <div className="service-image">
                  <img src={trailerImage} alt="Book Trailer" />
                </div>
                <h3>Book Trailer</h3>
                <button className="service-button">View Details →</button>
              </div>
              
              <div className="service-card">
                <div className="service-image">
                  <img src={smmImage} alt="Social Media Manager" />
                </div>
                <h3>Social Media Manager</h3>
                <button className="service-button">View Details →</button>
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