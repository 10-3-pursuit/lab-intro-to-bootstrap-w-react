import React from "react";
import images from "../images";

export const Card = (props) => {
  return (
    <div className="card" style={{ width: "27rem" }}>
      <img
        className="card-img-top post-image-height"
        src={images[props.post.location.toLowerCase().replace(" ", "-")]}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{props.post.title}</h5>
        <p className="card-text text-muted">{props.post.location}</p>
        <p className="text-truncate">{props.post.content}</p>
        <a href="#" className="btn btn-warning">
          Go to post
        </a>
      </div>
    </div>
  );
};
