import RecipeList from "../components/RecipeList";
import RecipeForm from "../components/RecipeForm";

const Home = () => {
  return (
    <div className="container mx-auto">
      <RecipeForm />
      <RecipeList />
    </div>
  );
};

export default Home;
