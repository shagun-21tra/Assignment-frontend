import { RecipeProvider } from "./context/RecipeContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <RecipeProvider>
      <Home />
    </RecipeProvider>
  );
};

export default App;
