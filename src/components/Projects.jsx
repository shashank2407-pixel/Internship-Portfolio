function Projects() {

  const projects = [
    {
      title: "Weather App",
      description: "Real time Weather Dashboard",
      image: "/images/06c4f70ec5931e2342e703e8a3f0a253.png",
      tags: ["React", "API"]
    },

    {
      title: "Weather App",
      description: "Real time Weather Dashboard",
      image: "/images/06c4f70ec5931e2342e703e8a3f0a253.png",
      tags: ["React", "API"]
    }
  ];

  return (
    <section className="project" id="Projects">

      <h2>My Projects</h2>

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

            <h3>{project.title}</h3>

            <p>{project.description}</p>

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

            <div className="project-buttons">

              <a href="#" className="btn">
                Live Demo
              </a>

              <a href="#" className="btn">
                GitHub
              </a>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;