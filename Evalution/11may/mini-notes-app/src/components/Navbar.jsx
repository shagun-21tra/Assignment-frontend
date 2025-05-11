import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { toggleColorMode } = useThemeContext();

  return (
    <Flex p={4} bg="teal.500" color="white" align="center">
      <Heading size="md">Mini Notes</Heading>
      <Spacer />
      <Flex gap={3}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Button size="sm" onClick={toggleColorMode}>
          Toggle Theme
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
