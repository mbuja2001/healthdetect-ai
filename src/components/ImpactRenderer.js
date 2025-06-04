// src/components/ImpactRenderer.js

import React from 'react';
import ImpactImage from './assets/virus.jpg'; // Import the impact image
import './impact-renderer.css'

const ImpactRenderer = () => {
  return (
    <div className="impact-renderer">
      <img src={ImpactImage} alt="Impact and Significance" className="impact-image" />
    </div>
  );
};

export default ImpactRenderer;
