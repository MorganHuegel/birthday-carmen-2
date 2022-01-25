import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import wordBubble from "../../images/wordbubble.png";
import raccoonMouthOpen from "../../images/raccoon_mouthopen.png";
import possumMouthOpen from "../../images/possum_mouthopen.png";

const Transition = ({ onTransitionEnd, title, transition }) => {
  const titleEl = useRef();
  const jeremyEl = useRef();
  const jeremiahEl = useRef();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function checkIsMobile() {
      if (!isMobile && window.outerWidth < 600) {
        setIsMobile(true);
      } else if (isMobile && window.outerWidth >= 600) {
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

    // jeremy takes 1000ms to come in, plus 2500ms to read it
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
    }, 7500);

    // 1000ms for cleanup
    setTimeout(() => onTransitionEnd(), 8500);
  }, []);

  const contentMapper = {
    1: {
      jeremyFlyInFrom: "left",
      jeremyMsg: "mPmpmP go0d lUck kaRmin",
      jeremyImg: raccoonMouthOpen,
      jeremyLeft: "0",
      jeremyLeftMobile: "0",
      jeremyTop: "calc(100vh - 186px)",
      jeremyTopMobile: "calc(100vh - 111px)",
      jeremyWordTop: "calc(100vh - 333px)",
      jeremyWordTopMobile: "calc(100vh - 186px)",
      jeremyWordLeft: "210px",
      jeremyWordLeftMobile: "120px",
      jeremyMirrored: false,
      jeremyWordMirrored: true,

      jeremiahFlyInFrom: "top",
      jeremiahMsg: "mpmP yeAh yoU'LL neEd iT mpmPMppMp",
      jeremiahImg: possumMouthOpen,
      jeremiahLeft: "calc(100vw - 270px)",
      jeremiahLeftMobile: "calc(100vw - 170px)",
      jeremiahTop: "227px",
      jeremiahTopMobile: "187px",
      jeremiahWordTop: "20px",
      jeremiahWordTopMobile: "100px",
      jeremiahWordLeft: "calc(100vw - 400px)",
      jeremiahWordLeftMobile: "calc(100vw - 240px)",
      jeremiahMirrored: false,
      jeremiahWordMirrored: false,
    },
    2: {
      jeremyFlyInFrom: "top",
      jeremyMsg: "mPmpmP w0w to0k u loNg enUff",
      jeremyImg: raccoonMouthOpen,
      jeremyLeft: "calc(100vw - 251px)",
      jeremyLeftMobile: "calc(100vw - 151px)",
      jeremyTop: "224px",
      jeremyTopMobile: "150px",
      jeremyWordTop: "140px",
      jeremyWordTopMobile: "69px",
      jeremyWordLeft: "calc(100vw - 451px)",
      jeremyWordLeftMobile: "calc(100vw - 260px)",
      jeremyMirrored: true,
      jeremyWordMirrored: false,

      jeremiahFlyInFrom: "right",
      jeremiahMsg: "mpmP huzbaNd she'll nevEr geT tHis onE mpmPmp",
      jeremiahImg: possumMouthOpen,
      jeremiahLeft: "80px",
      jeremiahLeftMobile: "22px",
      jeremiahTop: "calc(100vh - 199px)",
      jeremiahTopMobile: "calc(100vh - 101px)",
      jeremiahWordTop: "calc(100vh - 385px)",
      jeremiahWordTopMobile: "calc(100vh - 210px)",
      jeremiahWordLeft: "275px",
      jeremiahWordLeftMobile: "142px",
      jeremiahMirrored: true,
      jeremiahWordMirrored: true,
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
      <h1 className="riddleTitle" ref={titleEl}>
        Riddle {transition}: {title}
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
            transform: content.jeremyMirrored ? "scaleX(-1)" : "",
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
            transform: content.jeremiahMirrored ? "scaleX(-1)" : "",
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
