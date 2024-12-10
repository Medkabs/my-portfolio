import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MatrixBackground from '../components/MatrixBackground';

function Home() {
  // State to track which set of pages to display
  const [showRedPill, setShowRedPill] = useState(false);
  const [showBluePill, setShowBluePill] = useState(false);
  const [matrixRunning, setMatrixRunning] = useState(true); // Control Matrix background

  // State for animation transitions
  const [redContentAnimation, setRedContentAnimation] = useState('');
  const [blueContentAnimation, setBlueContentAnimation] = useState('');

  // Morphing text effect variables
  const [textIndex, setTextIndex] = useState(0);
  const [morphFraction, setMorphFraction] = useState(1);
  const texts = [
    "Feel free to choose a pill.",
    "Make your choice and explore.",
    "Take a step into the journey.",
    "Pick your path to discover more.",
  ];
  const morphTime = 1; // 1-second morph effect

  // Handle toggling between the pills with animations
  const handleRedPillClick = () => {
    setShowRedPill(!showRedPill);
    setRedContentAnimation(showRedPill ? 'fadeOut' : 'fadeIn');
    setShowBluePill(false); // Hide blue pill content
    setBlueContentAnimation(''); // Reset blue pill animation
    setMatrixRunning(false); // Stop Matrix effect on red pill click
  };

  const handleBluePillClick = () => {
    setShowBluePill(!showBluePill);
    setBlueContentAnimation(showBluePill ? 'fadeOut' : 'fadeIn');
    setShowRedPill(false); // Hide red pill content
    setRedContentAnimation(''); // Reset red pill animation
    setMatrixRunning(true); // Start Matrix effect on blue pill click
  };

  // Morphing text effect logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (morphFraction > 0) {
        setMorphFraction(morphFraction - 0.1); // Adjust for 1-second morph
      } else {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setMorphFraction(1); // Reset morph fraction
      }
    }, morphTime * 100); // Adjusted animation interval for 1 second

    return () => clearInterval(intervalId); // Cleanup the interval
  }, [morphFraction]);

  // Cleanup the animation state after animation finishes
  useEffect(() => {
    const timer = setTimeout(() => {
      setRedContentAnimation('');
      setBlueContentAnimation('');
    }, 500); // Reset animation state after the fadeIn/fadeOut duration
    return () => clearTimeout(timer);
  }, [redContentAnimation, blueContentAnimation]);

  return (
    <div className="home">
      {/* MatrixBackground component with controlled running state */}
      <MatrixBackground running={matrixRunning} />

      <h1>Welcome to My Portfolio</h1>
      <p className="typed-text">
        Hello, My name is Mohamed Kaba, thank you for visiting my personal website! But Beware of the Matrix!!!
      </p>

      {/* Morphing paragraph */}
      <div id="container">
        <span id="text1" style={{ opacity: morphFraction }}>
          {texts[textIndex % texts.length]}
        </span>
        <span
          id="text2"
          style={{
            opacity: 1 - morphFraction,
            filter: `blur(${Math.min(8 / (1 - morphFraction) - 8, 100)}px)`,
          }}
        >
          {texts[(textIndex + 1) % texts.length]}
        </span>
      </div>

      {/* Red pill button (Portfolio, Resume, Contact) */}
      <button className="pill-button red-pill" onClick={handleRedPillClick}>
        💊 Red Pill 💊
      </button>

      {/* Blue pill button (Gallery, Interests, Biography) */}
      <button className="pill-button blue-pill" onClick={handleBluePillClick}>
        💊 Blue Pill 💊
      </button>

      {/* Conditionally render the corresponding links for the selected pill */}
      {showRedPill && (
        <div className={`red-pill-content ${redContentAnimation} ${showRedPill ? 'show' : ''}`}>
          <h3>This pill gives you access to pages:</h3>
          <ul>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}

      {showBluePill && (
        <div className={`blue-pill-content ${blueContentAnimation} ${showBluePill ? 'show' : ''}`}>
          <h3>This pill gives you access to pages:</h3>
          <ul>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/interests">Interests</Link></li>
            <li><Link to="/biography">Biography</Link></li>
          </ul>
        </div>
      )}

      {/* Footer */}
      <footer>
        <p>© 2024 Mohamed Kaba. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
