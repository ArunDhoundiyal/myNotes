import Navbar from "../Navbar";
import CreateButton from "../CreateButton";
import Note from "../Note";
import { MdOutlineNoteAlt } from "react-icons/md";
import "./index.css";

const Home = () => {
  return (
    <div className="Home-bg-container">
      <Navbar />
      <div className="empty-list-card-container">
        <div className="empty-list-container">
          <MdOutlineNoteAlt className="empty-home-logo" />
          <p className="empty-home-text">Keep your life organized</p>
        </div>
      </div>

      <CreateButton />
    </div>
  );
};

export default Home;
