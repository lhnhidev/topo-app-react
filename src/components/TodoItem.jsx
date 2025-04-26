import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

export default function TodoItem({ todoId, name, isCompleted, isImportant }) {
  const { handleCompleteCheckboxChange, handleShowSidebar } =
    useContext(AppContext);

  return (
    <div className="todo-item" onClick={() => handleShowSidebar(todoId)}>
      <div style={{ display: "flex", gap: 4 }}>
        <input
          type="checkbox"
          checked={isCompleted}
          onClick={(e) => e.stopPropagation()}
          onChange={() => handleCompleteCheckboxChange(todoId)}
        />
        <p className="toto-item-text">{name}</p>
      </div>
      {isImportant && <p>⭐</p>}
    </div>
  );
}
