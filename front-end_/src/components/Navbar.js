// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import LogoComponent from './LogoComponent';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo scrolling to top */}
        
          <LogoComponent />
      

        {/* Burger icon */}
        <div className="burger-menu" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'burger-line open line1' : 'burger-line line1'} />
          <span className={isMenuOpen ? 'burger-line open line2' : 'burger-line line2'} />
          <span className={isMenuOpen ? 'burger-line open line3' : 'burger-line line3'} />
        </div>

        {/* Navigation links */}
        <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
          <li><ScrollLink to="radiology" smooth duration={500} offset={-70}>Radiology</ScrollLink></li>
          <li><ScrollLink to="pathology" smooth duration={500} offset={-70}>Pathology</ScrollLink></li>
          <li><ScrollLink to="CAD-In-TB" smooth duration={500} offset={-70}>CAD-In-TB</ScrollLink></li>
          <li><ScrollLink to="contact" smooth duration={500} offset={-70}>Contact</ScrollLink></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
