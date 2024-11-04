import { useState } from "react";
import { TaskCard } from "./TaskCard";

export const TaskList = ({title}) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Go to the supermarket", completed: true },
    { id: 2, name: "Study programming", completed: false },
    { id: 3, name: "Go out for a walk", completed: true },
    { id: 4, name: "Watch a movie", completed: false },
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }


  return (
    <div>
      <h1>{title}</h1>
      <ul>
        <button class="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} name={task.name} completed={task.completed} handleDelete={handleDelete} />
          ))}
      </ul>
    </div>
  );
};
