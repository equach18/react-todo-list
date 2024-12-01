import { useState } from "react";
import { v4 as uuid } from "uuid";


function NewTodoForm({ addTodo }) {
  const [formData, setFormData] = useState({ task: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({...formData, id: uuid()})
    setFormData({task: ""})
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input
            id="task"
            type="text"
            name="task"
            placeholder="Todo Task"
            value={formData.task}
            onChange={handleChange}
            />
            <button>Add Task</button>
        </form>
    </div>
  )
}

export default NewTodoForm;
