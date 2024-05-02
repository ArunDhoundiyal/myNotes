import "./index.css";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import React from "react";
class Home extends React.Component {
  state = { title: false, date: false, mode: false };
  onClickTitle = () => {
    this.setState((preState) => ({ title: !preState.title }));
  };
  onClickDate = () => {
    this.setState((preState) => ({ date: !preState.date }));
  };
  onClickMode = () => {
    this.setState((preState) => ({ mode: !preState.mode }));
  };
  render() {
    const { title, date, mode } = this.state;
    return (
      <div className="home-bg-container">
        <div className="home-navbar-container">
          <div className="sort-title-date-container">
            <button className="sort-button" onClick={this.onClickTitle}>
              Title {title ? <FaArrowDown /> : <FaArrowUp />}
            </button>
            <button className="sort-button" onClick={this.onClickDate}>
              Date {date ? <FaArrowDown /> : <FaArrowUp />}
            </button>
          </div>
          <input placeholder="Search Title..." className="input-search-class" />
          <button className="light-dark-mode" onClick={this.onClickMode}>
            {mode ? <IoMdMoon /> : <MdSunny />}
          </button>
        </div>
        <div className="home-navbar-container-two">
          <div className="logo-container">
            <div className="logo-icon-position">
              <img
                src="https://res.cloudinary.com/da52fiag8/image/upload/v1714148431/ynkdcmb72eeqss8am1dp.png"
                className="logo-icon"
                alt="logo"
              />
            </div>
            <p className="myNotes">myNotes</p>
          </div>
          <div className="delete-feedback-container">
            <button className="delete-all">
              Detete All <MdDeleteSweep />
            </button>
            <button className="feedback">
              Feedback <MdFeedback />
            </button>
          </div>
        </div>
        <div className="text-checkbox-container">
          <button className="button-img-logo">
            <img
              src="https://res.cloudinary.com/da52fiag8/image/upload/v1714148431/ynkdcmb72eeqss8am1dp.png"
              alt="button-logo"
              className="button-logo"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
