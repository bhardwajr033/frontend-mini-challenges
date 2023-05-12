import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar({ pageHeading }) {
  const navigate = useNavigate();
  return (
    <div className="nav-bar">
      <button
        className="btn home"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <h1>{pageHeading}</h1>
      <div>
        <img src="src/assets/react.svg" />
      </div>
    </div>
  );
}

export default NavBar;
