

const PostsByLocationTable = ({posts}) => {
    const postCountByLocation = posts.reduce((acc, current) => {
        const location = current.location
        if(!acc[location]){
            acc[location] = 1
        } else {
            acc[location]++
        }
        return acc
    }, {})
    
    return (
    <>
        <h4>Posts by <span>location</span></h4>
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Location</th>
                    <th scope="col" >Posts</th>
                </tr>
            </thead>
            <tbody>
                {/* Object.entries converts the object postCountByLocation into an array of [key, value] pairs */}
                {Object.entries(postCountByLocation).map(([location, count]) => (
                    <tr key={location}>
                        <td>{location}</td>
                        <td>{count}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </>  
  )
}

export default PostsByLocationTable