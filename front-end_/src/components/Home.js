// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import AIGeneratedImageDetector from './AIGeneratedImageDetector'; // Import the AI image detector component

const Home = () => {
  return (
    <div className="home">
\
      
      <section className="hero">
        <h2>Welcome to Web-Detective.ai</h2>
        <p>Empowering users to navigate the web with confidence.</p>
        {/* AI image detector component */}
        <AIGeneratedImageDetector />
        <Link to="/signup" className="cta-btn">Explore Beta Version</Link>
      </section>
      
      {/* Add other sections: Features, How It Works, Testimonials, Call-to-Action */}
    </div>
  );
};

export default Home;
