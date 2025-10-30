import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar({ currentLang, setLanguage }) {
  const getSliderStyle = () => {
    const positions = { en: "0%", hi: "33.3%", mr: "66.6%" };
    return {
      position: "absolute",
      top: 1,
      left: positions[currentLang] || "0%",
      width: "35.3%",
      height: "calc(100% - 2px)",
      backgroundColor: "#1229db",
      borderRadius: "0",
      transition: "left 0.3s ease",
      zIndex: 1,
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    };
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary py-1 \ fixed-top"
      style={{
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.25)",
        // backgroundColor:"#1229db",
      }}
    >
      <div className="container">
        {/* Brand */}
        <a
          className="navbar-brand d-flex align-items-center fw-bold fs-4 text-white"
          href="#home"
        >
          <img
            src="https://aircraftdataentry.com/assets/logo.bba51d3e.png"
            alt="Aircraft Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}  
          />
          AIRCRAFT
        </a>

        {/* Toggler button for mobile */}
        <button
          className="navbar-toggler"
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
          <ul
            className="navbar-nav ms-auto align-items-center"
            style={{
              gap: "12px", // space between nav items
            }}
          >
            {[
              { name: "SERVICES", href: "#services" },
              { name: "FORM FILLING", href: "#form" },
              { name: "CAPTCHA WORK", href: "#captcha" },
              { name: "PLANS", href: "#plans" },
              { name: "ABOUT", href: "#about" },
              { name: "CONTACT", href: "#contact" },
            ].map((item) => (
              <li className="nav-item" key={item.name}>
                <a
                  className="nav-link text-white"
                  href={item.href}
                  style={{
                    fontSize: "13px",
                    letterSpacing: "0.5px",
                    padding: "4px 6px",
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* 🌐 Language Switcher */}
            <li className="nav-item ms-lg-3">
              <div
                className="position-relative d-flex bg-white align-items-center justify-content-between rounded-2"
                style={{
                  width: "140px", 
                  height: "30px",
                  overflow: "hidden",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  border: "1px solid #e0e0e0",
                  borderRadius: "0",
                }}
              >
                <div style={getSliderStyle()}></div>

                <button
                  className={`btn flex-fill py-0 px-1 fw-semibold border-0 ${
                    currentLang === "en" ? "text-white" : "text-primary"
                  }`}
                  style={{
                    fontSize: "10.5px",
                    zIndex: 2,
                    transition: "color 0.3s ease",
                  }}
                  onClick={() => setLanguage("en")}
                >
                  English
                </button>

                <button
                  className={`btn flex-fill py-0 px-1 fw-semibold border-0 ${
                    currentLang === "hi" ? "text-white" : "text-primary"
                  }`}
                  style={{
                    fontSize: "10.5px",
                    zIndex: 2,
                    transition: "color 0.3s ease",
                  }}
                  onClick={() => setLanguage("hi")}
                >
                  हिंदी
                </button>

                <button
                  className={`btn flex-fill py-0 px-1 fw-semibold border-0 ${
                    currentLang === "mr" ? "text-white" : "text-primary"
                  }`}
                  style={{
                    fontSize: "10.5px",
                    zIndex: 2,
                    transition: "color 0.3s ease",
                  }}
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
