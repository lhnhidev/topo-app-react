import React, { useContext } from "react";
import "./FilterPanel.css";
import FilterList from "./FilterList";
import Category from "./Category";
import { AppContext } from "./context/AppContext";

export default function FilterPanel() {
  const { searchText, setSearchText } = useContext(AppContext);

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
      <FilterList></FilterList>
      <Category></Category>
    </div>
  );
}
