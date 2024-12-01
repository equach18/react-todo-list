import "./Todo.css";
function Todo({ id, task, removeTodo }) {
  const handleRemove = () => removeTodo(id);
  return (
    <div className="Todo">
      <li>{task}</li>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Todo;
