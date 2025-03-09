import { useAuth } from "../context/AuthContext";
import TaskDashboard from "../components/TaskDashboard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <TaskDashboard />
    </div>
  );
};

export default Dashboard;
