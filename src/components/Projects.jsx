import { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Weather App",
      subtitle: "Real-time Weather Dashboard",

      description:
        "A weather application for checking weather conditions across different locations with multiple temperature units.",

      fullDescription:
        "The Weather App is a weather dashboard designed to provide weather information for different locations. It supports temperature conversion between Celsius, Fahrenheit and Kelvin along with multiple weather parameters.",

      image: "/images/weather-project-preview.png",

      detailImage: "/images/weather-app-high-res.png",

      highlights: [
        "Weather information for different locations",
        "Celsius, Fahrenheit and Kelvin",
        "Multiple weather parameters",
        "Responsive interface"
      ],

      tags: ["React", "API", "In Development"],

      github: "#",
      liveDemo: "#"
  },

    {
      title: "PhishLens",
      subtitle: "Chrome Extension for Phishing Detection",

      description:
        "A Chrome extension that helps detect potentially fake and phishing websites before users interact with them.",

      fullDescription:
        "PhishLens is a browser security project designed to help users identify potentially dangerous websites before interacting with them. The Chrome extension analyzes websites and provides an indication when a website may be suspicious.",

      image: "/images/phishlens-project-preview.png",
      detailImage: "/images/phishlens-high-res.png",

      highlights: [
        "Chrome browser extension",
        "Detects potentially fake websites",
        "Analyzes websites before interaction",
        "Designed for safer browsing"
      ],

      tags: ["React", "API", "Chrome Extension"],

      liveDemo: null,
      github: "https://github.com/shashank2407-pixel/PhishLens"
    }
  ];

  return (
    <section className="project" id="Projects">

      <div className="projects-heading">
        <p>MY RECENT WORK</p>
        <h2>Projects</h2>
      </div>

      <div className="Project-grid">

        {projects.map((project, index) => (
          <article
            className="project-card"
            key={index}
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-info">

              <h3>{project.title}</h3>

              <h4>{project.subtitle}</h4>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">

                {project.tags.map((tag) => (
                  <span
                    className="tag"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}

              </div>

              <button
                className="view-project"
                onClick={() => setSelectedProject(project)}
              >
                View Project ↗
              </button>

            </div>

          </article>
        ))}

      </div>


      {/* PROJECT MODAL */}

      {selectedProject && (

        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <img
              src={selectedProject.detailImage}
              alt={`${selectedProject.title} project preview`}
            />

            <div className="modal-content">

              <p className="modal-label">
                PROJECT DETAILS
              </p>

              <h2>
                {selectedProject.title}
              </h2>

              <h3>
                {selectedProject.subtitle}
              </h3>

              <p className="modal-description">
                {selectedProject.fullDescription}
              </p>

              <div className="modal-highlights">

                <h4>Highlights</h4>

                {selectedProject.highlights.map((highlight) => (
                  <div
                    className="modal-highlight"
                    key={highlight}
                  >
                    <span>•</span>
                    {highlight}
                  </div>
                ))}

              </div>

              <div className="modal-tags">

                {selectedProject.tags.map((tag) => (
                  <span
                    className="tag"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}

              </div>


              {/* BUTTONS */}

              <div className="modal-buttons">

                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Live Demo ↗
                  </a>
                )}

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    GitHub ↗
                  </a>
                )}

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Projects;