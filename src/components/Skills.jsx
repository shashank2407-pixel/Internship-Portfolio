function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  return (
    <section className="skill-section" id="skill">

      <h2>
        Skills
      </h2>

      <div className="skill-grid">

        {skills.map((skill) => (
          <div
            className="skill-item"
            key={skill}
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;