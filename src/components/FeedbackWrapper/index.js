import React from "react";
import "./style.css";

const FeedbackWrapper = Component => {
  return class extends React.Component {
    state = { feedbackList: [] };

    addCritterFeedback = message => {
      let critter = "jeremy";
      if (Math.random() < 0.5) {
        critter = "jeremiah";
      }

      this.setState({
        feedbackList: [...this.state.feedbackList, { critter, message }],
      });
    };

    render() {
      return (
        <div>
          <div className="feedback-container">
            {this.state.feedbackList.map((f, i) => (
              <p key={f.message + i} className="critter-font">
                {f.message}
              </p>
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
