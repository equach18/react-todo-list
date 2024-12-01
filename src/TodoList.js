import { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css"

function TodoList() {
  const [todos, setTodos] = useState([]);
  const add = (newTodo) => {
    setTodos((todos) => [...todos, { ...newTodo }]);
  };
  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const todoComponent = todos.map((todo) => (
    <Todo
    id = {todo.id}
    key = {todo.id}
    task = {todo.task}
    removeTodo={remove}
    />
  ))

  return(
    <div className="TodoList">
        <h1>Create a New Todo!</h1>
        <NewTodoForm addTodo={add}/>
        {todoComponent}
    </div>
  )
}

export default TodoList;
