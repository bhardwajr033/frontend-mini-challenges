import React from "react";
import NavBar from "../components/NavBar";

function CssShapes() {
  const ShapeStyle = {
    square: {
      background: "aqua",
      height: "150px",
      width: "150px",
    },
    circle: {
      background: "yellow",
      height: "150px",
      width: "150px",
      borderRadius: "50%",
    },
    triangle: {
      width: "0",
      height: "0",
      borderTop: "25px solid transparent",
      borderRight: "50px solid transparent",
      borderBottom: "100px solid green",
      borderLeft: "50px solid transparent",
    },
    parallelogram: {
      height: "150px",
      width: "150px",
      background: "pink",
      transform: "skewX(-30deg)",
    },
    diamond: {
      height: "100px",
      width: "100px",
      background: "blueviolet",
      transform: "translateY(25px) rotate(-45deg)",
    },
    egg: {
      width: "100px",
      height: "150px",
      border: " 4px solid black",
      borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
    },
  };
  return (
    <>
      <NavBar pageHeading="CSS Shapes" />
      <div className="flex-row css-shapes">
        <div className="shape-box">
          <h2>Square</h2>
          <div style={ShapeStyle.square}></div>
        </div>
        <div className="shape-box">
          <h2>Circle</h2>
          <div style={ShapeStyle.circle}></div>
        </div>
        <div className="shape-box">
          <h2>Triangle</h2>
          <div style={ShapeStyle.triangle}></div>
        </div>
        <div className="shape-box">
          <h2>Parallelogram</h2>
          <div style={ShapeStyle.parallelogram}></div>
        </div>
        <div className="shape-box">
          <h2>DIamond</h2>
          <div style={ShapeStyle.diamond}></div>
        </div>
        <div className="shape-box">
          <h2>Egg</h2>
          <div style={ShapeStyle.egg}></div>
        </div>
        <div className="shape-box">
          <h2>Star</h2>
          <div className="star"></div>
        </div>
        <div className="shape-box">
          <h2>Star</h2>
          <div className="heart"></div>
        </div>
        <div className="shape-box">
          <h2>Star</h2>
          <div className="loader"></div>
        </div>
      </div>
    </>
  );
}

export default CssShapes;
