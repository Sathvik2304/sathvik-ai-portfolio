import React from "react";

function DevLab() {

  const experiments = [
    {
      title: "SIGNALR",
      category: "REAL-TIME SYSTEMS",
      status: "LEARNING"
    },
    {
      title: "CLEAN ARCHITECTURE",
      category: ".NET",
      status: "EXPLORING"
    },
    {
      title: "MICROSERVICES",
      category: "BACKEND",
      status: "NEXT"
    }
  ];

  return (
    <section className="content-section section-container" id="lab">

      <div className="section-heading">
        <span>05 / LAB</span>
        <h2>DEV LAB</h2>
      </div>

      <div className="lab-grid">

        {experiments.map((item) => (

          <div className="lab-card" key={item.title}>

            <div className="lab-top">
              <span>EXPERIMENT</span>
              <span>●</span>
            </div>

            <h3>{item.title}</h3>

            <p>{item.category}</p>

            <div className="lab-status">
              {item.status}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default DevLab;