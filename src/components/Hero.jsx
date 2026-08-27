function Hero() {
  return (
    <section className="hero" id="Hero">
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <div className="hero-content">
        <p className="hero-label">
          <span className="status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </p>

        <h1>
          Hi, I'm <span>Shashank.</span>
          <br />
          I build things for the web.
        </h1>

        <p className="hero-description">
          I'm a B.Tech student and developer passionate about creating
          modern web applications, solving real-world problems, and
          learning new technologies.
        </p>

        <div className="hero-buttons">
          <a href="#Projects" className="primary-button">
            View My Work
            <span>↗</span>
          </a>

          <a href="#Contact" className="secondary-button">
            Let's Connect
          </a>
        </div>

        <div className="hero-tech">
          <span>React</span>
          <span>JavaScript</span>
          <span>Web Development</span>
        </div>
      </div>

      <a href="#About" className="scroll-indicator">
        <span>Scroll to explore</span>
        <span className="scroll-arrow">↓</span>
      </a>
    </section>
  );
}

export default Hero;