

const Footer = () => {
  return (
    <aside className="navbar bg-warning p-4">
        <div className="container-fluid row">
            <div className="col-7 d-grid justify-content-end">
                <a className="nav-link p-1" href="#">Contact Me</a>
                <a className="nav-link p-1" href="#">About the Author</a>
            </div>
            <div className="col-2"></div>
            <p className="col-3 align-self-start">Copyright <span> My TravelBlog</span> 2020</p>
        </div>
    </aside>
  )
}

export default Footer