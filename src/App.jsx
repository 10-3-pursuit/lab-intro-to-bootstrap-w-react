import { useState, useEffect } from "react";
import postData from "./data/posts.json";

function App() {
  const [filteredPosts, setFilteredPosts] = useState(postData);
  const [searchTerm, setSearchTerm] = useState('');
  const [uniqueLocations, setUniqueLocations] = useState({});

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter posts based on search term
  useEffect(() => {
    const filtered = postData.filter(
      post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
              post.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);

    // Calculate posts by location
    const locations = {};
    filtered.forEach(post => {
      locations[post.location] = (locations[post.location] || 0) + 1;
    });
    setUniqueLocations(locations);

  }, [searchTerm]);
  
  function abbreviateString(str, maxLength) {
    // Check if the string's length is greater than the maximum length
    if (str.length > maxLength) {
      // Truncate the string to the maxLength minus 3 (for the ellipsis) and add '...'
      return str.substring(0, maxLength - 3) + "...";
    } else {
      // If the string is shorter than maxLength, return it as is
      return str;
    }
  }  

  return (
    <main>
      <nav>
        <a href="#">Travel<span>Blog</span></a>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Popular Post</a>
          </li>
        </ul>
      </nav>
  
      <h2>
        Travel is the only thing you buy that makes you richer...
      </h2>
  
      <div>
        <label htmlFor="search">
          Search posts by location...
        </label>
        <input
          value={searchTerm}
          onChange={handleSearchChange}
          type="text"
          name="search"
          id="search"
        />
        <button>Cancel</button>
      </div>
  
      <div>
        {filteredPosts.map((post) => (
          <div key={post.id}>
            <div>
              <img
                src={`src/images/${post.location.toLowerCase().replace(" ", "-")}.jpg`}
                alt={`photo of ${post.location}`}
              />
              <div>
                <h4>{post.title}</h4>
                <p>{abbreviateString(post.content, 100)}</p>
                <a href="#">Go to post</a>
              </div>
            </div>
          </div>
        ))}
        {!filteredPosts.length && <p>No posts found</p>}
      </div>
  
      <div>
        <p>Posts by location</p>
        <table>
          <thead>
            <tr><th>Location</th><th>Count</th></tr>
          </thead>
          <tbody>
            {Object.keys(uniqueLocations).map((location) => (
              <tr key={location}>
                <td>{location}</td>
                <td>{uniqueLocations[location]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      <footer>
        <p>Contact me</p>
        <p>Copyright My Travelblog 2020</p>
        <p>About the author details here</p>
      </footer>
    </main>
  );
}  

export default App;
