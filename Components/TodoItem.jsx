import { useState } from "react";
import '../src/index.css';

const TodoItem = ({ id, task_text, check, setTodos, draggable, onDragStart, onDragEnd }) => {
  const [checked, setChecked] = useState(check);

  const updateCheck = () => {
    setChecked(prev => {
      const newCheck = !prev;
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === id ? { ...todo, check: newCheck } : todo
        )
      );
      return newCheck;
    });
  };

  const removeTask = () => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <li
      className="flex items-center group py-3 px-4 bg-[var(--TodoList-background)] border-b border-gray-400 cursor-grab"
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <input
        type="checkbox"
        onChange={updateCheck}
        checked={checked}
        className="hidden peer"
        id={`done-${id}`}
      />
      <label
        htmlFor={`done-${id}`}
        className="w-[20px] h-[20px] bg-transparent cursor-pointer grid place-items-center rounded-full border-2 border-[var(--task-text)] bg-no-repeat bg-center peer-checked:bg-check"
      ></label>

      <p className="task-text text-[var(--task-text)] font-semibold text-xl flex-1 mx-4 peer-checked:line-through peer-checked:text-gray-400">
        {task_text}
      </p>

      <button className="group-hover:opacity-100 opacity-0" onClick={removeTask}>
        <img src="../public/assets/icon-cross.37f00ffb.svg" alt="delete btn" />
      </button>
    </li>
  );
};

export default TodoItem;
