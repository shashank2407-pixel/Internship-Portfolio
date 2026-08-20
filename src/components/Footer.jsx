function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer>

      <p>
        © {year} Shashank — Built with React
      </p>

      <nav>

        <a
          href="https://github.com/shashank2407-pixel"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/thambichetty-shashank-b9104b420/?isSelfProfile=true"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </nav>

    </footer>
  );
}

export default Footer;