import postData from "./data/posts.json";
import { Nav } from "./Components/Nav";
import { Quote } from "./Components/Quote";
import { Search } from "./Components/Search";
import { CardListing } from "./Components/CardListing";
import { Aside } from "./Components/Aside";
import { useState } from "react";

function App() {
  const [filteredPost, setFilteredPost] = useState(postData);

  return (
    <div>
      <Nav />
      <Quote />
      <Search filteredPost={filteredPost} setFilteredPost={setFilteredPost} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <CardListing filteredPost={filteredPost} />
          </div>
          <div className="col-md-3">
            <Aside />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
