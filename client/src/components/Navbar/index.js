import React from "react";
// import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import "./navbar.scss";

const LINKS = [
  {label: "Website", to: "/"},
  {label: "Twitter", to: "/"},
  {label: "github", to: "/"},
  {label: "facebook", to: "/"},
];

function Navbar({onLogin, onSignUp}) {
  return (
    <div className="navbar">
      <p className="navbar-logo">Our Blog</p>
      <div className="navbar-links">
        {LINKS.map((link) => (
          <Link to={link.to}>{link.label}</Link>
        ))}
      </div>
      <div className="navbar-buttons">
        <button className="navbar-login" onClick={onLogin}>
          Log in{" "}
        </button>
        <button className="navbar-signup" onClick={onSignUp}>
          Sign up
        </button>
      </div>
    </div>
  );
}

// Navbar.propTypes = {
//   onLogin: PropTypes.func.isRequired,
//   onSingUp: PropTypes.func.isRequired,
// };

export default Navbar;
