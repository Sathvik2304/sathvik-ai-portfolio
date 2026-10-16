import React from "react";

function ProjectDetails({ project, onClose }) {

  return (
    <div className="project-overlay">

      <div className="project-modal">

        <button
          className="close-project"
          onClick={onClose}
        >
          ×
        </button>

        <div className="project-modal-header">

          <span>{project.number} / PROJECT</span>

          <h2>{project.title}</h2>

          <p>
            {project.description}
          </p>

        </div>

        <div className="project-modal-grid">

          <div>

            <span className="modal-label">
              TECHNOLOGIES
            </span>

            <div className="technology-tags">

              {project.technologies.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}

            </div>

          </div>

          <div>

            <span className="modal-label">
              FEATURES
            </span>

            <ul className="feature-list">

              {project.features.map((feature) => (
                <li key={feature}>
                  {feature}
                </li>
              ))}

            </ul>

          </div>

        </div>

        <div className="architecture">

          <span className="modal-label">
            ARCHITECTURE
          </span>

          <div className="architecture-flow">

            {project.architecture.map((item, index) => (

              <React.Fragment key={item}>

                <div className="architecture-node">
                  {item}
                </div>

                {index < project.architecture.length - 1 && (
                  <span>↓</span>
                )}

              </React.Fragment>

            ))}

          </div>

        </div>

        <div className="project-buttons">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

          {/* <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            LIVE DEMO ↗
          </a> */}

        </div>

      </div>

    </div>
  );
}

export default ProjectDetails;