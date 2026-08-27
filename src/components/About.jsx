function About() {
  return (
    <section className="about-section" id="about">

      <h2>About Me</h2>

      <div className="about-content">

        <figure className="about-photo">
          <img
            src="/images/WhatsApp Image 2026-08-10 at 12.42.08 PM.jpeg"
            alt="Shashank"
          />

          <figcaption>Shashank</figcaption>
        </figure>

        <div className="about-text">

          <p className="about-intro">
            I'm Shashank, a B.Tech student and developer who enjoys
            creating websites and building applications.
          </p>

          <p>
            I like turning ideas into projects, exploring new
            technologies and continuously improving my development
            skills.
          </p>

          <div className="about-focus">
            <span>Currently focused on</span>

            <div>
              <strong>Web Development</strong>
              <strong>React</strong>
              <strong>Building Projects</strong>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;