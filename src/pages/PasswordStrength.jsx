import React, { useState } from "react";
import NavBar from "../components/NavBar";

function findProgress(password) {
  if (password.length < 4) {
    return { width: 0, color: "white" };
  } else {
    let score = 0;
    if (password.match(/[A-Z]/g)) {
      score += 1;
    }
    if (password.match(/[a-z]/g)) {
      score += 1;
    }
    if (password.match(/[0-9]/g)) {
      score += 1;
    }
    if (password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g)) {
      score += 1;
    }
    if (password.length > 8) {
      score += 1;
    }
    switch (score) {
      case 0:
        return { width: 20, color: "red" };
      case 1:
        return { width: 30, color: "red" };
      case 2:
        return { width: 40, color: "yellow" };
      case 3:
        return { width: 60, color: "yellow" };
      case 4:
        return { width: 80, color: "green" };
      case 5:
        return { width: 100, color: "green" };

      default:
        return { width: 0, color: "white" };
    }
  }
}

function PasswordStrength() {
  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState({ width: 0, color: "white" });

  const barStyle = {
    width: `${progress.width}%`,
    background: progress.color,
    height: "100%",
  };

  return (
    <>
      <NavBar pageHeading="Password Strength" />
      <div className="flex-column password-strength">
        <p>Enter The Password</p>
        <input
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
            setProgress(findProgress(target.value));
          }}
        />
        <div className="strength-bar">
          <div style={barStyle}></div>
        </div>
      </div>
    </>
  );
}

export default PasswordStrength;
