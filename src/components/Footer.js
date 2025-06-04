// Footer.js
import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Web-Detective.ai. All rights reserved.</p>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
