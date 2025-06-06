
const Header = () => (
  <>
  
    {/* Header */}
    <header id="header" className="flex items-center justify-between mb-12">
      <div>
        <h1 className="text-3xl font-bold text-white">
        &lt;Agathe.<span className="text-lightBlue">VALENCE</span>/&gt;
        <br />
          Embedded Systems <span className="text-lightBlue">Engineer</span>
        </h1>
        <p className="text-gray-400">
          EFREI Paris Graduate | Generalist digital & technology engineering degree
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="#contact"
          className="px-4 py-2 border border-lightBlue rounded-full text-lightBlue font-medium hover:bg-lightBlue hover:text-white transition-colors cursor-pointer"
        >
          <i className="mr-2" data-fa-i2svg="">
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
          Contact Me
        </a>
      </div>
    </header>
 
  </>
);

export default Header;
