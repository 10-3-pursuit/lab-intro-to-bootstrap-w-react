import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { v4 as uuidv4 } from "uuid";

import postData from "./data/posts.json";

function App() {
    const [searchText, setSearchText] = useState("");

    const handleTextChange = (e) => {
        setSearchText(e.target.value);
    };

    const locations = postData.reduce((acc, curr) => {
        const currentLoc = curr.location;
        if (Object.keys(acc).includes(currentLoc)) {
            acc[currentLoc] += 1;
        } else {
            acc[currentLoc] = 1;
        }
        return acc;
    }, {});

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
            <br />
            <div className="container" style={{ display: "inline-block" }}>
                <div className="container" style={{ display: "inline-block" }}>
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
                                <div key={post.id} className="col">
                                    <img
                                        src={`src/images/${post.location
                                            .toLowerCase()
                                            .replace(" ", "-")}.jpg`}
                                        alt={`photo of ${post.location}`}
                                    />
                                    <p>{post.title}</p>
                                    <p>{post.location}</p>
                                    <p>{post.content}</p>
                                    <button>Go to post</button>
                                </div>
                            );
                        } else return null;
                    })}
                </div>
                <div className="" style={{ display: "inline-block" }}>
                    Posts by location
                    <table className="table table-sm table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Posts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(locations).map((loc) => (
                                <tr key={uuidv4()}>
                                    <td>{loc}</td>
                                    <td>{locations[loc]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default App;
