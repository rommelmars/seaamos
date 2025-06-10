import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/Fulfillment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// Import your book images
import book1Image from '../images/book1.png';
import book2Image from '../images/book2.png';
import book3Image from '../images/book3.png';
import book4Image from '../images/book4.png';
import book5Image from '../images/book5.png';
import book6Image from '../images/book6.png';
import book7Image from '../images/book7.png';
import book8Image from '../images/book8.png';
import book9Image from '../images/book9.png';
import book10Image from '../images/book10.png'; // Add book10 import

const Fulfillment = () => {
  // First shelf books
  const firstShelfBooks = [
    { id: 1, title: "Book 1", category: "BYOP Program", color: "#e74c3c", image: book1Image },
    { id: 2, title: "Book 2", category: "Author Services", color: "#3498db", image: book2Image },
    { id: 3, title: "Book 3", category: "Publishing Services", color: "#27ae60", image: book3Image },
    { id: 4, title: "Book 4", category: "Marketing Services", color: "#9b59b6", image: book4Image },
    { id: 5, title: "Book 5", category: "Editorial Services", color: "#f39c12", image: book5Image }
  ];
  
  // Second shelf books (using unique images for each book)
  const secondShelfBooks = [
    { id: 6, title: "Book 6", category: "Marketing Services", color: "#9b59b6", image: book6Image },
    { id: 7, title: "Book 7", category: "Editorial Services", color: "#f39c12", image: book7Image },
    { id: 8, title: "Book 8", category: "BYOP Program", color: "#e74c3c", image: book8Image },
    { id: 9, title: "Book 9", category: "Author Services", color: "#3498db", image: book9Image },
    { id: 10, title: "Book 10", category: "Publishing Services", color: "#27ae60", image: book10Image } // Changed from book3Image to book10Image
  ];
  
  // Combine all books for the modal navigation
  const allBooks = [...firstShelfBooks, ...secondShelfBooks];
  
  // States for viewing
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Refs for animations
  const heroSectionRef = useRef(null);
  const libraryRef = useRef(null);
  
  // Group items into shelves
  const bookShelves = [firstShelfBooks, secondShelfBooks];
  
  // Animations
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
    
    if (libraryRef.current) {
      observer.observe(libraryRef.current);
    }
    
    return () => {
      if (libraryRef.current) {
        observer.unobserve(libraryRef.current);
      }
    };
  }, []);
  
  // Open book modal
  const openBook = (book) => {
    setSelectedBook(book);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };
  
  // Close book modal
  const closeBook = () => {
    setSelectedBook(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  
  // Navigate to next or previous book
  const navigateBook = (direction) => {
    const currentIndex = allBooks.findIndex(book => book.id === selectedBook.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % allBooks.length;
    } else {
      newIndex = (currentIndex - 1 + allBooks.length) % allBooks.length;
    }
    
    setSelectedBook(allBooks[newIndex]);
  };
  
  return (
    <div className={`fulfillment-page ${loading ? 'loading' : ''}`}>
      <Header />
      
      {/* Loading indicator */}
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      
      {/* Hero Section */}
      <div className="fulfillment-hero" ref={heroSectionRef}>
        <div className="fulfillment-hero-container">
          <h1 className="hero-title">Service Fulfillment Library</h1>
          <p className="hero-subtitle">Browse our collection of successful projects and see how we deliver exceptional results</p>
        </div>
      </div>
      
      {/* Library Section */}
      <section className="library-section" ref={libraryRef}>
        <div className="library-background">
          <div className="library-container">
            {bookShelves.map((shelf, shelfIndex) => (
              <div className="bookshelf" key={`shelf-${shelfIndex}`}>
                <div className="shelf-top"></div>
                <div className="books-container">
                  {shelf.map((book) => (
                    <div
                      className="book-with-image"
                      key={book.id}
                      onClick={() => openBook(book)}
                    >
                      <div className="book-with-cover">
                        <img 
                          src={book.image} 
                          alt={book.title} 
                          className="book-cover-image" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="shelf-bottom"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Book Modal */}
      {selectedBook && (
        <div className="book-modal" onClick={closeBook}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeBook}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <div className="modal-book-display">
              <div className="book-preview">
                <div className="book-preview-cover">
                  <img 
                    src={selectedBook.image} 
                    alt={selectedBook.title} 
                    className="book-preview-image" 
                  />
                </div>
              </div>
            </div>
            
            <div className="modal-info">
              <h2>{selectedBook.title}</h2>
              <p className="category-tag">{selectedBook.category}</p>
              <p className="modal-description">
                This is a placeholder for the description of this fulfillment.
                You can replace this text with actual details about the project.
                When you add real content, you can describe the client's needs, 
                our approach, the solutions implemented, and the results achieved.
              </p>
            </div>
            
            {/* Navigation buttons */}
            <div className="navigation-buttons">
              <button className="nav-btn prev" onClick={() => navigateBook('prev')}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="nav-btn next" onClick={() => navigateBook('next')}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to experience our services?</h2>
          <p>Contact us today to discuss how we can help you achieve your goals.</p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Fulfillment;
