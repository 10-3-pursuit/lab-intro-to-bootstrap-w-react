import { useState, useEffect } from 'react';
import PostCard from './PostCard';

const ErrorMessage = ({ message }) => {
  return <div className="alert alert-danger mt-3" role= "alert">{message}</div>;
};

function filterPosts(searchTerm, allPosts) {
  return allPosts.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const locationMatch = post.location.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch || locationMatch;
  });
}

function Posts({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchError, setSearchError] = useState('');
  const [uniqueLocations, setUniqueLocations] = useState({});

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filtered = filterPosts(searchTerm, posts);
    setFilteredPosts(filtered);

    if (searchTerm && filtered.length === 0) {
      setSearchError(`No Posts found with the search terms "${searchTerm}". Please try again.`);
    } else {
      setSearchError('');
    }
  };

  const handleCancelSearch = () => {
    setSearchTerm('');
    setFilteredPosts(posts);
    setSearchError('');
  };

 
  const locationsByPosts = Object.keys(uniqueLocations).map((location, index) => (
    <tr key={index}>
      <td>{location}</td>
      <td>
        <span className="badge bg-secondary rounded-square text-white">
          {uniqueLocations[location]}
        </span>
      </td>
    </tr>
  ));


  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  useEffect(() => {
    const locations = {};
    filteredPosts.forEach((post) => {
      locations[post.location] = (locations[post.location] || 0) + 1;
    });
    setUniqueLocations(locations);
  }, [filteredPosts]);

  return (
    <div className='container col-md-10'>
        <div className='row align-items-center mb-3'>
            <div className='col-md-3'>
                <p>Search posts by location...</p>
            </div>
            <div className='col-md-8'>
                <input
                    type="text"
                    value={searchTerm}
                    placeholder="Search by title or location"
                    onChange={handleSearch}
                    className="form-control"
                />
            </div>
            <div className='col-md-1'>
                <button className="btn btn-warning" onClick={handleCancelSearch}>
                    Cancel
                </button>
            </div>
        </div>

        <div className='row justify-content-center'>
            <div className='col-md-9'>
                <h2>Posts</h2>
                {searchError && <ErrorMessage message={searchError} />}
                <div className='row row-cols-1 row-cols-md-2 g-3'>
                    {filteredPosts.map((post) => (
                        <div key={post.id} className='col-md-6'>
                        <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='col-md-3 mt-3'>
                <h2>Posts by <span className='text-warning'>Location</span></h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Location</th>
                            <th scope="col">Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locationsByPosts}
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>
  );
}

export default Posts;
