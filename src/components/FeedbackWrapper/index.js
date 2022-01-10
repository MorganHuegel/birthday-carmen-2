import React, { useEffect, useRef } from "react";
import Jeremy from "../../images/raccoon_mouthopen2.png";
import Jeremiah from "../../images/possum_mouthopen2.png";
import "./style.css";

const Message = props => {
  const messageEl = useRef(null);
  const { f, i, setCritterFeedbackMounted, deleteCritterFeedback } = props;

  useEffect(() => {
    setTimeout(() => {
      if (!f.isMessageMounted && messageEl.current) {
        messageEl.current.style.top = "0px";
        messageEl.current.style.opacity = "1";
      }
      setCritterFeedbackMounted(i);
    }, 200);
  }, []);

  return (
    <div
      key={f.message + i}
      className="message"
      ref={messageEl}
      style={{
        top: f.isMessageMounted ? "0px" : "20px",
        opacity: f.isMessageMounted ? "1" : "0",
      }}
    >
      <button
        className="close-message"
        type="button"
        onClick={() => deleteCritterFeedback(i)}
      >
        X
      </button>
      <img
        src={f.critter === "jeremiah" ? Jeremiah : Jeremy}
        alt={f.critter === "jeremiah" ? "jeremiah" : "jeremy"}
        className={f.critter}
      />
      <p className="critter-font">{f.message}</p>
    </div>
  );
};

const FeedbackWrapper = Component => {
  return class CritterFeedback extends React.Component {
    state = { feedbackList: [] };

    addCritterFeedback = message => {
      let critter = "jeremy";
      if (Math.random() < 0.5) {
        critter = "jeremiah";
      }

      this.setState({
        feedbackList: [
          ...this.state.feedbackList,
          { critter, message, isMessageMounted: false },
        ],
      });
    };

    deleteCritterFeedback = index => {
      this.setState({
        feedbackList: this.state.feedbackList.filter((f, i) => i !== index),
      });
    };

    setCritterFeedbackMounted = index => {
      this.setState({
        feedbackList: this.state.feedbackList.map((f, i) => {
          if (i === index) {
            return { ...f, isMessageMounted: true };
          } else {
            return f;
          }
        }),
      });
    };

    render() {
      return (
        <div>
          <div className="feedback-container">
            {this.state.feedbackList.map((f, i) => (
              <Message
                key={f.message + i}
                f={f}
                i={i}
                deleteCritterFeedback={this.deleteCritterFeedback}
                setCritterFeedbackMounted={this.setCritterFeedbackMounted}
                showTransition={this.state.showTransition}
              />
            ))}
          </div>
          <Component
            {...this.props}
            addCritterFeedback={this.addCritterFeedback}
          />
        </div>
      );
    }
  };
};

export default FeedbackWrapper;
