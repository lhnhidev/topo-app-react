import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { CATEGORY_ITEMS } from "./constants";
import { AppContext } from "./context/AppContext";

export default function Sidebar() {
  const { activeTodoItem, handleChangeTodoItem, setShowSidebar } = useContext(AppContext);

  const [name, setName] = useState(activeTodoItem.name);
  const [isImportant, setIsImportant] = useState(activeTodoItem.isImportant);
  const [isCompleted, setIsCompleted] = useState(activeTodoItem.isCompleted);
  const [category, setCategory] = useState(activeTodoItem.category);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleIsImportant = () => {
    setIsImportant(!isImportant);
  };

  const handleIsCompleted = () => {
    setIsCompleted(!isCompleted);
  };

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

          <div className="sb-group">
            <label htmlFor="sb-is-completed">Category</label>
            <select
              value={category}
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORY_ITEMS.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
      <div className="sb-footer">
        <button
          style={{ padding: "3px 6px", margin: "0px 4px" }}
          onClick={() => {
            setShowSidebar(false);
            handleChangeTodoItem(activeTodoItem.id, {
              name,
              isCompleted,
              isImportant,
              category,
            });
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
