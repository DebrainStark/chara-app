import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // For any custom styles
import Header from './components/Header';
import Footer from './components/Footet';
import Home from './pages/Home';
import About from './pages/About'; 
import Services from './pages/Services';
import Contact from './pages/Contact';// Import Home instead of Hero
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add other routes here */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;