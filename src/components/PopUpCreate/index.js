import "./index.css";
import { SiMicrosoftonenote } from "react-icons/si";
import { PiListChecksBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
const PopUpCreate = ({ togglePopUp, clickOnCloseButton }) => {
  return (
    <div
      className={
        togglePopUp ? "pop-up-create-container" : "hide-pop-up-create-container"
      }
    >
      <button className="close-button" onClick={clickOnCloseButton}>
        <RxCross2 className="close-icon" />
      </button>
      <button className="create-pop-up-button">
        <div className="create-pop-up-container">
          <SiMicrosoftonenote className="create-button" />
          <p className="create-text">Note</p>
        </div>
      </button>
      <button className="create-pop-up-button">
        <div className="create-pop-up-container">
          <PiListChecksBold className="create-button" />
          <p className="create-text">Checklist</p>
        </div>
      </button>
    </div>
  );
};

export default PopUpCreate;
