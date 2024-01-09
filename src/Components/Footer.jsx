import React from 'react'

function Footer() {
  return (
    <footer className="bg-warning text-center text-lg-end text-white ">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 d-flex justify-content-end">
            <div className="d-inline-block text-end">
              <p>Contact me</p>
              <p>Copyright My Travelblog 2020</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-1">
            <p>About the author details here</p>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer