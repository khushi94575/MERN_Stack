import "./NoteInput.css";
import { FaPen } from "react-icons/fa";

function NoteInput() {
  return (
    <div className="note-input">

      <div className="input-box">

        <div className="input-top">
          <div className="left">
            <FaPen className="pen-icon" />

            <span>Write a note...</span>
          </div>

          <span className="count">0/150</span>
        </div>

        <textarea
          placeholder="Type your note here..."
          maxLength={150}
        ></textarea>

      </div>

      <button className="add-btn">
        Add Note +
      </button>

    </div>
  );
}

export default NoteInput;