import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleNewTodoChange(event) {
    setNewTask(event.target.value);
    console.log(newTask);
  }

  function handleAddTodo() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleRemoveTodo(index) {
    const updatedtask = tasks.filter((_, i) => i !== index);
    setTasks(updatedtask);
  }

function moveTaskUp(index) {
  if (index > 0) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
    setTasks(updatedTasks);
  }
}

function moveTaskDown(index) {
  if (index < tasks.length - 1) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
    setTasks(updatedTasks);
  }
}
  return (
    <>
      <div className="container">
        <h1>TO-DO-LIST</h1>
        <input
          onChange={handleNewTodoChange}
          type="text"
          placeholder="Enter the task"
          value={newTask}
        />
        <button className="addButton" onClick={handleAddTodo}>
          ADD
        </button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                onClick={() => handleRemoveTodo(index)}
                className="deleteButton"
              >
                DELETE
              </button>
              <button onClick={() => moveTaskUp(index)} className="moveButton">
                👆
              </button>
              <button
                onClick={() => moveTaskDown(index)}
                className="moveButton"
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
export default TodoList;
