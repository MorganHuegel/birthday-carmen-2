import React, { useState } from "react";
import Landing from "../Landing";
import Transition from "../Transition";
import Riddle from "../Riddle";

const Main = () => {
  const [riddleNumber, setRiddleNumber] = useState(null);
  const titleMapper = { 1: "The Duh", 2: "Next" };

  if (/^[0-9]{1,}/.test(riddleNumber)) {
    return (
      <Riddle
        riddleNumber={riddleNumber}
        title={titleMapper[riddleNumber]}
        onRiddleCorrect={() =>
          setRiddleNumber(prev => "transition" + (parseInt(prev, 10) + 1))
        }
      />
    );
  }

  if (/^transition/.test(riddleNumber)) {
    const transitionNum = riddleNumber.replace("transition", "");
    console.log("transitionNum", transitionNum, typeof transitionNum);
    return (
      <Transition
        onTransitionEnd={() => setRiddleNumber(transitionNum)}
        title={titleMapper[transitionNum]}
        transition={transitionNum}
      />
    );
  }

  return <Landing start={() => setRiddleNumber("transition1")} />;
};

export default Main;
