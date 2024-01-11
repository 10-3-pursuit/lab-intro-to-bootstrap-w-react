import Post from './Post'
import postData from "../data/posts.json"
import React from 'react'

const Posts = () => {
  return (
  <div> 
    {postData.map((post) => (
        <div className="col" key={post.id}>
          <Post post={post}/>
        </div>
      ))}
</div>
      )}

export default Posts