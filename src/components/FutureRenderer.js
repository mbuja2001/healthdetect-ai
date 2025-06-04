

import React from 'react';
import Future from './assets/future.jpeg'; // Import the features image

const FutureRenderer = () => {
  return (
    <div className="features-renderer">
      <img src={Future} alt="Future" className="future" />
    </div>
  );
};

export default FutureRenderer;
