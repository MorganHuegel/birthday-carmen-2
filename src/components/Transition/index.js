import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import wordBubble from "../../images/wordbubble.png";
import raccoonMouthOpen from "../../images/raccoon_mouthopen.png";
import possumMouthOpen from "../../images/possum_mouthopen.png";

const Transition = ({ transition }) => {
  const titleEl = useRef();
  const jeremyEl = useRef();
  const jeremiahEl = useRef();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function checkIsMobile() {
      if (!isMobile && window.innerWidth < 600) {
        setIsMobile(true);
      } else if (isMobile && window.innerWidth >= 600) {
        setIsMobile(false);
      }
    }
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [isMobile]);

  useEffect(() => {
    if (titleEl.current) {
      titleEl.current.style.top = "0px";
    }

    // title takes 2000ms to rise
    setTimeout(() => {
      if (jeremyEl.current) {
        jeremyEl.current.style.left = "0px";
        jeremyEl.current.style.top = "0px";
      }
    }, 1000);

    // jeremy takes 1000ms to come in, plus 2000ms to read it
    setTimeout(() => {
      if (jeremiahEl.current) {
        jeremiahEl.current.style.left = "0px";
        jeremiahEl.current.style.top = "0px";
      }
    }, 4000);

    // cleanup
    setTimeout(() => {
      if (jeremyEl.current) {
        jeremyEl.current.style.left =
          getInitialOffscreenPosition("jeremy").left;
        jeremyEl.current.style.top = getInitialOffscreenPosition("jeremy").top;
      }
      if (jeremiahEl.current) {
        jeremiahEl.current.style.left =
          getInitialOffscreenPosition("jeremiah").left;
        jeremiahEl.current.style.top =
          getInitialOffscreenPosition("jeremiah").top;
      }
    }, 6500);
  }, []);

  const contentMapper = {
    1: {
      title: "The Duh",

      jeremyFlyInFrom: "left",
      jeremyMsg: "mPmpmP go0d lUck kaRmin",
      jeremyImg: raccoonMouthOpen,
      jeremyLeft: "0",
      jeremyTop: "calc(100vh - 187px)",
      jeremyLeftMobile: "0",
      jeremyTopMobile: "calc(100vh - 111px)",
      jeremyWordTop: "calc(100vh - 333px)",
      jeremyWordTopMobile: "calc(100vh - 187px)",
      jeremyWordLeft: "210px",
      jeremyWordLeftMobile: "120px",
      jeremyWordMirrored: true,

      jeremiahFlyInFrom: "top",
      jeremiahMsg: "mpmP yeAh yoU'LL neEd iT mpmPMppMp",
      jeremiahImg: possumMouthOpen,
      jeremiahLeft: "calc(100vw - 270px)",
      jeremiahTop: "187px",
      jeremiahLeftMobile: "calc(100vw - 170px)",
      jeremiahTopMobile: "187px",
      jeremiahWordTop: "100px",
      jeremiahWordTopMobile: "100px",
      jeremiahWordLeft: "calc(100vw - 470px)",
      jeremiahWordLeftMobile: "calc(100vw - 340px)",
      jeremiahWordMirrored: false,
    },
  };

  let content = contentMapper[transition];
  function getInitialOffscreenPosition(critter) {
    let left = 0;
    let top = 0;

    const direction = content[`${critter}FlyInFrom`];
    switch (direction) {
      case "top":
        top = -1000;
        break;
      case "bottom":
        top = 2000;
        break;
      case "left":
        left = -1000;
        break;
      case "right":
        left = 2000;
        break;
      default:
      //
    }
    return {
      left: left + "px",
      top: top + "px",
    };
  }

  return (
    <div className="transition">
      <h1 className="title" ref={titleEl}>
        Riddle {transition}: {content.title}
      </h1>

      <div
        ref={jeremyEl}
        className="critter-container"
        style={getInitialOffscreenPosition("jeremy")}
      >
        <img
          src={content.jeremyImg}
          className="critter-img"
          style={{
            top: isMobile ? content.jeremyTopMobile : content.jeremyTop,
            left: isMobile ? content.jeremyLeftMobile : content.jeremyLeft,
          }}
          alt="jeremy the raccoon"
        />
        <div
          style={{
            top: isMobile ? content.jeremyWordTopMobile : content.jeremyWordTop,
            left: isMobile
              ? content.jeremyWordLeftMobile
              : content.jeremyWordLeft,
          }}
          className="word-bubble"
        >
          <img
            src={wordBubble}
            style={{
              transform: content.jeremyWordMirrored ? "scaleX(-1)" : "",
            }}
            alt="word bubble for jeremy"
          />
          <p className="critter-font">{content.jeremyMsg}</p>
        </div>
      </div>

      <div
        ref={jeremiahEl}
        className="critter-container"
        style={getInitialOffscreenPosition("jeremiah")}
      >
        <img
          src={content.jeremiahImg}
          className="critter-img"
          style={{
            top: isMobile ? content.jeremiahTopMobile : content.jeremiahTop,
            left: isMobile ? content.jeremiahLeftMobile : content.jeremiahLeft,
          }}
          alt="jeremiah the possum"
        />
        <div
          style={{
            top: isMobile
              ? content.jeremiahWordTopMobile
              : content.jeremiahWordTop,
            left: isMobile
              ? content.jeremiahWordLeftMobile
              : content.jeremiahWordLeft,
          }}
          className="word-bubble"
        >
          <img
            src={wordBubble}
            style={{
              transform: content.jeremiahWordMirrored ? "scaleX(-1)" : "",
            }}
            alt="word bubble for jeremiah"
          />
          <p className="critter-font">{content.jeremiahMsg}</p>
        </div>
      </div>
    </div>
  );
};

export default Transition;
