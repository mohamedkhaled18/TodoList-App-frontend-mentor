import { useState } from 'react';
import '../src/index.css'

const TodoItem = ({id, task_text, check, setTodos}) => {
  
  const [checked , setChecked] = useState(check);

  function updateCheck() {
    setChecked(prev => {
      let newCheckValue = !prev;

      setTodos(prev_tasks => prev_tasks.map(task => 
        task.id === id ? { ...task, check: newCheckValue } : task
      ));
      return newCheckValue;
    })
  }

  function removeTask(id) {
    setTodos(prev => prev.filter((task) => task.id !== id))
  }

    return (
    <li key={id} className="flex items-center group py-3 px-4 bg-[var(--TodoList-background)] border-solid border-b-2 border-gray-400">
      <input type="checkbox" onChange={updateCheck} checked={checked} className="hidden peer" id={`done-${id}`} />
      <label htmlFor={`done-${id}`}
        className="w-[20px] h-[20px] cursor-pointer grid place-items-center rounded-full border-2 border-[var(--task-text)] bg-no-repeat bg-center peer-checked:[background-image:url('../public/assets/icon-check.bcf055e6.svg')] peer-checked:[background-image:var(--check-background)]">
      </label>
      
      <p className="task-text text-[var(--task-text)] font-semibold text-xl flex-1 mx-4 peer-checked:line-through peer-checked:text-gray-400">{task_text}</p>
      <button className="group-hover:opacity-100 opacity-[0]" onClick={() => removeTask(id)}>
        <img src="../public/assets/icon-cross.37f00ffb.svg" alt="delete btn" />
      </button>

    </li>
  )
}

export default TodoItem;