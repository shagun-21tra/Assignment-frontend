import { Recipe } from "../types";
import { useRecipes } from "../context/RecipeContext";

const RecipeItem = ({ recipe }: { recipe: Recipe }) => {
  const { deleteRecipe, toggleFavorite } = useRecipes();

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">{recipe.title}</h2>
      <p className="text-gray-500">{recipe.category}</p>
      <button onClick={() => toggleFavorite(recipe.id)}>
        {recipe.favorite ? "★" : "☆"}
      </button>
      <button onClick={() => deleteRecipe(recipe.id)} className="ml-2 text-red-500">
        Delete
      </button>
    </div>
  );
};

export default RecipeItem;
