import { IoBookmarksOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { TfiHelpAlt } from "react-icons/tfi";
import { MdLogout } from "react-icons/md";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import "./index.css";
const SideBar = () => {
  const sideBarMenuItems = [
    { icon: <IoBookmarksOutline />, label: "Bookmarks" },
    { icon: <VscFeedback />, label: "Feedback" },
    { icon: <TfiHelpAlt />, label: "Help" },
    { icon: <TbArrowRoundaboutRight />, label: "About Us" },
    { icon: <RiContactsLine />, label: "Contact Us" },
    { icon: <MdLogout />, label: "Log Out" },
  ];
  return (
    <div className="Sidebar-bg-container">
      <div className="email-sidebar-container">
        <BiLogoGmail className="BiLogoGmail" />

        <span className="email-id">arunprakash23797@gmail.com</span>
      </div>
      <div>
        {sideBarMenuItems.map((currentValue, index) => (
          <div className="sidebar-logo-container" key={index}>
            <span className="sidebar-logo">{currentValue.icon}</span>
            <span className="side-bar-menu-name">{currentValue.label}</span>
          </div>
        ))}
      </div>
      <div className="myNotes-sidebar-logo-container">
        <img
          src="https://res.cloudinary.com/da52fiag8/image/upload/v1714148431/ynkdcmb72eeqss8am1dp.png"
          className="myNotes"
        />
        <div>
          <span className="my-notes-sidebar">my-Notes</span>
          <br />
          <span className="my-notes-sidebar-paragraph">
            Create your own notes
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
