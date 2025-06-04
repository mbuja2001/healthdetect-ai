import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import "./components/foot.css"


import AIGeneratedImageDetector from './components/AIGeneratedImageDetector';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FutureOfSearch from './components/FutureOfSearch';
import Web3AndBlockchain from './components/Web3AndBlockchain';
import AddressingChallenges from './components/AddressingChallenges';
import CoreBeliefSystems from './components/CoreBeliefSystems'
import SearchEngineMarket from './components/SearchEngineMarket';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<AIGeneratedImageDetector />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/future-of-search" element={<FutureOfSearch />} />
          <Route path="/web3-and-blockchain" element={<Web3AndBlockchain />} />
          <Route path="/addressing-challenges" element={<AddressingChallenges />} />
          <Route path="/data-privacy" element={<CoreBeliefSystems />} />
          <Route path="/search-engine-market-research" element={<SearchEngineMarket />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
