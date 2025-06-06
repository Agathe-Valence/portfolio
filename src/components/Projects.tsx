import React from "react";

const projects = [
  {
    id: "project-1",
    title: "iOS App & Smart Home System",
    description: "Developed an iOS app in Swift for home automation (light control). Integrated the system with an ESP8286 and used Firebase for data storage.",
    tags: ["Swift", "ESP8286", "Firebase", "IoT"],
    img: "src/assets/lampy.png",
    alt: "iOS app interface for smart home system with ESP32 integration, dark blue theme",
  },
  {
    id: "project-2",
    title: "Autonomous Vehicle Race",
    description: "Participated in the Paris-Saclay autonomous car competition, contributing to vehicle design and navigation algorithms.",
    tags: ["Computer Vision", "Navigation", "Algorithms", "Robotics"],
    img: "src/assets/car.jpg",
    alt: "autonomous vehicle race competition with small scale cars, technical view",
  },
  {
    id: "project-3",
    title: "Parkinson's Monitoring Tool",
    description: "Built a wearable device using Arduino Nano and sensors to track patient movements. Data was stored and processed using AI for improved medical monitoring.",
    tags: ["Arduino Nano", "Sensors", "AI", "Healthcare"],
    img: "src/assets/parkinson.png",
    alt: "wearable device for Parkinson",
  },
  {
    id: "project-4",
    title: "Embedded System with STM32",
    description: "Designed a system with STM32, LEDs, potentiometer, RGB LCD screen, and buttons. Modeled the 3D enclosure (SolidWorks) and created the PCB (EasyEDA).",
    tags: ["STM32", "SolidWorks", "EasyEDA", "PCB Design"],
    img: "src/assets/boite.png",
    alt: "embedded system with STM32 microcontroller, LEDs, LCD screen and PCB design, technical view",
  },
];

const Projects = () => (
  <>
  {/* Projects Section */}
  <section id="projects" className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-lightBlue">
        Academic Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div
          id="project-1"
          className="bg-mediumGray rounded-lg overflow-hidden"
        >
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src="src\assets\lampy.png"
              alt="iOS app interface for smart home system with ESP32 integration, dark blue theme"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mediumGray to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              iOS App &amp; Smart Home System
            </h3>
            <p className="text-gray-300 mb-4">
              Developed an iOS app in Swift for home automation (light control).
              Integrated the system with an ESP8286 and used Firebase for data
              storage.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                Swift
              </span>
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                ESP8286
              </span>
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                Firebase
              </span>
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                IoT
              </span>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div
          id="project-2"
          className="bg-mediumGray rounded-lg overflow-hidden"
        >
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src="src/assets/car.jpg"
              alt="autonomous vehicle race competition with small scale cars, technical view"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mediumGray to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Autonomous Vehicle Race</h3>
            <p className="text-gray-300 mb-4">
              Participated in the Paris-Saclay autonomous car competition,
              contributing to vehicle design and navigation algorithms.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                Computer Vision
              </span>
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                Navigation
              </span>
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                Algorithms
              </span>
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                Robotics
              </span>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div
          id="project-3"
          className="bg-mediumGray rounded-lg overflow-hidden"
        >
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src="src\assets\parkinson.png"
              alt="wearable device for Parkinson"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mediumGray to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Parkinson's Monitoring Tool
            </h3>
            <p className="text-gray-300 mb-4">
              Built a wearable device using Arduino Nano and sensors to track
              patient movements. Data was stored and processed using AI for
              improved medical monitoring.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                Arduino Nano
              </span>
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                Sensors
              </span>
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                AI
              </span>
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                Healthcare
              </span>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div
          id="project-4"
          className="bg-mediumGray rounded-lg overflow-hidden"
        >
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src="src\assets\boite.png"
              alt="embedded system with STM32 microcontroller, LEDs, LCD screen and PCB design, technical view"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mediumGray to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Embedded System with STM32
            </h3>
            <p className="text-gray-300 mb-4">
              Designed a system with STM32, LEDs, potentiometer, RGB LCD screen,
              and buttons. Modeled the 3D enclosure (SolidWorks) and created the
              PCB (EasyEDA).
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                STM32
              </span>
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                SolidWorks
              </span>
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                EasyEDA
              </span>
              <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                PCB Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Projects;
