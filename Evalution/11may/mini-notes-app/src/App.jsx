// App.jsx
import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { NotesProvider } from "./context/NotesContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

const App = () => (
  <ThemeProvider>
    <NotesProvider>
      <Navbar />
      <Container maxW="container.md" py={6}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </NotesProvider>
  </ThemeProvider>
);

export default App;
