import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks } from "./api";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const { data } = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm refreshTasks={fetchTasks} />
      <TaskList tasks={tasks} refreshTasks={fetchTasks} />
    </div>
  );
}

export default App;
