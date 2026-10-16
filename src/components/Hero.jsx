import React from "react";

import resume from "../assets/Surampally_Sathvik_Resume.pdf";
import profileImage from "../assets/profile.jpg";

function Hero({ onNavigate }) {
  return (
    <section className="hero section-container" id="home">

      <div className="hero-grid">

        <div className="hero-content">

          <div className="system-label">
            <span>SYS.001</span>
            SOFTWARE DEVELOPER
          </div>

          <h1>
            SATHVIK
            <br />
            <span>SURAMPALLY</span>
          </h1>

          <p className="hero-description">
            Computer Science graduate focused on building practical,
            scalable and user-friendly software applications using
            .NET, React and SQL Server.
          </p>

          <div className="hero-actions">

            <button onClick={() => onNavigate("projects")}>
              EXPLORE WORK
              <span>↗</span>
            </button>

            <a
              href="https://drive.google.com/file/d/1erY-T3-O1DlzEkvSw21iECehyKytbpVv/view?usp=sharing"
              // download="Surampally_Sathvik_Resume.pdf" 
              target='_blank'
            >
              DOWNLOAD RESUME
              <span>↓</span>
            </a>

          </div>

        </div>

        <div className="hero-visual">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          <div className="developer-core">

            <div className="profile-image">
              <img
                src={profileImage}
                alt="Sathvik Surampally"
              />
            </div>

          </div>

          <div className="floating-tag tag-one">
            C#
          </div>

          <div className="floating-tag tag-two">
            .NET
          </div>

          <div className="floating-tag tag-three">
            REACT
          </div>

          <div className="floating-tag tag-four">
            SQL
          </div>

        </div>

      </div>

      <div className="hero-bottom">

        <div>
          <span>FOCUS</span>
          FULL STACK DEVELOPMENT
        </div>

        <div>
          <span>CORE</span>
          .NET / C# / SQL
        </div>

        <div>
          <span>STATUS</span>
          BUILDING
        </div>

      </div>

    </section>
  );
}

export default Hero;