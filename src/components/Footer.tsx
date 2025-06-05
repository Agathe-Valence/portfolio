import React from "react";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-links">
      <a href="https://www.linkedin.com/in/agathe-valence/">LinkedIn</a>
      <a href="https://github.com/Agathe-Valence">GitHub</a>
      <a href="agathe.valence@efrei.net">Email</a>
    </div>
    <div>&copy; {new Date().getFullYear()} VALENCE Agathe. All rights reserved.</div>
  </footer>
);

export default Footer;
