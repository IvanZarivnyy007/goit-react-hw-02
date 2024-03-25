// App.js
import { useState, useEffect } from "react";
import "./App.css";
import { Description } from "./components/Description/Description.module";
import Options from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";
// import Notification from "./components/Notification/Notification";

function App() {
  const [click, setClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const reset = () => {
    setClick({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = click.good + click.neutral + click.bad;

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(click));
  }, [click]);

  const updateFeedback = (feedbackType) => {
    setClick({
      ...click,
      [feedbackType]: click[feedbackType] + 1,
    });
  };

  const positiveFeedback = Math.round((click.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        reset={reset}
      />
      <Feedback
        item={click}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
      {/* <Notification /> */}
    </>
  );
}

export default App;
