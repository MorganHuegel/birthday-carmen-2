import React, { useEffect, useState } from "react";
import "./RiddleThree.css";

const feedback = {
  1: "mPmpMp wE g0t her good huZband!",
  2: "mPmp egg-ceptionally bAd guesS kaRmin",
  3: "i thiNk she's ~cracking~ uNder the pRessure HmpmpmPmpM",
  4: "tHere's oNly like 4 plus 4 plus 4... nuMbers to gueSs so she'll gEt it eveNtually",
  5: "huZbaNd is tHe anSwer 4?",
  6: "i caN't couNt tHat hiGh buT it seEms likE a siMplE loGarithMic miNimiZation pRoblem mPmpmP itS fiRst gRade sTuff hoNestly",
  7: "huZbaNd sh0uld wE give hEr a hiNt?",
  8: (
    <span className="critter-font">
      ok hEre iS a{" "}
      <a
        href="http://puzzles.nigelcoldwell.co.uk/sixtyhint.htm"
        target="_blank"
        rel="noreferrer"
        className="critter-font"
      >
        hiNt
      </a>
    </span>
  ),
  9: "mPmpMP she didN't uSe the hiNt huZbaNd",
  10: (
    <span className="critter-font">
      oohh noo huZband, I wiSh she woulD use the{" "}
      <a
        href="http://puzzles.nigelcoldwell.co.uk/sixtyhint.htm"
        target="_blank"
        rel="noreferrer"
        className="critter-font"
      >
        hinT
      </a>
    </span>
  ),
  11: "mPmpmP dId you trY actiNg it out kaRmiN?",
  12: "huZbaNd I'vE goT the deSserts, lEts give kaRmiN one m0Re guess and lets go!",
};

const RiddleThree = ({ onRiddleCorrect, addCritterFeedback }) => {
  const [submitCount, setSubmitCount] = useState(0);
  const [currVal, setCurrVal] = useState("");
  const [tryAgain, setTryAgain] = useState(false);

  useEffect(() => {
    if (feedback[submitCount]) {
      addCritterFeedback(feedback[submitCount]);
    }
  }, [submitCount, addCritterFeedback]);

  function handleSubmit() {
    if (currVal.toLocaleLowerCase() === "14") {
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
    <div className="riddle-three">
      <div className="clue-container">
        <div className="clue-text">
          <p>There is a building of 100 floors</p>
          <p>
            If an egg drops from the <b>N</b>th floor or above it will break.
          </p>
          <p>If it's dropped from any floor below, it will not break.</p>
          <p>You're given 2 eggs.</p>
          <p>
            What is the minimum number of drops required to guarantee that you
            find <b>N</b>?
          </p>
        </div>
      </div>

      <form>
        <input
          name="guess"
          type="number"
          value={currVal}
          onChange={handleChange}
          className={tryAgain ? "wrong" : ""}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        {tryAgain && <p className="try-again">Wrong, try again.</p>}
      </form>
    </div>
  );
};

export default RiddleThree;
