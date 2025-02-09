import RecipeItem from "./RecipeItem";
import { useRecipes } from "../context/RecipeContext";

const RecipeList = () => {
  const { recipes } = useRecipes();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
