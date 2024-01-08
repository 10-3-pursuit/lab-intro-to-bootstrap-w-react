

const Card = ({post}) => {
  return (
    <div className="col-6">
        <div className="card-body">
            <h4 className="title">{post.title}</h4>
            <p>{post.location}</p>
            <p className="card-text">{post.content}</p>
            <button className="btn btn-warning">Go to post</button>
        </div>
    </div>
  )
}

export default Card