import React from 'react';
import WATTokenImage from './assets/overlay_TB.160.png'
import './wat-token-image.css'


const WATTokenRenderer = () => {
  return (
    <div className="wat-token-renderer">
      <img src={WATTokenImage} alt="WAT Token" id="wat-token-image" />
    </div>
  );
};

export default WATTokenRenderer;
