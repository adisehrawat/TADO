import { useState } from "react";
import "./styles/App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div className="container">
      <h1 className="title">TADO</h1>
      <div className="input-container">
        <input
          type="text"
          className="task-input"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask} className="add-button">+</button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            {/* Checkbox to toggle task completion */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
              className="task-checkbox"
            />
            <span className={`task-text ${task.completed ? "completed" : ""}`}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)} className="delete-button">
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}