// src/components/WebSearchBrowser.js
import React, { useState } from 'react';
import axios from 'axios';

const WebSearchBrowser = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/websearch', { query });
            setResults(response.data);
        } catch (error) {
            console.error('Error performing web search:', error);
        }
    };

    return (
        <div className="web-search-browser">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Enter search query"
                />
                <button type="submit">Search</button>
            </form>
            <div className="search-results">
                {results.map((result, index) => (
                    <div key={index} className="search-result">
                        <h3><a href={result.link} target="_blank" rel="noopener noreferrer">{result.title}</a></h3>
                        <p>{result.snippet}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebSearchBrowser;
