// src/components/AIImageDetector.js
import React, { useState } from 'react';
import axios from 'axios';
import './AIImageDetector.css';

const AIImageDetector = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5000/api/ai-generated-images/detect', formData);
      setResult(response.data);
    } catch (error) {
      console.error('Error detecting AI generated image:', error);
    }
  };

  return (
    <div className="ai-image-detector">
      <h2>Test Our Beta AI Image Detector</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" id="fileUploadLabel" name="image" onChange={handleFileChange} />
        <button type="submit">Detect AI Image</button>
      </form>
      {result && (
        <div>
          <h3>Detection Result:</h3>
          <p>Likelihood of this image being AI generated is: <span className="probability">{result.type.ai_generated} %</span></p>
        </div>
      )}
    </div>
  );
};

export default AIImageDetector;
