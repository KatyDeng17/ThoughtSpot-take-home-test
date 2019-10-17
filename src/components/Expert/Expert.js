import React from "react";
// import { NavLink, Link } from "react-router-dom";

import Form from "../Form/Form";
const Expert = () => {
  return (
    <div className="expert-page-container">
      <div className="header-text">Ask an expert</div>
      <div id="selection2">
        <div className="images-area">
          <div className="images-size" id="image1">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1949180/uxe-exercise-portrait2.png"
              alt="expert2"
            />
          </div>
          <div className="images-size" id="without-image">
            R
          </div>
          <div className="images-size" id="image2">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1949180/uxe-exercise-portrait1.png"
              alt="expert 1"
            />
          </div>
        </div>
        <div id="text-exports">
          <p>
            Lena Smith, Roy Johnson or Elijah Taylor will get right back to you.
          </p>
        </div>
      </div>

      <div className="form-area">
        <Form />
      </div>
    </div>
  );
};

export default Expert;
