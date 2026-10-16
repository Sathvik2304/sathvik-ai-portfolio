import React, { useEffect, useState } from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import DevLab from "./components/DevLab";
import Contact from "./components/Contact";

import "./App.css";

function App() {

  const [activeSection, setActiveSection] = useState("home");

  const navigateTo = (section) => {

    const element = document.getElementById(section);

    if (element) {

      element.scrollIntoView({
        behavior: "smooth"
      });

    }
  };

  useEffect(() => {

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }

        });

      },
      {
        threshold: 0.35
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };

  }, []);

  return (

    <div className="app">

      <Navigation
        activeSection={activeSection}
        onNavigate={navigateTo}
      />

      <main>

        <Hero onNavigate={navigateTo} />

        <Profile />

        <TechStack />

        <Projects />

        <Journey />

        <DevLab />

        <Contact />

      </main>

      <footer className="footer">

        <span>
          SATHVIK.DEV
        </span>

        <span>
          © 2026
        </span>

        <span>
          BUILT WITH REACT
        </span>

      </footer>

    </div>

  );
}

export default App;