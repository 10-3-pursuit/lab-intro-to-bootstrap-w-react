function Search({ searchTerm, setSearchTerm, resetSearch }) { //using these as props because other components use them as well

  const handleSearchChange = (e) => { // nothing else uses this callback fx so it's ok to move it locally inside Search component
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar d-flex mb-3">
        <label htmlFor="search" className="form-label">
        Search posts by location...
        </label>
        <input
            value={searchTerm}
            onChange={handleSearchChange}
            type="text"
            name="search"
            id="search"
            className="form-control me-2"
        />
        <button className="btn btn-secondary" onClick={resetSearch}>Cancel</button>
    </div>
  );
}

export default Search;

