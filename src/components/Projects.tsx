import React from "react";

const projects = [
  {
    title: "iOS App & Smart Home System",
    desc: "Developed an iOS app in Swift for home automation (light control). Integrated with ESP8286 and Firebase.",
    img: "/portfolio/assets/.png"
  },
  {
    title: "Autonomous Vehicle Race",
    desc: "Participatesd in the Paris-Saclay autonomous car competition, contributing to vehicle design and navigation algorithms.",
    img: "/portfolio/assets/car.jpg"
  },
  {
    title: "Parkinson’s Monitoring Tool",
    desc: "Built a wearable device using Arduino Nano and sensors to track patient movements. Data processed by AI for improved medical monitoring.",
    img: "/project3.jpg"
  },
  {
    title: "Embedded STM32 System",
    desc: "Designed a system with STM32, LEDs, potentiometer, RGB LCD, buttons. 3D modeling (SolidWorks) and PCB (EasyEDA).",
    img: "/portfolio/assets/boite.png"
  }
];

const Projects: React.FC = () => (
  <section className="projects" id="projects">
    <h2>Academic Projects</h2>
    <div className="projects-grid">
      {projects.map((p, i) => (
        <div key={i} className="project-card">
          <img src={p.img} alt={p.title} className="project-img"/>
          <div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
