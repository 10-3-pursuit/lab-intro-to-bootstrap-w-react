
import { useState } from "react"
import postData from "../data/posts.json"
import Card from "./Card"
import PostsByLocationTable from "./PostsByLocationTable"

const Hero = () => {
  return (
    <main className="container-fluid mt-3" id="hero">
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


      <section className="mt-3 row">
        {/* Left Column - Cards */}
        <div className="col-9">
          <div className="row">
            {postData.map((post) => (
              // left column split into 2 colums of equal size
              <div className="col-6" key={post.id}>
                <Card post={post}/>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Table */}
        <div className="col-3">
          <PostsByLocationTable posts={postData}/>
        </div>
      </section>

    </main>
  )
}

export default Hero