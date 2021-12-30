import React, { useState } from "react";
import Landing from "../Landing";
import Transition from "../Transition";

const Main = () => {
  const [riddleNumber, setRiddleNumber] = useState(null);

  if (typeof riddleNumber === "number") {
    return <p>Riddle {riddleNumber}</p>;
  }

  if (typeof riddleNumber === "string" && /^transition/.test(riddleNumber)) {
    return <Transition transition={riddleNumber.replace("transition", "")} />;
  }

  return <Landing start={() => setRiddleNumber("transition1")} />;
};

export default Main;
