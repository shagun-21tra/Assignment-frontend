import { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext();
const DB_URL = "https://YOUR_DB.firebaseio.com/notes.json";

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await fetch(DB_URL);
    const data = await res.json();
    const parsed = data ? Object.entries(data).map(([id, note]) => ({ id, ...note })) : [];
    setNotes(parsed);
  };

  const addNote = async (note) => {
    await fetch(DB_URL, {
      method: "POST",
      body: JSON.stringify(note)
    });
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await fetch(`https://YOUR_DB.firebaseio.com/notes/${id}.json`, {
      method: "DELETE"
    });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => useContext(NotesContext);
