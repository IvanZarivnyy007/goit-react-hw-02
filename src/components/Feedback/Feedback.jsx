export const Feedback = ({ item, totalFeedback, positiveFeedback }) => {
  return (
    <div className="Feedback">
      <p className="feed-text">Good : {item.good}</p>
      <p className="feed-text">Neutral : {item.neutral}</p>
      <p className="feed-text">Bad : {item.bad}</p>
      <p className="feed-text">Total Feedback: {totalFeedback}</p>
      <p className="feed-text-1">Positive : {positiveFeedback}%</p>
    </div>
  );
};
