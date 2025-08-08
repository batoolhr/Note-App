import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const Note = ({ notes, DeleteNote }) => {
  return (
    <div className="note">
      <span>{notes.content}</span>
      <div className="note-footer">
        <small>{notes.date} </small>
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          size="lg"
          onClick={() => DeleteNote(notes)}
        ></FontAwesomeIcon>
      </div>
    </div>

  );
};

export default Note;
