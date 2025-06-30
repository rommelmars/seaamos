import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import kayeImage from '../images/kaye.png';
import articaImage from '../images/artica.png';
import jonathanImage from '../images/jonathan.png';
import ignatiusImage from '../images/ignatius.png';
import moralesImage from '../images/morales.png';
import bettyImage from '../images/betty.jpeg';
import kennyImage from '../images/kenny.png'; // Added import for Kenny's image

const Testimonials = () => {
  const [loading, setLoading] = useState(true);
  const heroSectionRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Combined testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Kaye Joans",
      position: "Author of 'Whatever Happened to Vida Boheme?'",
      image: kayeImage,
      quote: "Everyone has been so amazingly accommodating of my financial ups and downs and they've all been so wonderful to work with, Addison especially. I love what I've been able to accomplish with everyone, it makes me so excited to see what the next couple of projects turn out to be. Especially for the Essex County Saga and Mourningstar because those are such important projects to me.",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      name: "Artica Burr",
      position: "Author of 'Precious Bloodline', 'Billy Bender and the Red Hot Ants', 'Monty's Magnificent Hairball'",
      image: articaImage,
      quote: "When Sea Amos BYOP Program was recommended to me by Addison, I cautiously tested the water by having one book republished. Not only did publishing move along as promised. The print-on-demand Sea Amos Be Your Own Publisher Program allows the author access to a personal site where royalties are accumulated as book orders are printed at Ingram locations. On scheduled dates, royalties are deposited in the author's choice of bank and account. Authors can change the price of the book and the discounts to retail outlets. Distribution is worldwide. This is refreshing. I have had two more books published with them since, and two more books are in, shall we say \"the Barbie\" process. All hail Sea Amos AU.",
      rating: 5,
      featured: true
    },
    {
      id: 3,
      name: "Jonathan Kithcart",
      position: "Author of 'Paul A Wise Master Builder without Tithe'",
      image: jonathanImage,
      quote: "Hello, this is Minster, Jonathan Kithcart taking this time to let everybody know that Sea Amos has really been a blessing to me in my time of need. Thankfully, this company made me aware of the previous company that had felled through the cracks without letting me know about the dire situation at hand. For my previous publisher was not there when I needed them, concerning the publication of my previous book. Then one day, one hour, one minute last year I got a call from Kyle Peters. He explained to me the opportunities as a book writer that his company had for me concerning the ownership of a publishing company in my name. Wow, I just couldn't hardly believe it but it was true and Kyle has been there for me all the way. showing me all the possibilities, not only as a manager, but as a Christian friend and brother that I could trust, and that he could trust going forward with this project that has been anointed from high from the Head Of the church, Jesus Christ by the will of the Father and the Spirit of Truth.",
      rating: 5,
      featured: true
    },
    {
      id: 4,
      name: "Fr. Ignatius Mary Okoroji",
      position: "Author of 'God's Foot is on the World'",
      image: ignatiusImage,
      quote: "Thank you so much Rebecca Lee. I'm delighted with the interview and the professional editing. May the Lord keep this door He has opened for the book on the mainstream media always open. I'm undeserving of His kindnesses.",
      rating: 5
    },
    {
      id: 5,
      name: "Morales Saintilus",
      position: "Author",
      image: moralesImage,
      quote: "Thanks to you, Rebecca Lee, for your incredible patience and dedication. Working with you has been an absolute pleasure, and I genuinely believe you are the best person I have ever had the privilege of collaborating with. You are the best person I have ever worked with. Thanks God for that. I hope you are able to help as many authors like me in the near future.",
      rating: 5
    },
    {
      id: 6,
      name: "Betty Swindle",
      position: "Author of 'The World's Greatest Possum Trainer'",
      image: bettyImage, // If you don't have this image yet, use a placeholder: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      quote: "I would like to bring to Sea Amos management's attention the great experience I have had thus far with Sea Amos Business Solutions. They have made the transition from a do-nothing publisher to a business I can be proud of to market my children's book and, hopefully, more books in the Be Your Own Publish program. Without my Client Relations Officer, Edward Miller, I would never have gotten though all the nooks and crannies of the republishing of my book. Edward has helped to solve every problem, calm all my nerves and cheered me on. He is so patient and passionate about working with me and I believe I have made a good friend for life. I was so excited to get an interview with Kate Delaney through your program and enjoyed that wonderful experience. The work and changes to my book are so in tune with my audience of children, parents, grandparents and teachers. The illustration department did an outstanding job of portraying my animals in life-like pictures. I am so pleased that Edward made that first phone call and launched me on this path.",
      rating: 5
    },
    {
      id: 7,
      name: "Kenny Harmon",
      position: "Author of 'Sad Papaw's Heritage'",
      image: kennyImage,
      quote: "Hello everyone, I'm Kenny \"Sad Papaw\" Harmon. My multiple 5 star book Sad Papaw's Heritage has recently been revised by Sea Amos Business Solutions. Belle Moore and her associates did an excellent job of creating Kenny Harmon Publishers! A woman from California said \"I love the book\" and I believe everybody that likes colonial and pioneer history will also be impressed! Sincerely Kenny Harmon",
      rating: 5,
      featured: true
    }
  ];

  // Animation handlers
  useEffect(() => {
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      setLoading(false);
      if (heroSectionRef.current) {
        heroSectionRef.current.classList.add('animate');
      }
    }, 500);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  // Render stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <FontAwesomeIcon 
        key={index} 
        icon={faStar} 
        className={index < rating ? 'star filled' : 'star'} 
      />
    ));
  };

  return (
    <div className={`testimonials-page ${loading ? 'loading' : ''}`}>
      <Header />
      
      {/* Loading indicator */}
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      
      {/* Hero Section */}
      <div className="testimonials-hero" ref={heroSectionRef}>
        <div className="testimonials-hero-container">
          <h1 className="hero-title">Client Success Stories</h1>
          <p className="hero-subtitle">Read what our authors have to say about their experience with Seaamos</p>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <section className="testimonials-section" ref={testimonialsRef}>
        <div className="container">
          <div className="section-header">
            <h2>Author Testimonials</h2>
            <p>Our success is measured by the success of our authors</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div className={`testimonial-card ${testimonial.featured ? 'featured' : ''}`} key={testimonial.id}>
              {/* Author info moved above quote */}
              <div className="testimonial-author top">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="author-image" 
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="testimonial-content">
                <div className="testimonial-icon">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="testimonial-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to write your own success story?</h2>
            <p>Join our community of satisfied authors and take the first step toward publishing excellence.</p>
            <a href="/contact" className="cta-button">
              Start Your Publishing Journey <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;