import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = ({ messages }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot ${isOpen ? 'open' : 'closed'}`}>
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        {isOpen ? 'Hide' : 'Show'} Chatbot
      </button>
      {isOpen && (
        <>
          <h2>Chatbot</h2>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className="chatbot-message">
                <span>{new Date().toLocaleTimeString()}</span> - {message}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbot;
