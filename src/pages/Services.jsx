import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptop, faBook, faPenNib, faGlobe, 
  faEnvelope, faMicrophone, faNewspaper, faUsers,
  faBullhorn, faVideo, faCalendarAlt, faBookOpen, faHeadphones
} from '@fortawesome/free-solid-svg-icons';
import vaImage from '../images/va.png';
import byopImage from '../images/byop1.png';
import socialImage from '../images/social.png';
import trailerImage from '../images/trailer1.png';
import mibfImage from '../images/mibf.png';
import writingImage from '../images/writing.png';
import smmImage from '../images/smm1.png';
import websiteImage from '../images/website.png';
import queryImage from '../images/query.png';
import radioImage from '../images/radio.png';
import prImage from '../images/pr.png'; 
import audiobookImage from '../images/audiobook.png'; // Import the Audiobook image

const Services = () => {
  // References for animation
  const heroSectionRef = useRef(null);
  const servicesRef = useRef(null);
  const serviceCardRefs = useRef([]);

  // Services data array
  const servicesData = [
    {
      id: 1,
      title: "General Virtual Assistant",
      description: "We can provide a wide range of administrative, technical, and creative services to businesses and individuals. Here are some tasks that a general virtual assistant can perform: Administrative tasks, Customer service, Social media management, Content creation, Project management.",
      icon: faLaptop,
      image: vaImage // Use the imported image instead of placeholder
    },
    {
      id: 2,
      title: "BYOP Program",
      description: "This is a program for all the authors who want to publish their books and their royalty will go straight to their bank account.",
      icon: faUsers,
      image: byopImage // Use the imported image instead of placeholder
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "We can help clients save time and resources while still effectively reaching and engaging with their target audience on social media. We can also provide expertise and insights that our clients may not have in-house, helping them to develop more effective social media strategies and achieve better results.",
      icon: faBullhorn,
      image: socialImage // Use the imported image instead of placeholder
    },
    {
      id: 4,
      title: "Book Trailer",
      description: "We create a short video that promotes a book, similar to a movie trailer. Book trailers are often used by publishers and authors to generate interest in a new book and to give readers a preview of the story. Book trailers can be created in a variety of styles, from live-action to animation to simple text and graphics.",
      icon: faVideo,
      image: trailerImage // Use the actual image instead of placeholder
    },
    {
      id: 5,
      title: "Manila International Book Fair",
      description: "Manila International Book Fair is a platform for beneficial partnerships highlighting 200+ Local and International Exhibitors and attended by 160,000+ visitors consistently for the last 3 years!",
      icon: faCalendarAlt,
      image: mibfImage // Use the imported image instead of placeholder
    },
    {
      id: 6,
      title: "Content Writing",
      description: "Professional service that specializes in creating high-quality written content for businesses, organizations, or individuals.",
      icon: faPenNib,
      image: writingImage // Use the imported image instead of placeholder
    },
    {
      id: 7,
      title: "Social Media Manager",
      description: "Managing and executing social media strategies for businesses, organizations, or individuals. They play a crucial role in establishing and maintaining a strong social media presence, engaging with the target audience, and achieving marketing objectives.",
      icon: faUsers,
      image: smmImage // Use the imported image instead of placeholder
    },
    {
      id: 8,
      title: "Website Development",
      description: "We design and develop responsive, user-friendly websites optimized for both user experience and search engines to establish your professional online presence.",
      icon: faGlobe,
      image: websiteImage // Use the imported image instead of placeholder
    },
    {
      id: 9,
      title: "Query Letter",
      description: "Our experts craft compelling query letters that highlight your book's strengths and marketability to catch the attention of agents and publishers.",
      icon: faEnvelope,
      image: queryImage // Use the imported image instead of placeholder
    },
    {
      id: 10,
      title: "Radio Interview",
      description: "You can have a one on one talk with a reporter and talks about you and your books.",
      icon: faMicrophone,
      image: radioImage // Use the imported image instead of placeholder
    },
    {
      id: 11,
      title: "Press Release",
      description: "Press release marketing is a strategic approach used by businesses, organizations and authors to communicate news and information to the media, industry professionals, and the public.",
      icon: faNewspaper,
      image: prImage // Use the imported image instead of placeholder
    },
    {
      id: 12,
      title: "AudioBook",
      description: "Transform your written work into a professionally narrated audiobook that captivates listeners. Our production services include voice talent selection, high-quality recording, expert sound editing, and distribution to major platforms.",
      icon: faHeadphones,
      image: audiobookImage // Use the imported image instead of placeholder
    }
  ];

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add hero animation
    setTimeout(() => {
      if (heroSectionRef.current) {
        heroSectionRef.current.classList.add('animate');
      }
    }, 200);
    
    // Create observer for scroll animations
    const observerOptions = {
      threshold: window.innerWidth <= 768 ? 0.1 : 0.2,
      rootMargin: window.innerWidth <= 768 ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe services section
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    // Observe each service card for staggered animation
    serviceCardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });
    
    // Cleanup
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
      
      serviceCardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className="services-page">
      <Header />
      
      {/* Hero Section */}
      <div className="services-hero" ref={heroSectionRef}>
        <div className="services-hero-container">
          <h1 className="hero-title">Our Services</h1>
        </div>
      </div>
      
      {/* Services Section */}
      <section className="services-section" ref={servicesRef}>
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="separator"></div>
          <p className="section-description">
            Explore our comprehensive range of services tailored to meet your unique needs. 
            From strategic consulting to innovative solutions, we are here to empower your 
            business and propel it towards extraordinary success.
          </p>
          
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div 
                className="service-card" 
                key={service.id}
                ref={el => serviceCardRefs.current[index] = el}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {/* Learn More button removed */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Checkout our Service Fulfillment</h2>
          <p>See how we deliver exceptional results for our clients through our comprehensive process.</p>
          <Link to="/service-fulfillment" className="cta-button">View Service Fulfillment</Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;