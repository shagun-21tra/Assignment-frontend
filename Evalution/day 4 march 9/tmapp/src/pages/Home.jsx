import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome to Task Manager</h1>
    <Link to="/login">Go to Login</Link>
  </div>
);

export default Home;
