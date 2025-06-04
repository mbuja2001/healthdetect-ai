// LogoComponent.js

import React from 'react';
import LogoImage from './assets/ChatGPT Image May 18, 2025, 05_35_16 AM.png'; // Adjust the path to your logo image
import "./LogoComponent.css"
import { Link as ScrollLink } from 'react-scroll'; // ✅ use react-scroll

const LogoComponent = () => {
  return (
    <img src={LogoImage} alt="Logo" className="logo" />
  );
};

export default LogoComponent;
