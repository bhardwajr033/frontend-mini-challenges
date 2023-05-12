import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => {
        navigate(props.navigateTo);
      }}
    >
      {props.cardName}
    </div>
  );
}

export default Card;
