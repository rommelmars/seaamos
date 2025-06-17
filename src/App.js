import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Fulfillment from './pages/Fulfillment';
import Testimonials from './pages/Testimonials';
import Events from './pages/Events'; 
import Contact from './pages/Contact'; // Import the new Contact component
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-fulfillment" element={<Fulfillment />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} /> {/* Add route for Contact page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;