import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search podcasts..."
      />
    </div>
  );
};

export default SearchBar;