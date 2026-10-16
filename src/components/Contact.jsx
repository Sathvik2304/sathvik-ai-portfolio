import React from "react";

function Contact() {

  return (
    <section className="content-section contact-section section-container" id="contact">

      <div className="section-heading">
        <span>06 / CONTACT</span>
        <h2>LET'S BUILD</h2>
      </div>

      <div className="contact-content">

        <h3>
          Have an opportunity?
          <br />
          Let's connect.
        </h3>

        <p>
          I'm open to entry-level software development
          opportunities and interesting projects.
        </p>

        <div className="contact-links">

        <a   href="https://mail.google.com/mail/?view=cm&fs=1&to=surampallysathvik2304@gmail.com"
                target="_blank"
                rel="noreferrer">
            EMAIL ↗
        </a>

          <a
            href="https://github.com/Sathvik2304"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

          <a
            href="https://www.linkedin.com/in/sathvik-surampally-83343626a/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>


            <a
            // href="https://www.linkedin.com/in/sathvik-surampally-83343626a/"
            // target="_blank"
            // rel="noreferrer"
          >
            PHONE NO: +91 7207003103 
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;