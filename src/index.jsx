import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./style.css";
import { TaskList } from "./components/TaksList";
import { Task } from "./components/Task";

import { getTasks } from "./api";
import { toggleTask } from "./api";

const App = () => {
  const [tasks, setTasks] = useState([]);

  console.log(tasks);

  
  useEffect(() => {
    getTasks().then((data) => {
      setTasks(data);
    });
  }, []);

  const onTaskToggled = (id, completed) => {
    console.log(`Task j${id} is ${completed}`);

    // místo které se dá vylepšit, dalo by se to napsat pomocí map a prý by to bylo lepší
    const newTasks = [...tasks];
    const taskToUpdate = newTasks.find((task) => task.id === id);
    taskToUpdate.completed = completed;

    setTasks(newTasks);

    toggleTask(id, completed)
    .then(() => {
      setTasks(data)
    })
  };

  return (
    <>
      <h1>TO-DO</h1>
      <TaskList tasks={tasks} onTaskToggled={onTaskToggled} />
    </>
  );
};

render(<App />, document.querySelector("#app"));
