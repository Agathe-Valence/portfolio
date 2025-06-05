import React from "react";

const About: React.FC = () => (
  <section className="about" id="about">
    <h2>About Me</h2>
    <div className="about-content">
      <img src="/portfolio/assets/me.jpeg" alt="Profile" className="about-img" />
      <div>
        <p>
          I am a graduate engineer from EFREI Paris, specializing in embedded systems and digital technologies. I have hands-on experience with a wide range of programming languages, microcontrollers, and communication protocols. Passionate about innovation, I have contributed to projects in home automation, robotics, avionics, and more.
        </p>
        <div className="about-links">
          <a href="https://www.linkedin.com/in/agathe-valence/">LinkedIn</a>
          <a href="https://github.com/Agathe-Valence">GitHub</a>
        </div>
      </div>
    </div>
  </section>
  
);

export default About;
