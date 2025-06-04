// src/components/ProblemSolvingRenderer.js

import React from 'react';
import ProblemSolvingImage from './assets/USAID.png' 

const ProblemSolvingRenderer = () => {
  return (
    <div className="problem-solving-renderer">
      <img src={ProblemSolvingImage} alt="Problem Solving" className="problem-solving-image" />
    </div>
  );
};

export default ProblemSolvingRenderer;
