import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import "./style.css";
import Needle from "../../images/Win/needle.png";
import BalloonRed from "../../images/Win/red.png";
import BalloonGreen from "../../images/Win/green.png";
import BalloonBlue from "../../images/Win/blue.png";
import BalloonYellow from "../../images/Win/yellow.png";

const Win = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <h1 className="riddleTitle">WINNER!</h1>
      <div className="win-page">
        <Confetti
          width={width}
          height={height}
          numberOfPieces={width < 500 ? 100 : 200}
        />
        <div className="image-container">
          <div className="balloon-row">
            <img src={BalloonYellow} alt="red balloon" />
            <img src={BalloonGreen} alt="red balloon" />
            <img src={BalloonBlue} alt="red balloon" />
            <img src={BalloonRed} alt="red balloon" />
          </div>
          <div className="needle-row">
            <img src={Needle} alt="needle" className="needle" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Win;
