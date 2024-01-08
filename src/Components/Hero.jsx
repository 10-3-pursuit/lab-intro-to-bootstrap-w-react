
const Hero = () => {
  return (
    <div className="container-fluid mt-3" id="hero">
      {/* Search Form */}
      <div className="row">
        <form className="d-flex" role="search">
          <label htmlFor="searchInput" className="form-label">Search posts by location</label>
          <input
            id="searchInput"
            className="form-control flex-grow-1 me-2"
            type="search"
            aria-label="Search"
          />
          <button className="btn btn-warning" type="button">
            Cancel
          </button>
        </form>
      </div>

    </div>
  )
}

export default Hero