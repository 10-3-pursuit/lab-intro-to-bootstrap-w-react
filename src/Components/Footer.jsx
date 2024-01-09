

const Footer = () => {
  return (
    <aside className="navbar bg-warning p-4">
        <div className="container-fluid row">
            <div className="col-md-7 d-md-grid justify-content-end mb-1">
                <a className="nav-link p-1" href="#">Contact Me</a>
                <a className="nav-link p-1" href="#">About the Author</a>
            </div>
            <div className="col-md-3 align-self-start">
                <p >Copyright <span> My TravelBlog</span> 2020</p>
            </div>
        </div>
    </aside>
  )
}

export default Footer