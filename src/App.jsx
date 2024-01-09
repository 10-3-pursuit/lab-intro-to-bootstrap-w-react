import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import postData from "./data/posts.json";
import images from "./images";

function App() {
  const [searchPost, setSearchPost] = useState();
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API or database
    setAllPosts(postData);
    setFilteredPosts(postData)
  }, []);

  const handleSearch = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchPost(input);

    const filtered = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(input) ||
        post.location.toLowerCase().includes(input)
    );

    setFilteredPosts(filtered);

    if (filtered.length === 0) {
      setFilteredPosts([]);
    }
  };

  return (
    <main>
      <div className="container">
        <Nav />
        <h2 className="script-font text-center border-top p-5">
          Travel is the only thing you buy that makes you richer...
        </h2>
      </div>

      <div className="search-bar d-flex">
        <h3 className="">Search posts by location...</h3>
        <input
          type="text"
          value={searchPost}
          onChange={handleSearch}
          style={{ width: "50%" }}
        />
      </div>

      {filteredPosts.length > 0 ? (
        <div className="container">
          {filteredPosts.map((post) => (
            <div key={post.id}>
              <div>
              <img
                src={`src/images/${post.location.toLowerCase().replace("", "-")}.jpg`}
                alt={`Image for ${post.location}`}
              />
              <p>Title: {post.title}</p>
              <p>Location: {post.location}</p>
              <p>Content: {post.content}</p>
              <a href="#">Go to post</a>
              {/* Add other post details as needed */}
            </div>
          </div>
          ))}
        </div>
        
      ) : (
        <p>No matches found for: {searchPost}</p>
      )}

      <Footer />
    </main>
  );
}

export default App;