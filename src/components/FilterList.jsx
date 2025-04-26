import './FilterList.css';

export default function FilterList({
  FILTER_ITEMS,
  selectedFilterItemId,
  setSelectedFilterItemId,
  countByTodoList,
}) {
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
            <p>{countByTodoList[item.id]}</p>
          </div>
        );
      })}
    </div>
  );
}
