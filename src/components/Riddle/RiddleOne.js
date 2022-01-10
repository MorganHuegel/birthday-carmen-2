import React, { useEffect, useRef, useState } from "react";
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

const RiddleOne = ({ onRiddleCorrect, addCritterFeedback }) => {
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
        bottom: "56%",
        zIndex: 1,
      },
    },
    {
      src: balloon4,
      style: {
        width: "15%",
        maxWidth: "110px",
        left: "63%",
        bottom: "24%",
        zIndex: 1,
      },
    },
    {
      src: balloon5,
      style: {
        width: "25%",
        maxWidth: "190px",
        right: "-6%",
        top: "35%",
        zIndex: 1,
      },
    },
    {
      src: balloon6,
      style: {
        width: "25%",
        maxWidth: "190px",
        right: "-3%",
        top: "47px",
        zIndex: 1,
      },
    },
    {
      src: balloon7,
      style: {
        width: "17%",
        maxWidth: "120px",
        left: "-4%",
        top: "45%",
        zIndex: 1,
      },
    },
    {
      src: sash,
      style: {
        width: "200px",
        left: "-20px",
        top: "-16px",
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
        top: "calc(200px + 4%)",
        left: "5%",
        zIndex: -1,
      },
    },
  ];

  const feedback = {
    2: "mPmpMp nopE tRy aGain kaRmin",
    3: "HA! STUUPS!",
    7: "hoomAns thiNk theRe SOoo0 smARt",
    8: "huZbaNd hagRid wRiteS liKe wee d0 hmpphmPmhPMp",
    10: "w0w kaRmin thAt's 10 cLicks alReadY",
    11: "we're staRting t0 feel BaD 4 U mpMpmp",
    14: "dId U reAd the hiNt?",
    15: "huzbandd lo0k she cAnt dO it hmpHmPhMphM",
    17: "karMin, ju5t clicK anywheRe!",
    18: "nO n0t thEre! ANYWHERE!",
    20: "mPmpmP huzband i thInk we sTumPed her mpmpmp",
    21: "yEaH u bEtter aSk duM m0Rgan for a hiNt",
    22: 'rememBeR kaRmin, "ANYWHERE"',
  };

  const imageContainerEl = useRef();
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (imageContainerEl.current) {
        imageContainerEl.current.style.top = "0px";
      }
    }, 500);
  }, []);

  useEffect(() => {
    function observeClicks(e) {
      let node = e.target;
      let isClickingFeedback = false;
      while (!isClickingFeedback && node.parentNode) {
        if (
          /* if click on close-message, parentNode unmounts
           *  so we must check them separately */
          node.classList.contains("message") ||
          node.classList.contains("close-message")
        ) {
          isClickingFeedback = true;
          break;
        }
        node = node.parentNode;
      }

      if (!isClickingFeedback) {
        setClickCount(prev => prev + 1);
      }
    }

    if (feedback[clickCount]) {
      addCritterFeedback(feedback[clickCount]);
    }

    document
      .getElementsByTagName("body")[0]
      .addEventListener("click", observeClicks);
    return () =>
      document
        .getElementsByTagName("body")[0]
        .removeEventListener("click", observeClicks);
  }, [clickCount]);

  return (
    <div className="riddle-one">
      <div className="image-container" ref={imageContainerEl}>
        {images.map(image => (
          <img
            key={image.src}
            src={image.src}
            style={image.style}
            className="image"
          />
        ))}
      </div>
      <div className="clue-container">
        <div className="clue-text">
          <p>This riddle is a little stuupy.</p>
          <p>It might make your attitude poopy.</p>
          <p>But I promise, the skills are within you.</p>
          <p>
            Just click <span onClick={onRiddleCorrect}>anywhere</span> to
            continue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiddleOne;
