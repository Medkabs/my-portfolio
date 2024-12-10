import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/biography">Biography</Link></li>
        <li><Link to="/interests">Interests</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
