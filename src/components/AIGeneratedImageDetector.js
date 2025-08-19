// src/components/AIGeneratedImageDetector.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './AIGeneratedImageDetector.css';
import NewWATTokenRenderer from './NewWATTokenRenderer';
import WATTokenRenderer from './WATTokenRenderer';
import ProblemSolvingRenderer from './ProblemSolvingRenderer';
import FeaturesRenderer from './FeaturesRenderer';
import ImpactRenderer from './ImpactRenderer';
import FadeInSection from './FadeInSection';
import './wat-token.css';
import { Link } from 'react-router-dom';

const BankingCard = ({ title, description, link, img, className = '' }) => {
  const isExternal = link?.startsWith('http');

  const content = (
    <div className={`banking-card ${className}`}>
      {img && <img src={img} alt={`${title} logo`} className="card-logo" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return isExternal ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="banking-card-link">
      {content}
    </a>
  ) : (
    <Link to={link} className="banking-card-link">
      {content}
    </Link>
  );
};


const AIGeneratedImageDetector = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false); // ⬅️ NEW STATE

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload an image before submitting.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    setLoading(true); // ⬅️ START LOADING
    setResult(null);  // ⬅️ Clear previous result

    try {
      const response = await axios.post('http://localhost:5000/api/tb/detect-tb', formData);
      const data = response.data;
      console.log("Server response:", data);

      if (!data?.type || typeof data.type.ai_generated !== 'number') {
        throw new Error('Invalid response format from server');
      }

      setResult(data);
    } catch (error) {
      console.error('Error detecting AI generated image:', error);
      alert('Analysis failed. Please try again.');
    } finally {
      setLoading(false); // ⬅️ END LOADING
    }
  };

  return (
    <div className="ai-detector">
      <section className="hero" data-aos="fade-in">
        <div className="hero-content">
          <div className="hero-left">
            <div className="flip-container">
              <h2 className="flip-text">Diagnose TB</h2>
              <h2 className="flip-text">Saving Lives</h2>
            </div>
            <FadeInSection>
              <p>TB screening from chest X-rays using advanced AI models.</p>
            </FadeInSection>
            <FadeInSection>
              <p>Use on-site, in mobile clinics, or remotely from your device—empowering healthcare where it's needed most.</p>
            </FadeInSection>
            <form onSubmit={handleSubmit} className="image-form">
              <h2 id='heading_4_Upload'>Upload Normal Or TB Chest X-ray</h2>
              <input
                type="file"
                id="fileUploadLabel"
                aria-label="Upload X-ray"
                name="image"
                onChange={handleFileChange}
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Analyzing...' : 'Detect X-Ray'}
              </button>
            </form>

            {loading && (
              <div className="loader">
                <div className="spinner"></div>
                <p>Processing image, please wait...</p>
              </div>
            )}

            {result && (
              <div className="result">
                <h3>Screening Result</h3>
                <p className="result1">
                  TB Probability Score: <span className="probability">{result.type.ai_generated}%</span>
                </p>
              </div>
            )}
          </div>
          <div className="hero-right">
            <WATTokenRenderer />
          </div>
        </div>
      </section>

  <section className="card-section" data-aos="fade-in">
  <div className="card">
    <p className="card-paragraph">AI-Powered Healthcare Functions</p>
    <div className="healthcare-functions">
      <BankingCard
        title="Radiology Diagnostics"
        description="AI-driven chest X-ray and medical image interpretation."
        
      />
      <BankingCard
        title="Pathology Diagnostics"
        description="Microscopy slide digitization combined with CNNs enables high-throughput analysis of granulomas and bacilli morphology."
        
      />
      <BankingCard
        title="CAD-In-TB"
        description="Detecting with AUC accuracy at 98%."
        
      />
    </div>
  </div>

  {/* ✅ New Section for Triple M Radiologists */}
  <section className="card-section" data-aos="fade-in">
    <p className="card-paragraph">In Collaboration With:</p>
    <div className="healthcare-functions">
     <BankingCard
     title="Triple M Radiologists"
     description="3 branches across Eastern Cape, South Africa"
     link="https://www.triplemradiologists.co.za"
     img="/TripM-Logo-1024x408.png"
     className="triplem"
/>

    </div>
  </section>
</section>
  <section className="emergency-section" data-aos="fade-in">
  <h2>PACS Plugin for Emergency Department Use </h2>

  <div className="emergency-image-container">
    <img 
      src="/slide-1.5b1ff01.png" 
      alt="Emergency Use AI Detection" 
      className="emergency-image"
    />
  </div>
</section>

      <section className="wat-token-section" id="radiology" data-aos="fade-in">
        <h2>Radiology</h2>
        <div className="wat-token-content">
          <FadeInSection>
            <p>AI solutions to support clinicians in making quick and accurate diagnosis  decisions.</p>
            <p>With sensitivity and specificity rivaling board-certified radiologists. </p>
            <p>Our models support early diagnosis, reduce human variability, and ensure care in decentralized locations.</p>
          </FadeInSection>
          <NewWATTokenRenderer />
        </div>
      </section>

      <section className="problem-solving" id="pathology" data-aos="fade-in">
        <h2>Pathology</h2>
        <div className="section-content">
          <div className="section-left">
            <FadeInSection>
              <p id="iii">Our pathology AI solutions augment microscopic TB diagnosis through high-resolution image segmentation and object detection frameworks.
                Leveraging supervised and self-supervised learning</p>
            </FadeInSection>
      
            <div>
            <FeaturesRenderer />
            </div>
          </div>
        </div>
      </section>

      <section className="impact" id="CAD-In-TB" data-aos="fade-in">
        <div className="section-left"></div>
        <h2>CAD-In-TB</h2>
        <FadeInSection>
          <p id="ppp">Computer-Aided Detection in Tuberculosis (CAD-In-TB) is an essential innovation for early case finding and automated mass screening. Our AI engine, trained on global chest radiography cohorts, demonstrates an exceptional Area Under the Curve (AUC) of 0.98</p>
        </FadeInSection>
        <ImpactRenderer />
      </section>

      <section className="contact-section" id="contact" data-aos="fade-in">
        <h2>Contact & Offices</h2>
        <div className="contact-content">
          <div className="office">
            <h3>Our Team</h3>
            <p>Mbulelo Jr Qaba, IT Specialist (Founder), (Dipl. Information Technology) South Africa</p>
            <p>mbulelojuniorqaba@healthdetect-ai.com</p>
            
          </div>
          
          <div className="office">
            <h3>Head Office</h3>
            <p>69 Thomas Street, King William's Town</p>
            <p>Email: info@healthdetect-ai.com</p>
            <p>Phone: 075 100 5524</p>
            
          </div>
          <div className="office">
            <h3>Investor Relations</h3>
            <p>Email:investor@healthdetect-ai.com</p>
            <p>Phone: 075 100 5524</p>
          </div>
        </div>
      </section>

      <section className="footsection" data-aos="fade-in">
        <p>&copy; 2025 Healthdetect.ai. Empowering TB detection worldwide.</p>
      </section>
    </div>
  );
};

export default AIGeneratedImageDetector;
