import React from "react";
import journey from "../data/journey";

function Journey() {

  return (
    <section className="content-section section-container" id="journey">

      <div className="section-heading">
        <span>04 / JOURNEY</span>
        <h2>DEVELOPER JOURNEY</h2>
      </div>

      <div className="timeline">

        {journey.map((item, index) => (

          <div
            className="timeline-item"
            key={`${item.year}-${index}`}
          >

            <div className="timeline-year">
              {item.year}
            </div>

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <h3>{item.title}</h3>

              <p>
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Journey;