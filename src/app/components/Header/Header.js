import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = props => {

  let loggedIn = props.loggedIn;
  let myPostsLink = null;
  if (loggedIn === true) {
    myPostsLink = (
      <>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/myposts'>My posts</Link>
        </li>
      </>
    );
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <div className="left">
            <span className="header-title">CRUD</span>
          </div>
          <ul id="nav-mobile" className="right">
            {myPostsLink}
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
