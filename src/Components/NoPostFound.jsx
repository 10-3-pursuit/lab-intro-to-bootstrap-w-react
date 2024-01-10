import React from "react";

export const NoPostFound = (props) => {
  return (
    <div className="container">
      <div className="alert alert-danger " role="alert">
        {`No posts found with the search term "${props.searchWord}". Please try again.`}
      </div>
    </div>
  );
};
