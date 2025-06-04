// AIGeneratedImageDetector.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AIGeneratedImageDetector.css'; // Import CSS file for component styling
import Footer from './Footer';

const AIGeneratedImageDetector = () => {
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

  useEffect(() => {
    // Add scroll event listener to handle animations
    const handleScroll = () => {
      // Add animations here based on scroll position
      // Example: change opacity, transform property, etc.
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="ai-detector">
      <section className="hero">
        <h2>Say No to Misinformation</h2>
        <p>Search the web with confidence.</p>
        <p>Web-Detective.ai is your trusted ally in the fight against targeted Ads and cookies, misinformation, fake content, and digital manipulation.</p>
        <p>With our advanced AI technology, you can use our web-search browser and uncover the truth behind online content and make informed decisions.</p>
        {/* AI image detector form */}
        <form onSubmit={handleSubmit} >
          <h2>Test Our Beta AI Image Detector</h2>
          <input type="file" id="fileUploadLabel" name="image" onChange={handleFileChange} />
          <button type="submit">Detect AI Image</button>
        </form>
        {result && (
          <div>
            <h3>Detection Result:</h3>
            <p>Likelihood of this image being AI generated is: <span className="probability">{result.type.ai_generated} %</span></p>
          </div>
        )}
      </section>

      <section className="problem-solving">
        <h2>Why Web-Detective.ai?</h2>
        <p>With the proliferation of misinformation and fake content online, it's becoming increasingly challenging to discern what's true and what's not.</p>
        <p>Web-Detective.ai provides a solution to this problem by leveraging advanced AI technology to verify content credibility, detect AI-generated content, and empower users to navigate the web with confidence.</p>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Content Verification</li>
          <li>Source Credibility Assessment</li>
          <li>AI Detection</li>
          <li>Privacy-based Web Search</li>
          <li> Web-Search Chatbot</li>
          <li> Web3 & Blockchain Dapps Protocol Access</li>
          

        </ul>
        <p>Discover reliable information, combat misinformation, and enhance your digital literacy skills with Web-Detective.ai.</p>
      </section>

      <section className="impact">
        <h2>Impact and Significance</h2>
        <p>Web-Detective.ai will emerge as valuable resource for individuals, organizations, and institutions seeking to navigate the complexities of the digital landscape.</p>
        <p>By promoting critical thinking, fact-checking, and digital literacy skills, the platform contributes to a more informed and discerning online community.</p>
      </section>

      <section className="future-directions">
        <h2>Future Directions</h2>
        <p>The development team behind Web-Detective.ai remains committed to ongoing enhancements and expansions of the platform.</p>
        <p>Future plans include the integration of desktop and mobile platforms, collaborative filtering mechanisms for user-generated content validation, and the introduction of educational resources to empower users with knowledge and skills for responsible online engagement.</p>
      </section>

      {/* Footer section */}
      <section className="footsection">
        <p>&copy; 2024 Web-Detective.ai. All rights reserved.</p>
        <div className="social-media">
        
        <ul>
          <li><a href="https://web.facebook.com/profile.php?id=61559479599786&sk=about">Facebook</a></li>
          <li><a href="https://www.instagram.com/webdetective.ai/">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/web-detectiveai-a59917309/">LinkedIn</a></li>
          <li><a href="https://tiktok.com/@webdetective_ai">TikTok</a></li>
          <li><a href="https://www.youtube.com/channel/UC_aWUSSenznFi6JcSozhD_Q">YouTube</a></li>
          <li><a href="https://discord.com/channels/1239916904429129768/1239916904429129771">Discord</a></li>
        </ul> 
        </div>
        </section>
      </div>
  );
};

export default AIGeneratedImageDetector;

