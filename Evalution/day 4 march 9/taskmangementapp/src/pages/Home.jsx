import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Welcome to Task Manager</h2>
      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
};

export default Home;
