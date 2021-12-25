import React from "react";
import "./style.css";
import birthdayImg from "../../images/birthdayLogo.png";
import raccoonImg from "../../images/raccoon.png";
import possumImg from "../../images/possum.png";

const Landing = () => (
  <div className="landing">
    <img src={raccoonImg} alt="Jermey the raccoon" className="jeremy" />
    <img src={possumImg} alt="Jermiah the possum" className="jeremiah" />
    <div className="rope-bg" />
    <img src={birthdayImg} alt="happy birthday" className="birthday-img" />
  </div>
);

export default Landing;
