import { useState } from "react";
import TodoItem from "./TodoItem";
import FilterList from "./FilterList";
import '../src/index.css';

const TodoList = ({ todos_list, setTodos }) => {
  const [filter, setFilter] = useState("all");
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

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

  function dragStart(index) {
    setDraggedIndex(index);
  }

  function dragEnter(index) {
    setDragOverIndex(index);
  }

  function dragEnd() {
    if (draggedIndex === null || dragOverIndex === null) return;

    const updatedTodos = [...todos_list];
    const [movedItem] = updatedTodos.splice(draggedIndex, 1); // remove
    updatedTodos.splice(dragOverIndex, 0, movedItem); // insert

    setTodos(updatedTodos);
    setDraggedIndex(null);
    setDragOverIndex(null);
  }

  return (
    <div className="shadow-2xl rounded-lg overflow-hidden">
      {
        todos_list.length === 0 &&
        <p className="text-[var(--task-text)] text-xl mb-4 text-center font-bold">You have no todos</p>
      }

      <ul className="todos-list">
        {
          getFilteredTodos().map((todo, index) => (
            <div
              key={todo.id}
              onDragEnter={() => dragEnter(index)}
              onDragOver={(e) => e.preventDefault()}
            >
              {dragOverIndex === index && draggedIndex !== null && (
                <div className="h-2 bg-blue-300 my-1 rounded transition-all duration-150"></div>
              )}
              <TodoItem
                id={todo.id}
                task_text={todo.task_text}
                check={todo.check}
                setTodos={setTodos}
                draggable
                onDragStart={() => dragStart(index)}
                onDragEnd={dragEnd}
              />
            </div>
          ))
        }
      </ul>

      <FilterList
        filter_type={filter}
        checkFilter={checkFilter}
        setTodos={setTodos}
        activeLength={activeTodos.length}
      />
      <div className="filter sm:hidden">
        <ul className="flex gap-4 bg-[var(--TodoList-background)] justify-center">
          <li onClick={checkFilter}
            className={`cursor-pointer capitalize ${filter === 'all' ? 'active' : 'text-[var(--task-text)]'}`}>all</li>
          <li onClick={checkFilter}
            className={`cursor-pointer capitalize ${filter === 'active' ? 'active' : 'text-[var(--task-text)]'}`}>active</li>
          <li onClick={checkFilter}
            className={`cursor-pointer capitalize ${filter === 'completed' ? 'active' : 'text-[var(--task-text)]'}`}>completed</li>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
