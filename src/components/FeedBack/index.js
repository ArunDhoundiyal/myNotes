import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import "./index.css";
class FeedBack extends React.Component {
  render() {
    return (
      <div className="feedback-bg-container">
        <div className="feedback-navbar">
          <div className="feedback-position">
            <FaArrowLeftLong className="FaArrowLeft" />
            <h1 className="feedback-heading">Feedback</h1>
            <VscFeedback className="VscFeedback" />
          </div>
          <button className="light-dark-mode">
            <IoMdMoon />
          </button>
        </div>

        <div className="feed-back-container">
          <div className="hold-position-heading-icon">
            <MdFeedback className="MdFeedback" />
            <h1 className="feedback-title">Send us your feedback !</h1>
          </div>
          <p className="feedback-description">
            This feedback option is provided for improvement. Feel free to
            mention any suggestions or points related to improvement over here.
          </p>
        </div>
        <form className="text-area-container">
          <textarea
            className="text-area-style"
            placeholder="Describe your opinion and suggestion here..."
          ></textarea>
          <button className="feedback-button">Submit Feedback</button>
        </form>
      </div>
    );
  }
}

export default FeedBack;
