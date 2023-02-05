import AddNote from "./addnote";
import Note from "./note";

const NoteList = ({ notes, hadnleAddNote, DeleteNote }) => {
  return (
    <div className="noteslist">
      {notes.map((note) => (
        <Note key={note.id} notes={note} DeleteNote={DeleteNote} />
      ))}

      <AddNote hadnleAddNote={hadnleAddNote} />
    </div>
  );
};

export default NoteList;
