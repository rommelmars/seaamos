import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/Events.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faClock, faUsers, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

// Import the local image file instead of using a stock photo URL
import bookFairImage from '../images/event3.png';

const Events = () => {
  const [loading, setLoading] = useState(true);
  const heroSectionRef = useRef(null);
  const navigate = useNavigate(); // Add this to enable navigation
  
  // Handle redirection to contact page
  const handleContactRedirect = () => {
    navigate('/contact');
  };

  // Single event - Manila International Book Fair
  const eventsData = [
    {
      id: 1,
      title: "Manila International Book Fair",
      description: "Join us for the Manila International Book Fair showcasing works from our published authors. Meet and greet your favorite authors, attend book signings, and discover new titles from around the world. This is the Philippines' longest-running book fair and the largest event for the publishing industry with hundreds of exhibitors featuring the latest books, educational materials, and multimedia content.",
      date: "September 14-18, 2025",
      time: "10:00 AM - 8:00 PM",
      location: "SMX Convention Center, Mall of Asia Complex, Manila",
      category: "book-fair",
      attendees: 500,
      image: bookFairImage,
      featured: true,
      registration: "https://seaamos.com/events/manila-book-fair-registration"
    }
  ];

  // Handle animation on scroll and page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      setLoading(false);
      if (heroSectionRef.current) {
        heroSectionRef.current.classList.add('animate');
      }
    }, 500);
  }, []);

  return (
    <div className={`events-page ${loading ? 'loading' : ''}`}>
      <Header />
      
      {/* Loading indicator */}
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      
      {/* Hero Section */}
      <div className="events-hero" ref={heroSectionRef}>
        <div className="events-hero-container">
          <h1 className="hero-title">Events & Gatherings</h1>
          <p className="hero-subtitle">Connect with fellow authors and industry professionals at Sea Amos events</p>
        </div>
      </div>
      
      {/* Featured Event Section */}
      <section className="featured-events-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Don't Miss Out</span>
            <h2>Featured Event</h2>
            <p>Join us for an exceptional opportunity to expand your literary journey</p>
            <div className="header-decoration">
              <span className="decoration-line"></span>
              <span className="decoration-icon">📖</span>
              <span className="decoration-line"></span>
            </div>
          </div>
          
          <div className="featured-events-list">
            {eventsData.map(featuredEvent => (
              <div className="featured-event-card" key={featuredEvent.id}>
                <div className="featured-event-content">
                  <div className="featured-badge">
                    <FontAwesomeIcon icon={faCalendarAlt} /> Upcoming Event
                  </div>
                  <h2>{featuredEvent.title}</h2>
                  <p className="event-description">{featuredEvent.description}</p>
                  <div className="event-details">
                    <div className="event-detail">
                      <div className="detail-icon">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </div>
                      <div className="detail-text">
                        <span className="detail-label">Dates</span>
                        <span className="detail-value">{featuredEvent.date}</span>
                      </div>
                    </div>
                    <div className="event-detail">
                      <div className="detail-icon">
                        <FontAwesomeIcon icon={faClock} />
                      </div>
                      <div className="detail-text">
                        <span className="detail-label">Time</span>
                        <span className="detail-value">{featuredEvent.time}</span>
                      </div>
                    </div>
                    <div className="event-detail">
                      <div className="detail-icon">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                      <div className="detail-text">
                        <span className="detail-label">Location</span>
                        <span className="detail-value">{featuredEvent.location}</span>
                      </div>
                    </div>
                    <div className="event-detail">
                      <div className="detail-icon">
                        <FontAwesomeIcon icon={faUsers} />
                      </div>
                      <div className="detail-text">
                        <span className="detail-label">Attendees</span>
                        <span className="detail-value">15,000+ Expected</span>
                      </div>
                    </div>
                  </div>
                  <div className="register-container">
                    <a href={featuredEvent.registration} className="register-button">
                      <span className="register-icon">
                        <FontAwesomeIcon icon={faTicketAlt} />
                      </span>
                      <span className="register-text">Register Now</span>
                    </a>
                  </div>
                </div>
                <div className="featured-event-image no-overlay">
                  <img src={featuredEvent.image} alt={featuredEvent.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Event Details Section */}
      <section className="event-details-section">
        <div className="details-container">
          <div className="details-header">
            <h2>Event Information</h2>
          </div>
          
          <div className="details-content">
            <div className="details-left">
              <h3>About the Manila International Book Fair</h3>
              <p>The Manila International Book Fair (MIBF) is the Philippines' longest-running and largest book fair. Established to promote reading awareness and book appreciation among Filipinos, it has now become the premier book event in the country.</p>
              <p>For over 40 years, MIBF has been bringing together publishers, writers, booksellers, and book lovers in a celebration of literature and the reading culture. With hundreds of exhibitors and tens of thousands of visitors each year, it's a perfect platform for authors to reach new readers.</p>
              
              <div className="fair-image-box">
                <img src="https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Book Fair" />
              </div>
            </div>
            
            <div className="details-right">
              <h3>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                What to Expect
              </h3>
              <ul className="details-list">
                <li>Author meet-and-greets and book signings with Sea Amos published authors</li>
                <li>One-on-one publishing consultations with Sea Amos representatives</li>
                <li>Author workshops and panel discussions on writing and publishing</li>
                <li>Networking opportunities with industry professionals and fellow authors</li>
                <li>Opportunity to showcase your manuscript to potential publishers</li>
                <li>Live readings and Q&A sessions with bestselling authors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Updated Newsletter Section with full-section particle effect on hover */}
      <section 
        className="events-newsletter" 
        onMouseEnter={() => document.querySelector('.newsletter-particles').classList.add('active')}
        onMouseLeave={() => document.querySelector('.newsletter-particles').classList.remove('active')}
      >
        <div className="container">
          <div className="newsletter-content">
            <h2>Ready to Join Us?</h2>
            <p>Get in touch with our team to learn more about our services and upcoming events</p>
            <button 
              className="get-started-button" 
              onClick={handleContactRedirect}
            >
              Get Started
            </button>
          </div>
        </div>
        
        {/* Separate particles container that covers the entire section */}
        <div className="newsletter-particles">
          {Array.from({ length: 30 }).map((_, i) => (
            <span 
              key={i} 
              className="section-particle"
              style={{
                '--x': `${Math.random() * 400 - 200}px`,
                '--y': `${Math.random() * 400 - 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `sectionParticleFloat ${1.5 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></span>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;