import React, { useState } from "react";
import skills from "../data/skills";

function TechStack() {

  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  return (
    <section className="content-section section-container" id="stack">

      <div className="section-heading">
        <span>02 / STACK</span>
        <h2>TECHNOLOGY</h2>
      </div>

      <div className="stack-layout">

        <div className="skills-list">

          {skills.map((skill, index) => (
            <button
              key={skill.name}
              className={
                selectedSkill.name === skill.name
                  ? "skill-item selected"
                  : "skill-item"
              }
              onClick={() => setSelectedSkill(skill)}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{skill.name}</strong>

              <small>{skill.category}</small>
            </button>
          ))}

        </div>

        <div className="skill-details">

          <span>SELECTED TECHNOLOGY</span>

          <h3>{selectedSkill.name}</h3>

          <div className="skill-category">
            {selectedSkill.category}
          </div>

          <p>
            {selectedSkill.description}
          </p>

          <div className="skill-line">
            <span></span>
          </div>

          <div className="skill-status">
            <span>STATUS</span>
            <strong>ACTIVE</strong>
          </div>

        </div>

      </div>

    </section>
  );
}

export default TechStack;