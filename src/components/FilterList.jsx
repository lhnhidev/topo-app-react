import { useContext } from "react";
import "./FilterList.css";
import { FILTER_ITEMS } from "./constants";
import { AppContext } from "./context/AppContext";

export default function FilterList() {
  const { selectedFilterItemId, setSelectedFilterItemId, countByTodoList } =
    useContext(AppContext);

  return (
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
            <p className="filter-amount">{countByTodoList[item.id]}</p>
          </div>
        );
      })}
    </div>
  );
}
