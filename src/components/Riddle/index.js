import React from "react";
import RiddleOne from "./RiddleOne";
import "./style.css";

const Riddle = ({ riddleNumber, title, onRiddleCorrect }) => {
  const riddleMapper = {
    1: <RiddleOne onRiddleCorrect={onRiddleCorrect} />,
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

export default Riddle;
