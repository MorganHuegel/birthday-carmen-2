import React, { useEffect, useRef, useState } from "react";
import JeremyStanding from "../../images/RiddleTwo/raccoon_standing.png";
import JeremySitting from "../../images/RiddleTwo/raccoon_sitting.png";
import "./RiddleTwo.css";

const RiddleOne = ({ onRiddleCorrect, addCritterFeedback }) => {
  const feedback = {
    1: "mPmpMp kaRmin tHat gUes5 was cRap",
    2: "mPmp huZbaNd sHe neEds an eAsier app",
    3: "kaRmin iS youR brain tiRed? d0 y0u neEd a nAp??",
    4: "...or a fap??",
    5: "mpMpmP huZbaNd iTs liKe wAtching a hooMan in a trap",
    6: "mPmpMpm \"i'm woRld-travelleR kaRmIn! 'ello! I'm a daft ol' chap!\"",
    7: "my HUZBAND w0uLd have gotTen it iN a snap",
    8: "uHhhHh kaRmiN! U need to foCus, go drInk a cofFee or frappe",
    9: "mpMpmP hoNestly if U get it I woN't eveN clap",
    10: "*sigh* tHis is moRe paiNful thaN a spinal tap",
    11: "hMphMpmp no wAit, moRe paiNful thaN watChing duM m0Rgan RAP",
    12: "mPmp tHats 12 gueSses, aRe theSe all typOs or misHAPs?",
    13: "mPmPmpmp alrIght, no moRe hints. I tHink that's a WRAP",
  };

  const [submitCount, setSubmitCount] = useState(0);
  const [currVal, setCurrVal] = useState("");
  const [tryAgain, setTryAgain] = useState(false);
  const imgContainerEl = useRef(null);

  useEffect(() => {
    imgContainerEl.current.style.bottom = "0px";
  }, []);

  useEffect(() => {
    if (feedback[submitCount]) {
      addCritterFeedback(feedback[submitCount]);
    }
  }, [submitCount]);

  function handleSubmit() {
    if (currVal.toLocaleLowerCase() === "lap") {
      onRiddleCorrect();
    } else {
      setTryAgain(true);
      setSubmitCount(prev => prev + 1);
    }
  }

  function handleChange(e) {
    setTryAgain(false);
    setCurrVal(e.target.value);
  }

  return (
    <div className="riddle-two">
      <div className="clue-container">
        <div className="clue-text">
          <p>Don't let this riddle make you frown.</p>
          <p>Your mind is still a sharp, young pup.</p>
          <p>What do you have when you're sitting down,</p>
          <p>but don't have when you're standing up?</p>
        </div>
      </div>

      <form>
        <input
          name="guess"
          type="text"
          value={currVal}
          onChange={handleChange}
          className={tryAgain ? "wrong" : ""}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        {tryAgain && <p className="try-again">Wrong, try again.</p>}
      </form>

      <div className="image-container" ref={imgContainerEl}>
        <img src={JeremyStanding} alt="raccoon standing" />
        <img src={JeremySitting} alt="raccoon sitting" />
      </div>
    </div>
  );
};

export default RiddleOne;
