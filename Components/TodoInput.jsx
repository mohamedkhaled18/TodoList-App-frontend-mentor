import { useState, useEffect } from "react";
import '../src/index.css'

const TodoInput = ({setTodos}) => {

  const [newTodo, setNewTodo] = useState("");
  

  function handleInput(e) {
    let inputValue = e.target.value;
    setNewTodo(inputValue);
  }

  function addTask() {
    if (newTodo.trim()) {
      setTodos(prev => 
        [...prev, {
          id: Date.now(),
          task_text: newTodo,
          check: false,
        }]
      );
      setNewTodo("");
    }
  }

  return(
    <div 
      className="task-input bg-[var(--TodoList-background)] flex my-10 p-3 rounded shadow-xl">
      <button onClick={addTask} className="add-btn">➕</button>
      <input type="text" placeholder="Create a new todo..." 
        className="ml-3 outline-0 border-0 w-full bg-transparent text-[var(--task-text)] text-xl" onInput={handleInput} value={newTodo} />
    </div>
  )
}

export default TodoInput;