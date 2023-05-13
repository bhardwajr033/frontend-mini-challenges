import React, { useState } from "react";
import NavBar from "../components/NavBar";

function TelephoneFormatter() {
  const [teleNumber, setTeleNumber] = useState("");

  const handleTeleNumber = ({ target }) => {
    let number = target.value.match(/\d+/g);
    if (number) {
      number = number.join("");
      if (number.length < 10) {
        if (number.length > 3) {
          number = "".concat(
            "+ (",
            number.slice(0, 3) + ") - ",
            number.slice(3)
          );
        }
        setTeleNumber(number);
      }
    } else {
      setTeleNumber("");
    }
  };

  return (
    <>
      <NavBar pageHeading="Telephone Formatter" />
      <div className="telephone-formatter">
        <input
          value={teleNumber}
          onChange={(event) => {
            handleTeleNumber(event);
          }}
        />
        <p>+ (123) - 456789</p>
      </div>
    </>
  );
}

export default TelephoneFormatter;
