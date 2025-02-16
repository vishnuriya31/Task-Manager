import React, { useState } from "react";
import { addTask } from "../api";

function TaskForm({ refreshTasks }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask({ title, completed: false });
    setTitle("");
    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New Task" required />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
