import "./App.css";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Go to the supermarket", completed: true },
    { id: 2, name: "Study programming", completed: false },
    { id: 3, name: "Go out for a walk", completed: true },
    { id: 4, name: "Watch a movie", completed: false }
  ]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.name}</span>
            <button className="delete">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
