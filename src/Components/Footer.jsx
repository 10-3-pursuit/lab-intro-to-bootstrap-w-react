import React from "react";

export const Footer = () => {
  return (
    <div className="container-fluid bg-warning p-5 mt-5 text-center">
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <a href="#">Contact Me</a>
        </div>
        <div className="col">
          Copyright <strong>MyTraveling</strong> 2020
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <a href="#">About the author</a>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
