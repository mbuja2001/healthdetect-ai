// src/components/FeaturesRenderer.js

import React from 'react';
import FeaturesImage from './assets/lab.jpeg'; // Import the features image
import './NewWATTokenImage.css'
const FeaturesRenderer = () => {
  return (
    <div className="problem-solving">
      <img src={FeaturesImage} alt="Key Features" className="features-image" />
    </div>
  );
};

export default FeaturesRenderer;
