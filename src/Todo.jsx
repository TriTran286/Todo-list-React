import { useState } from "react"
import "./todo-style.css"
function TodoList() {
  const [task, setTask] = useState('');
  const [addTask, setAddTask] = useState(["Work out", "Take a Shower", "Reading Book"])

  function handleTask(e) {
    setTask(e.target.value)
  }
  function handleAddAsk() {
    if (task.trim() !== "") {
      setAddTask(t => [...t, task]); 
      setTask("")
    }
    
  }
  function deleteTask(index) {
    const updateTask = addTask.filter((_, i) => i !== index);
    setAddTask(updateTask);
  }
  function moveTaskUp(index) {
    if(index > 0){
      const moveTask = [...addTask];
        [moveTask[index],moveTask[index - 1]] =
        [moveTask[index - 1],moveTask[index]];
      setAddTask(moveTask);
    }
  }
  function moveTaskDown(index) {
    if (index < addTask.length -1) {
      const moveTask = [...addTask];
        [moveTask[index], moveTask[index + 1]] =
        [moveTask[index + 1],moveTask[index],];
      setAddTask(moveTask);
    }
  }

  return (
      <div className="todolist">
          <h1>To Do List</h1>
            <div>
        <input
          className="text"
                    type="text"
                    placeholder="Enter a task"
                    value={task}
                    onChange={handleTask}
                />
                <button
                  className="add-btn"
                  onClick={handleAddAsk}>Add ➕
                </button>
            </div>
          <div className="list-task">
            <ol>
              {addTask.map((e, index) =>
                <li key={index}>
                  <span className="text">{e}</span>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(index)}>Delete
                  </button>
                  <button
                    className="moveup-btn"
                    onClick={() => moveTaskUp(index)}>Move ⬆️
                  </button>
                  <button
                    className="movedown-btn"
                    onClick={() => moveTaskDown(index)}>Move ⬇️
                  </button>
                </li>
              )}
            </ol>
          </div>

      
      </div>
  );
}

export default TodoList