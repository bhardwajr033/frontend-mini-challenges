import React from "react";
import Card from "../components/Card";

const cardList = [
  { cardName: "Counter", navigateTo: "/Counter" },
  { cardName: "Guess The Number", navigateTo: "/GuessTheNumber" },
  { cardName: "Telephone formatter", navigateTo: "/Counter" },
  { cardName: "Light & Dark mode", navigateTo: "/Counter" },
  { cardName: "Toast Popup", navigateTo: "/Counter" },
];

function HomePage() {
  const cards = cardList.map((cardDetails, index) => {
    return (
      <Card
        key={index}
        cardName={cardDetails.cardName}
        navigateTo={cardDetails.navigateTo}
      />
    );
  });
  return (
    <>
      <h1>FrontEnd Mini Challenges</h1>
      <div className="card-container">{cards}</div>
    </>
  );
}

export default HomePage;