import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import NoteList from "./component/notes";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./component/search";
import Header from "./component/header";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first Note!",
      data: "1/1/2023",
    },
    {
      id: nanoid(),
      text: "This is my second Note!",
      data: "15/1/2023",
    },
    {
      id: nanoid(),
      text: "This is my third Note!",
      data: "19/1/2023",
    },
    {
      id: nanoid(),
      text: "This is my fourth Note!",
      data: "17/1/2023",
    },
  ]);

  const [searchText, setsearchText] = useState("");

  const [darkMode, setdarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const addnote = (text) => {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    const newNote = {
      id: nanoid(),
      text: text,
      date: date,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const DeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id.id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handletoggledarkmode={setdarkMode} />
        <Search hadnleSearch={setsearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          hadnleAddNote={addnote}
          DeleteNote={DeleteNote}
        />
      </div>
    </div>
  );
};

export default App;
