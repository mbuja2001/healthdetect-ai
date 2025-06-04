import React from 'react';
import NewWATTokenImage from './assets/Komani-Radiology-X-Ray-1.jpg'; 
import './NewWATTokenImage.css'
// Import the new WAT token image

// Define the NewWATTokenRenderer component
const NewWATTokenRenderer = () => {
  return (
    <div className="new-wat-token-renderer">
      <img src={NewWATTokenImage} alt="New WAT Token" id="new-wat-token-image" />
    </div>
  );
};

export default NewWATTokenRenderer;
