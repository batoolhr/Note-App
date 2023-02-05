import { useState } from "react";

const AddNote = ({ hadnleAddNote }) => {
  const [notetext, setNoteText] = useState("");
  const characterLimit = 200;
  const hadnleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleSaveClick = () => {
    if (notetext.trim().length > 0) {
      hadnleAddNote(notetext);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type tp add a note..."
        onChange={hadnleChange}
        value={notetext}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - notetext.length}</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
