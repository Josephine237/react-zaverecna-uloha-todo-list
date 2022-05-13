import React, { useState } from "react";
import "./style.css";

import { Task } from "../Task";

export const TaskList = ({ tasks, onTaskToggled }) => {
  // const [xxx, setXxx] = useState(null);

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
		  key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
          createdDate={task.createdDate}
          completedDate={task.completedDate}
		  onTaskToggled={onTaskToggled}
        />
      ))}
    </ul>
  );
};
