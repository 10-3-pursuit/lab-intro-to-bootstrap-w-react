function Search({ searchTerm, setSearchTerm, resetSearch }) {

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search posts by location...</label>
      <input
        value={searchTerm}
        onChange={handleSearchChange}
        type="text"
        name="search"
        id="search"
      />
      <button onClick={resetSearch}>Cancel</button>
    </div>
  );
}

export default Search;
