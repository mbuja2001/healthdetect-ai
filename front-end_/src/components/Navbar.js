import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LogoComponent from './LogoComponent';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <LogoComponent />
        <Link to="/" className="navbar-logo">Web-Detective.ai</Link>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'line1-open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'line2-open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'line3-open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
