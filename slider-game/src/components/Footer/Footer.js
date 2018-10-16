import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div>{`© 2018 Patrick Kearney`}</div>
    <div className="soc-media-div">
      <a
        className="soc-media-links hvr-grow"
        href="https://www.linkedin.com/in/patrickckearney/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        className="soc-media-links hvr-grow"
        href="https://github.com/pckearney25"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github-square" />
      </a>
      <a
        className="soc-media-links hvr-grow"
        href="https://stackoverflow.com/users/9205863/pckearney"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-stack-overflow" />
      </a>
    </div>
  </footer>
);

export default Footer;
