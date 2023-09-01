import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() !== "") {
      const capitalizedTask = value.charAt(0).toUpperCase() + value.slice(1);
      addTodo(capitalizedTask);
      setValue("");
    }

    setValue("");
  };
  return (
    <form className="my-6" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-violet-950 text-white border border-violet-600 rounded-l py-2 px-4 focus:outline-none focus:border-violet-400 select-none"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-violet-600 text-white py-2 px-4 rounded-r cursor-pointer select-none hover:bg-violet-700"
      >
        Add Task
      </button>
    </form>
  );
};
