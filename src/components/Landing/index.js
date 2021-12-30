import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import "./style.css";
import birthdayImg from "../../images/birthdayLogo.png";
import raccoonImg from "../../images/raccoon.png";
import possumImg from "../../images/possum.png";

const Landing = ({ start }) => {
  const { width, height } = useWindowSize();

  return (
    <div className="landing">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={width < 500 ? 100 : 200}
      />
      <button type="button" onClick={start} className="startButton">
        Start
      </button>
      <img src={raccoonImg} alt="Jermey the raccoon" className="jeremy" />
      <img src={possumImg} alt="Jermiah the possum" className="jeremiah" />
      <div className="rope-bg" />
      <img src={birthdayImg} alt="happy birthday" className="birthday-img" />

      <div className="message-container">
        <p className="critter-font">
          mPmpMpMppMp hi KaRmin mpmP huZbaDn and mE mAde u somE riDDles mpmPmp
          haPPy biRthdAy
        </p>
        <p className="critter-font signature">
          jeRemy thE Racc0on{" "}
          <span role="img" aria-label="Paw Print">
            {String.fromCodePoint("0x1F43E")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Landing;
