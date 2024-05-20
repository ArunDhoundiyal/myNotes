import Toggle from "../Toggle";
import { MdDeleteSweep } from "react-icons/md";
import "./index.css";

const Navbar = () => {
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
        <div className="my-notes-logo-container">
          <img
            src="https://res.cloudinary.com/da52fiag8/image/upload/v1714148431/ynkdcmb72eeqss8am1dp.png"
            alt="my-notes"
            className="myNotes-logo"
          />
          <span className="myNotes-title">my-Notes</span>
        </div>
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
    </div>
  );
};

export default Navbar;
