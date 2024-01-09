import React from "react";
import postData from "../data/posts.json";

export const Aside = () => {
  const locationCount = postData.reduce((acc, post) => {
    const location = post.location;
    acc[location] = (acc[location] || 0) + 1;
    return acc;
  }, {});

  console.log(locationCount);

  return (
    <div className="pt-5">
      <h3>
        Posts by <span style={{ color: "gold" }}>location</span>
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Location</th>
            <th scope="col">Posts</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(locationCount).map((location) => (
            <tr key={location}>
              <td>{location}</td>
              <td>{locationCount[location]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
