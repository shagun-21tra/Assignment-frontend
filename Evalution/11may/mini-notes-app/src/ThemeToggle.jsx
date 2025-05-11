// src/ThemeToggle.jsx
import { useColorMode, Button } from "@chakra-ui/react";

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Toggle to {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}

export default ThemeToggle;
