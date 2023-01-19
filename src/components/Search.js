import React from "react";

function Search({searchInput, setSearchInput}) {

  const handleSearch = (e) =>{
    setSearchInput(e.target.value)
  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value = {searchInput}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
