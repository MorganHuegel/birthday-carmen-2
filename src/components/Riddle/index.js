import React from "react";
import RiddleOne from "./RiddleOne";
import RiddleTwo from "./RiddleTwo";
import RiddleThree from "./RiddleThree";
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
    2: (
      <RiddleTwo
        onRiddleCorrect={onRiddleCorrect}
        addCritterFeedback={addCritterFeedback}
      />
    ),
    3: (
      <RiddleThree
        onRiddleCorrect={onRiddleCorrect}
        addCritterFeedback={addCritterFeedback}
      />
    ),
  };

  return (
    <div>
      <h1 className="riddleTitle">{title}</h1>
      {riddleMapper[riddleNumber]}
    </div>
  );
};

export default FeedbackWrapper(Riddle);
