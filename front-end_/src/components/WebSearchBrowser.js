// src/components/WebSearchBrowser.js
import React, { useState } from 'react';
import axios from 'axios';


const WebSearchBrowser = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false); // Change this based on actual login status

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/websearch', { query });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error performing web search:', error);
    }
  };

  if (!userLoggedIn) {
    return <p>Please log in or register to perform new queries.</p>;
  }

  return (
    <div className="web-search-browser">
      <h2>Search the Web</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && (
        <div className="result-display">
          <h3>Search Results:</h3>
          {searchResults.map((res, index) => (
            <div key={index} className="search-result">
              <h3><a href={res.link} target="_blank" rel="noopener noreferrer">{res.title}</a></h3>
              <p>{res.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WebSearchBrowser;
