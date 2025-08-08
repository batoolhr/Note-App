import { useEffect, useState } from "react";
import NoteList from "./component/notes";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./component/search";
import Header from "./component/header";
import { addNewNote, deleteNote, getNotes } from "./api/notes";
import { nanoid } from "nanoid";
const App = () => {


  const [notes, setNotes] = useState([])

  const [searchText, setsearchText] = useState("");

  const [darkMode, setdarkMode] = useState(false);


  const savedNotes = [
    {
      id: nanoid(),
      content: "This is my first Note!",
      data: "1/1/2023",
    },
    {
      id: nanoid(),
      content: "This is my second Note!",
      data: "15/1/2023",
    },
    {
      id: nanoid(),
      content: "This is my third Note!",
      data: "19/1/2023",
    },
    {
      id: nanoid(),
      content: "This is my fourth Note!",
      data: "17/1/2023",
    },
  ]

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadNotes = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await getNotes();

      // Verify response structure
      if (response?.data) {
        setNotes(response.data);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      setError(error.message);
      // Only fallback if savedNotes exists and is valid
      if (Array.isArray(savedNotes)) {
        setNotes(savedNotes);
      } else {
        setNotes([]); // Default empty array
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);




  const DeleteNote = async (note) => {

    await deleteNote(note._id)
    const notes = await getNotes()
    setNotes(notes.data);
  };

  const addNote = async (content) => {
    try {
      const newNote = await addNewNote({ content });

      setNotes([...notes, newNote.data]); // Update state
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  };



  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handletoggledarkmode={setdarkMode} />
        <Search handleSearch={setsearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.content.toLocaleLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          DeleteNote={(note) => DeleteNote(note)}
        />
      </div>
    </div>
  );
};

export default App;
