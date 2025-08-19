import React from 'react';
import { Link } from 'react-router-dom';
import './AIGeneratedImageDetector.css'; 

const About = () => {
  return (
    <div className="ai-detector">

      <section className='hero'>
        <h2>About Us</h2>
        <p>Web-Detective.ai is an innovative platform that leverages advanced artificial intelligence technology to provide users with a unique browsing experience. Our mission is to empower users to discern reliable information from dubious sources, promote critical thinking, and enhance digital literacy skills.</p>
        <p>With a focus on user-centric design and cutting-edge technology, Web-Detective.ai offers a unique browsing experience that enables users to navigate the web with confidence and efficiency.</p>
        <h3>Our Values</h3>
        <p>  Trustworthiness: We prioritize the credibility of information and strive to provide users with reliable content.</p>
        <p>  Innovation: We are committed to leveraging the latest AI technology to revolutionize the way users interact with online content.</p>
        <p>  Empowerment: We empower users to make informed decisions by providing tools and resources to navigate the digital landscape.</p>
        <p>  Transparency: We believe in transparency and accountability in our operations and interactions with users.</p>
        <h3>Our Vision</h3>
        <p>At Web-Detective.ai, we envision a future where misinformation and fake content are no longer barriers to accessing accurate information online. We strive to create a digital environment where users can trust the information they consume and engage with online content responsibly.</p>
      </section>
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

export default About;
