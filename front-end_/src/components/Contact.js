// components/Contact.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Contact = () => {
  return (
    <div className="contact">
      <section>
        <h2>Contact Us</h2>
        <p>Form for users to send inquiries, provide feedback, or request support.</p>
      </section>
      
      {/* Add social media links */}
      <section className="article">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://web.facebook.com/profile.php?id=61559479599786&sk=about">Facebook</a></li>
          <li><a href="https://www.instagram.com/webdetective.ai/">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/web-detectiveai-a59917309/">LinkedIn</a></li>
          <li><a href="https://tiktok.com/@webdetective_ai">TikTok</a></li>
          <li><a href="https://www.youtube.com/channel/UC_aWUSSenznFi6JcSozhD_Q">YouTube</a></li>
          <li><a href="https://discord.com/channels/1239916904429129768/1239916904429129771">Discord</a></li>
        </ul>
      </section>
      
      {/* Add company information */}
      <section className="article">
        <h3>Company Information</h3>
        <p>Email: webdetectiveai.ai@gmail.com</p>

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

export default Contact;
