import React from "react";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import "./index.css";

class Toggle extends React.Component {
  state = { toggle: false };
  onClickToggle = () => {
    this.setState((preState) => ({ toggle: !preState.toggle }));
  };
  onClickCancel = () => {
    const { clickSearchIcon } = this.props;
    clickSearchIcon();
  };
  render() {
    const { toggle } = this.state;
    const { hideToggle } = this.props;
    const toggleIcon = toggle ? (
      <IoSunnySharp className="toggle-icon" />
    ) : (
      <IoMoonSharp className="toggle-icon" />
    );

    return (
      <>
        {hideToggle ? (
          <button className="cancel-button" onClick={this.onClickCancel}>
            Cancel
          </button>
        ) : (
          <button className="toggle-button" onClick={this.onClickToggle}>
            {toggleIcon}
          </button>
        )}
      </>
    );
  }
}

export default Toggle;
