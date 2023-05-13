import React, { useState } from "react";
import NavBar from "../components/NavBar";

function StarRating() {
  const [starState, setStarState] = useState({
    first: true,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
  });

  const [clickedStarState, setClickedStarState] = useState({
    first: true,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
  });

  const rating = Object.values(clickedStarState).reduce((acc, state) => {
    if (!state) {
      acc = acc + 1;
    }
    return acc;
  }, 0);

  function handleMouseEvent(event, isFixed) {
    const targetStar = event.target.parentNode.getAttribute("id");
    if (!targetStar) {
      return;
    }
    switch (targetStar) {
      case "first":
        setStarState({
          first: false,
          second: true,
          third: true,
          fourth: true,
          fifth: true,
        });
        break;
      case "second":
        setStarState({
          first: false,
          second: false,
          third: true,
          fourth: true,
          fifth: true,
        });
        break;
      case "third":
        setStarState({
          first: false,
          second: false,
          third: false,
          fourth: true,
          fifth: true,
        });
        break;
      case "fourth":
        setStarState({
          first: false,
          second: false,
          third: false,
          fourth: false,
          fifth: true,
        });
        break;
      case "fifth":
        setStarState({
          first: false,
          second: false,
          third: false,
          fourth: false,
          fifth: false,
        });
        break;
      default:
    }
    if (isFixed) {
      setClickedStarState(starState);
    }
  }

  return (
    <>
      <NavBar pageHeading="Star Rating" />
      <div className="flex-column">
        <div
          className="flex-row star-container"
          onMouseMove={(event) => handleMouseEvent(event, false)}
          onClick={(event) => handleMouseEvent(event, true)}
          onMouseLeave={(event) => {
            setStarState(clickedStarState);
          }}
        >
          <div id="first">
            {starState.first ? (
              <img src="src/images/star.png" width="40px" />
            ) : (
              <img src="src/images/star-filled.png" width="40px" />
            )}
          </div>
          <div id="second">
            {starState.second ? (
              <img src="src/images/star.png" width="40px" />
            ) : (
              <img src="src/images/star-filled.png" width="40px" />
            )}
          </div>
          <div id="third">
            {starState.third ? (
              <img src="src/images/star.png" width="40px" />
            ) : (
              <img src="src/images/star-filled.png" width="40px" />
            )}
          </div>
          <div id="fourth">
            {starState.fourth ? (
              <img src="src/images/star.png" width="40px" />
            ) : (
              <img src="src/images/star-filled.png" width="40px" />
            )}
          </div>
          <div id="fifth">
            {starState.fifth ? (
              <img src="src/images/star.png" width="40px" />
            ) : (
              <img src="src/images/star-filled.png" width="40px" />
            )}
          </div>
        </div>
        <p>Click to set the rating</p>
        <div>
          {rating} star{rating > 1 ? "s" : ""}
        </div>
      </div>
    </>
  );
}

export default StarRating;
