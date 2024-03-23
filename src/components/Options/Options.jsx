// Options.js
import React from "react";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div className="div-options">
      <ul className="ul-options">
        <li className="li-options">
          <button onClick={() => updateFeedback("good")} className="buton">
            Good
          </button>
        </li>
        <li className="li-options">
          <button onClick={() => updateFeedback("neutral")} className="buton">
            Neutral
          </button>
        </li>
        <li className="li-options">
          <button onClick={() => updateFeedback("bad")} className="buton">
            Bad
          </button>
        </li>
        {totalFeedback > 0 && (
          <li className="li-options">
            <button onClick={() => updateFeedback("reset")} className="buton">
              Reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Options;
