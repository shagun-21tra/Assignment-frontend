import { useState, useEffect, useRef, useContext } from "react";
import AuthContext from "../context/AuthContext";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef();
  const { logout } = useContext(AuthContext);

  // Load tasks from local storage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const taskText = taskInputRef.current.value.trim();
    if (taskText) {
      setTasks([...tasks, taskText]);
      taskInputRef.current.value = "";
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Task Dashboard</h2>
      <input ref={taskInputRef} type="text" placeholder="Enter task..." />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
