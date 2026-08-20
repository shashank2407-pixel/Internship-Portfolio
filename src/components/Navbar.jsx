function Navbar({ lightMode, setLightMode }) {

  return (
    <header className="site-header">

      <nav className="navbar">

        <div className="logo">
          Portfolio
        </div>

        <ul className="navlinks">

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skill">Skills</a>
          </li>

          <li>
            <a href="#Projects">Projects</a>
          </li>

          <li>
            <a href="#Contact">Contact</a>
          </li>

        </ul>

        <button
          className="theme-toggle"
          onClick={() => setLightMode(!lightMode)}
        >
          {lightMode ? "☀️" : "🌙"}
        </button>

      </nav>

    </header>
  );
}

export default Navbar;