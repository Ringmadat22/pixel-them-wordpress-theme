import React, { useState } from 'react';
import './App.css';
import './responsive.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="header">
      <div className="header-container">
        <div className="nav-elements">
          <button className="hamburger-menu" onClick={toggleMenu}>
            <div className="hamburger-icon"></div>
            <div className="hamburger-icon"></div>
            <div className="hamburger-icon"></div>
          </button>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="projects">Projects</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
            <li>
              <a href="blog">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
