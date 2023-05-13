import React, { useState } from "react";
import NavBar from "../components/NavBar";

function LightAndDarkMode() {
  const [pageDarkMode, setpageDarkMode] = useState(false);
  const [containerDarkMode, setContainrDarkMode] = useState(false);

  const pageStyle = {
    background: pageDarkMode ? "black" : "white",
    color: pageDarkMode ? "white" : "black",
  };

  const containerStyle = {
    background: containerDarkMode ? "black" : "white",
    color: containerDarkMode ? "white" : "black",
  };

  document.body.style.background = pageDarkMode ? "black" : "white";
  document.body.style.color = pageDarkMode ? "white" : "black";

  return (
    <>
      <NavBar pageHeading="Light & Dark Mode" />
      <div style={pageStyle} className="light-and-dark-mode">
        <p>
          Dark Mode{" "}
          <input
            type="checkbox"
            checked={pageDarkMode}
            onChange={() => {
              setpageDarkMode(!pageDarkMode);
              setContainrDarkMode(!pageDarkMode);
            }}
          />
        </p>
        <h2>
          The entire page color theme is controlled using CSS and JavaScript
        </h2>
        <p>
          Contained Dark Mode
          <input
            type="checkbox"
            checked={containerDarkMode}
            onChange={() => {
              setContainrDarkMode(!containerDarkMode);
            }}
          />
        </p>
        <div className="container-dark-mode" style={containerStyle}>
          <h2>The container color scheme is controlled by only CSS</h2>
        </div>
      </div>
    </>
  );
}

export default LightAndDarkMode;
