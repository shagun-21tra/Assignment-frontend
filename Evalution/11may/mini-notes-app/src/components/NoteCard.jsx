import { Box, Text, Heading, Button } from "@chakra-ui/react";
import { useNotesContext } from "../context/NotesContext";

const NoteCard = ({ note }) => {
  const { deleteNote } = useNotesContext();

  return (
    <Box p={4} shadow="md" borderWidth="1px" w="full">
      <Heading fontSize="xl">{note.title}</Heading>
      <Text mt={2}>{note.content}</Text>
      <Button mt={3} size="sm" colorScheme="red" onClick={() => deleteNote(note.id)}>
        Delete
      </Button>
    </Box>
  );
};

export default NoteCard;
