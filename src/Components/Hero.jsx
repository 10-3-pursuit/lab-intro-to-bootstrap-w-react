
import { useState } from "react"
import Card from "./Card"
import PostsByLocationTable from "./PostsByLocationTable"


const Hero = ({posts}) => {
  const [searchInput, setSearchInput] = useState("")

  function filterPosts(searchInput, posts) {
    return posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().match(searchInput.toLowerCase())
      const locationMatch = post.location.toLowerCase().match(searchInput.toLowerCase())
      return titleMatch || locationMatch
    })
  }

  function handleTextChange(event){
    const input = event.target.value
    setSearchInput(input)
  }

  function handleCancel(){
    setSearchInput("")
  }

  const result = filterPosts(searchInput, posts)
  // const result = filteredPosts.length ? filteredPosts : posts

  return (
    <main className="container mt-3 mb-3" id="hero">
      {/* Search Form */}
      <div className="row">
        <form className="d-flex align-items-center" role="search">
          <label htmlFor="searchInput" className="form-label">Search posts by location...</label>
          <input
            id="searchInput"
            className="form-control"
            type="search"
            aria-label="Search"
            onChange={handleTextChange}
            value={searchInput}
          />
          <div className="ms-4">
            <button 
              className="btn btn-warning btn-sm" 
              type="button" 
              onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>

      <section className="mt-3 row">
      {/* Left Column - Cards */}
        {result.length > 0 ? (
          <div className="col-md-9">
            <div className="row">
              {result.map((post) => (
                <div className="col-md-6 mb-3" key={post.id}>
                  <Card post={post}/>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="col-9">
            <p className="alert alert-danger" role="alert">No posts found with the search term "{searchInput}". Please try again.</p>
          </div>
        )}

        {/* Right Column - Table */}
        <div className="col-md-3">
          <PostsByLocationTable posts={posts}/>
        </div>
      </section>

    </main>
  )
}

export default Hero