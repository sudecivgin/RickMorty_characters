import React from 'react';
import "./Search.css";

const Search = ({ setSearch, setPageNumber }) => {
  const handleChange = (e) => {
    setPageNumber(1); // Arama yapıldığında 1. sayfaya dön
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-container">
      <form className="search-form mb-5" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for..."
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