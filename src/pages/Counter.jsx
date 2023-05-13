import React, { useState } from "react";
import NavBar from "../components/NavBar";

function Counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("1");

  const updateCount = (increment) => {
    setCount((prev) => prev + parseInt(value) * (increment ? 1 : -1));
  };
  return (
    <>
      <NavBar pageHeading="Counter" />
      <div className="flex-column counter">
        <div className="counter-value">
          <span className="count-value">{count}</span>
        </div>
        <div className="flex-row button-controls">
          <button onClick={() => updateCount(true)} className="btn increment">
            +
          </button>
          <button onClick={() => updateCount(false)} className="btn decrement">
            -
          </button>
        </div>
        <div className="counter-change">
          <label className="change-label">Increment/Decrement by:</label>
          <input
            className="change-input"
            type="number"
            min="0"
            max="10"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </div>
        <div className="button-controls">
          <button onClick={() => setCount(0)} className="btn reset">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
