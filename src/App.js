import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Fulfillment from './pages/Fulfillment';
import Testimonials from './pages/Testimonials';
import Events from './pages/Events'; // Import the new Events component
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
          <Route path="/events" element={<Events />} /> {/* Add route for Events page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;