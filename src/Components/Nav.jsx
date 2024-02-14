export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand fs-2">Travel <span className="script-font text-warning">Blog</span></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            ></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Popular Posts</a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
  )
}