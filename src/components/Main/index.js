import React, { useState } from "react";
import Landing from "../Landing";

const Main = () => {
  const [riddleNumber, setRiddleNumber] = useState(null);

  switch (riddleNumber) {
    case 1:
      return;
    case 2:
      return;
    case 3:
      return;
    case 4:
      return;
    case 5:
      return;
    default:
      return <Landing start={() => setRiddleNumber(1)} />;
  }
};

export default Main;
