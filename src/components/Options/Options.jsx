import { FaGrin } from "react-icons/fa";
import { FaMeh } from "react-icons/fa";
import { FaGrimace } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const Options = ({ updateFeedback, totalFeedback, reset }) => {
  return (
    <div className="div-options">
      <ul className="ul-options">
        <li className="li-options">
          <button onClick={() => updateFeedback("good")} className="buton">
            <FaGrin /> {}
            Good
          </button>
        </li>
        <li className="li-options">
          <button onClick={() => updateFeedback("neutral")} className="buton">
            <FaMeh /> {}
            Neutral
          </button>
        </li>
        <li className="li-options">
          <button onClick={() => updateFeedback("bad")} className="buton">
            <FaGrimace /> {}
            Bad
          </button>
        </li>
        {totalFeedback > 0 && (
          <li className="li-options">
            <button className="button" onClick={reset}>
              <GrPowerReset /> {}
              Reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Options;
