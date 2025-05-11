import {
    Box, Button, Input, Textarea, VStack
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useNotesContext } from "../context/NotesContext";
  import NoteCard from "../components/NoteCard";
  
  const Home = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { notes, addNote } = useNotesContext();
  
    const handleAdd = () => {
      if (title && content) {
        addNote({ title, content });
        setTitle("");
        setContent("");
      }
    };
  
    return (
      <Box>
        <VStack spacing={3} mb={6}>
          <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
          <Button onClick={handleAdd} colorScheme="teal">Add Note</Button>
        </VStack>
        <VStack spacing={4}>
          {notes.map((note) => <NoteCard key={note.id} note={note} />)}
        </VStack>
      </Box>
    );
  };
  
  export default Home;
  