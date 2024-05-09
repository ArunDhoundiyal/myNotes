import React from "react";
import "./index.css";
import { LuArrowUpDown } from "react-icons/lu";
import { MdOutlineTitle } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import Toggle from "../Toggle";
import Search from "../Search";

class Navbar extends React.Component {
  state = { search: false };
  clickSearchIcon = () => {
    this.setState((preState) => ({ search: !preState.search }));
    console.log("Search Logo");
  };
  render() {
    const { search } = this.state;
    const toggleSearch = search ? "hide-list-items" : "navbar-list-container";
    return (
      <div className="navbar-bg-container">
        <div className="logo-icon-container">
          <div className="logo-position">
            <img
              src="https://res.cloudinary.com/da52fiag8/image/upload/v1714148431/ynkdcmb72eeqss8am1dp.png"
              alt="myNotes"
              className="note-logo"
            />
          </div>
          <p className="my-notes-content">myNotes</p>
        </div>
        <Search
          clickSearchIcon={this.clickSearchIcon}
          searchCondition={search}
        />
        <ul className={toggleSearch}>
          <li className="list-style title">
            Title <LuArrowUpDown />
          </li>
          <li className="list-icon-style icon-title">
            <MdOutlineTitle /> <LuArrowUpDown />
          </li>
          <li className="list-style date">
            Date <LuArrowUpDown />
          </li>
          <li className="list-icon-style icon-date">
            <MdDateRange /> <LuArrowUpDown />
          </li>
          <li className="list-style deleteAll">Delete All</li>
          <li className="list-icon-style icon-delete">
            <MdDeleteSweep />
          </li>
          <li className="list-style feedback-text">Feedback</li>
          <li className="list-icon-style icon-feedback">
            <VscFeedback />
          </li>
        </ul>
        <Toggle clickSearchIcon={this.clickSearchIcon} hideToggle={search} />
      </div>
    );
  }
}
export default Navbar;
