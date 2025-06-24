
import { useState } from "react";
import TodoItem from "./TodoItem";
import '../src/index.css';

const TodoList = ({ todos_list, setTodos }) => {
  const [filter, setFilter] = useState("all");

  const activeTodos = todos_list.filter(todo => !todo.check);
  const completedTodos = todos_list.filter(todo => todo.check);

  const getFilteredTodos = () => {
    if (filter === "active") return activeTodos;
    if (filter === "completed") return completedTodos;
    return todos_list;
  };

  function checkFilter(e) {
    setFilter(e.target.textContent.toLowerCase());
  }

  return (
    <div className="shadow-2xl rounded-lg overflow-hidden">
      <ul className="todos-list">
        {
          getFilteredTodos().map(todo =>
            <TodoItem key={todo.id} id={todo.id} task_text={todo.task_text} check={todo.check} setTodos={setTodos} />
          )
        }
      </ul>
      <div className="filter-count flex justify-between py-3 px-4 bg-[var(--TodoList-background)]">
        <div className="todos-count text-[var(--task-text)]">
          <span className="todos-length">{activeTodos.length}</span> items left
        </div>
        <div className="filter">
          <ul className="flex gap-4">
            <li onClick={checkFilter}
            // why removes active?
              className={`cursor-pointer capitalize ${filter === 'all'? 'active' : 'text-[var(--task-text)]'}`}>all</li>
            <li onClick={checkFilter}
              className={`cursor-pointer capitalize ${filter === 'active'? 'active' : 'text-[var(--task-text)]'}`}>active</li>
            <li onClick={checkFilter}
              className={`cursor-pointer capitalize ${filter === 'completed'? 'active' : 'text-[var(--task-text)]'}`}>completed</li>
          </ul>
        </div>
        <button className="text-[var(--task-text)]" onClick={() => setTodos([])}>Clear completed</button>
      </div>
    </div>
  );
}

export default TodoList;

/*
import TodoItem from "./TodoItem";

const TodoList = ({ todos_list, setTodos }) => {
  
  let todos = todos_list;
  let activeTodos = todos_list.filter(todo => !todo.check);
  let completedTodos = todos_list.filter(todo => todo.check);
  
  function checkFilter(e) {
    let currentButton = e.target;
    let currentOption = e.target.textContent.toLowerCase();
    if (currentOption === "active") {
      todos = activeTodos;
    } else if (currentOption === "completed") {
      todos = completedTodos;
    } else todos = todos_list;
  }
  return (
    <div className="shadow-2xl rounded-lg overflow-hidden">
      <ul className="todos-list">
        {
          todos.map(todo =>
            <TodoItem key={todo.id} id={todo.id} task_text={todo.task_text} check={todo.check} setTodos={setTodos} />
          )
        }
      </ul>
      <div className="filter-count flex justify-between py-3 px-4">
        <div className="todos-count">
          <span className="todos-length">{activeTodos.length}</span> items left
        </div>
        <div className="filter">
          <ul className="flex gap-4">
            <li onClick={checkFilter} className="cursor-pointer capitalize">all</li>
            <li onClick={checkFilter} className="cursor-pointer capitalize">active</li>
            <li onClick={checkFilter} className="cursor-pointer capitalize">completed</li>
          </ul>
        </div>
        <button onClick={() => {
          setTodos([])
        }}>Clear completed</button>
      </div>
    </div>
  )
}

export default TodoList;
*/