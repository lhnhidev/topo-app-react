import React from "react";

export default function TodoItem({
  name,
  todoId,
  isImportant,
  isCompleted,
  handleCompleteCheckboxChange,
  handleShowSidebar
}) {
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
