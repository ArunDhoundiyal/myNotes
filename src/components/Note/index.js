import "./index.css";
import { IoMdSave } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdKeyboardBackspace } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
const Note = () => {
  return (
    <div className="note-bg-container">
      <div className="top-note-header">
        <div className="myNotes-note-logo-container">
          <FaLongArrowAltLeft className="note-back-icon" />
          <img
            src="https://res.cloudinary.com/da52fiag8/image/upload/v1714148431/ynkdcmb72eeqss8am1dp.png"
            className="myNotes-note-logo"
            alt="myNotes-note-logo"
          />
          <span className="my-notes-note-text">my-Notes</span>
        </div>
        <div className="note-list-icon-container">
          <IoMdSave className="note-icon" />
          <FaBookmark className="note-bookmark-icon" />
          <MdDelete className="note-icon" />
          <IoShareSocialSharp className="note-icon" />
        </div>
      </div>
    </div>
  );
};

export default Note;
