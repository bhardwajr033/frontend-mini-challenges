import React from "react";
import "./App.css";
import Card from "./components/Card";

const cardList = ["Counter", "Guess The Number","a","b","c"];

function App() {
  const cards = cardList.map((cardName) => {
    return <Card cardName={cardName} />;
  });
  return (
    <>
      <h1>FrontEnd Mini Challenges</h1>
      <div className="card-container">{cards}</div>
    </>
  );
}

export default App;
