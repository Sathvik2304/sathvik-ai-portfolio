import React from "react";

function Navigation({ activeSection, onNavigate }) {
  const navigation = [
    ["01", "PROFILE", "profile"],
    ["02", "STACK", "stack"],
    ["03", "WORK", "projects"],
    ["04", "JOURNEY", "journey"],
    ["05", "LAB", "lab"],
    ["06", "CONTACT", "contact"]
  ];

  return (
    <header className="navigation">
      <div className="nav-logo" onClick={() => onNavigate("home")}>
        SATHVIK<span>.DEV</span>
      </div>

      <div className="nav-links">
        {navigation.map(([number, title, id]) => (
          <button
            key={id}
            className={activeSection === id ? "active" : ""}
            onClick={() => onNavigate(id)}
          >
            <small>{number}</small>
            {title}
          </button>
        ))}
      </div>

      <div className="availability">
        <span></span>
        AVAILABLE
      </div>
    </header>
  );
}

export default Navigation;