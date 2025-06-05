import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Agathe Valence</h3>
          <ul>
            <li>
              <strong>Email :</strong>{" "}
              <a href="mailto:agathe.valence@efrei.net">agathe.valence@efrei.net</a>
            </li>
            <li>
              <strong>LinkedIn :</strong>{" "}
              <a href="https://linkedin.com/in/agathe-valence" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/agathe-valence
              </a>
            </li>
            <li>
              <strong>GitHub :</strong>{" "}
              <a href="https://github.com/agathe-valence" target="_blank" rel="noopener noreferrer">
                github.com/agathevalence
              </a>
            </li>
            <li>
              <strong>CV :</strong>{" "}
              <a href="/portfolio/CV Agathe valence.pdf" download>
                Download my Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
        <a
          href="mailto:agathe.valence@efrei.net?subject=Contact from your portfolio"
          className="contact-link"
        >
          Send an email
        </a>
      </div>
    </section>
  );
};

export default Contact;
