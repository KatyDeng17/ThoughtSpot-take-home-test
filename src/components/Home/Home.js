import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div id="navBar">
      <div className="container">
        <div id="text">Not what you expected?</div>
        <div id="ask-an-expert">
          <Link to="/expert" style={{ textDecoration: "none" }}>
            Ask an expert
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
