import React from "react";
import { updateTask, deleteTask } from "../api";

function TaskList({ tasks, refreshTasks }) {
  const toggleTask = async (task) => {
    await updateTask(task._id, { completed: !task.completed });
    refreshTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    refreshTasks();
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.title}
          <button onClick={() => toggleTask(task)}>Toggle</button>
          <button onClick={() => removeTask(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
