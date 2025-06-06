
const Contact = () => (
  <>
  {/* Contact Section */}
  <section id="contact" className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-lightBlue">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-mediumGray rounded-lg p-6 flex items-center">
          <div className="w-12 h-12 rounded-full bg-darkBlue flex items-center justify-center mr-4">
            <i className="text-lightBlue" data-fa-i2svg="">
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
          </div>
          <div>
            <h3 className="text-sm text-gray-400">Email</h3>
            <a href="mailto:agathe.valence@efrei.net?subject=Contact from your portfolio"
            className="contact-link">
            agathe.valence@efrei.net
            </a>
          </div>
        </div>
        <div className="bg-mediumGray rounded-lg p-6 flex items-center">
          <div className="w-12 h-12 rounded-full bg-darkBlue flex items-center justify-center mr-4">
            <i className="text-lightBlue" data-fa-i2svg="">
              <svg
                className="svg-inline--fa fa-linkedin-in"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
            </i>
          </div>
          <div>
            <h3 className="text-sm text-gray-400">LinkedIn</h3>
            <a href="https://linkedin.com/in/agathe-valence" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/agathe-valence
            </a>
          </div>
        </div>
        <div className="bg-mediumGray rounded-lg p-6 flex items-center">
          <div className="w-12 h-12 rounded-full bg-darkBlue flex items-center justify-center mr-4">
            <i className="text-lightBlue" data-fa-i2svg="">
              <svg
                className="svg-inline--fa fa-phone"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
            </i>
          </div>
          <div>
            <h3 className="text-sm text-gray-400">Phone</h3>
            <p className="text-white">+33 6 49 66 15 17</p>
          </div>
          
        </div>
        <div className="bg-mediumGray rounded-lg p-6 flex items-center">
          <div className="w-12 h-12 rounded-full bg-darkBlue flex items-center justify-center mr-4">
            <i className="text-lightBlue" data-fa-i2svg="">
                <svg
                className="svg-inline--fa fa-file-download"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="file-download"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                data-fa-i2svg=""
                >
                <path
                  fill="currentColor"
                  d="M224 136c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24v136H96c-17.7 0-26.7 21.5-14.1 34.1l96 96c9.4 9.4 24.6 9.4 33.9 0l96-96c12.5-12.5 3.6-34.1-14.1-34.1H224V136zM360 0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24zM336 464H48V48h288v416z"
                />
                </svg>
            </i>
          </div>
          <div>
            <h3 className="text-sm text-gray-400">Agathe Valence Resume</h3>
            <a href="/portfolio/CV Agathe valence.pdf" download>
                Download my Resume (PDF)
              </a>
          </div>
          
        </div>
      </div>
      
    </section>
  </>
);

export default Contact;
