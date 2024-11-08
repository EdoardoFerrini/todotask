import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";
import { AddTask } from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} title="Task List" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
