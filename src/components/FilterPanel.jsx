import React, { useState } from "react";
import "./FilterPanel.css";

const FILTER_ITEMS = [
  {
    id: "all",
    label: "All",
    iconPath: "./public/warehouse.png",
  },
  {
    id: "important",
    label: "Important",
    iconPath: "./public/flag.png",
  },
  {
    id: "completed",
    label: "Completed",
    iconPath: "./public/check.png",
  },
  {
    id: "deleted",
    label: "Deleted",
    iconPath: "./public/trash.png",
  },
];

export default function FilterPanel({ selectedFilterItemId, setSelectedFilterItemId }) {

  return (
    <div className="filter-panel">
      <input
        type="text"
        className="filter-search"
        name="search-text"
        placeholder="Tìm kiếm"
      />
      <div className="filter-main">
        {FILTER_ITEMS.map((item) => {
          return (
            <div
              className={`filter-item ${
                selectedFilterItemId === item.id ? "selected" : ""
              }`}
              onClick={() => setSelectedFilterItemId(item.id)}
              key={item.id}
            >
              <div className="filter-name">
                <img
                  src={item.iconPath}
                  alt={item.label + " logo"}
                  style={{ width: "30px", height: "30px" }}
                />
                <p>{item.label}</p>
              </div>
              <p>22</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
