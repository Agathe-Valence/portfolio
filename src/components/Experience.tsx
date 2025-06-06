
const experiences = [
  {
    id: "exp-1",
    icon: (
      <svg
        className="svg-inline--fa fa-plane"
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          fill="currentColor"
          d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"
        />
      </svg>
    ),
    company: "Cleeven (Consulting Firm)",
    period: "12.2024 - 06.2025",
    duration: "6 months | Aviation Client (Jet Aviation)",
    description:
      "Working on a project focused on interfacing and communication with aircraft equipment and In-Flight eXperience (IFX) systems in private jet. Developing solutions that ensure seamless integration between various aircraft systems and passenger entertainment options. My responsibilities included implementing multiple communication protocols—such as RS232, RS485, API requests, and TCP/IP—between equipment like screens, ECBUs, light controllers, Apple TV, and AVOD, as well as Crestron devices.",
    tags: ["Aviation", "IFE/IFX Systems", "Integration", "Communication", "Norms", "TCP/IP", "API", "RS-232", "RS-485"],
  },
  {
    id: "exp-2",
    icon: (
      <svg
        className="svg-inline--fa fa-robot"
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path
          fill="currentColor"
          d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"
        />
      </svg>
    ),
    company: "Alten",
    period: "03.2024 - 09.2024",
    duration: "6 months | Robotics Internship",
    description:
      "Developed an autonomous robot fleet using Raspberry Pi, Python, and ROS2. Implemented various navigation strategies and algorithms for different robot types (spider, tank, 4-wheel steerable, 4-wheel omnidirectional).",
    tags: ["Raspberry Pi", "Python", "ROS2 / RViz", "Robotics", "Tinkercad", "Linux (Ubuntu 22.04)", "Sensors / Detectors / Actuators", "VSCode / Git"],
  },
  {
    id: "exp-3",
    icon: (
      <svg
        className="svg-inline--fa fa-bolt"
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"
        />
      </svg>
    ),
    company: "Stimshop",
    period: "11.2022 - 03.2023",
    duration: "5 months | Signal Processing Internship",
    description:
      "Worked on signal processing and optimization with STM32. Developed an ultra-low-power switch (300x less consumption), suitable for both home and large-scale industrial applications (e.g., nuclear power plants). I was actively involved in the software development of the Wakee project, focusing on the design, production, assembly, programming, testing, and experimental characterization of an ultrasound-driven energy-saving system using STM32 microcontrollers, Python, and C. I had worked on a drift compensation system using LIDARs, dedicated to a semi-autonomous drone for nuclear environment. Implemented on STM32 of an error detection protocol using the Hamming algorithm for airborne ultrasonic communications.",
    tags: ["STM32", "Signal Processing", "Ultrasound", "Low Power", "Optimization"],
  },
];

const Experience = () => (
  <>
  {/* Experience Section */}
  <section id="experience" className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-lightBlue">
        Professional Experience
      </h2>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-lightBlue" />
        {/* Experience Items */}
        <div className="space-y-12">
          {/* Experience 1 */}
          <div id="exp-1" className="relative pl-20">
            <div className="absolute left-0 w-16 h-16 rounded-full bg-darkBlue border-4 border-lightBlue flex items-center justify-center z-10">
              <i className="text-lightBlue text-xl" data-fa-i2svg="">
                <svg
                  className="svg-inline--fa fa-plane"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="plane"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"
                  />
                </svg>
              </i>
            </div>
            <div className="bg-mediumGray rounded-lg p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Cleeven (Consulting Firm)</h3>
                <span className="text-lightBlue font-medium">12.2024 - 06.2025</span>
              </div>
              <p className="text-gray-400 mb-4">
                6 months | Aviation Client (Jet Aviation)
              </p>
              <p className="text-gray-300">
                Working on a project focused on interfacing and communication
                with aircraft equipment and In-Flight eXperience (IFX)
                systems in private jet. Developing solutions that ensure seamless integration
                between various aircraft systems and passenger entertainment
                options.
                <br />
                 My responsibilities included implementing multiple communication
                 protocols—such as RS232, RS485, API requests, and TCP/IP—between equipment 
                 like screens, ECBUs, light controllers, Apple TV, and AVOD, as well as Crestron devices.

              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  Aviation
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  IFE/IFX Systems
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  Integration
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  Communication
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  Norms
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  TCP/IP
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  API
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  RS-232
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  RS-485
                </span>
              </div>
            </div>
          </div>
          {/* Experience 2 */}
          <div id="exp-2" className="relative pl-20">
            <div className="absolute left-0 w-16 h-16 rounded-full bg-darkBlue border-4 border-lightBlue flex items-center justify-center z-10">
              <i className="text-lightBlue text-xl" data-fa-i2svg="">
                <svg
                  className="svg-inline--fa fa-robot"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="robot"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"
                  />
                </svg>
              </i>
            </div>
            <div className="bg-mediumGray rounded-lg p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Alten</h3>
                <span className="text-lightBlue font-medium">03.2024 - 09.2024</span>
              </div>
              <p className="text-gray-400 mb-4">
                6 months | Robotics Internship
              </p>
              <p className="text-gray-300">
                Developed an autonomous robot fleet using Raspberry Pi, Python,
                and ROS2. Implemented various navigation strategies and
                algorithms for different robot types (spider, tank, 4-wheel
                steerable, 4-wheel omnidirectional).
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  Raspberry Pi
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  Python
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  ROS2 / RViz
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  Robotics
                </span><span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                Tinkercad
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                Linux (Ubuntu 22.04)
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                Sensors / Detectors / Actuators
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                VSCode / Git
                </span>
              </div>
            </div>
          </div>
          {/* Experience 3 */}
          <div id="exp-3" className="relative pl-20">
            <div className="absolute left-0 w-16 h-16 rounded-full bg-darkBlue border-4 border-lightBlue flex items-center justify-center z-10">
              <i className="text-lightBlue text-xl" data-fa-i2svg="">
                <svg
                  className="svg-inline--fa fa-bolt"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bolt"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"
                  />
                </svg>
              </i>
            </div>
            <div className="bg-mediumGray rounded-lg p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Stimshop</h3>
                <span className="text-lightBlue font-medium">11.2022 - 03.2023</span>
              </div>
              <p className="text-gray-400 mb-4">
                5 months | Signal Processing Internship
              </p>
              <p className="text-gray-300">
                Worked on signal processing and optimization with STM32.
                Developed an ultra-low-power switch (300x less consumption),
                suitable for both home and large-scale industrial applications
                (e.g., nuclear power plants).
                <br />
                I was actively involved in the software development of the Wakee project,
                 focusing on the design, production, assembly, programming, testing, and 
                 experimental characterization of an ultrasound-driven energy-saving system
                  using STM32 microcontrollers, Python, and C.

                <br />
                I had worked on a drift compensation system using LIDARs, 
                dedicated to a semi-autonomous drone for nuclear environment. 
                <br />
                Implemented on STM32 of an error detection protocol using the
                 Hamming algorithm for airborne ultrasonic communications.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  STM32
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  Signal Processing
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  Ultrasound
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  Low Power
                </span>
                <span className="px-3 py-1 bg-darkBlue rounded-full text-xs text-lightBlue">
                  Optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Experience;
