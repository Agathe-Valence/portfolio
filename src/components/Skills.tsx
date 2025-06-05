import React from "react";

const Skills: React.FC = () => (
  
<div>
  <section className="skills" id="skills">
    <h2>Technical Skills</h2>
    <div className="skills-grid">
      <div>
        <h3>Programming</h3>
        <ul>
          <li>C, Python, Java</li>
          <li>Matlab/Simulink, VHDL</li>
          <li>Swift (iOS), html, css</li>
        </ul>
      </div>
      <div>
        <h3>Microcontrollers</h3>
        <ul>
          <li>STM32, ESP8286, Arduino</li>
          <li>Raspberry Pi, FPGA</li>
        </ul>
      </div>
      <div>
        <h3>Protocols</h3>
        <ul>
          <li>UART, SPI, I2C, RS-232, RS-485</li>
          <li>Wifi, Bluetooth</li>
        </ul>
      </div>
      <div>
        <h3>Tools</h3>
        <ul>
          <li>Visual Studio Code, STM32 Studio Code, Arduino IDE, XCode</li>
          <li>Git, GitHub, Firebase</li>
          <li>ROS2, RViz, EasyEDA, ROS2</li>  
        </ul>
      </div>
    </div>
  </section>

  <section className="skills" id="skills">
    <h2>Project Management & Soft Skills</h2>
    <div className="skills-grid">
      <div>
        <h3>Methods</h3>
        <ul>
          <li>SCRUM</li>
          <li>V Cycle</li>
          <li>Gant Diagram</li>
        </ul>
      </div>
      <div>
        <h3>Certifications</h3>
        <ul>
          <li>DO 178</li>
          <li>ISO 9001</li>
          <li>AMDEC</li>
        </ul>
      </div>
      <div>
        <h3>Soft Skills</h3>
        <ul>
          <li>Autonomous</li>
          <li>Team Working</li>
          <li>Problem Solving</li>
          <li>Adaptability</li>
        </ul>
      </div>
    </div>
  </section>
</div>
);

export default Skills;
