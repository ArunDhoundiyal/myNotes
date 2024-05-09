import React from "react";
import { IoMdMoon } from "react-icons/io";

import "./index.css";
class Note extends React.Component {
  render() {
    return (
      <div className="note-bg-container">
        <div className="note-top-navbar">
          <div className="logo-icon-note-container">
            <div className="note-logo-align-center-container">
              <img
                src="https://res.cloudinary.com/da52fiag8/image/upload/v1714148431/ynkdcmb72eeqss8am1dp.png"
                className="note-icon-logo"
              />
            </div>
            <p className="myNotes-content">myNotes</p>
          </div>

          <button className="light-dark-mode">
            <IoMdMoon />
          </button>
        </div>
      </div>
    );
  }
}

export default Note;
