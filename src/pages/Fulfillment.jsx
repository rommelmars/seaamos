import React, { useEffect, useState, useRef, useCallback } from 'react';
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

const Fulfillment = () => {  // First shelf books
  const firstShelfBooks = [
    { 
      id: 1, 
      title: "The Adventures of Snook and Gator", 
      category: "BYOP Program", 
      color: "#e74c3c", 
      image: book1Image,
      description: "The Adventures of Snook and Gator take place in Snook's backyard. Snook takes Gator on adventures enchanted by her imagination. As Snook plays she imagines that she is in the jungle, and swimming in the lake, although the pictures reflect what is actually happening. Gator, a calm German short-hair pointer, calmly accompanies Snook as she adventures under the willow tree in her backyard."
    },
    { 
      id: 2, 
      title: "The Adventures of Snook and Gator: Too Many Bad Ideas", 
      category: "BYOP Program", 
      color: "#e74c3c", 
      image: book2Image,
      description: "The Adventures of Snook and Gator: Too Many Bad Ideas is yet another fun day with Snook and her mild mannered dog Gator. Snook takes the reader through an exciting day full of accidents and bad ideas. Snook shows the young reader exactly what happens when kids are not safe and good ideas turn into bad ones."
    },
    { 
      id: 3, 
      title: "The Adventures of Snook and Gator: Snook's Cool Idea for a Hot Day", 
      category: "BYOP Program", 
      color: "#e74c3c", 
      image: book3Image,
      description: "Snooks Cool Idea For A Hot Day is the third book in The Adventures Of Snook and Gator series. Snooks Cool Idea For A Hot Day is a fun read that will give children great tips for making the best of hot summer days. Throughout the story, Snook gives readers several important tips for playing in the summer sunshine."
    },
    { 
      id: 4, 
      title: "The Adventures of Snook and Gator: Snook Meets A Buddy", 
      category: "BYOP Program", 
      color: "#e74c3c", 
      image: book4Image,
      description: "The Adventures of Snook and Gator: Snook Meets A Buddy Snook Meets a Buddy is the 4th book in The Adventures of Snook of Gator. Snook happily teaches her readers the importance of understanding and communicating with Autistic peers. Snook's teacher gives her the very important job of supporting a new classmate. Snook Meets A Buddy is a perfect book to ignite a discussion with your student about respecting and befriending, their peers with learning differences. Snook learns about Autism Spectrum Disorder and demonstrates to young readers one of many ways they can interact with their peers with learning disabilities."
    },
    { 
      id: 5, 
      title: "Paul A Wise Master Builder Without the Tithe", 
      category: "Editorial Services", 
      color: "#f39c12", 
      image: book5Image,
      description: "Inside of my book you will see and understand THE CODE OF SILENCE and the reason why they that teach the so-called the New Testament tithe to the body of Christ, when they are asked \"Did the apostle Paul teach tithing to the church. For the apostle Paul said that ...\"I am appointed a preacher, and an apostle and a teacher of the Gentiles. (2 Tim 1:11) You will see and understand why Jesus never observed the law of tithing or His family nor John the Baptist; Also, in my book you will see and understand that the FIRST tabernacle was not constructed with the tithe (Ex. 35: 4-29; 36:3-7), nor the FIRST temple of Solomon. Giving from the heart by faith has always been what pleases the Lord. (2 Cor. 9:7) also consider what the scripture says, \"FOR IF THERE IS FIRST A WILLING MIND, IT IS ACCEPTED ACCORDING TO WHAT ONE HAS AND NOT ACCORDING TO WHAT HE DOES NOT HAVE. (2 Cor. 8:12)."
    }
  ];
  
  // Second shelf books (using unique images for each book)
  const secondShelfBooks = [
    { 
      id: 6, 
      title: "Vision: Going To The Next Level", 
      category: "BYOP Program", 
      color: "#e74c3c", 
      image: book6Image,
      description: "Born May 15, 1951, to Willie and Viola Revish, I attended Virginia Avenue Elementary and A.P. Hill Elementary School. A 1970 graduate of Peabody High School. I attended John Tyler Community College and in 1975, I transferred to Virginia State College (University) where I also became a member of the ETA chapter of Iota Phi Theta Fraternity, Incorporated. After leaving Virginia State College, I taught school at Peabody Junior High until I joined the United States Army where I served for 3/5 years after which, because of my devotion to students and education I taught school in Fairfax, VA for four years. Later, I worked at Petersburg Wastewater Treatment Plant, my job was testing water samples and read meters. In 2003, I married Katie B. Harris and on July 21, 1989, our son, Pearre Donta Revish was born. Now a student majoring in psychology and mass communication at John Tyler Community College, he celebrated a Spring 2012, graduation and is currently enrolled at Virginia State University."
    },
    { 
      id: 7, 
      title: "Destiny or Fate", 
      category: "BYOP Program", 
      color: "#e74c3c", 
      image: book7Image,
      description: "At the onset of governance by the United World Nation, the silence of the public was read as an acceptance of a leadership that was flawed in moral values and instilling impractical solutions. Common sense had fizzed away like a cold remedy tossed into a glass of water leaving ugliness to bubble to the surface. Tolerance on both sides grew thin skin that was rubbed raw. Even though coffee now was laced with a calmative, what brewed beneath the surface was the need to cast off the new government. The public recognized that solid values were the roots of a successful society. When unvalued and restricted, the public's sense of worth was indeed circling a drain. Many hoped to join the Revolutionary War if and when it approached their confined areas. The government had reduced elementary school to a primary indoctrination camp. When forced onto a precipice, truth, if it can be found, becomes the only platform to stand on. As a result of her objections, Jules Martain, had been demoted from teacher to factory worker. Elderly residents were disappearing, and she suspected that the college-educated would be the next group to be removed. Fear veined through her, but Jules refused to extinguish her candle flame of hope. Alone and unprotected, Jules instinctively understood escape was needed if survival was possible. With no viable plan, Jules knew if an opportunity arose, she would need to toss caution to the wind. For Jules, an unlikely chance suddenly arrives."
    },
    { 
      id: 8, 
      title: "Billy Bender and the Red Hot Ants: A tale from the \"Outer Worlds Collection\"", 
      category: "BYOP Program", 
      color: "#e74c3c", 
      image: book8Image,
      description: "When Billy and Sarah, plan to team up for the science fair, they soon find themselves embroiled in solving a mystery concerning the invasion of earth from an alien source. Billy's unusual pet mouse proves himself to be an indispensable third detective who helps them discover clues about the dangerous earth-changing element that lurks within the walls of their apartment complex. Hours count to minutes left as they unravel clues to help them attempt to bring the alien plot to a grinding halt. While the only weapon they have to rely on is their knowledge of science, they also learn to depend on their newfound friendship and rebuild a feeling of security within their families."
    },
    { 
      id: 9, 
      title: "Biblical and Non-Biblical Evidences For The Book of Mormon: That Show Its Validity As Scripture: A Layman's Thesis", 
      category: "BYOP Program", 
      color: "#e74c3c", 
      image: book9Image,
      description: "What about the Book of Mormon? That it is a controversial book cannot be denied. Many do not accept it as scripture. They believe that Joseph Smith, Jr., \"wrote\" it. They also believe that the Bible is the only scripture ever written, but nowhere does the Bible make that claim. This belief is not biblical. In fact, just the opposite is true. The Bible testifies to the existence of other written scriptures and specifically a second scripture written about the tribe of Joseph (Ezekiel 37:19). This Joseph is the same Joseph of the coat of many colors, the same Joseph sold into slavery in Egypt and the Same Joseph that saved Egypt and all of the tribes of Israel from the seven-year that occurred. Due to his lack of knowledge and education, if Joseph Smith, Jr., has written The Book of Mormon, it would have been disproven years ago. Instead, as time passes, more and more of it is proven to be correct. Joseph Smith could not have written it for many reasons, not the least of which is the fact that he was a barely literate man. He knew very little of the scriptures and no Hebrew at all. Yet The Book of Mormon is clearly written by highly educated men with a strong background in Hebrew customs and writing techniques, none of which were known by any American in the 1800s. More information on this subject will be explored within this book. This book was begun by the direction of the Holy Spirit and written to the entire body of Christ. Some might ask why they should read it. Some will read it to try to refute it; others will read it to learn and still, others will use it to further their own agendas. However, you should read it and pray over it, asking God through His Holy Spirit to give you a witness as to its validity."
    },
    { 
      id: 10, 
      title: "Monty's Magnificent Hairball", 
      category: "BYOP Program", 
      color: "#e74c3c", 
      image: book10Image,
      description: "When neighborhood cats indulge in their habit of gathering together to enjoy the warm California sunshine, like women getting together for a coffee klatch, the conversation between the cats includes their personal adventures and mishaps. Dory, the Himalayan cat with prior show ring experience, moderates the meet-ups of the twelve cats. Dory is the wisest of cats and a most trusted advisor to the rest of the Circle of Friends. While Monty has to belly up to his diet difficulties, Dory has the unexpected opportunity to lend a paw and be his life coach while guesting at Monty's house. As if Monty is not enough to deal with, the man in the human family fails to leave things well enough alone. He decides to toss in eight sticks of dynamite and explodes his family into a larger circle. Grab this book by the tale and enjoy a unique adventure."
    }
  ];
  
  // Combine all books for the modal navigation
  const allBooks = [...firstShelfBooks, ...secondShelfBooks];
  
  // States for viewing
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Refs for animations
  const heroSectionRef = useRef(null);
  const libraryRef = useRef(null);
  const interviewsRef = useRef(null);
  
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
    
    if (interviewsRef.current) {
      observer.observe(interviewsRef.current);
    }
    
    return () => {
      if (libraryRef.current) {
        observer.unobserve(libraryRef.current);
      }
      if (interviewsRef.current) {
        observer.unobserve(interviewsRef.current);
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
  
  // Add touch handling for modal navigation
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;
  
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      navigateBook('next');
    } else if (isRightSwipe) {
      navigateBook('prev');
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  }, []);
  
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
      
      {/* Library Section - with updated container */}
      <section className="library-section" ref={libraryRef}>
        <div className="library-background">
          <div className="library-container">
            {bookShelves.map((shelf, shelfIndex) => (
              <div className="bookshelf" key={`shelf-${shelfIndex}`}>
                <div className="shelf-top"></div>
                <div className="books-wrapper"> {/* Add this wrapper div */}
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
                </div>
                <div className="shelf-bottom"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Kate Delaney Interviews Section */}
      <section className="interviews-section" ref={interviewsRef}>
        <div className="interviews-container">
          <div className="interviews-header">
            <h2 className="interviews-title">Kate Delaney Interviews</h2>
            <p className="interviews-subtitle">Discover fascinating conversations with authors and thought leaders in our exclusive interview series with Emmy Award-winning broadcaster Kate Delaney.</p>
          </div>
          
          <div className="video-grid">
            <div className="video-card">
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/TJeHSMGzxac" 
                  title="Kate Delaney Interview" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <div className="video-info">
                <h3 className="video-title">Author Spotlight with Kate Delaney</h3>
                <p className="video-description">Join Kate as she explores the creative process and inspirations behind our featured author's latest work.</p>
              </div>
            </div>
            
            <div className="video-card">
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/toTVvtwr7vE" 
                  title="Kate Delaney Interview" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <div className="video-info">
                <h3 className="video-title">Publishing Insights with Kate</h3>
                <p className="video-description">Kate discusses the publishing journey and shares valuable insights for aspiring authors.</p>
              </div>
            </div>
            
            <div className="video-card">
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/JhHSWlJXbyE" 
                  title="Kate Delaney Interview" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <div className="video-info">
                <h3 className="video-title">Behind the Book</h3>
                <p className="video-description">Discover the inspiration and research that went into creating this remarkable literary work.</p>
              </div>
            </div>
            
            <div className="video-card">
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/zJMS4mXnlq4" 
                  title="Kate Delaney Interview" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <div className="video-info">
                <h3 className="video-title">The Author's Journey</h3>
                <p className="video-description">Kate explores the personal and professional journey that led our author to success.</p>
              </div>
            </div>
            
            <div className="video-card">
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/wAXJ3tG6Y54" 
                  title="Kate Delaney Interview" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <div className="video-info">
                <h3 className="video-title">Storytelling Techniques</h3>
                <p className="video-description">Learn about effective storytelling methods and how they shape compelling narratives.</p>
              </div>
            </div>
            
            <div className="video-card">
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/D1TmAktY_us" 
                  title="Kate Delaney Interview" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <div className="video-info">
                <h3 className="video-title">Literary Discussions</h3>
                <p className="video-description">Kate and our featured guest discuss literary influences and the current publishing landscape.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
