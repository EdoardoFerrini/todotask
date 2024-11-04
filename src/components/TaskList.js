import "./TaskList.css";
import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

export const TaskList = ({ title }) => {
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
            <TaskCard
              key={task.id}
              name={task.name}
              completed={task.completed}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
      <BoxCard classname="success">
        <p className="title">Lorem Ipsum Title</p>
        <p className="description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </BoxCard>
      <BoxCard classname="warning">
        <p className="title">Lorem Ipsum Title</p>
        <p className="description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </BoxCard>
    </div>
  );
};
