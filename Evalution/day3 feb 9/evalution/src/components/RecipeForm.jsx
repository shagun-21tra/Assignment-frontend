import { useState } from "react";
import { useRecipes } from "../context/RecipeContext";
import { Recipe } from "../types";

const RecipeForm = () => {
  const { addRecipe } = useRecipes();
  const [recipe, setRecipe] = useState<Omit<Recipe, "id">>({
    title: "",
    ingredients: [],
    // instructions: "",
    category: "",
    tags: [],
    favorite: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addRecipe({ ...recipe, id: Date.now() });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Title" onChange={(e) => setRecipe({ ...recipe, title: e.target.value })} />
      <textarea placeholder="Instructions" onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
