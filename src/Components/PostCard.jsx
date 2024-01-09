import React from 'react';

const PostCard = ({ post }) => {
  const { title, location, content } = post;

  const formattedLocation = location.toLowerCase().split(' ').join('-');
  const imageUrl = `src/images/${formattedLocation}.jpg`;

  return (
    <div className="card h-100" >
      <img 
        src={imageUrl} 
        className='card-img-top' 
        alt={title} 
        style={{ maxHeight: '200px', objectFit: 'cover' }}
      />
      <div className='card-body'>
        <h4 className='card-title'>{title}</h4>
        <h5 className='blockquote-footer'>{location}</h5>
        <p className='card-text text-truncate'>{content}</p>
        <a href="#" className="btn btn-sm btn-warning float-end">Go to Post</a>
      </div>
    </div>
  );
};

export default PostCard;
