import React, { useRef, useState } from "react";
import NavBar from "../components/NavBar";

function generateRandomNumber(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

function GuessTheNumber() {
  const [randomNumber, setrandomNumber] = useState(generateRandomNumber(100));
  const [isGameON, setGameOn] = useState(true);
  const [resultMessage, setResultMessage] = useState("Make a guess!");
  const [gussedNumbers, setGussedNumbers] = useState("");

  const inputValueRef = useRef();

  console.log(randomNumber);

  const handleSubmit = () => {
    if (parseInt(inputValueRef.current.value) === randomNumber) {
      setResultMessage("You Got it");
    } else if (parseInt(inputValueRef.current.value) < randomNumber) {
      setResultMessage("Too Loo!");
    } else {
      setResultMessage("Too High!");
    }
    setGussedNumbers(gussedNumbers + " " + inputValueRef.current.value);
  };

  return (
    <>
      <NavBar pageHeading="Guess the Number" />
      <div className="guess-the-number">
        <label>Enter a guess between 0 to 100</label>
        <input
          ref={inputValueRef}
          className="change-input"
          placeholder="Enter a number"
          type="number"
          onChange={({ target }) => {
            inputValueRef.current.value = target.value;
          }}
          onKeyUp={({ key }) => {
            if (key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <div className="button-controls">
          <button className="btn submit" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn start">Start Game</button>
        </div>
        <div>{resultMessage}</div>
        <div>Your Guesses : {gussedNumbers}</div>
      </div>
    </>
  );
}

export default GuessTheNumber;
