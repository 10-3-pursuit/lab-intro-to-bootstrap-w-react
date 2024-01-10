import React from "react";
import { Card } from "./Card";
import images from "../images";

export const CardListing = (props) => {
  return (
    <div className="row pt-5 ps-5">
      {props.filteredPost.map((post) => (
        <Card key={post.id} post={post} images={images} />
      ))}
    </div>
  );
};
