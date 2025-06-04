// LogoComponent.js

import React from 'react';
import LogoImage from './assets/logomark.jpeg'; // Adjust the path to your logo image
import "./LogoComponent.css"

const LogoComponent = () => {
  return (
    <img src={LogoImage} alt="Logo" className="logo" />
  );
};

export default LogoComponent;
