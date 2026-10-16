import React from "react";

function Profile() {
  return (
    <section className="content-section section-container" id="profile">

      <div className="section-heading">
        <span>01 / PROFILE</span>
        <h2>ABOUT ME</h2>
      </div>

      <div className="profile-grid">

        <div className="profile-main">
          <p className="large-text">
            I am a Computer Science graduate passionate about
            software development and building applications that
            solve real-world problems.
          </p>

          <p>
            My primary focus is .NET development, with hands-on
            experience in ASP.NET Core Web APIs, C#, SQL Server
            and modern frontend technologies such as React.
          </p>

          <p>
            I enjoy understanding how applications work from
            the user interface to the backend services and
            database layer.
          </p>
        </div>

        <div className="profile-info">

          <div>
            <span>EDUCATION</span>
            <strong>B.Tech — CSE</strong>
          </div>

          <div>
            <span>ROLE</span>
            <strong>.NET Developer</strong>
          </div>

          <div>
            <span>FOCUS</span>
            <strong>Full Stack Development</strong>
          </div>

          <div>
            <span>INTEREST</span>
            <strong>Software Engineering</strong>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Profile;