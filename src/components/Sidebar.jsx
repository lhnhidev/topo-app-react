import React, { useState } from "react";
import "./Sidebar.css";

export default function Sidebar({
  todo,
  handleChangeTodoItem,
  setShowSidebar,
}) {
  const [name, setName] = useState(todo.name);
  const [isImportant, setIsImportant] = useState(todo.isImportant);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleIsImportant = (e) => {
    setIsImportant(!isImportant);
  };

  const handleIsCompleted = (e) => {
    setIsCompleted(!isCompleted);
  };

  const handleSave = () => {};

  return (
    <div className="sidebar">
      <div className="sb-main">
        <form>
          <div className="sb-group">
            <label htmlFor="sb-name">Todo name</label>
            <input
              id="sb-name"
              type="text"
              name="name"
              placeholder="Nhập tên todo"
              value={name}
              onChange={(e) => handleChangeName(e)}
            />
          </div>

          <div className="sb-group">
            <label htmlFor="sb-is-important">Is important?</label>
            <input
              id="sb-is-important"
              checked={isImportant}
              type="checkbox"
              name="is-important"
              onChange={(e) => handleIsImportant(e)}
            />
          </div>

          <div className="sb-group">
            <label htmlFor="sb-is-completed">Is completed?</label>
            <input
              id="sb-is-completed"
              checked={isCompleted}
              type="checkbox"
              name="is-completed"
              onChange={(e) => handleIsCompleted(e)}
            />
          </div>
        </form>
      </div>
      <div className="sb-footer">
        <button
          style={{ padding: "3px 6px", margin: "0px 4px" }}
          onClick={() => {
            setShowSidebar(false);
            handleChangeTodoItem(todo.id, { name, isCompleted, isImportant });
          }}
        >
          Save
        </button>
        <button
          style={{ padding: "3px 6px", margin: "0px 4px" }}
          onClick={() => setShowSidebar(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
