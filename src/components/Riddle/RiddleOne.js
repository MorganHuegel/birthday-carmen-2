import React from "react";
import "./RiddleOne.css";
import balloon1 from "../../images/RiddleOne/balloon1.png";
import balloon2 from "../../images/RiddleOne/balloon2.png";
import balloon3 from "../../images/RiddleOne/balloon3.png";
import balloon4 from "../../images/RiddleOne/balloon4.png";
import balloon5 from "../../images/RiddleOne/balloon5.png";
import balloon6 from "../../images/RiddleOne/balloon6.png";
import balloon7 from "../../images/RiddleOne/balloon7.png";
import sash from "../../images/RiddleOne/sash.png";
import broadCity from "../../images/RiddleOne/broadcity birthday.png";
import office1 from "../../images/RiddleOne/office birthday 1.png";
import office2 from "../../images/RiddleOne/office birthday 2.png";
import spongebob from "../../images/RiddleOne/spongebob birthday.png";
import hagrid from "../../images/RiddleOne/birthday harrypotter.png";

const RiddleOne = () => {
  const images = [
    {
      src: balloon1,
      style: {
        width: "15%",
        left: "5%",
        bottom: "10%",
        zIndex: 1,
        maxWidth: "110px",
      },
    },
    {
      src: balloon2,
      style: {
        width: "15%",
        maxWidth: "110px",
        right: "5%",
        bottom: "20%",
        zIndex: 1,
      },
    },
    {
      src: balloon3,
      style: {
        width: "15%",
        maxWidth: "110px",
        right: "42.5%",
        bottom: "70%",
        zIndex: 1,
      },
    },
    {
      src: balloon4,
      style: {
        width: "15%",
        maxWidth: "110px",
        left: "33%",
        bottom: "50%",
        zIndex: 1,
      },
    },
    {
      src: balloon5,
      style: {
        width: "25%",
        maxWidth: "190px",
        right: "5%",
        top: "20%",
        zIndex: 1,
      },
    },
    {
      src: balloon6,
      style: {
        width: "25%",
        maxWidth: "190px",
        right: "-3%",
        top: "-60px",
        zIndex: 1,
      },
    },
    {
      src: balloon7,
      style: {
        width: "17%",
        maxWidth: "120px",
        left: "-5%",
        top: "40%",
        zIndex: 1,
      },
    },
    {
      src: sash,
      style: {
        width: "200px",
        left: "-30px",
        top: "-114px",
        zIndex: 1,
      },
    },
    {
      src: broadCity,
      style: {
        width: "50%",
        maxWidth: "310px",
        right: "5%",
        bottom: "45%",
        zIndex: -1,
      },
    },
    {
      src: office1,
      style: {
        width: "50%",
        maxWidth: "500px",
        left: "25%",
        bottom: "15%",
        zIndex: 0,
      },
    },
    {
      src: office2,
      style: { width: "50%", maxWidth: "500px", bottom: "0", zIndex: 0 },
    },
    {
      src: spongebob,
      style: {
        width: "50%",
        maxWidth: "500px",
        bottom: "0",
        right: "0",
        zIndex: 0,
      },
    },
    {
      src: hagrid,
      style: {
        width: "50%",
        maxWidth: "500px",
        top: "calc(61px + 4%)",
        left: "5%",
        zIndex: -1,
      },
    },
  ];
  return (
    <div className="riddle-one">
      <div className="image-container">
        {images.map(image => (
          <img src={image.src} style={image.style} className="image" />
        ))}
      </div>
      <div className="clue-container">
        <div className="clue-text">
          <p>This one's easy; the skills are within you.</p>
          <p>
            Just click <span>anywhere</span> to continue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiddleOne;
