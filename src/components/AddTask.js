import { useState } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTasks}) => {
  const [taskName, setTaskName] = useState("");
  const [progress, setProgress] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskName,
      completed : Boolean(progress)
    }
    setTasks([...tasks, task])
    handleReset()
  }

  function handleReset(){
    setTaskName("")
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Add Task: </label>
        <input
          onChange={(e) => setTaskName(e.target.value)}
          type="text"
          name="task"
          id="task"
          placeholder="Add Task"
          autoComplete="off"
          value={taskName}
        />
        <select name="progress" id="progress" onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value="true">Completed</option>
          <option value="false">Incompleted</option>
        </select>
        <button className="submit">Add</button>
        <span className="reset" onClick={() => handleReset()}>Reset</span>
      </form>
      <p>{taskName}</p>
    </section>
  );
};
