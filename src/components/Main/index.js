import React, { useState } from "react";
import Landing from "../Landing";
import Transition from "../Transition";
import Riddle from "../Riddle";

const Main = () => {
  const [riddleNumber, setRiddleNumber] = useState(null);
  const titleMapper = { 1: "The Duh" };

  if (/^[0-9]{1,}/.test(riddleNumber)) {
    return (
      <Riddle riddleNumber={riddleNumber} title={titleMapper[riddleNumber]} />
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
