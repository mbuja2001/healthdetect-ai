// components/Contact.js
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact">
      <header>
        <Link to="/">
          <h1>Web-Detective.ai</h1>
        </Link>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      
      <section>
        <h2>Contact Us</h2>
        <p>Form for users to send inquiries, provide feedback, or request support.</p>
      </section>
      
      {/* Add other sections: Contact Information */}
    </div>
  );
};

export default Contact;
