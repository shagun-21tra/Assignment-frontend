import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { loadRecipes, saveRecipes } from "../utils/localStorage";
import { Recipe } from "../types";

 let RecipeContextType {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  updateRecipe: (recipe: Recipe) => void;
  deleteRecipe: (id: number) => void;
  toggleFavorite: (id: number) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipes(loadRecipes());
  }, []);

  useEffect(() => {
    saveRecipes(recipes);
  }, [recipes]);

  const addRecipe = (recipe: Recipe) => setRecipes([...recipes, recipe]);

  const updateRecipe = (updatedRecipe: Recipe) => {
    setRecipes(recipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r)));
  };

  const deleteRecipe = (id: number) => {
    setRecipes(recipes.filter((r) => r.id !== id));
  };

  const toggleFavorite = (id: number) => {
    setRecipes(
      recipes.map((r) => (r.id === id ? { ...r, favorite: !r.favorite } : r))
    );
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, updateRecipe, deleteRecipe, toggleFavorite }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) throw new Error("useRecipes must be used within RecipeProvider");
  return context;
};
