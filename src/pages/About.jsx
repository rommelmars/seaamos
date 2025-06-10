import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/About.css';
import aboutImage from '../images/about-image.png';
import missionImage from '../images/mission.jpg';
import visionImage from '../images/vision.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faLightbulb, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  // Add ref for the hero section
  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const missionSectionRef = useRef(null);
  const visionSectionRef = useRef(null);
  const valuesSectionRef = useRef(null);

  // Add refs for value cards
  const valueCardRefs = useRef([]);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Make the hero animation more reliable
    setTimeout(() => {
      if (heroSectionRef.current) {
        heroSectionRef.current.classList.add('animate');
      }
    }, 200); // Increased from 100ms to 200ms for more reliability
    
    // Create an observer for animations with different thresholds based on device size
    const observerOptions = {
      threshold: window.innerWidth <= 768 ? 0.1 : 0.2, // Lower threshold for mobile
      rootMargin: window.innerWidth <= 768 ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a small delay to ensure the animation starts after the section is visible
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all sections
    const sections = [
      aboutSectionRef.current,
      missionSectionRef.current,
      visionSectionRef.current,
      valuesSectionRef.current
    ];
    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });
    
    // Observe all value cards
    const valueCards = valueCardRefs.current;
    valueCards.forEach(card => {
      if (card) observer.observe(card);
    });
    
    // Clean up observer
    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
      valueCards.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // Add this to your component
  useEffect(() => {
    // Ensure animations trigger if the page is loaded scrolled down
    const checkInitialVisibility = () => {
      const sections = [
        aboutSectionRef.current,
        missionSectionRef.current,
        visionSectionRef.current,
        valuesSectionRef.current
      ];
      
      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (rect.top < windowHeight * 0.8) {
            section.classList.add('animate');
          }
        }
      });
    };
    
    // Check visibility after a small delay to ensure page is fully rendered
    setTimeout(checkInitialVisibility, 300);
  }, []);

  return (
    <div className="about-page">
      <Header />
      
      <div className="about-hero" ref={heroSectionRef}>
        <div className="about-hero-container">
          <h1 className="hero-title">About Us</h1>
        </div>
      </div>

      <section className="about-company" ref={aboutSectionRef}>
        <div className="container">
          <div className="about-grid">
            <div className="about-content slide-right">
              <h2>About the Company</h2>
              <div className="separator"></div>
              <p>
                At our company, we offer a diverse range of services to meet the needs of our clients. 
                Our marketing services are designed to help businesses and individuals increase their 
                brand awareness and reach their target audience through effective digital marketing strategies. 
                We offer services such as social media management, content creation, email marketing, 
                SEO, and PPC advertising to help our clients achieve their marketing goals.
              </p>
              <p>
                In addition to marketing services, we also provide book publication services to authors 
                and experts looking to share their knowledge and expertise with the world. We offer a 
                comprehensive range of publishing services, including manuscript editing, book design, 
                formatting, printing, and distribution, to help our clients publish high-quality books 
                that stand out in the market.
              </p>
              <p>
                Furthermore, we offer freelancing services such as virtual assistants to help businesses 
                and individuals manage their day-to-day tasks and operations. Our virtual assistants are 
                skilled professionals who can assist with tasks such as administrative support, customer 
                service, project management, social media management, and more.
              </p>
              <p>
                Overall, our services are designed to provide comprehensive solutions to our clients' needs, 
                whether they need marketing services to boost their visibility, book publication services to 
                share their knowledge, or freelancing services to streamline their operations.
              </p>
            </div>
            <div className="about-image slide-left">
              <img src={aboutImage} alt="Our Company" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section" ref={missionSectionRef}>
        <div className="container">
          <div className="mission-grid">
            <div className="mission-image">
              <img src={missionImage} alt="Our Mission" />
            </div>
            <div className="mission-content">
              <h2>Our Mission</h2>
              <div className="separator"></div>
              <p>
                Our mission is to provide a one-stop-shop for businesses and individuals looking for 
                freelancing, marketing services and book publication. We are dedicated to connecting 
                talented freelancers with clients who need their skills to achieve their business goals.
              </p>
              <p>
                Our marketing services are designed to help our clients reach their target audience and 
                increase their brand awareness, while also providing valuable insights into their customers' 
                needs and preferences. We also offer book publication services, allowing our clients to 
                share their knowledge and expertise with the world through professionally published books.
              </p>
              <p>
                Our ultimate goal is to help our clients succeed by providing them with high-quality, 
                customized solutions that meet their specific needs and exceed their expectations. We are 
                committed to fostering a collaborative and supportive community of freelancers and clients 
                who share our passion for excellence and success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="vision-section" ref={visionSectionRef}>
        <div className="container">
          <div className="vision-grid">
            <div className="vision-content">
              <h2>Our Vision</h2>
              <div className="separator"></div>
              <p>
                Our vision is to be a trusted partner to our clients and a reliable source of income and 
                support to our freelancers. We want to create a platform that fosters growth, learning, 
                and success for everyone involved in our community.
              </p>
            </div>
            <div className="vision-image">
              <img src={visionImage} alt="Our Vision" />
            </div>
          </div>
        </div>
      </section>

      <section className="values-section" ref={valuesSectionRef}>
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="separator"></div>
          <div className="values-grid">
            {[
              { icon: faHandshake, title: "Integrity", description: "We conduct our business with the highest standards of professionalism and ethics." },
              { icon: faLightbulb, title: "Innovation", description: "We strive to provide innovative solutions that meet the evolving needs of our clients." },
              { icon: faUsers, title: "Collaboration", description: "We believe in working closely with our clients to achieve their goals." },
              { icon: faStar, title: "Excellence", description: "We are committed to delivering exceptional quality in everything we do." }
            ].map((value, index) => (
              <div 
                key={index} 
                className="value-card"
                ref={el => valueCardRefs.current[index] = el}
              >
                <div className="value-icon">
                  <FontAwesomeIcon icon={value.icon} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;