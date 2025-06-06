
const Sidebar = () => (
  <>
  {/* Sidebar Navigation */}
  <div
    id="sidebar"
    className="fixed left-0 top-0 h-full w-16 bg-mediumGray border-r border-gray-700 flex flex-col items-center py-6"
  >
    <a href="#header" className="w-10 h-10 rounded-full overflow-hidden mb-8 bg-lightBlue flex items-center justify-center">
      <span className="font-bold text-white">AV</span>
    </a>
    <nav className="flex flex-col items-center space-y-6 flex-1">
      <span className="text-gray-400 hover:text-lightBlue transition-colors cursor-pointer">
        <a href="#about">
          <i data-fa-i2svg="">
            <svg
              className="svg-inline--fa fa-user"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
          fill="currentColor"
          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
          </i>
        </a>
      </span>
      <span className="text-gray-400 hover:text-lightBlue transition-colors cursor-pointer">
        <a href="#skills">
          <i data-fa-i2svg="">
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
        </a>
      </span>
      <span className="text-gray-400 hover:text-lightBlue transition-colors cursor-pointer">
        <a href="#projects">
          <i data-fa-i2svg="">
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
        </a>
      </span>
      <span className="text-gray-400 hover:text-lightBlue transition-colors cursor-pointer">
        <a href="#experience">
          <i data-fa-i2svg="">
            <svg
              className="svg-inline--fa fa-briefcase"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="briefcase"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
          fill="currentColor"
          d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
              />
            </svg>
          </i>
        </a>
      </span>
      <span className="text-gray-400 hover:text-lightBlue transition-colors cursor-pointer">
        <a href="#contact">
          <i data-fa-i2svg="">
            <svg
              className="svg-inline--fa fa-envelope"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>
          </i>
        </a>
      </span>
    </nav>
    <div className="mt-auto">
      <a
      href="/assets/CV Agathe valence.pdf"
      download
      className="w-10 h-10 bg-darkBlue rounded-full flex items-center justify-center text-lightBlue"
      >
      <i data-fa-i2svg="">
        <svg
        className="svg-inline--fa fa-download"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="download"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        data-fa-i2svg=""
        >
        <path
          fill="currentColor"
          d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
        />
        </svg>
      </i>
      </a>
    </div>
  </div>
  </>
);

export default Sidebar;
