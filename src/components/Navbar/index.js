import { useState } from "react";
import Toggle from "../Toggle";
import { MdDeleteSweep } from "react-icons/md";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import SideBar from "../SideBar";
import { RxCross1 } from "react-icons/rx";
import "./index.css";

const Navbar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <div className="navbar-bg-container">
      <div className="search-container">
        <input
          placeholder="Search my-Notes"
          className="search-input"
          type="search"
        />
      </div>

      <div className="navbar-container">
        <button
          className="side-bar-toggle-button"
          onClick={() => setToggleSideBar(!toggleSideBar)}
        >
          {toggleSideBar ? (
            <RxCross1 className="toggle-bar" />
          ) : (
            <RiBarChartHorizontalLine className="toggle-bar" />
          )}
        </button>
        <div className="selector-container">
          <select className="selector">
            <option className="option">Title Nor</option>
            <option className="option">Title Asc</option>
            <option className="option">Title Des</option>
          </select>
          <select className="selector">
            <option className="option">Date Nor</option>
            <option className="option">Date Asc</option>
            <option className="option">Date Des</option>
          </select>
          <button className="Delete-All">Delete All</button>
          <button className="Delete-All-Icon">
            {<MdDeleteSweep className="MdDeleteSweep" />}
          </button>
        </div>
        <Toggle />
      </div>
      <SideBar toggleSideBar={toggleSideBar} />
    </div>
  );
};

export default Navbar;
