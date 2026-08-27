function Skills() {
  const skills = [
    {
      name: "HTML",
      type: "Frontend",
      level: "Intermediate",
      score: 75,
    },
    {
      name: "CSS",
      type: "Frontend",
      level: "Intermediate",
      score: 70,
    },
    {
      name: "JavaScript",
      type: "Language",
      level: "Intermediate",
      score: 65,
    },
    {
      name: "React",
      type: "Frontend",
      level: "Beginner",
      score: 45,
    },
  ];

  return (
    <section className="skill-section" id="skill">

      <div className="skills-heading">
        
        <h2>Skills</h2>
      </div>

      <div className="skills-list">

        {skills.map((skill, index) => (

          <div className="skill-row" key={skill.name}>

            <span className="skill-number">
              0{index + 1}
            </span>

            <div className="skill-name">
              <h3>{skill.name}</h3>
              <span>{skill.type}</span>
            </div>

            <div className="skill-level">

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.score}%` }}
                ></div>
              </div>

              <small>{skill.level}</small>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;