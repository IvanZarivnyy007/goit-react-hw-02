import { useState, useEffect } from "react";
import "./App.css";
import { Description } from "./components/Description/Description.module";
import Options from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [click, setClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedFeedback = window.localStorage.getItem("feedback");

    if (savedFeedback) {
      setClick(JSON.parse(savedFeedback));
    } else {
      setClick({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(click));
  }, [click]);

  const reset = () => {
    setClick({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = click.good + click.neutral + click.bad;

  const updateFeedback = (feedbackType) => {
    setClick({
      ...click,
      [feedbackType]: click[feedbackType] + 1,
    });
  };

  // const positiveFeedback = Math.round((click.good / totalFeedback) * 100);

  const positiveFeedback =
    totalFeedback !== 0 ? Math.round((click.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        reset={reset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          item={click}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
