// Header.js

import React from "react";
import { Link } from "react-router-dom";
import '../css/Header.css'

const Header = () => {
  return (
      <div className="header">
        <div className="logos">
          <Link to="/home" className="log">
            Logo
          </Link>
        </div>
        <div className="nav">
          <Link to="/register" className="sign" role="button">
            Sign Up
          </Link>
          <Link to="/login" className="sign">
            Sign In
          </Link>
        </div>
      </div>
  );
};

export default Header;
