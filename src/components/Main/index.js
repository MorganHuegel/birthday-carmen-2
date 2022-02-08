import React, { useState } from "react";
import Landing from "../Landing";
import Transition from "../Transition";
import Riddle from "../Riddle";
import Win from "../Win";

const Main = () => {
  const [riddleNumber, setRiddleNumber] = useState(null);
  const titleMapper = {
    1: "Riddle 1: The Duh",
    2: "Riddle 2: The Abstract",
    3: "Riddle 3: The Real Riddle",
    4: "WINNER!",
  };

  if (/^[0-9]{1,}/.test(riddleNumber)) {
    if (Number(riddleNumber) === 4) {
      return <Win />;
    }

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
