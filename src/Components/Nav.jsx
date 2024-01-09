
function Nav() {
  return (
    <nav className="navbar">
      <div className="container-fluid me-auto">
        <a className="navbar-brand" href="#">Travel<span className="script-font text-warning ">Blog</span></a>
          <ul className="navbar-nav flex-row me-auto ">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Popular Post</a>
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default Nav