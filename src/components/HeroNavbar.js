// src/components/HeroNavbar.js
import React from 'react';

const HeroNavbar = ({ onToggle }) => {
  return (
    <div className="hero-navbar">
      <button onClick={onToggle}> Click to Toggle Features </button>
    </div>
  );
};

export default HeroNavbar;
