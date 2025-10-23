import React from "react";

export default function ContactUsLink() {
  const scrollToSection = () => {
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className="text-white fw-bold shadow border-0"
      style={{
        position: "fixed",
        top: "63%",
        left: "0",
        transform: "translateY(-50%) rotate(-90deg)",
        transformOrigin: "left top",
        fontSize:"13px",
        backgroundColor: "green",
        padding: "3px 15px",
        textDecoration: "none",
        zIndex: 9999,
        cursor: "pointer",
      }}
    >
      Contact&nbsp;Us
    </button>
  );
}
