import React from "react";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid bg-white">
        <a className="navbar-brand" href="#">
          <h2>
            Travel{" "}
            <span className="script-font" style={{ color: "gold" }}>
              Blog
            </span>
          </h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link py-2 px-3" href="#">
                <h5>About</h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <h5>Popular Posts</h5>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
