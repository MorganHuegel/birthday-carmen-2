import React from "react";

const Riddle = ({ riddleNumber, title }) => {
  return (
    <div>
      <h1 className="riddleTitle">
        Riddle {riddleNumber}: {title}
      </h1>
    </div>
  );
};

export default Riddle;
