import { useState, useEffect } from "react";
import postData from "./data/posts.json";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search/Search";

function App() {
  const [filteredPosts, setFilteredPosts] = useState(postData); // holds the array of posts that match the search criteria.
  const [searchTerm, setSearchTerm] = useState(''); // current value of search input
  const [uniqueLocations, setUniqueLocations] = useState({}); // holds count of posts depending on location. It expects an object because it counts the keys in locations object created in the useEffect (needed to show posts and update the table)

  // Handle search input change - moved to Search.jsx
  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  const resetSearch = () => {
    setSearchTerm("");
  };

  // Filter posts based on search term
  useEffect(() => {
    const filtered = postData.filter(
      post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
              post.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);

    // Calculate posts by location (also used for the table!!!)
    const locations = {}; // empty at the beginning - a local variable that is created each time the useEffect hook runs. The purpose of this object is to calculate and hold the count of posts for each unique location based on the currently filtered posts.
    filtered.forEach(post => {
      locations[post.location] = (locations[post.location] || 0) + 1; // checks if its location is already a key in the locations object if so then + 1 if not then it's initialized with count of 1
    });
    setUniqueLocations(locations); // After populating the locations object with the counts for each location, the setUniqueLocations function (part of your component's state) is called to update the uniqueLocations state with this new data.

  }, [searchTerm]); // locations object is recreated every time the useEffect hook runs, which happens whenever the searchTerm changes (as indicated by the dependency array [searchTerm] of the useEffect hook)

  // function abbreviateString(str, maxLength) {
  //   // Check if the string's length is greater than the maximum length
  //   if (str.length > maxLength) {
  //     // Truncate the string to the maxLength minus 3 (for the ellipsis) and add '...'
  //     return str.substring(0, maxLength - 3) + "...";
  //   } else {
  //     // If the string is shorter than maxLength, return it as is
  //     return str;
  //   }
  // }  

  return (
    <main>
      <Nav />
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} resetSearch={resetSearch} />
      {/* <div>
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
        <button onClick={resetSearch}>Cancel</button>
      </div> */}
  
      <div>
        {filteredPosts.map((post) => (
          <div key={post.id}>
            <div>
              {/* the template literal, post.location.toLowerCase().replace(" ", "-") takes the location property of the current post, converts it to lowercase, and then replaces any spaces with hyphens bc can't use space in paths. This string is then appended to src/images/ and .jpg to form the path to the image file. For example, if post.location is "New York", the src would be src/images/new-york.jpg */}
              <img
                src={`src/images/${post.location.toLowerCase().replace(" ", "-")}.jpg`}
                alt={`photo of ${post.location}`}
              />
              <div>
                <h4>{post.title}</h4>
                <p className="text-truncate">{post.content}</p>
                <a href="#">Go to post</a>
              </div>
            </div>
            {/* error message */}
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
      <Footer />
    </main>
  );
}  

export default App;
