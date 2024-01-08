import { useState } from "react";
import Nav from "./Nav";

import postData from "./data/posts.json";

function App() {
    const [searchText, setSearchText] = useState("");

    const handleTextChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <main>
            <Nav />
            <h1>Travel is the only thing you buy that makes you richer</h1>
            <label htmlFor="search" className="form-label">
                Search posts by location...
                <input
                    value={searchText}
                    onChange={handleTextChange}
                    type="text"
                    name="search"
                    id="search"
                    className="form-control"
                />
            </label>
            <button>Cancel</button>
            <div>
                {postData.map((post) => {
                    if (
                        post.title
                            .toLowerCase()
                            .includes(searchText.toLowerCase()) ||
                        post.location
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                    ) {
                        return (
                            <li key={post.id}>
                                <p>{post.title}</p>
                                <p>{post.location}</p>
                                <p>{post.content}</p>
                                <img
                                    src={`src/images/${post.location
                                        .toLowerCase()
                                        .replace(" ", "-")}.jpg`}
                                    alt={`photo of ${post.location}`}
                                />
                                <br />
                                <button>Go to post</button>
                            </li>
                        );
                    } else return null;
                })}
                <p>Posts by location</p>
            </div>
        </main>
    );
}

export default App;
