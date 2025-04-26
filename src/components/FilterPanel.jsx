import React, { useMemo } from "react";
import "./FilterPanel.css";
import FilterList from "./FilterList";
import Category from "./Category";

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

export default function FilterPanel({
  selectedFilterItemId,
  setSelectedFilterItemId,
  todoList,
  searchText,
  setSearchText
}) {
  const countByTodoList = useMemo(() => {
    return todoList.reduce(
      (acc, item) => {
        let newAcc = { ...acc };
        if (item.isCompleted) {
          newAcc = { ...newAcc, completed: newAcc.completed + 1 };
        }
        if (item.isDeleted) {
          newAcc = { ...newAcc, deleted: newAcc.deleted + 1 };
        }
        if (item.isImportant) {
          newAcc = { ...newAcc, important: newAcc.important + 1 };
        }
        return newAcc;
      },
      { all: todoList.length, important: 0, completed: 0, deleted: 0 }
    );
  }, [todoList]);

  return (
    <div className="filter-panel">
      <input
        type="text"
        className="filter-search"
        name="search-text"
        placeholder="Tìm kiếm"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <FilterList
        FILTER_ITEMS={FILTER_ITEMS}
        selectedFilterItemId={selectedFilterItemId}
        countByTodoList={countByTodoList}
        setSelectedFilterItemId={setSelectedFilterItemId}
      ></FilterList>
      <Category todoList={todoList}></Category>
    </div>
  );
}
