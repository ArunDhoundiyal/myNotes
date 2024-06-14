import { useState } from "react";
import PopUpCreate from "../PopUpCreate";
import "./index.css";

const CreateButton = () => {
  const [togglePopUp, setTogglePopUp] = useState(false);
  const onClickCloseButton = () => {
    setTogglePopUp((preState) => !preState);
  };
  return (
    <div className="create-container">
      <button
        className={
          togglePopUp ? `transform-create-note-button` : "create-note-button"
        }
        onClick={() => setTogglePopUp((preState) => !preState)}
      >
        <img
          src="https://res.cloudinary.com/da52fiag8/image/upload/v1714148431/ynkdcmb72eeqss8am1dp.png"
          alt="create-notes-button"
          className="create-note-img"
        />
      </button>
      <PopUpCreate
        togglePopUp={togglePopUp}
        clickOnCloseButton={onClickCloseButton}
      />
    </div>
  );
};

export default CreateButton;
