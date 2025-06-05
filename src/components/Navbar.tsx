import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          &lt;Agathe.<span style={{ color: '#ff00ea' }}>VALENCE</span>/&gt;
        </div>
        <ul className={`navbar-links ${isOpen ? 'navbar-links-open' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button
          className="navbar-burger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
