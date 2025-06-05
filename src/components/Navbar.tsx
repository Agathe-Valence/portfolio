import React from "react";

const Navbar: React.FC = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      &lt;Agathe.<span style={{ color: '#ff00ea' }}>VALENCE</span>/&gt;
    </div>


    <ul className="navbar-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
