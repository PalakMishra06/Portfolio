import React from "react";

// ✅ Component Imports
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      {/* 🌍 Global Style */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        section {
          min-height: 100vh;
         padding:0.1%;
        }
      `}</style>

      {/* 🧭 Navbar */}
      <Navbar />

      {/* 🏠 Home Section */}
      <section id="home">
        <Home />
      </section>

      {/* 👩‍💻 About Section */}
      <section id="about">
        <About />
      </section>

      {/* 🛠️ Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* 📁 Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* 📞 Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
