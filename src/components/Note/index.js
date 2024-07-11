import "./index.css";
import { useState } from "react";
import Toggle from "../Toggle";
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
import { GrGallery } from "react-icons/gr";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { FaIndent } from "react-icons/fa";
import { FaOutdent } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import { AiFillAudio } from "react-icons/ai";
import { AiOutlineFontColors } from "react-icons/ai";
import { MdOutlineFormatColorFill } from "react-icons/md";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
const Note = () => {
  const [fontSize, setFontSize] = useState(8);
  const onClickIncreaseSize = () => {
    if (fontSize < 72) {
      setFontSize((preState) => preState + 1);
    }
  };
  const onClickDecreaseSize = () => {
    if (fontSize > 8) {
      setFontSize((preState) => preState - 1);
    }
  };
  return (
    <div className="note-bg-container">
      <div className="note-header-container">
        <div className="note-header-first-container">
          <FaBold />
          <FaItalic />
          <ImUnderline />
          <FaStrikethrough />
          <AiOutlineFontColors />
          <MdOutlineFormatColorFill />
          <MdOutlineEmojiEmotions />
          <FaSuperscript />
          <FaSubscript />
          <FaListOl />
          <FaListUl />
          <FaArrowRotateLeft />
          <FaArrowRotateRight />
          <FaLink />
          <GrGallery />
          <FaRegFilePdf />
          <AiFillAudio />
          <FaAlignLeft />
          <FaAlignRight />
          <FaAlignCenter />
          <FaAlignJustify />
          <FaIndent />
          <FaOutdent />
          <div className="">
            <MdDeleteOutline className="note-logo-icon" />
            <FaRegBookmark className="note-logo-icon" />
            <FiShare2 className="note-logo-icon" />
            <Toggle />
          </div>
        </div>

        <div className="note-header-second-container">
          <select>
            <option>H1</option>
            <option>H2</option>
            <option>H3</option>
            <option>H4</option>
            <option>H5</option>
            <option>H6</option>
          </select>
          <select className="select-letter-case">
            <option>UPPER CASE</option>
            <option>lower case</option>
            <option>snake_case</option>
            <option>camelCase</option>
            <option>PascalCase</option>
            <option>kebab-case</option>
            <option> Title Case</option>
            <option>Sentence case</option>
          </select>

          <select className="select-font-family">
            <option>Serif</option>
            <option>Sans-serif</option>
            <option>Monospace</option>
            <option>Cursive</option>
            <option>Brush Script MT, Std, cursive</option>
            <option>Fantasy</option>
            <option> Algerian</option>
          </select>
          <div className="font-size-container">
            <button className="increase-size" onClick={onClickDecreaseSize}>
              <LuMinus />
            </button>
            {fontSize}
            <button className="decrease-size" onClick={onClickIncreaseSize}>
              <LuPlus />
            </button>
          </div>
          <button className="ocr-button">OCR</button>
        </div>
      </div>
    </div>
  );
};

export default Note;
