import React, { useState } from 'react';
import "./Search.css";

const Search = ({ setSearch, setPageNumber }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPageNumber(1);
    setSearch(inputValue);
  };
  return (
    <div className="search-container">
      <form className="search-form mb-5" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for..."
          value={inputValue}
          onChange={handleChange}
        />
        <button 
          type="submit"
          className="search-button"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;