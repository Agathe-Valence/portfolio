import React from "react";

const Experience: React.FC = () => (
  <section className="experience" id="experience">
    <h2>Professional Experience</h2>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-dot" />
        <div className="timeline-content">
          <h3>Cleeven – Client Jet Aviation (6 months, current)</h3>
          <p>
            Integration and development of electronic systems for in-flight entertainment (IFE/IFX) in private jets for Jet Aviation.
          </p>
          <p>
            As an electronics systems engineer at Jet Aviation, I contributed to the interfacing and development of various systems within the IFE/IFX for private aircraft. My responsibilities included implementing multiple communication protocols—such as RS232, RS485, API requests, and TCP/IP—between equipment like screens, ECBUs, light controllers, Apple TV, and AVOD, as well as Crestron devices.
          </p>
          <p>
            My technical skills utilized included Systems integration, communication protocols (RS232, RS485, TCP/IP), API development, IFE/IFX systems, Crestron programming.  
          </p>

          
        </div>
      </div>
      
      <div className="timeline-item">
        <div className="timeline-dot" />
        <div className="timeline-content">
          <h3>Alten (6 months)</h3>
          <p>
            I contributed to the development of autonomous robotic systems by porting existing code to the ROS2 environment and creating driver packages for robot hardware. I utilized ROS2 tools to enable mapping and autonomous navigation, integrating a mouse sensor for odometry to allow robots to locate themselves within a lab environment. My responsibilities included programming in Python, defining system architectures and requirements, designing modular navigation algorithms (Nav2), and integrating sensors and actuators. I performed robotic simulations and deployed solutions on Raspberry Pi 4 and Arduino R4 platforms, while maintaining regular progress reporting.          
          </p>
          <p>
            My technical skills utilized included Python, ROS2, Rviz, Tinkercad, Linux (Ubuntu 22.04), Raspberry Pi 4, VSCode, Git, sensors, detectors, and actuators.
          </p>  
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot" />
        <div className="timeline-content">
          <h3>Stimshop (5 months)</h3>
          <p>
            Signal processing and optimization with STM32. Product base on communication and data exchange via ultrasound. I developed an ultra-low-power switch (300x less consumption), suitable for both home and industrial use.
          </p>
          <p>
            I was actively involved in the software development of the Wakee project, focusing on the design, production, assembly, programming, testing, and experimental characterization of an ultrasound-driven energy-saving system using STM32 microcontrollers, Python, and C.
          </p>
          <p>
          I had worked on a drift compensation system using LIDARs, dedicated to a semi-autonomous drone for nuclear environment.
Implementation on STM32 of an error detection protocol using the Hamming algorithm for airborne ultrasonic communications.
          </p>
          <p>
            My responsibilities included code optimization, STM32 board sizing.
          </p>
          <p>
            My technical skills utilized included C, Python, STM32, Arduino, embedded real-time systems, VSCode, and ultrasound signal processing.
          </p>
          
        </div>

      </div>
      
    </div>
  </section>
);

export default Experience;
