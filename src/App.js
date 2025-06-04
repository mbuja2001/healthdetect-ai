import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroNavbar from './components/HeroNavbar'; // Import HeroNavbar component

import AIGeneratedImageDetector from './components/AIGeneratedImageDetector';


const App = () => {
  return (
    <Router>
      <div className="App">
        <HeroNavbar /> {/* Include HeroNavbar component */}
        <Navbar />
        <Routes>
          <Route path="/" element={<AIGeneratedImageDetector />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
