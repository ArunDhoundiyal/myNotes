import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import "./index.css";

class Login extends React.Component {
  state = { condition: false };
  onClickPassword = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({ condition: !prevState.condition }));
  };
  render() {
    const { condition } = this.state;
    const eye = condition ? (
      <FaEye className="eye-icon" />
    ) : (
      <FaEyeSlash className="eye-icon" />
    );
    const inputType = condition ? "text" : "password";
    return (
      <div className="Login-bg-container">
        <div className="note-img-logo-container">
          <img
            src="https://res.cloudinary.com/da52fiag8/image/upload/v1714148431/ynkdcmb72eeqss8am1dp.png"
            alt="note-logo"
            className="note-img-logo"
          />
        </div>

        <div className="login-container">
          <IoPersonCircleOutline className="profile-icon" />
          <h1 className="login-heading">User Login</h1>
          <form className="form-container">
            <div className="input-container">
              <IoPersonSharp className="logo-profile" />
              <input
                placeholder="Username"
                type="text"
                className="input-field"
              />
            </div>
            <div className="input-container">
              <RiLockPasswordFill className="logo-profile" />
              <input
                placeholder="Password"
                type={inputType}
                className="input-field"
              />
              <button
                className="password-button"
                onClick={this.onClickPassword}
              >
                {eye}
              </button>
            </div>
            <button className="login-button">
              Login <FaArrowCircleRight />{" "}
            </button>
          </form>
          <p className="sign-up-style">
            New User ? <span className="sign-up">Sign Up</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
