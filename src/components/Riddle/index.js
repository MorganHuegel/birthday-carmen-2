import React from "react";
import RiddleOne from "./RiddleOne";
import FeedbackWrapper from "../FeedbackWrapper";
import "./style.css";

const Riddle = ({
  riddleNumber,
  title,
  onRiddleCorrect,
  addCritterFeedback,
}) => {
  const riddleMapper = {
    1: (
      <RiddleOne
        onRiddleCorrect={onRiddleCorrect}
        addCritterFeedback={addCritterFeedback}
      />
    ),
  };

  return (
    <div>
      <h1 className="riddleTitle">
        Riddle {riddleNumber}: {title}
      </h1>
      {riddleMapper[riddleNumber]}
    </div>
  );
};

export default FeedbackWrapper(Riddle);
