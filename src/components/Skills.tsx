import React from "react";

const Skills = () => (
  <>
  {/* Skills Section */}
  <section id="skills" className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-lightBlue">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Programming Languages */}
        <div className="bg-mediumGray rounded-lg p-6">
          <div className="flex items-center mb-4">
            <i className="text-lightBlue text-xl" data-fa-i2svg="">
              <svg
                className="svg-inline--fa fa-code"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="code"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                />
              </svg>
            </i>
            <h3 className="text-lg font-semibold ml-3">Programming</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              C
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              Python
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              VHDL
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              Java
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              MATLAB/Simulink
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              Swift
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              Html/CSS
            </span>
          </div>
        </div>
        {/* Hardware Platforms */}
        <div className="bg-mediumGray rounded-lg p-6">
          <div className="flex items-center mb-4">
            <i className="text-lightBlue text-xl" data-fa-i2svg="">
              <svg
                className="svg-inline--fa fa-microchip"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="microchip"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"
                />
              </svg>
            </i>
            <h3 className="text-lg font-semibold ml-3">Hardware</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              Arduino
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              ESP8286
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              STM32
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              FPGA
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              Raspberry Pi
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              Crestron Processor
            </span>
          </div>
        </div>
        {/* Communication Protocols */}
        <div className="bg-mediumGray rounded-lg p-6">
          <div className="flex items-center mb-4">
            <i className="text-lightBlue text-xl" data-fa-i2svg="">
              <svg
                className="svg-inline--fa fa-network-wired"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="network-wired"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"
                />
              </svg>
            </i>
            <h3 className="text-lg font-semibold ml-3">Protocols</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              UART
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              SPI
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              I2C
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              RS-232
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              RS-485
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              WIFI / Ethernet / Bluetooth
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              Ethernet
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              Bluetooth
            </span>
          </div>
        </div>
        {/* Design Tools */}
        <div className="bg-mediumGray rounded-lg p-6">
          <div className="flex items-center mb-4">
            <i className="text-lightBlue text-xl" data-fa-i2svg="">
              <svg
                className="svg-inline--fa fa-compass-drafting"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="compass-drafting"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192h0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496V440.6c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1V496c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                />
              </svg>
            </i>
            <h3 className="text-lg font-semibold ml-3">Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              VSCode
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              STM32 Studio Code
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              Arduino IDE
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              XCode
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              SolidWorks/Fusion 360
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              EasyEDA
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              PCB Design
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              GitHub
            </span>
            <span className="px-3 py-1 bg-darkBlue rounded-full text-sm text-lightBlue">
              ROS2/RViz
            </span>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Skills;
