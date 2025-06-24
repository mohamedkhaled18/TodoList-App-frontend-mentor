import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useEffect, useState, useContext } from "react";
import { themeContext } from "./Contexts/theme";

const Container = () => {
  const [todos, setTodos] = useState(() => {
    // Get todos from localStorage
      let savedTodos = localStorage.getItem("Todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const { theme, setTheme } = useContext(themeContext);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="_container w-[40%] absolute top-[20%]">
      <Header theme={theme} setTheme={setTheme}/>
      <TodoInput setTodos={setTodos} />
      <TodoList todos_list={todos} setTodos={setTodos} />
    </div>
  )
}

export default Container;
