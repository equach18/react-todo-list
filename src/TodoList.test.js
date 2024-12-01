import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", () => {
  const { getByLabelText, queryByText } = render(<TodoList />);
  //   expect no todo to delete
  expect(queryByText("X")).not.toBeInTheDocument();
  //   get input areas & btn
  const taskInput = getByLabelText("Task");
  const submitBtn = queryByText("Add Task");
  // fill out the form
  fireEvent.change(taskInput, { target: { value: "new test task" } });
  //   submit form
  fireEvent.click(submitBtn);
  //   task exists - can delete
  expect(queryByText("X")).toBeInTheDocument();
  expect(queryByText("X").previousSibling).toContainHTML(`new test task`);
});

it("can delete a task", () => {
  const { getByLabelText, queryByText } = render(<TodoList />);
  // add task
  const taskInput = getByLabelText("Task");
  const submitBtn = queryByText("Add Task");
  // fill out the form
  fireEvent.change(taskInput, { target: { value: "new test task" } });
  //   submit form
  fireEvent.click(submitBtn);

  const deleteBtn = queryByText("X");
  expect(deleteBtn).toBeInTheDocument();

  //   delete the task
  fireEvent.click(deleteBtn);

  //   delete btn no longer exists
  expect(queryByText("X")).not.toBeInTheDocument();
});
