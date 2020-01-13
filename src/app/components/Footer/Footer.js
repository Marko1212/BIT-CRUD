import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import { logout } from "../../../services/storageService";

const Footer = (props) => {

  let logoutClicked = () => {
    logout(); // do logout procedure
  }

  let loggedIn = props.loggedIn;
  console.log('loggedIn ', loggedIn);
  let footerLink = null;
  if (loggedIn === true) {
    footerLink = (
      /*<a className="logout" href="#" onClick={logoutClicked}>Log out</a>*/
      <Link to="/login" onClick={logoutClicked}>Log out</Link>
    );
  } else {
    footerLink = (
      <Link to="/login">Sign in</Link>
    );
  }

  return (
    <footer className="page-footer">
      <div className="container">
        © {new Date().getFullYear()} BIT
        <span className="grey-text text-lighten-4 right">
          {footerLink}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
