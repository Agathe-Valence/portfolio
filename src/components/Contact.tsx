import React from "react";

const Contact: React.FC = () => (
  <section className="contact" id="contact">
    <h2>Get in Touch</h2>
    <div className="contact-container">
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Your message" />
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <a href="agathe.valence@efrei.net">Email</a>
        <a href="https://www.linkedin.com/in/agathe-valence/">LinkedIn</a>
      </div>
    </div>
  </section>
);

export default Contact;
