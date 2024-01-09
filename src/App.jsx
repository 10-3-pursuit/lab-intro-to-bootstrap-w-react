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
            </label>
            <input
                value={searchText}
                onChange={handleTextChange}
                type="text"
                name="search"
                id="search"
                className="form-control"
            />
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
                            <div key={post.id}>
                                <img
                                    src={`src/images/${post.location
                                        .toLowerCase()
                                        .replace(" ", "-")}.jpg`}
                                    alt={`photo of ${post.location}`}
                                />
                                <p>{post.title}</p>
                                <p>{post.location}</p>
                                <p>{post.content}</p>
                                <br />
                                <button>Go to post</button>
                            </div>
                        );
                    } else return null;
                })}
                <table>
                    <th>Location</th>
                </table>
            </div>
        </main>
    );
}

export default App;
