import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between w-80 items-center bg-violet-600 text-white my-2 py-2 px-4 rounded-lg shadow-md">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`cursor-pointer ${
          task.completed ? "line-through" : ""
        } select-none`}
      >
        {task.task}
      </p>
      <div className="text-white">
        <FontAwesomeIcon
          icon={faPenSquare}
          className="px-2 cursor-pointer"
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="cursor-pointer"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
