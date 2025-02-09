import RecipeList from "../components/RecipeList";
import { useRecipes } from "../context/RecipeContext";

const Favorites = () => {
  const { recipes } = useRecipes();
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Favorite Recipes</h1>
      <RecipeList recipes={recipes.filter((recipe) => recipe.favorite)} />
    </div>
  );
};

export default Favorites;
