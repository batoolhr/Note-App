import AddNote from "./addnote";
import Note from "./note";

const NoteList = ({ notes, handleAddNote, DeleteNote }) => {
  return (
    <div className="noteslist">
      {notes.map((note) => (
        <Note key={note._id} notes={note} DeleteNote={DeleteNote} />
      ))}

      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
