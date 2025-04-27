import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

export default function TodoItem({ todoId, name, isCompleted, isImportant }) {
  const { handleCompleteCheckboxChange, handleShowSidebar } =
    useContext(AppContext);

  return (
    <div className="todo-item" onClick={() => handleShowSidebar(todoId)}>
      <div style={{ display: "flex", gap: 4, padding: "8px" }}>
        <input
          type="checkbox"
          checked={isCompleted}
          onClick={(e) => e.stopPropagation()}
          onChange={() => handleCompleteCheckboxChange(todoId)}
        />
        <p style={{ fontSize: "18px", marginLeft: "8px" }}>{name}</p>
      </div>
      {isImportant && <p>⭐</p>}
    </div>
  );
}
