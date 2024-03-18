"use client";
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import jsonData from '../data/objectFile.json';

// Pass onSearch prop to Search component, of json data
interface SearchProps {
  onSearch: (searchResults: typeof jsonData) => void;
}

// Receive onSearch prop and store state of keywords and errors
const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState<string>('');

  // When user enters text, errors reset and states change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setError('');
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  // When users clicks button or enter, this function updates errors and, if valid, performs onSearch function
  const search = () => {
    const searchTerm = searchText.trim().toLowerCase();

    if (!searchTerm) {
      setError('Search field was empty, please enter text to search for an item name');
      return;
    }

    setSearchText('');

    // Stores what is returned by json file, if search term exists

    const searchResults = jsonData.filter(
      item => item.name.toLowerCase().includes(searchTerm)
    );

    if (searchResults.length === 0) {
      setError('No data found matching those results, please try another keyword');
    } else {
      setError('');
    }
    // Pass search results to the parent component
    onSearch(searchResults); 
  };


  // export search component
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter text to search"
        className="search-input"
        value={searchText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="search-button" onClick={search}>
        Search
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Search;
