import React from "react";
import Card from "../components/Card";

const cardList = [
  { cardName: "Counter", navigateTo: "/Counter" },
  { cardName: "Guess The Number", navigateTo: "/GuessTheNumber" },
  { cardName: "Telephone formatter", navigateTo: "/TelephoneFormatter" },
  { cardName: "Light & Dark mode", navigateTo: "/LightAndDarkMode" },
  { cardName: "Toast Popup", navigateTo: "/ToastPopUp" },
  { cardName: "CSS Shapes", navigateTo: "/CssShapes" },
  { cardName: "Password Strength", navigateTo: "/PasswordStrength" },
  { cardName: "Star Rating", navigateTo: "/StarRating" },
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
      <div className="flex-row card-container">{cards}</div>
    </>
  );
}

export default HomePage;
