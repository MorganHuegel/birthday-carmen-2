import React from "react";

const Transition = ({ transition }) => {
  const contentMapper = {
    1: {
      message: "",
      left: "",
      top: "",
    },
  };
  return <p>Transition {transition}</p>;
};

export default Transition;
