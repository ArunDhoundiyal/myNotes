import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

import "./index.css";
const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <button
      className="toggle-button"
      onClick={() => setToggle((prevToggle) => !prevToggle)}
    >
      {toggle ? (
        <FiSun className="toggle-icon" />
      ) : (
        <FiMoon className="toggle-icon" />
      )}
    </button>
  );
};

export default Toggle;
