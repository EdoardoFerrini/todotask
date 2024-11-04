import "./App.css";
import { useState } from "react";
function App() {
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
    <div className="App">
      <h1>Todo</h1>
      <ul>
        <button class="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : "incomplete"}
            >
              <span>{task.name}</span>
              <button className="delete" onClick={() => handleDelete(task.id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
