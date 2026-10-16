import React, { useState } from "react";
import projects from "../data/projects";
import ProjectDetails from "./ProjectDetails";

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="content-section section-container" id="projects">

      <div className="section-heading">
        <span>03 / WORK</span>
        <h2>SELECTED PROJECTS</h2>
      </div>

      <div className="projects-list">

        {projects.map((project) => (

          <button
            className="project-row"
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >

            <span className="project-number">
              {project.number}
            </span>

            <div className="project-title">
              <h3>{project.title}</h3>
              <span>{project.category}</span>
            </div>

            <div className="project-status">
              {project.status}
            </div>

            <div className="project-arrow">
              ↗
            </div>

          </button>

        ))}

      </div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
}

export default Projects;