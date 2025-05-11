import { createContext, useContext, useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const stored = localStorage.getItem("chakra-ui-color-mode");
    if (stored && stored !== colorMode) toggleColorMode();
  }, []);

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
