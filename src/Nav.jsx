import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav
            className="navbar navbar-expand-lg row align-items-start"
            style={{ display: "inline" }}
        >
            <h1 style={{ display: "inline" }}>
                Travel <span className="script-font">Blog</span>
            </h1>
            <a className="link-underline link-underline-opacity-0">About</a>
            <a className="">Popular posts</a>
        </nav>
    );
};

export default Nav;
