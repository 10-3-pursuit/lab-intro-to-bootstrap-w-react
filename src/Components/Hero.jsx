
import { useState } from "react"
import postData from "../data/posts.json"
import Card from "./Card"
import PostsByLocationTable from "./PostsByLocationTable"

const Hero = () => {
  const [allPosts, setAllPosts] = useState(postData)
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
      {allPosts.map((post) => (
          <Card post={post} key={post.id}/>
        ))}
      </section>

    </main>
  )
}

export default Hero