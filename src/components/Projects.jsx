import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <div className="projects my-3" id="projects">
      <h1 className="projects-heading">PROJECTS</h1>

      {/* Projects Grid */}
      <div className="projects-container">
        {project.map((data) => (
          <div
            key={data.id}
            className="project-card"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img src={data.imageSrc} alt={data.title} />

            <h3>{data.title}</h3>
            <p>{data.description}</p>

            <div className="project-buttons">
              <a href={data.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a href={data.source} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
