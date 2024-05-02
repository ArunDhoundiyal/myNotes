import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import "./index.css";

class SignUp extends React.Component {
  state = { condition: false };
  onClickPassword = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({ condition: !prevState.condition }));
  };
  render() {
    const { condition } = this.state;
    const eye = condition ? (
      <FaEye className="eye" />
    ) : (
      <FaEyeSlash className="eye" />
    );
    const inputType = condition ? "text" : "password";
    return (
      <div className="bg-Login-container">
        <div className="img-note-logo-container">
          <img
            src="https://res.cloudinary.com/da52fiag8/image/upload/v1714148431/ynkdcmb72eeqss8am1dp.png"
            alt="note-img"
            className="img-note-logo"
          />
        </div>

        <div className="container-login">
          <IoPersonCircleOutline className="icon-profile" />
          <h1 className="heading-login">User Sign-Up</h1>
          <form className="container-form">
            <div className="container-input">
              <IoPersonSharp className="profile-logo" />
              <input
                placeholder="Username"
                type="text"
                className="field-input"
              />
            </div>
            <div className="container-input">
              <RiLockPasswordFill className="profile-logo" />
              <input
                placeholder="Password"
                type={inputType}
                className="field-input"
              />
              <button
                className="button-password"
                onClick={this.onClickPassword}
              >
                {eye}
              </button>
            </div>
            <button className="button-login">
              Sign-Up <FaArrowCircleRight />
            </button>
          </form>
          <p className="style-sign-up">
            Already have an account ? <span className="signup">Login-In</span>
          </p>
        </div>
      </div>
    );
  }
}

export default SignUp;
