// App.js
import { useState } from "react";
import "./App.css";
import { Description } from "./components/Description/Description";
import Options from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [click, setClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = click.good + click.neutral + click.bad;

  const updateFeedback = (feedbackType) => {
    setClick({
      ...click,
      [feedbackType]: click[feedbackType] + 1,
    });
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      <Feedback item={click} totalFeedback={totalFeedback} />
      <Notification />
    </>
  );
}

export default App;
