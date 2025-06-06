
const About = () => (
  <>
  {/* About Section */}
  <section id="about" className="mb-16">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <h2 className="text-2xl font-bold mb-6 text-lightBlue">About Me</h2>
          <p className="text-gray-300 mb-4">
            I am an engineering graduate from EFREI Paris, specializing in
            embedded systems and digital technologies. With expertise in
            multiple programming languages and hands-on experience with various
            microcontrollers, communication protocols and platforms, I bring a comprehensive skill set to
            the field of embedded systems.

            
          </p>
          <p className="text-gray-300">
            My passion lies in creating innovative solutions that bridge
            hardware and software, from autonomous vehicles to smart home
            systems and medical monitoring tools. I am proficient in
            communication protocols and hardware design, including 3D modeling
            and PCB creation.
          </p>
        </div>
        <div className="col-span-4">
          <div className="bg-mediumGray rounded-lg p-6 h-full">
            <img
              className="w-full h-48 rounded-lg mb-4 object-cover"
              src="/portfolio/assets/me.png"
              alt="professional portrait of an embedded systems engineer in dark lighting with blue highlights, minimalist style"
            />
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <i className="text-lightBlue w-6" data-fa-i2svg="">
                  <svg
                    className="svg-inline--fa fa-graduation-cap"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="graduation-cap"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
                    />
                  </svg>
                </i>
                <span className="ml-2 text-gray-300">EFREI Paris</span>
              </div>
              <div className="flex items-center">
                <i className="text-lightBlue w-6" data-fa-i2svg="">
                  <svg
                    className="svg-inline--fa fa-location-dot"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="location-dot"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                    />
                  </svg>
                </i>
                <span className="ml-2 text-gray-300">Saint-Louis, FR | Basel, CH</span>
              </div>
              <div className="flex items-center">
                <i className="text-lightBlue w-6" data-fa-i2svg="">
                  <svg
                    className="svg-inline--fa fa-language"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="language"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"
                    />
                  </svg>
                </i>
                <span className="ml-2 text-gray-300">English, French</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </>
);

export default About;
