import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  const [lightMode, setLightMode] = useState(false);

  return (
    <div className={lightMode ? "app light-theme" : "app dark-theme"}>

      <Navbar
        lightMode={lightMode}
        setLightMode={setLightMode}
      />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

      </main>

      <Footer />

    </div>
  );
}

export default App;