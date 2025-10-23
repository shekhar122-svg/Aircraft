import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar({ currentLang, setLanguage }) {
  const getSliderStyle = () => {
    const positions = { en: "0%", hi: "33.3%", mr: "66.6%" };
    return {
      position: "absolute",
      top: 0,
      left: positions[currentLang] || "0%",
      width: "33.3%",
      height: "100%",
      backgroundColor: "#0d6efd",
      borderRadius: "50px",
      transition: "left 0.3s ease",
      zIndex: 1,
    };
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-2 fixed-top">
      <div className="container">
        {/* Brand */}
       <a className="navbar-brand d-flex align-items-center fw-bold fs-4 text-white" href="#home">
  <img
    src="https://aircraftdataentry.com/assets/logo.bba51d3e.png" // your logo URL
    alt="Aircraft Logo"
    style={{ width: "40px", height: "40px", marginRight: "10px" }} // adjust size
  />
  AIRCRAFT
</a>


        {/* Toggler button for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#services">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#form">
                FORM FILLING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#captcha">
                CAPTCHA WORK
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#plans">
                PLANS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#contact">
                CONTACT
              </a>
            </li>

            {/* 🌐 Language Switcher */}
            <li className="nav-item ms-lg-3">
              <div
                className="position-relative d-flex bg-white border rounded-5"
                style={{
                  width: "210px",
                  height: "35px",
                  overflow: "hidden",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                }}
              >
                <div style={getSliderStyle()}></div>
                <button
                  className={`btn flex-fill fs-6 border-0 ${
                    currentLang === "en" ? "text-white" : "text-primary"
                  }`}
                  style={{ zIndex: 2, transition: "color 0.3s ease" }}
                  onClick={() => setLanguage("en")}
                >
                  English
                </button>
                <button
                  className={`btn flex-fill fs-6 border-0 ${
                    currentLang === "hi" ? "text-white" : "text-primary"
                  }`}
                  style={{ zIndex: 2, transition: "color 0.3s ease" }}
                  onClick={() => setLanguage("hi")}
                >
                  हिन्दी
                </button>
                <button
                  className={`btn flex-fill fs-6 border-0 ${
                    currentLang === "mr" ? "text-white" : "text-primary"
                  }`}
                  style={{ zIndex: 2, transition: "color 0.3s ease" }}
                  onClick={() => setLanguage("mr")}
                >
                  मराठी
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
