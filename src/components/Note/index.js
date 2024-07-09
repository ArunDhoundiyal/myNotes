import "./index.css";
import Toggle from "../Toggle";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaBold } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa6";
import { ImUnderline } from "react-icons/im";
import { FaStrikethrough } from "react-icons/fa6";
import { FaSuperscript } from "react-icons/fa6";
import { FaSubscript } from "react-icons/fa6";
import { FaListOl } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { FaIndent } from "react-icons/fa";
import { FaOutdent } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
const Note = () => {
  return (
    <div className="note-bg-container">
      <div className="note-header-container">
        <div className="myNotes-logo-Note-header-container">
          <FaLongArrowAltLeft />
          <img
            src="https://res.cloudinary.com/da52fiag8/image/upload/v1714148431/ynkdcmb72eeqss8am1dp.png"
            className="myNotes-note-header-logo"
            alt="myNoes-logo"
          />
          <span className="myNotes-txt">my-Notes</span>
        </div>
        <FaBold />
        <FaItalic />
        <ImUnderline />
        <FaStrikethrough />
        <MdOutlineEmojiEmotions />
        <FaSuperscript />
        <FaSubscript />
        <FaListOl />
        <FaListUl />
        <FaArrowRotateLeft />
        <FaArrowRotateRight />
        <FaLink />
        <FaAlignLeft />
        <FaAlignRight />
        <FaAlignCenter />
        <FaAlignJustify />
        <FaIndent />
        <FaOutdent />
        <div>
          <MdDeleteOutline className="note-logo-icon" />
          <FaRegBookmark className="note-logo-icon" />
          <FiShare2 className="note-logo-icon" />
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Note;
