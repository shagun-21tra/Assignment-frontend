import { useEffect, useRef, useState } from "react";

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef();

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
    const newTask = taskInputRef.current.value.trim();
    if (newTask) {
      setTasks([...tasks, newTask]);
      taskInputRef.current.value = "";
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="task-dashboard">
      <h2>Task Manager</h2>
      <input ref={taskInputRef} type="text" placeholder="Enter a task" />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;
