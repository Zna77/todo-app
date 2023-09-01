import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };
  return (
    <form className="my-6" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-violet-950 text-white border border-violet-600 rounded-l py-2 px-4 focus:outline-none focus:border-violet-400"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-violet-600 text-white py-2 px-4 rounded-r cursor-pointer hover:bg-violet-700"
      >
        Update Task
      </button>
    </form>
  );
};
