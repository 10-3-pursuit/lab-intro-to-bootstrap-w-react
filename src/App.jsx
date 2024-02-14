import postData from "./data/posts.json";
import { useState } from "react";
import images from "./images";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(postData);
  const handleSearch = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchInput(input);
    const filteredData = postData.filter(
      (post) =>
        post.title.toLowerCase().includes(input) ||
        post.location.toLowerCase().includes(input)
    );
    
    if (filteredData.length === 0) {
      setFilteredPosts([
        { 
          id: -1,
          title: 'Alert! Post Not Found.',
          location: '',
          content: '',
        },
      ]);
    } else {
      setFilteredPosts(filteredData);
    }
  };

  const countedPosts = () => {
    const counter = {};
    postData.forEach((post) => {
      const location = post.location;
      if(!counter[location]) {
        counter[location] = 1;
      } else {
        counter[location]++;
      }
    })
    return counter;
  }
  const postsCounted = countedPosts()
  
  return (
    <>
  <div className="container">
    <Nav/>
    <h2 className="script-font text-center border-top p-5">Travel is the only thing you buy that makes you richer...</h2>
    <div className="search-bar d-flex"> 
      <h3 className="">Search posts by location...</h3>
      <input
        type="text"
        value={searchInput}
        onChange={handleSearch}
        style={{width:`100%`}}
      />
    </div>
    <div className="d-md-none">
      <h3>Posts by <span>location</span></h3>
      <table className="table">
        <thead>
          <tr>
            <th>Location</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(postsCounted).map((location) => (
            <tr key={location}>
              <td>{location}</td>
              <td className="bg-secondary rounded" style={{ width: '8px', height: '10px' }}>{postsCounted[location]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="row">
      {filteredPosts.map((post) => (
        <div key={post.id} className="border col-4 offset-md-1 pb-4">
          <img style={{ width: '480px', height: '300px' }} className="mt-3" src={images[post.location.toLowerCase().replace(/[]/g, '')]} />
          <h2>{post.title}</h2>
          <p>{post.location}</p>
          <p>{post.content.substring(0, 50)}...</p>
          <a className="btn btn-warning">Go to post {`>`}</a>
        </div>
      ))}
    </div>
    <div className="position-absolute top-0 end-0 d-none d-md-block">
      <h3>Posts by <span>location</span></h3>
      <table className="table">
        <thead>
          <tr>
            <th>Location</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(postsCounted).map((location) => (
            <tr key={location}>
              <td>{location}</td>
              <td className="bg-secondary rounded" style={{ width: '8px', height: '10px' }}>{postsCounted[location]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  <Footer/>
</>
  );
}

export default App;