import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [clicked, clicker] = useState(false);

  function handleClick(prevClicked) {
    clicker((prevClicked) => {
      return !prevClicked;
    });
  }

  return (
    <div className="header" id="header">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + '/images/aidafyLogo.png'}
          alt="Wibson"
          className="logo-word"
        ></img>
      </Link>
      <div className={clicked ? 'navbar drop' : 'navbar colapse'}>
        <Link className="global-link nav-element" to="/">
          Home
        </Link>

        <Link className="global-link nav-element" to="/start">
          Contact Us
        </Link>
        <Link className="global-link nav-element" to="/privacy">
          Privacy Policy
        </Link>

      </div>
      <i onClick={handleClick} className="fas fa-bars nav-bar-icon"></i>
    </div>
  );
}
