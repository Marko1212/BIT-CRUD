import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#/" className="left brand-logo">
          CRUD
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#/">Posts</a>
          </li>
          <li>
            <a href="#/">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
