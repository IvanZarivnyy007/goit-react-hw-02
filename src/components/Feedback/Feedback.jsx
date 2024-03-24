import Notification from "../Notification/Notification";

export const Feedback = ({ item, totalFeedback }) => {
  if (!totalFeedback) {
    return <Notification />;
  }
  return (
    <div className="Feedback">
      <p className="Feed-text">Good : {item.good}</p>
      <p className="Feed-text">Neutral : {item.neutral}</p>
      <p className="Feed-text">Bad : {item.bad}</p>
      <p className="Feed-text">Total Feedback: {totalFeedback}</p>
    </div>
  );
};
