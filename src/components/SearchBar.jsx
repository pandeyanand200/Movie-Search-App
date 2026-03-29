
import React from 'react'

function SearchBar({ query, setQuery, onSearch }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') onSearch();
     // Enter press karo toh search ho
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Movie ka naam likho..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;