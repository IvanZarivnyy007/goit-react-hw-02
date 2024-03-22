export const Options = (update) => {
  return (
    <>
      <button onClick={update} className="buton">
        Good
      </button>
      <button onClick={update} className="buton">
        Neutral
      </button>
      <button onClick={update} className="buton">
        Bad
      </button>
      <button onClick={update} className="buton">
        Reset
      </button>
    </>
  );
};
