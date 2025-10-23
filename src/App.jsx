import React, { useState } from "react";
import Navbar from "./components/Navbar";
import English from "./components/English";
import Hindi from "./components/Hindi";
import Marathi from "./components/Marathi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactUsLink from "./components/ContactUsLink";

export default function App() {
  const [language, setLanguage] = useState("hi");

  const renderLanguageComponent = () => {
    switch (language) {
      case "hi":
        return <Hindi />;
      case "mr":
        return <Marathi />;
      default:
        return <English />;
    }
  };

  return (
    <>
      <Navbar currentLang={language} setLanguage={setLanguage} />
      {renderLanguageComponent()}
      <ContactUsLink />
    </>
  );
}
