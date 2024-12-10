import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';

// Import page components
import Home from './pages/Home';
import Biography from './pages/Biography';
import Interests from './pages/Interests';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

// Import MatrixBackground component
import MatrixBackground from './components/MatrixBackground';

function App() {
  const [pageTransition, setPageTransition] = useState('');
  const location = useLocation();

  const handlePageTransition = () => {
    setPageTransition('page-glitch');
    setTimeout(() => {
      setPageTransition('');
    }, 800); // Duration of glitch effect
  };

  return (
    <div className={`app ${pageTransition}`}>
      {/* Conditionally render the MatrixBackground */}
      {(location.pathname === '/' ||
        location.pathname === '/interests' ||
        location.pathname === '/portfolio' ||
        location.pathname === '/contact') && <MatrixBackground />}

      <nav className="navbar">
        <ul>
          <li><Link to="/" onClick={handlePageTransition}>Home</Link></li>
          <li><Link to="/biography" onClick={handlePageTransition}>Biography</Link></li>
          <li><Link to="/interests" onClick={handlePageTransition}>Interests</Link></li>
          <li><Link to="/resume" onClick={handlePageTransition}>Resume</Link></li>
          <li><Link to="/portfolio" onClick={handlePageTransition}>Portfolio</Link></li>
          <li><Link to="/gallery" onClick={handlePageTransition}>Gallery</Link></li>
          <li><Link to="/contact" onClick={handlePageTransition}>Contact</Link></li>
        </ul>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  );
}

export default AppWrapper;
