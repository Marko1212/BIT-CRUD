import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        © {new Date().getFullYear()}BIT
        <a className="grey-text text-lighten-4 right" href="#!">
          Sign in
        </a>
      </div>
    </footer>
  );
};

export default Footer;
