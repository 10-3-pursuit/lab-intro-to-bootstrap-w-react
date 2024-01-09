
const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                {/* Navbar Links */}
                <div className="navbar-nav flex-row">
                    {/* Home Logo */}
                    <a className="navbar-brand fs-1" href="#">Travel <span className="script-font">Blog</span></a>
                    <a className="nav-link me-3 ms-3 my-3" href="/about">About</a>
                    <a className="nav-link my-3" href="/popular-posts">Popular Posts</a>
                </div>
            </div>
        </nav>
        {/* Quote Section */}
        <div className="container-fluid p-4 text-center border-top border-bottom mt-4 bg-body-tertiary quote">
            <h2 className="script-font">
            Travel is the only thing you buy that makes you richer...
            </h2>
        </div>
    </>
  )
}

export default Nav